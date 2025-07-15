/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const folders = [];
    const names = path.split('/');

    for(const n of names) {
        if(n  === '.' || n === '') continue;
        if(n === '..') {
            folders.pop();
            continue;
        }
        folders.push(n);
    }

    return `/${folders.join('/')}` 
};