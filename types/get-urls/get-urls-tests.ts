import getUrls = require('get-urls');

// $ExpectType Set<string>
getUrls('');
// $ExpectType Set<string>
getUrls('', {});
