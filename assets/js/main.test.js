/*

define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require) {
    registerSuite({
        name: 'index',

        'greeting form': function () {
            return this.remote
                .get(require.toUrl('output/index.html'))
                .findById('home')
                .getVisibleText()
                .then(function (text) {
                    assert.strictEqual(text, 'Welcome!',
                        'Welcome is correct');
                });
        }
    });
});
*/