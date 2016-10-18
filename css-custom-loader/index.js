var loaderUtils = require("loader-utils");

module.exports = function(source) {
    this.cacheable && this.cacheable();
    var query = loaderUtils.parseQuery(this.query);
    var newSource = source.replace(/\${(.*?)}/g, function(a, b){
        if (!query[b]) {
            throw new Error('such property doesnt exist')
        }
        return query[b];
    })
	return newSource;
}