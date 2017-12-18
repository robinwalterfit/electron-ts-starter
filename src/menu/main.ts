
/**
 *
 */

import { app, BrowserWindow, Event, Menu, MenuItem, shell } from 'electron'
import { I18N } from '../i18n'

/**
 *
 */
export function buildMenu() {

    const i18n = new I18N()

    const template: Electron.MenuItemConstructorOptions[] = [

        {

            label: i18n.__( 'Edit' ),
            submenu: [

                {

                    label: i18n.__( 'Undo' ),
                    role: 'undo'

                },
                {

                    label: i18n.__( 'Redo' ),
                    role: 'redo'

                },
                {

                    type: 'separator'

                },
                {

                    label: i18n.__( 'Cut' ),
                    role: 'cut'

                },
                {

                    label: i18n.__( 'Copy' ),
                    role: 'copy'

                },
                {

                    label: i18n.__( 'Paste' ),
                    role: 'paste'

                },
                {

                    label: i18n.__( 'Delete' ),
                    role: 'delete'

                },
                {

                    label: i18n.__( 'Select all' ),
                    role: 'selectall'

                }

            ]

        },
        {

            label: i18n.__( 'View' ),
            submenu: [

                {

                    label: i18n.__( 'Actual size' ),
                    role: 'resetzoom'

                },
                {

                    label: i18n.__( 'Zoom in' ),
                    role: 'zoomin'

                },
                {

                    label: i18n.__( 'Zoom out' ),
                    role: 'zoomout'

                },
                {

                    type: 'separator'

                },
                {

                    label: i18n.__( 'Toggle fullscreen' ),
                    role: 'togglefullscreen'

                }

            ]

        },
        {

            label: i18n.__( 'Window' ),
            role: 'window',
            submenu: [

                {

                    label: i18n.__( 'Minimize' ),
                    role: 'minimize'

                },
                {

                    label: i18n.__( 'Close' ),
                    role: 'close'

                }

            ]

        },
        {

            label: i18n.__( 'Help' ),
            role: 'help',
            submenu: [

                {

                    label: i18n.__( 'Learn more' ),
                    click( item: MenuItem, window: BrowserWindow, e: Event ) {

                        shell.openExternal( 'https://github.com/robinwalterfit/electron-ts-starter' )

                    }

                }

            ]

        }

    ]

    if ( process.platform === 'darwin' ) {

        const name = app.getName()

        template.unshift( {

            label: name,
            submenu: [

                {

                    label: i18n.__( 'About' ) + ' ' + name,
                    role: 'about'

                },
                {

                    type: 'separator'

                },
                {

                    label: i18n.__( 'Services' ),
                    role: 'services',
                    submenu: [

                        {}

                    ]

                },
                {

                    type: 'separator'

                },
                {

                    label: i18n.__( 'Hide' ) + ' ' + name,
                    role: 'hide'

                },
                {

                    label: i18n.__( 'Hide others' ),
                    role: 'hideothers'

                },
                {

                    label: i18n.__( 'Unhide' ) + ' ' + name,
                    role: 'unhide'

                },
                {

                    type: 'separator'

                },
                {

                    label: i18n.__( 'Quit' ) + ' ' + name,
                    role: 'quit'

                }

            ]

        } )

        template[ 3 ].submenu = [

            {

                label: i18n.__( 'Close' ),
                role: 'close'

            },
            {

                label: i18n.__( 'Minimize' ),
                role: 'minimize'

            },
            {

                label: i18n.__( 'Zoom' ),
                role: 'zoom'

            },
            {

                type: 'separator'

            },
            {

                label: i18n.__( 'Bring all to front' ),
                role: 'front'

            }

        ]

    }

    const menu = Menu.buildFromTemplate( template )

    Menu.setApplicationMenu( menu )

}
