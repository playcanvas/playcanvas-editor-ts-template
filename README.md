A simple TypeScript template for PlayCanvas that can also sync with your playcanvas.com project

## Quick start

1. Copy `.pcconfig` to your home directory (Mac: `/Users/<username>`, Windows: `C:/User/<username>`)
2. Make a duplicate of `pcconfig.template.json` and rename to `pcconfig.json`
3. Complete/Update the following properties in `pcconfig.json` using these [instructions][playcanvas-sync-pcconfig-instructions]:
    - `PLAYCANVAS_API_KEY`
    - `PLAYCANVAS_PROJECT_ID`
    - `PLAYCANVAS_BRANCH_ID`
4. On the command line, run the npm script `npm run watch-push`
5. This will compile your scripts in `src` folder on saved changes into `build/main.bundle.js` and upload to your playcanvas.com project
## npm scripts
| Command                | Description                                                             |
|------------------------|-------------------------------------------------------------------------|
| `npm run build`        | Compiles tsc files and builds to `build/main.bundle.js`                 |
| `npm run watch`        | Compiles tsc files on code changes and builds to `build/main.bundle.js` |
| `npm run push`         | Uploads `build/main.bundle.js` to playcanvas.com project                |
| `npm run build-push`   | Performs `build` and `push` npm scripts                                 |
| `npm run watch-push`   | Performs `watch` and `push` npm scripts                                 |


[playcanvas-sync-pcconfig-instructions]: https://github.com/playcanvas/playcanvas-sync#config-variables