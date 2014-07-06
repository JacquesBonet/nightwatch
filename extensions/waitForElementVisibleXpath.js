/**
 *  waitForElementVisibleXpath method
 *
 * @param {string} xpath - Xpath of the element to route the command to.
 * @param {function} [callback] - Optional callback function to be called when the command finishes.
 * @returns {*}
 */
module.exports.command = function (xpath, callback) {

    return this
        .useXpath()
        .waitForElementVisible( xpath, this.getTimeout(), callback)
        .useCss();
};
