
module.exports = {
    rules: {
        // 🚨✅正则中避免使用多个空格。
        'no-regex-spaces': 'error',

        // 🚨正则中不要使用控制符。
        'no-control-regex': 'error',

        // 🚨正则中不要使用空字符。
        'no-empty-character-class': 'error',

        // 🚨不要向 `RegExp` 构造器传入非法的正则表达式。
        'no-invalid-regexp': 'error',
    }
};
