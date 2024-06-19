
if [ -z "$@" ]
then
   echo "No npm modules given in args to install"
   exit 1
fi

echo "This installs, then removes node_modules, and runs clean install to apply all postinstall patches."

npm i $@ || exit $?
rm -rf node_modules || exit $?
npm ci || exit $?
