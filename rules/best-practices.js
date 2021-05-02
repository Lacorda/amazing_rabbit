
module.exports = {
    rules: {
        // 🚨禁止使用原始包装器。
        'no-new-wrappers': 'error',

        // 🚨不要使用多行字符串。
        'no-multi-str': 'error',

        // 🚨禁止不必要的转义。
        'no-useless-escape': 'error',

        // 🚨避免使用逗号操作符。
        'no-sequences': 'error',

        // 🚨不要使用非法的空白符。
        'no-irregular-whitespace': 'error',

        // 🚨点号操作符须与属性需在同一行。
        'dot-location': ['error', 'property'],

        // 🚨始终使用 `===` 替代 `==`。
        eqeqeq: ['error', 'always', { null: 'ignore' }],

        // 🚨对于三元运算符 `?` 和 `:` 与他们所负责的代码处于同一行
        'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],

        // 🚨避免不必要的布尔转换。
        'no-extra-boolean-cast': 'error',

        // 🚨不要省去小数点前面的0。
        'no-floating-decimal': 'error',

        // 🚨如果有更好的实现，尽量不要使用三元表达式。
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],

        // 🚨关系运算符的左值不要做取反操作。
        'no-unsafe-negation': 'error',

        // 🚨检查 `NaN` 的正确姿势是使用 `isNaN()`。
        'use-isnan': 'error',

        // 🚨用合法的字符串跟 `typeof` 进行比较操作。
        'valid-typeof': ['error', { requireStringLiterals: true }],

        // 🚨请书写优雅的条件语句（avoid Yoda conditions）。
        yoda: ['error', 'never'],

        // 🚨避免使用常量作为条件表达式的条件（循环语句除外）。
        'no-constant-condition': ['error', { checkLoops: false }],

        // 🚨不要丢掉异常处理中`err`参数。
        'handle-callback-err': ['error', '^(err|error)$'],

        // 🚨不要使用 `debugger`。
        'no-debugger': 'error',

        // 🚨`switch` 语句中不要定义重复的 `case` 分支。
        'no-duplicate-case': 'error',

        // 🚨不要使用 `eval()`。
        'no-eval': 'error',

        // 🚨`catch` 中不要对错误重新赋值。
        'no-ex-assign': 'error',

        // 🚨`switch` 一定要使用 `break` 来将条件分支正常中断。
        'no-fallthrough': 'error',

        // 🚨注意隐式的 `eval()`。
        'no-implied-eval': 'error',

        // 🚨禁止使用 `__iterator__`。
        'no-iterator': 'error',

        // 🚨禁止使用标签语句。
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

        // 🚨不要书写不必要的嵌套代码块。
        'no-lone-blocks': 'error',

        // 🚨不要使用八进制字面量。
        'no-octal': 'error',

        // 🚨字符串字面量中也不要使用八进制转义字符。
        'no-octal-escape': 'error',

        // 🚨`finally` 代码块中不要再改变程序执行流程。
        'no-unsafe-finally': 'error',

        // 🚨用 `throw` 抛错时，抛出 `Error` 对象而不是字符串。
        'no-throw-literal': 'error',

        // 🚨禁止使用 `with`。
        'no-with': 'error',

        // 在`case`和`default`分句里用大括号创建一块包含语法声明的区域(e.g. `let`, `const`, `function`, and `class`).
        // https://cn.eslint.org/docs/rules/no-case-declarations.html
        'no-case-declarations': 'error',

        // Disallow unnecessary catch clauses
        // https://cn.eslint.org/docs/rules/no-useless-catch
        'no-useless-catch': 'error',

        // 用圆括号来混合这些操作符。
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

        // 禁止未使用过的表达式
        // https://cn.eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],

        // 禁止多余的 return 语句
        // https://cn.eslint.org/docs/rules/no-useless-return
        'no-useless-return': 'error',

        // Disallow comparisons to negative zero
        // https://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 'error',

        // 访问属性时使用点符号
        'dot-notation': ['error', { allowKeywords: true }],

        // Disallow characters which are made with multiple code points in character class syntax
        // https://cn.eslint.org/docs/rules/no-misleading-character-class
        'no-misleading-character-class': 'error',
    }
};
