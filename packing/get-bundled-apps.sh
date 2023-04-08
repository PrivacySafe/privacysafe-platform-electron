#!/bin/bash

channel=$1
configuration_json="$2"
bundle_dir="$3"

BASE_APPS_URL='https://3nsoft.com/downloads/apps'

get_app_file_url() {
	local app_domain=$1
	local channel=$2
	local platform="$3"
	local arch="$4"
	local variant="$5"
	node -e "
		appUrl='${BASE_APPS_URL}/${app_domain}/${platform}';
		const latestUrl = appUrl+'/${channel}.latest';
		const exec = child_process.execSync;
		try {
			const version = JSON.parse(exec(
				'curl -s '+latestUrl, { encoding: 'utf-8' }));
			const lstUrl = appUrl+'/'+version+'/list';
			const lst = JSON.parse(exec(
				'curl -s '+lstUrl, { encoding: 'utf-8' }));
			for (const file of Object.keys(lst.files)) {
				if ((lst.files[file].arch === '${arch}')
				&& (lst.files[file].variant === '${variant}')) {
					console.log(appUrl+'/'+version+'/'+file);
					break;
				}
			}
		} catch (err) {}
	" || return $?
}

reverse_app_domain() {
	node -e "console.log('${1}'.split('.').reverse().join('.'));" || exit $?
}

app_dir() {
	local app_domain=$1
	local dir="$2"
	echo "$dir/$(reverse_app_domain $app_domain)"
}

app_zip_file() {
	echo "$(app_dir $@).zip"
}

get_app() {
	local app_domain=$1
	local channel=$2
	local dst_folder="$3"
	local platform="web"
	local arch="web"
	local variant="zip"
	echo "Getting $app_domain"
	local app_url=$(get_app_file_url $app_domain $channel $platform $arch $variant)
	if [ -z "$app_url" ]
	then
		echo " ... failed to get url for app $app_domain"
		return 2
	else
		echo " ... downloading from $app_url"
	fi
	local zip_file=$(app_zip_file $app_domain $dst_folder)
	curl -s "$app_url" --output "$zip_file" || return $?
	echo "App archive is $zip_file"
	echo
}

unzip_app() {
	local dir="$(app_dir $@)"
	local zip_file="$(app_zip_file $@)"
	unzip -q "$zip_file" -d "$dir" || return $?
	rm "$zip_file"
	echo "Unzipped $zip_file into $dir"
}

apps_dir="${bundle_dir}/build/all/bundled-apps"

is_present() {
	local app_domain=$1
	if [ -e "$(app_zip_file $app_domain $apps_dir)" ] \
	|| [ -d "$(app_dir $app_domain $apps_dir)" ]
	then
		return 0
	else
		return 1
	fi
}

get_from_configuration_json() {
	local key="$1"
	node -e "
		const json = JSON.parse(
			fs.readFileSync('$configuration_json', { encoding: 'utf8' })
		);
		const val = json['$key'];
		if ((typeof val === 'string') && (val.length > 0)) {
			console.log(val);
		} else if (Array.isArray(val) && (val.length > 0)) {
			console.log(val.join(' '));
		} else {
			throw new Error('Configuration json file has invalid field \"$key\"');
		}
	" || return $?
}

# apps from configurations file
start_app="$(get_from_configuration_json startup-app || exit $?)"
launcher_app="$(get_from_configuration_json launcher-app || exit $?)"
bundled_apps="$(get_from_configuration_json bundled-apps || exit $?)"

echo
echo "	************************************"
echo "	* Bundle apps from channel $channel "
echo "	************************************"
mkdir -p $apps_dir
for app_domain in $start_app $launcher_app $bundled_apps
do
	if is_present $app_domain
	then
		echo "$app_domain is already present"
		continue
	fi

	get_app $app_domain $channel $apps_dir || exit $?
	if [ "$app_domain" == "$start_app" ]
	then
		unzip_app $app_domain $apps_dir || exit $?
	fi

done
