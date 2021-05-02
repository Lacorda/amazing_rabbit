
module.exports = {
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            generators: false,
            objectLiteralDuplicateProperties: false
        },
    },
    rules: {
        // 🚨✅所有变量的赋值都用`const`，避免使用`var`。
        'prefer-const': ['error', { destructuring: 'all' }],

        // 🚨import, export 和解构操作中，禁止赋值到同名变量。
        // https://cn.eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': 'error',

        // 🚨子类的构造器中一定要调用 `super`
        'constructor-super': 'error',

        // 🚨避免对类名重新赋值。
        // https://cn.eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'error',

        // 🚨类中不要定义冗余的属性。
        // https://cn.eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'error',

        // 🚨同一模块有多个导入时一次性写完。
        // https://cn.eslint.org/docs/rules/no-duplicate-imports
        // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'no-duplicate-imports': 'off',

        // 🚨不要解构空值。
        'no-empty-pattern': 'error',

        // 🚨禁止使用 `Symbol` 构造器。
        // https://cn.eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': 'error',

        // 🚨正确使用 ES6 中的字符串模板。
        'no-template-curly-in-string': 'error',

        // 🚨使用 `this` 前请确保 `super()` 已调用。
        // https://cn.eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'error',


        // 🚨禁止多余的构造器。
        // https://cn.eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'error',

        // 🚨✅`yield *` 中的 `*` 前后都要有空格。
        // https://cn.eslint.org/docs/rules/yield-star-spacing
        'yield-star-spacing': ['error', 'both'],

        // 🚨✅`generator *` 中的 `*` 前后都要有空格。
        // https://cn.eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': ['error', { before: true, after: true }],

        // 🚨✅要求箭头函数的箭头前后都有空格
        // https://cn.eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': ['error', { before: true, after: true }],

        // 🚨不要修改使用 `const` 声明的变量。
        'no-const-assign': 'error',

        // 🚨✅声明变量使用 `let` 或 `const` 而不是 `var`
        'no-var': 'error',

        // 🚨要求有 symbol 描述 (symbol-description)
        // https://cn.eslint.org/docs/rules/symbol-description
        'symbol-description': 'error',

        // disallow using an async function as a Promise executor
        // https://cn.eslint.org/docs/rules/no-async-promise-executor
        'no-async-promise-executor': 'error',

        // disallow redundant `return await`
        'no-return-await': 'error',

        // require using Error objects as Promise rejection reasons
        // https://cn.eslint.org/docs/rules/prefer-promise-reject-errors
        'prefer-promise-reject-errors': 'warn',
    }
};
