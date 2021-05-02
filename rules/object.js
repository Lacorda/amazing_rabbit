
module.exports = {
    rules: {
        // 🚨使用数组字面量而不是构造器。
        'no-array-constructor': 'error',

        // 🚨禁止使用稀疏数组（Sparse arrays）。
        'no-sparse-arrays': 'error',

        // 🚨禁止使用 `Object` 构造器。
        'no-new-object': 'error',

        // 🚨对象中定义了存值器，一定要对应的定义取值器。
        'accessor-pairs': 'error',

        // 🚨对象字面量中不要定义重复的属性。
        'no-dupe-keys': 'error',

        // 🚨不要扩展原生对象。
        'no-extend-native': 'error',

        // 🚨不要对全局只读对象重新赋值。
        'no-global-assign': 'error',

        // 🚨外部变量不要与对象属性重名。
        // https://eslint.org/docs/rules/no-label-var
        'no-label-var': 'error',

        // 🚨`new` 创建对象实例后需要赋值给变量。
        'no-new': 'error',

        // 🚨✅避免使用不必要的计算值作对象属性。
        // https://cn.eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'error',

        // 🚨使用 `getPrototypeOf` 来替代 **`__proto__`**。
        'no-proto': 'error',

        // 🚨禁止直接使用 Object.prototypes 的内置属性
        // https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'error',
    }
};
