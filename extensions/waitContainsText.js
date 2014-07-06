/**
 * waitContainsText method
 *
 * @param {string} aSelector - Selector of the element to check
 * @param {string} aTextToCompare - Text to compare to.
 * @param {function} [aCallback] - Optional callback function to be called when the command finishes.
 * @returns {*}
 */
module.exports.command = function ( aSelector, aTextToCompare, aCallback) {

    return this
        .waitForElementVisibleXpath( aSelector, this.getTimeout(), aCallback)
        .assert.containsText( aSelector, aTextToCompare);
};
