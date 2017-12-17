# electron-ts-starter

The electron-ts-starter repository can be used as a template to get started with developing [Electron](https://electronjs.org/) apps in [TypeScript](https://www.typescriptlang.org/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

**Note**: The `i18n` module is just non-well working sample

### To Use

To clone and run this repository you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) installed on your computer. From your command line:

```
# Clone this repository
$ git clone https://github.com/robinwalterfit/electron-ts-starter.ts
# Go into the repository
$ cd electron-ts-starter
# Install dependencies
$ npm install
# Run the app
$ npm start
```

## Deployment

This template uses the [Electron icon](https://github.com/electron/electron/blob/master/default_app/icon.png) by default.

### Icons

You have to create your own icon sets! For example with macOS you can do the following:

#### Linux icon

Create a 1024x1024 icon with a program of your choice – e.g. Photoshop, Affinity Photo, Illustrator, Affinity Designer, GIMP, etc. – and safe it with the same dimensions as in `src/assets/icons/png` as **png**.

#### macOS icon

Create a directory `icon.iconset`. Inside this directory you will create copies of your icon with the right dimensions. Checkout `src/assets/icons/mac/icon.iconset` for the right dimensions.

**Note**: `@2x` indicates that the icon is twice as big. E.g. `icon_512x512@2x.png` has the dimension 1024x1024.

Open a terminal and execute the following command:

```
# Create the macOS icon: icon.icns
$ iconutil -c icns path/to/icon.iconset
```

#### Windows icon

Open the `256x256.png` with Apple's built in Preview. Click on export in the menu. Now it's tricky:

When you see the export dialog you can choose a file format from the dropdown list. By default there is no way to export to `.ico` file. Hold the `alt` key pressed on your keyboard and click on the dropdown list. Now you can choose the `Microsoft Symbol` format to safe your icon as `icon.ico`


For further instructions:

* [Create Your Own Custom Icons in OS X 10.7.5 or Later](https://blog.macsales.com/28492-create-your-own-custom-icons-in-10-7-5-or-later)
* [Create all favicon formats in Mac OS with Preview!](https://coderwall.com/p/89p9kw/create-all-favicon-formats-in-mac-os-with-preview)

### Most annoying part

You have to check several files and change the entries according to your needs:

* `package.json` ll. 2, 3, 36-41, 44, 45, 48, 56, 59, 61
* `src/menu/main.ts` l. 140
* `installer/windows/createinstaller.js` ll. 27, 28, 31, 32

## Built With

* [Electron](https://electronjs.org/) – To build amazing cross-platform apps with HTML, CSS & JavaScript
* [TypeScript](https://www.typescriptlang.org/)
* [Sass/Scss](http://sass-lang.com) – The better CSS
* [Node.js](https://nodejs.org/)
* [electron-packager](https://github.com/electron-userland/electron-packager)
* [electron-winstaller](https://github.com/electron/windows-installer)
* [electron-installer-dmg](https://github.com/mongodb-js/electron-installer-dmg)
* [electron-installer-debian](https://github.com/unindented/electron-installer-debian)

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/robinwalterfit/electron-ts-starter/tags).

## Authors

* **Robin Walter** - *Initial work* - [robinwalterfit](https://github.com/robinwalterfit)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Checkout these amazing cheat sheets: [README-Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2), [CONTRIBUTING-Template](https://gist.github.com/PurpleBooth/b24679402957c63ec426) & [GitHub Emojis](https://gist.github.com/rxaviers/7360908)
* Based on [Electron quick-start](https://github.com/electron/electron-quick-start) & [electron-tutorial-app](https://github.com/crilleengvall/electron-tutorial-app) – Tack för det! [@crilleengvall](https://github.com/crilleengvall/)
