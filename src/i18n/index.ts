
/**
 *
 */

import * as electron from 'electron'
import * as fs from 'fs'
import * as path from 'path'

/**
 *
 */
export class I18N {

    /**
     *
     */
    private readonly app = electron.app ? electron.app : electron.remote.app

    /**
     *
     */
    private readonly loadedLanguage: any

    /**
     *
     */
    constructor() {

        if ( fs.existsSync( path.join( __dirname, '../../localizations/', this.app.getLocale() + '.json' ) ) )

            this.loadedLanguage = JSON.parse( fs.readFileSync( path.join( __dirname, '../../localizations/', this.app.getLocale() + '.json' ), 'utf8' ) )

        else

            this.loadedLanguage = JSON.parse( fs.readFileSync( path.join( __dirname, '../../localizations/', 'en.json' ), 'utf8' ) )

    }

    /**
     * @param phrase:
     */
    __( phrase: string ): string {

        let translation: string = this.loadedLanguage[ phrase ]

        if ( translation === undefined )

            translation = phrase

        return translation

    }

}
