/**
 * actionXpath action
 * @param {string} aCssSelector - CSS selector to select
 * @param {string} aSelectorToCheck - Selector to verify after page update
 * @param {string} isXpath - Is aSelectorToCheck has a xpath syntaxe?
 * @returns {*}
 */
module.exports.command = function ( aCssSelector, aSelectorToCheck, isXpath) {
    this
        .waitForElementVisible( aCssSelector, this.getTimeout())
        .pause( 500)
        .clickXpath( aCssSelector)
        .pause( 500);

    if (aSelectorToCheck[0] != '/' && isXpath === true)   // selector is a title
    {
        aSelectorToCheck = "//title[text()=\"" + aSelectorToCheck + "\"]";
        this.waitForElementPresentXpath(aSelectorToCheck);   // wait title.
        this.pause( 500);
    }
    else
    if (isXpath)
        this.waitForElementVisibleXpath( aSelectorToCheck, this.getTimeout());   // wait xpath.
    else
        this.waitForElementVisible( aSelectorToCheck, this.getTimeout());   // wait css path.

    this.pause( 500);

    return this;
};
