
module.exports = {
    extends: [
        'plugin:vue/recommended'
    ],
    rules: {
        'vue/html-indent': [2, 4],
        // 'vue/script-indent': [2, 4],
        "vue/script-indent": [2, 4, {
            "baseIndent": 0,
            "switchCase": 1
        }],
        'vue/max-attributes-per-line': [2, {
            singleline: 4,
            multiline: {
                max: 1,
                allowFirstLine: false
            }
        }],
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            'registeredComponentsOnly': false,
            'ignores': []
        }],
        'vue/singleline-html-element-content-newline': [2, {
            'ignoreWhenNoAttributes': true,
            'ignoreWhenEmpty': true,
            'ignores': ['pre', 'textarea', 'a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'canvas', 'cite', 'code', 'data', 'del', 'dfn', 'em', 'i', 'iframe', 'ins', 'kbd', 'label', 'map', 'mark', 'noscript', 'object', 'output', 'picture', 'q', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'time', 'u', 'var', 'video', 'li', 'router-link', 'template', 'button', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        }],
        "vue/comment-directive": 0
    },
};
