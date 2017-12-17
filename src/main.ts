
/**
 *
 */

// handle setupEvents as quickly as possible
import setupEvents = require( '../installer/setupEvents' )
if ( setupEvents() )

    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    process.exit()

import { app, BrowserWindow } from 'electron'
import * as menu from './menu/main'
import * as path from 'path'
import * as url from 'url'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow | null = null

const isDevMode = process.execPath.match( /[\\/]electron/ )

const createWindow = async () => {

    // Create the browser window.
    mainWindow = new BrowserWindow( {

        height: 600,
        icon: path.join( __dirname, './assets/icons/png/64x64.png' ),
        minHeight: 200,
        minWidth: 500,
        movable: true,
        show: false,
        width: 800

    } )

    // And load the index.html of the app.
    mainWindow.loadURL( url.format( {

        pathname: path.join( __dirname, './views/', 'index.html' ),
        protocol: 'file:',
        slashes: true

    } ) )

    // Open the DevTools.
    if ( isDevMode )

        mainWindow.webContents.openDevTools()

    // Show the mainwindow when it is loaded and ready to show
    mainWindow.on( 'ready-to-show', () => {

        mainWindow.show()

    } )

    // Emitted when the window is closed.
    mainWindow.on( 'closed', () => {

        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;

    } )

    menu.buildMenu()

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on( 'ready', createWindow )

// Quit when all windows are closed.
app.on( 'window-all-closed', () => {

    // On macOS/OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with cmd + Q
    if ( process.platform !== 'darwin' )

        app.quit()

} )

app.on( 'activate', () => {

    // On macOS/OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if ( mainWindow === null )

        createWindow()

} )

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
