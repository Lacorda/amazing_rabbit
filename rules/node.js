

module.exports = {
    env: {
        node: true,
    },
    rules: {
        // 🚨使用 `__dirname` 和 `__filename` 时尽量避免使用字符串拼接
        'no-path-concat': 'error',

        // 🚨禁止使用 `new require`。
        'no-new-require': 'error',

        // 'node/no-deprecated-api': 'error',
        // 'node/process-exit-as-throw': 'error',
    }
};
