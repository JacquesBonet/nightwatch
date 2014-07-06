/**
 * actionXpath action
 * @param {string} aXpathSelector - Xpath selector to select
 * @param {string} aSelectorToCheck - Selector to verify after page update
 * @param {string} isXpath - Is aSelectorToCheck has a xpath syntaxe?
 * @returns {*}
 */
module.exports.command = function ( aXpathSelector, aSelectorToCheck, isXpath) {
    this
        .waitForElementVisibleXpath( aXpathSelector, this.getTimeout())
        .pause( 500)
        .clickXpath( aXpathSelector)
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
