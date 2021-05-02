import sleep from '@services/sleep';

const colors = ['#1abc9c', '#3498db', '#f1c40f'];

export default {
    mounted() {
        window.addEventListener('mousemove', this.animateCircles);
    },
    unmounted() {
        window.removeEventListener('mousemove', this.animateCircles);
    },
    methods: {
        async animateCircles(event) {
            const circle = document.createElement('div');
            circle.setAttribute('class', 'rabit-mouse__circle');
            document.body.appendChild(circle); // adds function to body

            // adds motion
            circle.style.left = `${event.clientX}px`;
            circle.style.top = `${event.clientY}px`;

            // randomize color
            const color = colors[Math.floor(Math.random() * colors.length)];
            circle.style.borderColor = color;

            // adds animation
            circle.style.transition = 'all 0.5s linear 0s';

            circle.style.left = `${circle.offsetLeft - 20}px`;
            circle.style.top = `${circle.offsetTop - 20}px`;

            circle.style.width = '50px';
            circle.style.height = '50px';
            circle.style.borderWidth = '5px';
            circle.style.opacity = 0;
            await sleep(500);
            if (circle.parentNode) {
                circle.parentNode.removeChild(circle);
            }
        },
    },
};
