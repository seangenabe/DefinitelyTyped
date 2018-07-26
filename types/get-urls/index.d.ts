// Type definitions for get-urls 7.2
// Project: https://github.com/sindresorhus/get-urls#readme
// Definitions by: Sean Marvi Oliver Genabe <https://github.com/seangenabe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Options } from 'normalize-url';

declare namespace getUrls {
    interface GetUrlsOptions extends Options {
        /**
         * Extract URLs that appear as query parameters in the found URLs.
         */
        extractFromQueryString?: boolean;
    }
}

/**
 * Get all URLs in a string. The URLs will be normalized.
 *
 * @returns Returns a `Set` of URLs.
 */
declare function getUrls(text: string, options?: getUrls.GetUrlsOptions): Set<string>;

export = getUrls;
