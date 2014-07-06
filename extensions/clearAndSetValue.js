/**
 * clearAndSet method
 * Clear and set the element contents
 *
 * @param {string} cssSelector
 * @param {string} aValue
 * @returns {*}
 */
module.exports.command = function ( cssSelector, aValue) {

    return this
        .clearValue( cssSelector)
        .setValue( cssSelector, aValue);
};
