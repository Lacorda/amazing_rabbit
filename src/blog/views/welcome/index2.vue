<template>
    <div class="welcome-container">
        <div class="radish radish1">
            <div class="line" />
            <img src="../../assets/radish1.png" alt="小萝卜">
        </div>
        <div class="radish radish2">
            <div class="line" />
            <img src="../../assets/radish2.png" alt="大萝卜">
        </div>
        <div class="surfing">
            <SvgIcon type="rabbit" />
            <SvgIcon type="huaban" />
        </div>
        <SvgIcon type="cloud1" />
        <SvgIcon type="cloud2" />

        <div class="button-typewriter" @click="surfing">
            <p>进入博客</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Welcome',
    mounted() {
        this.animation();
    },
    methods: {
        animation() {
            const $cloud1 = document.querySelector('.svg-icon-cloud1');
            const $cloud2 = document.querySelector('.svg-icon-cloud2');
            const $surfing = document.querySelector('.surfing');
            const $radish1 = document.querySelector('.radish1');
            const $radish2 = document.querySelector('.radish2');
            const $btn = document.querySelector('.button-typewriter');

            TweenLite.from($cloud1, 2, { y: '50%', autoAlpha: 0, ease: 'back.out(1.8)' });
            TweenLite.fromTo($cloud1, 3, { bottom: '-3em', delay: 3, immediateRender: false, }, { bottom: '-1em', ease: 'power3.out', repeat: -1, yoyo: true });

            TweenLite.from($cloud2, 2, { y: '100%', autoAlpha: 0, ease: 'back.out(1.7)', delay: 1 });
            TweenLite.fromTo($cloud2, 2, { bottom: '-1em', delay: 3.5 }, { bottom: '0', repeat: -1, yoyo: true });


            TweenLite.from($surfing, 2, { x: '200%', y: '-60%', autoAlpha: 0, ease: 'back.out(2)', delay: 1 });
            TweenLite.fromTo($surfing, 2, { bottom: '2em', delay: 3.5 }, { bottom: '-1em', repeat: -1, yoyo: true });


            TweenLite.from($radish1, 0.5, { y: '-200%', autoAlpha: 0, ease: 'bounce.out', delay: 3 });
            TweenLite.from($radish2, 0.75, { y: '-300%', autoAlpha: 0, ease: 'bounce.out', delay: 3.75 });
            TweenLite.from($btn, 0.75, { y: '-300%', autoAlpha: 0, ease: 'bounce.out', delay: 4.5 });
        },
        surfing() {
            const $cloud1 = document.querySelector('.svg-icon-cloud1');
            const $cloud2 = document.querySelector('.svg-icon-cloud2');
            const $surfing = document.querySelector('.surfing');
            const $radish1 = document.querySelector('.radish1');
            const $radish2 = document.querySelector('.radish2');
            const $btn = document.querySelector('.button-typewriter');
            const $bg = document.querySelector('.welcome-container');
            TweenLite.to($btn, 0.75, {
                autoCSS: true,
                css: {
                    x: -300,
                    alpha: 0,
                },
                ease: 'bounce.out'
            });
            TweenLite.to($surfing, 1.25, { x: '-300%', y: '0', ease: 'elastic.in(1, 0.65)', delay: 0.25 });

            TweenLite.to($radish1, 0.5, {
                autoCSS: true,
                css: {
                    y: -300,
                    alpha: 0,
                },
                ease: 'bounce.out',
                delay: 0.25
            });
            TweenLite.to($radish2, 0.75, {
                autoCSS: true,
                css: {
                    y: -300,
                    alpha: 0,
                },
                ease: 'bounce.out'
            });

            TweenLite.to($cloud1, 0.5, {
                autoCSS: true,
                css: {
                    y: 300,
                    alpha: 0,
                },
                ease: 'bounce.out',
                delay: 0.75
            });
            TweenLite.to($cloud2, 0.5, {
                autoCSS: true,
                css: {
                    y: 300,
                    alpha: 0,
                },
                ease: 'bounce.out',
                delay: 1
            });
            TweenLite.to($bg, 0.5, {
                autoCSS: true,
                css: {
                    alpha: 0
                },
                delay: 1.35,
                onComplete: () => {
                    window.location.href = 'https://lacorda.github.io/blog/';
                }
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.welcome-container {
    position: relative;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, #8eeabd, #56cb9b);
    overflow: hidden;
    .surfing {
        position: absolute;
        z-index: 5;
        bottom: 4vh;
        height: 945px;
        width: 458px;
        left: calc(50% - 229px);
    }
    .radish {
        position: absolute;
        z-index: 4;
        top: 0;
        .line {
            position: absolute;
            z-index: 5;
            left: 50%;
            width: 3px;
            top: -100px;
            bottom: 100px;
            background-color: #fff;
        }
        img {
            position: absolute;
            z-index: 6;
            bottom: 0;
        }
        &.radish1 {
            left: 20%;
            bottom: 540px;
            width: 152px;
        }
        &.radish2 {
            right: 15%;
            bottom: 290px;
            width: 230px;
            .line {
                height: 500px;
                left: calc(50% - 14px);
            }
        }
    }

    .button-typewriter {
        position: absolute;
        top: 40%;
        left: 20%;
        width: 200px;
        height: 65px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 5px solid #fff;
        border-radius: 35px;
        cursor: pointer;
        p {
            animation: typing 4s steps(12) infinite;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            color: #fff;
            font-size: 36px;
            font-weight: 500;
        }
        .button__wrapper:hover p {
            animation: blink 0.3s infinite;
        }
    }
}


@keyframes typing {
0% {
    width: 0;
}
50% {
    width: 80%;
}
55%,
65%,
75% {
    opacity: 1;
}
60%,
70% {
    opacity: 0;
}
80% {
    width: 80%;
}
100% {
    width: 0;
}
}


@keyframes blink {
25%,
75% {
    color: transparent;
}
40%,
60% {
    color: #fff;
}
}

@keyframes up-down {
50% {
    margin-top: -20px;
}
}
</style>
