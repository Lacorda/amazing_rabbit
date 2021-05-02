
module.exports = {
    rules: {
        // 🚨✅使用四个空格进行缩进。
        // http://cn.eslint.org/docs/rules/indent
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments: false
        }],

        // 🚨✅禁止混合使用空格与 tab 作为缩进。
        'no-mixed-spaces-and-tabs': 'error',

        // 🚨✅最外层统一使用单引号。
        // http://cn.eslint.org/docs/rules/quotes
        quotes: ['error', 'single', { avoidEscape: true }],

        // 只对那些无效的标示使用引号 `''`
        'quote-props': ['error', 'as-needed'],

        // 🚨✅关键字后面加空格。
        'keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true }
            }
        }],

        // 🚨✅运算符(space-infix-ops)周围要有空格。
        'space-infix-ops': 'error',

        // 🚨✅逗号后面加空格
        'comma-spacing': ['error', { before: false, after: true }],

        // 🚨✅单行代码块两边加空格
        // https://cn.eslint.org/docs/rules/block-spacing
        'block-spacing': ['error', 'always'],

        // 🚨✅除了缩进，不要使用多个空格。
        'no-multi-spaces': ['error', {
            ignoreEOLComments: false,
        }],

        // 🚨✅行末不留空格。
        'no-trailing-spaces': ['error', {
            skipBlankLines: false,
            ignoreComments: false,
        }],

        // 🚨✅属性前面不要加空格。
        // https://cn.eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 'error',

        // 🚨✅遇到分号时空格要后留前不留。
        'semi-spacing': ['error', { before: false, after: true }],

        // 🚨✅代码块首尾留空格。
        'space-before-blocks': 'error',

        // 🚨✅圆括号间不留空格。
        'space-in-parens': ['error', 'never'],

        // 🚨✅一元运算符后面跟一个空格。
        // https://cn.eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': ['error', {
            words: true,
            nonwords: false,
        }],

        // 🚨✅注释首尾留空格。
        // https://cn.eslint.org/docs/rules/spaced-comment
        // 支持 Region Comment：http://samirvaidya.blogspot.com/2014/08/writing-javascript-with-regions-in.html
        'spaced-comment': ['error', 'always', {
            line: { markers: ['*package', '!', '/', ',', '=', '#region', '#endregion'] }, // 块级注释的标记
            block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] },
        }],

        // 🚨✅模板字符串中变量前后不加空格。
        'template-curly-spacing': ['error', 'never'],

        // 🚨✅键值对当中冒号与值之间要留空格。
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],

        // 🚨✅展开运算符与它的表达式间不要留空白。
        // https://cn.eslint.org/docs/rules/rest-spread-spacing
        'rest-spread-spacing': ['error', 'never'],

        // 🚨✅代码块中避免多余留白
        'padded-blocks': ['error', {
            blocks: 'never',
            classes: 'never',
            switches: 'never',
        }, {
            allowSingleLineBlocks: true,
        }],

        // 🚨✅结束语句后面需要加分号
        semi: ['error', 'always'],

        // 🚨强制分号出现在句子末尾
        // https://cn.eslint.org/docs/rules/semi-style
        'semi-style': ['error', 'last'],

        // 🚨避免一行代码超过160个字符（包含空格）。
        // https://cn.eslint.org/docs/rules/max-len
        'max-len': ['error', 160, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],

        // 🚨✅不允许有连续多行空行。
        // https://cn.eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 0 }],

        // 🚨✅文件末尾留一空行。
        'eol-last': ['error', 'always'],

        // 🚨✅对象属性换行时注意统一代码风格。
        // https://cn.eslint.org/docs/rules/object-property-newline
        'object-property-newline': ['error', {
            allowMultiplePropertiesPerLine: true,
        }],

        // 🚨对于变量和函数名统一使用驼峰命名法。
        camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

        // 🚨✅多行结尾要有逗号。
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],

        // 🚨✅始终将逗号置于行末。
        'comma-style': ['error', 'last'],

        // 🚨`return` 语句中的赋值必需有括号包裹。
        'no-return-assign': ['error', 'except-parens'],

        // 🚨✅`else` 关键字要与花括号保持在同一行。
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],

        // 🚨✅ 多行 `if` 语句的的括号不能省。
        curly: ['error', 'multi-line'], // multiline

        // 🚨 **条件语句中赋值语句**使用括号包起来。
        'no-cond-assign': 'error',

        // 🚨✅禁止使用制表符(tab)。
        'no-tabs': 'error',

        // 方括号里不要加空格
        'array-bracket-spacing': ['error', 'never'],

        // 计算属性内要空格
        'computed-property-spacing': ['error', 'never'],

        // require or disallow an empty line between class members
        // https://cn.eslint.org/docs/rules/lines-between-class-members
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        'object-curly-newline': ['error', { multiline: true, consistent: true }],

        'object-curly-spacing': ['error', 'always'],

        // Require or disallow spacing between template tags and their literals
        // https://cn.eslint.org/docs/rules/template-tag-spacing
        'template-tag-spacing': ['error', 'never'],

        // require or disallow the Unicode Byte Order Mark
        // https://cn.eslint.org/docs/rules/unicode-bom
        'unicode-bom': ['error', 'never'],
    }
};
