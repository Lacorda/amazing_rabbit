
module.exports = {
    rules: {
        // 🚨不要定义未使用的变量。
        'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: true }],

        // 🚨使用浏览器全局变量时加上 `window.` 前缀。
        'no-undef': 'error',

        // 🚨不要对变量使用 `delete` 操作。
        'no-delete-var': 'error',

        // 🚨不要重复声明变量。
        'no-redeclare': ['error', { builtinGlobals: false }],

        // 🚨避免将变量赋值给自己。
        'no-self-assign': ['error', { props: true }],

        // 🚨避免将变量与自己进行比较操作。
        'no-self-compare': 'error',

        // 🚨不要使用 `undefined` 来初始化变量。
        'no-undef-init': 'error',

        // 🚨循环语句中注意更新循环变量。
        'no-unmodified-loop-condition': 'error',

        // 🚨不要随意更改关键字的值。
        'no-shadow-restricted-names': 'error',

        // disallow use of variables before they are defined
        'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],

        // disallow use of void operator
        // https://cn.eslint.org/docs/rules/no-void
        'no-void': 'error',
    }
};
