/**
 *  isXpath method
 *
 * @param {string} xpathORcss - Xpath of the element to route the command to.
 * @returns {boolean}
 */
module.exports.command = function (xpathORcss) {
	try{

		if(!xpathORcss) return false;

		var re = new RegExp('^/.+/(,.*)?$');

		if(xpathORcss.match(re)) return false; // e.g. "/abc/,value=xxx"  or "/abc/" are idsString
	 
		re = new RegExp('^/');

		if(xpathORcss.match(re)) return true;  // e.g. "/abc" or "//abc" are XPath
	 
		return false;                                // e.g. "name=abc" or "abc" are idsString

	}
	catch(ex){
		this.log('EXCEPTION in isXPath: '+ex); throw '';
	}
};
