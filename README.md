# companion-module-leaderphabrix-lpx-qx-presets
Companion module to load user presets on a LeaderPhabrix LPX500 & Phabrix Qx/ QxL/ QxP Waveform Monitors to be controlled from a Stream Deck

See [HELP.md](./companion/HELP.md) and [LICENSE](./LICENSE)

The module allows Companion users to:

- Load, create, and delete user presets on an LPX500 & Phabrix Qx/ QxL/ QxP
- Quickly switch presets using Companion buttons (touch panels, Stream Deck, etc.)
- Preset load status and display device information via variables

It is designed for fast, button-driven preset management rather than deep device configuration.

## Configuration
- Device Host/IP address of LPX500/ Qx/ QxL/ QxP unit 
- Port Number: Default 8080  (This can not be changed on the LPX500/ Qx/ QxL/ QxP unit)
- Refresh interval (ms): Default 5000 (5 seconds polling User Presets end point on LPX500/ Qx/ QxL/ QxP unit)

## Getting started development
- Install node v22 https://nodejs.org/en/download
- Install yarn https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable   `npm install --global yarn`
- Install Companion - configure Development mode and development module folder in settings
- https://bitfocus.io/companion
- Download from: https://user.bitfocus.io/login (requires signup/ login credentials)
- User guide: https://companion.free/user-guide/beta/
- github: https://github.com/bitfocus/companion

- Download this plugin repositry to the companion development folder
- Open command line on companion development folder with admin privilages
- > `npm install`
- > `corepack enable`
- > `yarn install`
- > `yarn build` (or yarn / yarn dev from then on)
- Dist directory is genereated and yarn builds the project containing the plugin files for companion
- Companion will then auto load the plugin ready for you to test and use if dev mode is enabled
- > `yarn companion-module-build` to generate installation package for offline installation into the companion installation

## Authors and acknowledgment
Ed Smith (Leader Europe)

## License
MIT.

