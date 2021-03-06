
module.exports = {
    rules: {
        // ð¨ç¦æ­¢ä½¿ç¨åå§åè£å¨ã
        'no-new-wrappers': 'error',

        // ð¨ä¸è¦ä½¿ç¨å¤è¡å­ç¬¦ä¸²ã
        'no-multi-str': 'error',

        // ð¨ç¦æ­¢ä¸å¿è¦çè½¬ä¹ã
        'no-useless-escape': 'error',

        // ð¨é¿åä½¿ç¨éå·æä½ç¬¦ã
        'no-sequences': 'error',

        // ð¨ä¸è¦ä½¿ç¨éæ³çç©ºç½ç¬¦ã
        'no-irregular-whitespace': 'error',

        // ð¨ç¹å·æä½ç¬¦é¡»ä¸å±æ§éå¨åä¸è¡ã
        'dot-location': ['error', 'property'],

        // ð¨å§ç»ä½¿ç¨ `===` æ¿ä»£ `==`ã
        eqeqeq: ['error', 'always', { null: 'ignore' }],

        // ð¨å¯¹äºä¸åè¿ç®ç¬¦ `?` å `:` ä¸ä»ä»¬æè´è´£çä»£ç å¤äºåä¸è¡
        'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],

        // ð¨é¿åä¸å¿è¦çå¸å°è½¬æ¢ã
        'no-extra-boolean-cast': 'error',

        // ð¨ä¸è¦çå»å°æ°ç¹åé¢ç0ã
        'no-floating-decimal': 'error',

        // ð¨å¦æææ´å¥½çå®ç°ï¼å°½éä¸è¦ä½¿ç¨ä¸åè¡¨è¾¾å¼ã
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],

        // ð¨å³ç³»è¿ç®ç¬¦çå·¦å¼ä¸è¦åååæä½ã
        'no-unsafe-negation': 'error',

        // ð¨æ£æ¥ `NaN` çæ­£ç¡®å§¿å¿æ¯ä½¿ç¨ `isNaN()`ã
        'use-isnan': 'error',

        // ð¨ç¨åæ³çå­ç¬¦ä¸²è· `typeof` è¿è¡æ¯è¾æä½ã
        'valid-typeof': ['error', { requireStringLiterals: true }],

        // ð¨è¯·ä¹¦åä¼éçæ¡ä»¶è¯­å¥ï¼avoid Yoda conditionsï¼ã
        yoda: ['error', 'never'],

        // ð¨é¿åä½¿ç¨å¸¸éä½ä¸ºæ¡ä»¶è¡¨è¾¾å¼çæ¡ä»¶ï¼å¾ªç¯è¯­å¥é¤å¤ï¼ã
        'no-constant-condition': ['error', { checkLoops: false }],

        // ð¨ä¸è¦ä¸¢æå¼å¸¸å¤çä¸­`err`åæ°ã
        'handle-callback-err': ['error', '^(err|error)$'],

        // ð¨ä¸è¦ä½¿ç¨ `debugger`ã
        'no-debugger': 'error',

        // ð¨`switch` è¯­å¥ä¸­ä¸è¦å®ä¹éå¤ç `case` åæ¯ã
        'no-duplicate-case': 'error',

        // ð¨ä¸è¦ä½¿ç¨ `eval()`ã
        'no-eval': 'error',

        // ð¨`catch` ä¸­ä¸è¦å¯¹éè¯¯éæ°èµå¼ã
        'no-ex-assign': 'error',

        // ð¨`switch` ä¸å®è¦ä½¿ç¨ `break` æ¥å°æ¡ä»¶åæ¯æ­£å¸¸ä¸­æ­ã
        'no-fallthrough': 'error',

        // ð¨æ³¨æéå¼ç `eval()`ã
        'no-implied-eval': 'error',

        // ð¨ç¦æ­¢ä½¿ç¨ `__iterator__`ã
        'no-iterator': 'error',

        // ð¨ç¦æ­¢ä½¿ç¨æ ç­¾è¯­å¥ã
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

        // ð¨ä¸è¦ä¹¦åä¸å¿è¦çåµå¥ä»£ç åã
        'no-lone-blocks': 'error',

        // ð¨ä¸è¦ä½¿ç¨å«è¿å¶å­é¢éã
        'no-octal': 'error',

        // ð¨å­ç¬¦ä¸²å­é¢éä¸­ä¹ä¸è¦ä½¿ç¨å«è¿å¶è½¬ä¹å­ç¬¦ã
        'no-octal-escape': 'error',

        // ð¨`finally` ä»£ç åä¸­ä¸è¦åæ¹åç¨åºæ§è¡æµç¨ã
        'no-unsafe-finally': 'error',

        // ð¨ç¨ `throw` æéæ¶ï¼æåº `Error` å¯¹è±¡èä¸æ¯å­ç¬¦ä¸²ã
        'no-throw-literal': 'error',

        // ð¨ç¦æ­¢ä½¿ç¨ `with`ã
        'no-with': 'error',

        // å¨`case`å`default`åå¥éç¨å¤§æ¬å·åå»ºä¸ååå«è¯­æ³å£°æçåºå(e.g. `let`, `const`, `function`, and `class`).
        // https://cn.eslint.org/docs/rules/no-case-declarations.html
        'no-case-declarations': 'error',

        // Disallow unnecessary catch clauses
        // https://cn.eslint.org/docs/rules/no-useless-catch
        'no-useless-catch': 'error',

        // ç¨åæ¬å·æ¥æ··åè¿äºæä½ç¬¦ã
        // https://eslint.org/docs/rules/no-mixed-operators
        'no-mixed-operators': ['error', {
            // the list of arthmetic groups disallows mixing `%` and `**`
            // with other arithmetic operators.
            groups: [
                ['%', '**'],
                ['%', '+'],
                ['%', '-'],
                ['%', '*'],
                ['%', '/'],
                ['/', '*'],
                ['**', '+'],
                ['**', '-'],
                ['**', '*'],
                ['**', '/'],
                ['&&', '||'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['in', 'instanceof'],
            ],
            allowSamePrecedence: false
        }],

        // Avoid code that looks like two expressions but is actually one
        // https://cn.eslint.org/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 'error',

        // ç¦æ­¢æªä½¿ç¨è¿çè¡¨è¾¾å¼
        // https://cn.eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],

        // ç¦æ­¢å¤ä½ç return è¯­å¥
        // https://cn.eslint.org/docs/rules/no-useless-return
        'no-useless-return': 'error',

        // Disallow comparisons to negative zero
        // https://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 'error',

        // è®¿é®å±æ§æ¶ä½¿ç¨ç¹ç¬¦å·
        'dot-notation': ['error', { allowKeywords: true }],

        // Disallow characters which are made with multiple code points in character class syntax
        // https://cn.eslint.org/docs/rules/no-misleading-character-class
        'no-misleading-character-class': 'error',
    }
};
