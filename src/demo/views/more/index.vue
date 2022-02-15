<template>
    <RContainer>
        <!-- <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
        </div>
        <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <em>4</em>
            <em>5</em>
        </div>
        <form action="">
            <div>必填：<input type="text" required></div>
            <div>非必填：<input type="text"></div>
            <input
                type="number"
                placeholder="1 to 10"
                min="1"
                max="10"
                value="12"
            >
        </form> -->
        <div class="radius-img">
            <img src="../../assets/1.jpg">
        </div>

        <svg width="120" height="120">
            <desc>SVG圆角效果</desc>
            <defs>
                <pattern id="raduisImage" patternUnits="userSpaceOnUse" width="120" height="120">
                    <image
                        xlink:href="../../assets/1.jpg"
                        x="0"
                        y="0"
                        width="120"
                        height="120"
                    />
                </pattern>
            </defs>
            <!-- 圆形使用下面这个 -->
            <circle cx="60" cy="60" r="60" fill="url(#raduisImage)" />
        </svg>

        <svg width="120" height="120">
            <desc>SVG圆角效果</desc>
            <defs>
                <pattern id="raduisImage" patternUnits="userSpaceOnUse" width="120" height="120">
                    <image
                        xlink:href="../../assets/1.jpg"
                        x="0"
                        y="0"
                        width="120"
                        height="120"
                    />
                </pattern>
            </defs>
            <rect
                x="0"
                y="0"
                width="120"
                height="120"
                rx="30"
                ry="30"
                fill="url(#raduisImage)"
            />
        </svg>

        <canvas id="canvas1" width="140" height="140" />
        <canvas id="canvas2" width="140" height="140" />
    </RContainer>
</template>

<script>
import assetImg from '../../assets/1.jpg';
// const assetImg = 'https://gd-file-manage-test.dancf.com/saas/2oa2hc/75820/19fb41c8-846d-4872-99da-10c05187b92d956.jpg?x-oss-process=image/crop,x_0,y_0,w_2730,h_4095/resize,m_fixed,w_1200,h_1800';

export default {
    mounted() {
        this.radiusImg('#canvas1', 140, 140, 70, true);
        this.radiusImg('#canvas2', 140, 140, 40);
    },
    methods: {
        circleImg(ctx, img, x, y, r) {
            ctx.save();
            const cx = x + r;
            const cy = y + r;
            ctx.arc(cx, cy, r, 0, 2 * Math.PI);
            ctx.clip();
            const d = 2 * r;
            ctx.drawImage(img, x, y, d, d);
            ctx.restore();
        },
        roundImg(ctx, img, x, y, r) {
            const { width, height } = img;
            ctx.save();
            ctx.beginPath();
            ctx.arc(width - r, height - r, r, 0, Math.PI / 2); // 画个4分之1圆，右下角
            ctx.lineTo(r, height); // 下横线
            ctx.arc(r, height - r, r, Math.PI / 2, Math.PI); // 4分之1圆，左下角
            ctx.lineTo(0, r); // 左竖线
            ctx.arc(r, r, r, Math.PI, Math.PI * 3 / 2); // 4分之1圆，左上角
            ctx.lineTo(width - r, 0); // 上横线
            ctx.arc(width - r, r, r, Math.PI * 3 / 2, Math.PI * 2); // 4分之1圆，右上角
            ctx.lineTo(width, height - r); // 右竖线
            // ctx.stroke(); // 辅助线，画轮廓
            ctx.closePath();

            ctx.clip();
            ctx.drawImage(img, x, y, width, height);
            ctx.drawImage(img);
            ctx.restore();
        },
        radiusImg(selector, w, h, r, isCircle) {
            const canvas = document.querySelector(selector);
            const context = canvas.getContext('2d');
            const image = new Image(w, h);
            image.onload = () => {
                if (isCircle) {
                    this.circleImg(context, image, 0, 0, r);
                } else {
                    this.roundImg(context, image, 0, 0, r);
                }
            };
            image.src = assetImg;
        }
    },
};
</script>

<style lang="scss">
// p:nth-last-of-type(2) {
//     color: red;
// }
// p:nth-last-child(2) {
//     color: red;
// }
// p:last-of-type {
//     color: red;
// }
// p:last-child {
//     color: red;
// }
// p:first-line {
//     color: red;
// }
// input:optional {
//     color: red;
// }
// input:required {
//     color: blue;
// }
// input:in-range {
//     color: green;
// }
.radius-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>
