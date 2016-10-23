module.exports = function(source) {
    this.cacheable && this.cacheable();
    var themeConfig = this.options.themeConfig;
    var newSource = source.replace(/\${(.*?)}/g, function(a, variableMatch){
        if (!themeConfig[variableMatch]) {
            throw new Error(`Key ${variableMatch} doesn't exist in themeConfig in webpack config`)
        }
        return themeConfig[variableMatch];
    })
	return newSource;
}