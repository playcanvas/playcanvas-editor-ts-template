A simple TypeScript template for PlayCanvas that can also sync with your playcanvas.com project

## Quick start

This template uses the [playcanvas-sync][playcanvas-sync] tool to push files to your PlayCanvas project and requires a little bit of setup with `.pcconfig` and `pcconfig.json`.

1. Copy `.pcconfig` to your home directory (Mac: `/Users/<username>`, Windows: `C:/User/<username>`). `.pcconfig` has been preconfigured to look for a config file in the current working directory which will be this project's folder ([more information here][playcanvas-sync-pcconfig-instructions]).
2. Make a copy of `pcconfig.template.json` and rename to `pcconfig.json`. This is needed to configure playcanvas-sync to upload the file to correct PlayCanvas Editor project.
3. Complete/Update the following properties in `pcconfig.json` using these [instructions][playcanvas-sync-pcconfig-instructions]:
    - `PLAYCANVAS_API_KEY` - [Instructions to create an API key][create-api-key]
    - `PLAYCANVAS_PROJECT_ID` - [Where to find the project ID][find-project-id]
    - `PLAYCANVAS_BRANCH_ID` [Where to find the branch ID][find-branch-id]
4. On the command line, run `npm install` to install the packages.
5. On the command line, run the npm script `npm run watch-push:debug`.
6. This will watch the `src` folder for changes, compile into `build/main.bundle.js` and if successful, upload to your playcanvas.com project.

Please note, if you are adding new `pc.ScriptTypes` or attributes to existing ones, you will need to manually parse the script after upload in the PlayCanvas Editor. [Please read this][playcanvas-sync-new-script-types] for more details.

## npm scripts
| Command                      | Description                                                                                  |
|------------------------------|----------------------------------------------------------------------------------------------|
| `npm run build:debug`        | Compiles tsc files using debug config and builds to `build/main.bundle.js`                   |
| `npm run build:release`      | Compiles tsc files using release config and builds to `build/main.bundle.js`                 |
| `npm run watch:debug`        | Compiles tsc files using debug config on code changes and builds to `build/main.bundle.js`   |
| `npm run watch:release`      | Compiles tsc files using release config on code changes and builds to `build/main.bundle.js` |
| `npm run push`               | Uploads `build/main.bundle.js` to playcanvas.com project                                     |
| `npm run build-push:debug`   | Performs `build:debug` and `push` npm scripts                                                |
| `npm run build-push:release` | Performs `build:release` and `push` npm scripts                                              |
| `npm run watch-push:debug`   | Performs `watch:debug` and `push` npm scripts                                                |
| `npm run watch-push:release` | Performs `watch:release` and `push` npm scripts                                              |

[playcanvas-sync]: https://github.com/playcanvas/playcanvas-sync
[playcanvas-sync-pcconfig-instructions]: https://github.com/playcanvas/playcanvas-sync#config-variables
[playcanvas-sync-new-script-types]: https://github.com/playcanvas/playcanvas-sync#adding-new-files-as-script-components
[create-api-key]: https://developer.playcanvas.com/en/user-manual/api/#authorization
[find-project-id]: https://developer.playcanvas.com/en/user-manual/api/#project_id
[find-branch-id]: https://developer.playcanvas.com/en/user-manual/api/#branch_id
