<template>
    <div  class="-z-10" id="p5Canvas"></div>
</template>



<script>
import p5 from "p5";

export default {
    name: "p5",

    mounted() {
        const sketch = (s) => {
            let t;
            let nl;
            let totalX;
            let totalY;
            let density;

            s.setup = () => {
                s.createCanvas(s.windowWidth, s.windowHeight);
                s.background(0);

                t = 0;
                nl = 0.00050;
                density = 3.6;
                totalX = s.windowWidth;
                totalY = s.windowHeight;

                let c1 = s.color("#f7fcff");
                let c2 = s.color("#bcddfa");

                for (let x = 0; x < totalX; x = x + 1) {
                    for (let y = 0; y < totalY; y = y + 1) {
                        let n = s.noise(x * nl, y * nl);
                        let rn = n * density - s.floor(n * density);

                        let d = s.map(rn, 0, 0.1, 0, 0.8);
                        if (rn > 0.5) {
                            d = s.map(rn, 0.5, 1, 1, 0);
                        }

                        let finalColor = s.lerpColor(c2, c1, d);

                        s.set(x, y, finalColor);
                    }
                }

                s.updatePixels();
            };

            s.draw = () => {
                // let n = s.noise(s.mouseX / 899, s.mouseY / 899);
                // let size = n * s.windowWidth * 22;

  
                // s.colorMode(s.HSL, 100)
                // let finalColor = s.color(n * 17, 2, n * 245, 0.4)

                // s.noStroke();
                // s.fill(finalColor);
                // s.circle(s.mouseX, s.mouseY, size);
              
                
               
            };

            s.mouseClicked = () => {
              
            };
        };

        new p5(sketch, "p5Canvas");
    },
};
</script>

<style scoped>
#p5Canvas {
    position: fixed;
    top: 0;
    left: 0;
}
</style>