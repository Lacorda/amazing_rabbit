export default {
    methods: {
        doAni(type, delay = 0) {
            const o = this.bounding[type];
            const $el = this.$refs[type];
            if (!o || !$el) return;
            const n = $el.getBoundingClientRect();

            const deltaX = o.x - n.x;
            const deltaY = o.y - n.y;
            const deltaW = o.width / n.width;
            const deltaH = o.height / n.height;

            $el.animate([
                { transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})` },
                { transform: 'none' },
            ], {
                duration: 1000,
                delay,
                fill: 'both',
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            });
        },
    },
};
