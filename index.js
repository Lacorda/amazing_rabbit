/*
 * Author: 绿间
 * Email: lvjian@huanleguang.com
 * Date: 2019-12-20 16:49:00
 */

module.exports = {
    extends: [
        './rules/es6',
        './rules/style',
        './rules/variables',
        './rules/function',
        './rules/object',
        './rules/node',
        './rules/regex',
        './rules/vue',
    ].map(require.resolve),
    globals: {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly'
    },
    plugins: [
        'import',
    ],
    rules: {},
};
