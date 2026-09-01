# Client-side 3NWeb platform

...

## Registered URL schemas

Platform uses "deep linking" for common steps. For this it registers with host OS environment the following url schemas.


### w3n: for platform-level commands and operations

`w3n:` schema is used for:

- signup links:
  1. `w3n://signup/<signup_url>/[<signup_token>]` is for any custom provider <br>
	where `<signup_url>` is provider's signup url (without `https://`), followed by mandatory `/`, and `<signup_token>` is an optional signup token, depending on provider's setup.

	2. `w3n://PrivacySafe/signup/[<signup_token>]` is for standard/default signup service that may come with assembled platform. `PrivacySafe` in this example is used by PrivacySafe platform bundles.

- "add contact" links like `w3n://add-contact/?a=<address>[&n=<name>&pk=<intro_public_key>&kid=<intro_key_id>]`, <br>
  where `add-contact/` is followed with query part, with mandatory `a` parameter with contact's address, optional `n` paramter for contact's name, and optional `pk` and `kid` pair with url-safe Base64 string of contact's introductory key and its id.


### w3n-app: for passing command to 3NWeb apps

`w3n-app://example.app/command/etc` is reserved to provide apps with a capability to expose "deep linking" from url-use. This will use regular app's command responding mechanisms, while showing in manifest as a different requested capability, as origin of triggering command is different.
