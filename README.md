A simple TypeScript template for PlayCanvas that can also sync with your playcanvas.com project

## Quick start

This template uses the [playcanvas-sync][playcanvas-sync] tool to push files to your PlayCanvas project and requires a little bit of setup.

1. Copy `.pcconfig` to your home directory (Mac: `/Users/<username>`, Windows: `C:/User/<username>`)
2. Make a duplicate of `pcconfig.template.json` and rename to `pcconfig.json`
3. Complete/Update the following properties in `pcconfig.json` using these [instructions][playcanvas-sync-pcconfig-instructions]:
    - `PLAYCANVAS_API_KEY`
    - `PLAYCANVAS_PROJECT_ID`
    - `PLAYCANVAS_BRANCH_ID`
4. On the command line, run `npm install` to install the packages
5. On the command line, run the npm script `npm run watch-push`
6. This will watch the `src` folder for changes, compile into `build/main.bundle.js` and if successful, upload to your playcanvas.com project

Please note, if you are adding new `pc.ScriptTypes` or attributes to existing ones, you will need to manually parse the script after upload in the PlayCanvas Editor. [Please read this][playcanvas-sync-new-script-types] for more details.

## npm scripts
| Command                | Description                                                             |
|------------------------|-------------------------------------------------------------------------|
| `npm run build`        | Compiles tsc files and builds to `build/main.bundle.js`                 |
| `npm run watch`        | Compiles tsc files on code changes and builds to `build/main.bundle.js` |
| `npm run push`         | Uploads `build/main.bundle.js` to playcanvas.com project                |
| `npm run build-push`   | Performs `build` and `push` npm scripts                                 |
| `npm run watch-push`   | Performs `watch` and `push` npm scripts                                 |


[playcanvas-sync]: https://github.com/playcanvas/playcanvas-sync
[playcanvas-sync-pcconfig-instructions]: https://github.com/playcanvas/playcanvas-sync#config-variables
[playcanvas-sync-new-script-types]: https://github.com/playcanvas/playcanvas-sync#adding-new-files-as-script-components