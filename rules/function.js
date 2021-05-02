
module.exports = {
    rules: {
        // 🚨✅函数声明时括号与函数名间加空格。
        // https://cn.eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],

        // 🚨✅函数调用时标识符与括号间不留间隔。
        // https://cn.eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': ['error', 'never'],

        // 🚨构造函数要以大写字母开头。
        'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],

        // 🚨无参的构造函数调用时要带上括号。
        // https://cn.eslint.org/docs/rules/new-parens
        'new-parens': 'error',

        // 🚨不要定义冗余的函数参数。
        'no-dupe-args': 'error',

        // 🚨避免多余的函数上下文绑定。
        'no-extra-bind': 'error',

        // 🚨不要使用多余的括号包裹函数。
        'no-extra-parens': ['error', 'functions'],

        // 🚨避免对声明过的函数重新赋值。
        'no-func-assign': 'error',

        // 🚨嵌套的代码块中禁止再定义函数。
        'no-inner-declarations': ['error', 'functions'],

        // 🚨不要将全局对象的属性作为函数调用。
        'no-obj-calls': 'error',

        // 🚨自调用匿名函数 (IIFEs) 使用括号包裹。
        'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],

        // 🚨禁止使用 `Function` 构造器。
        'no-new-func': 'error',

        // 🚨避免不必要的 `.call()` 和 `.apply()`。
        'no-useless-call': 'error',

        // 🚨`return`，`throw`，`continue` 和 `break` 后不要再跟代码。
        'no-unreachable': 'error',

        // 🚨避免使用 `arguments.callee` 和 `arguments.caller`。
        'no-caller': 'error',
    }
};
