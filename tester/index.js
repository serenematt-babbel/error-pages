const errorPages = require('lessonnineerr');
const response = errorPages.getErrorPage('en', '404');
console.log('hey', response);
