
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
        // ð¨âææåéçèµå¼é½ç¨`const`ï¼é¿åä½¿ç¨`var`ã
        'prefer-const': ['error', { destructuring: 'all' }],

        // ð¨import, export åè§£ææä½ä¸­ï¼ç¦æ­¢èµå¼å°åååéã
        // https://cn.eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': 'error',

        // ð¨å­ç±»çæé å¨ä¸­ä¸å®è¦è°ç¨ `super`
        'constructor-super': 'error',

        // ð¨é¿åå¯¹ç±»åéæ°èµå¼ã
        // https://cn.eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'error',

        // ð¨ç±»ä¸­ä¸è¦å®ä¹åä½çå±æ§ã
        // https://cn.eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'error',

        // ð¨åä¸æ¨¡åæå¤ä¸ªå¯¼å¥æ¶ä¸æ¬¡æ§åå®ã
        // https://cn.eslint.org/docs/rules/no-duplicate-imports
        // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'no-duplicate-imports': 'off',

        // ð¨ä¸è¦è§£æç©ºå¼ã
        'no-empty-pattern': 'error',

        // ð¨ç¦æ­¢ä½¿ç¨ `Symbol` æé å¨ã
        // https://cn.eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': 'error',

        // ð¨æ­£ç¡®ä½¿ç¨ ES6 ä¸­çå­ç¬¦ä¸²æ¨¡æ¿ã
        'no-template-curly-in-string': 'error',

        // ð¨ä½¿ç¨ `this` åè¯·ç¡®ä¿ `super()` å·²è°ç¨ã
        // https://cn.eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'error',


        // ð¨ç¦æ­¢å¤ä½çæé å¨ã
        // https://cn.eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'error',

        // ð¨â`yield *` ä¸­ç `*` ååé½è¦æç©ºæ ¼ã
        // https://cn.eslint.org/docs/rules/yield-star-spacing
        'yield-star-spacing': ['error', 'both'],

        // ð¨â`generator *` ä¸­ç `*` ååé½è¦æç©ºæ ¼ã
        // https://cn.eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': ['error', { before: true, after: true }],

        // ð¨âè¦æ±ç®­å¤´å½æ°çç®­å¤´ååé½æç©ºæ ¼
        // https://cn.eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': ['error', { before: true, after: true }],

        // ð¨ä¸è¦ä¿®æ¹ä½¿ç¨ `const` å£°æçåéã
        'no-const-assign': 'error',

        // ð¨âå£°æåéä½¿ç¨ `let` æ `const` èä¸æ¯ `var`
        'no-var': 'error',

        // ð¨è¦æ±æ symbol æè¿° (symbol-description)
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
