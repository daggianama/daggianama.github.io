<template>
  <div class="-z-10" id="p5Canvas"></div>
</template>

<script>
import p5 from 'p5';

export default {
  name: 'p5',

  mounted() {
    const sketch = (s) => {
      let nl;
      let density;
      let scaleFactor = 0.5; // Renderizar al 50% y escalar con CSS

      const generateBackground = () => {
        let totalX = s.width;
        let totalY = s.height;

        s.loadPixels();

        let c1 = s.color('#f7fcff');
        let c2 = s.color('#bcddfa');

        // Procesar cada 2 píxeles para mayor velocidad
        for (let x = 0; x < totalX; x += 2) {
          for (let y = 0; y < totalY; y += 2) {
            let n = s.noise(x * nl, y * nl);
            let rn = n * density - s.floor(n * density);

            let d = s.map(rn, 0, 0.1, 0, 0.8);
            if (rn > 0.5) {
              d = s.map(rn, 0.5, 1, 1, 0);
            }

            let finalColor = s.lerpColor(c2, c1, d);

            // Llenar un área de 2x2 píxeles
            s.set(x, y, finalColor);
            s.set(x + 1, y, finalColor);
            s.set(x, y + 1, finalColor);
            s.set(x + 1, y + 1, finalColor);
          }
        }

        s.updatePixels();
      };

      s.setup = () => {
        // Crear canvas a resolución reducida
        let canvasWidth = s.windowWidth * scaleFactor;
        let canvasHeight = s.windowHeight * scaleFactor;
        s.createCanvas(canvasWidth, canvasHeight);
        s.pixelDensity(1); // Evitar pixelDensity alto en pantallas retina

        nl = 0.0005;
        density = 3.6;

        generateBackground();
      };

      s.draw = () => {
        // Vacío para ahorrar recursos
      };

      s.windowResized = () => {
        let canvasWidth = s.windowWidth * scaleFactor;
        let canvasHeight = s.windowHeight * scaleFactor;
        s.resizeCanvas(canvasWidth, canvasHeight);
        generateBackground();
      };
    };

    new p5(sketch, 'p5Canvas');
  },
};
</script>

<style scoped>
#p5Canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -10;
  pointer-events: none;
  image-rendering: auto;
  transform: scale(2);
  transform-origin: top left;
}
</style>
