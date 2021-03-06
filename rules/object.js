
module.exports = {
    rules: {
        // ð¨ä½¿ç¨æ°ç»å­é¢éèä¸æ¯æé å¨ã
        'no-array-constructor': 'error',

        // ð¨ç¦æ­¢ä½¿ç¨ç¨çæ°ç»ï¼Sparse arraysï¼ã
        'no-sparse-arrays': 'error',

        // ð¨ç¦æ­¢ä½¿ç¨ `Object` æé å¨ã
        'no-new-object': 'error',

        // ð¨å¯¹è±¡ä¸­å®ä¹äºå­å¼å¨ï¼ä¸å®è¦å¯¹åºçå®ä¹åå¼å¨ã
        'accessor-pairs': 'error',

        // ð¨å¯¹è±¡å­é¢éä¸­ä¸è¦å®ä¹éå¤çå±æ§ã
        'no-dupe-keys': 'error',

        // ð¨ä¸è¦æ©å±åçå¯¹è±¡ã
        'no-extend-native': 'error',

        // ð¨ä¸è¦å¯¹å¨å±åªè¯»å¯¹è±¡éæ°èµå¼ã
        'no-global-assign': 'error',

        // ð¨å¤é¨åéä¸è¦ä¸å¯¹è±¡å±æ§éåã
        // https://eslint.org/docs/rules/no-label-var
        'no-label-var': 'error',

        // ð¨`new` åå»ºå¯¹è±¡å®ä¾åéè¦èµå¼ç»åéã
        'no-new': 'error',

        // ð¨âé¿åä½¿ç¨ä¸å¿è¦çè®¡ç®å¼ä½å¯¹è±¡å±æ§ã
        // https://cn.eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'error',

        // ð¨ä½¿ç¨ `getPrototypeOf` æ¥æ¿ä»£ **`__proto__`**ã
        'no-proto': 'error',

        // ð¨ç¦æ­¢ç´æ¥ä½¿ç¨ Object.prototypes çåç½®å±æ§
        // https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'error',
    }
};
