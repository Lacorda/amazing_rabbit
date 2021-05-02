export default {
    methods: {
        copyToClip(content, message) {
            const aux = document.createElement('input');
            aux.setAttribute('value', content);
            document.body.appendChild(aux);
            aux.select();
            document.execCommand('copy');
            document.body.removeChild(aux);
            if (message == null) {
                this.$alert('复制成功');
            } else {
                this.$alert(message);
            }
        },
    },
};
