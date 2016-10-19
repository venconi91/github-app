var loaderUtils = require("loader-utils");

module.exports = function(source) {
    this.cacheable && this.cacheable();
    var passedQuery = this.query;
    var query = loaderUtils.parseQuery(passedQuery);
    var newSource = source.replace(/\${(.*?)}/g, function(a, b){
        if (!query[b]) {
            throw new Error(`Key ${b} doesn't exist in loader passed query(${passedQuery})`)
        }
        return query[b];
    })
	return newSource;
}