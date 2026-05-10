import { useEffect, useRef } from "react";
import p5 from "p5";

function Home() {
  const sketchRef = useRef();

  useEffect(() => {
    const container = sketchRef.current;
    if (!container) return;

    // Measure once, before sketch starts
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
    const footerHeight = document.querySelector('.footer')?.offsetHeight || 0;

    const sketch = new p5((p) => {
      const spacingW = 57;
      const spacingH = 70;
      let rows, cols;
      let resizeTimer;

      const updateGrid = () => {
        const w = window.innerWidth;
        const h = window.innerHeight - navbarHeight - footerHeight;
        cols = Math.ceil(w / spacingW) + 1;
        rows = Math.ceil(h / spacingH) + 1;
        return { w, h };
      };

      p.setup = () => {
        const { w, h } = updateGrid();
        p.createCanvas(w, h);
        p.noStroke();
        p.noLoop();
      };

      p.windowResized = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          const { w, h } = updateGrid();
          p.resizeCanvas(w, h);
          p.redraw();
        }, 150);
      };

      p.draw = () => {
        p.background(7, 94, 87);
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            butterflyWing(p, col * spacingW - 10, row * spacingH - 30, 171);
          }
        }
      };

      const butterflyWing = (p, x, y, g) => {
        p.push();
        p.translate(x, y);

        p.fill(28, 3, 1);
        p.beginShape();
        p.splineVertex(32.5, 0.75);
        p.splineVertex(32.5, 0.75);
        p.splineVertex(12.5, -27.5);
        p.splineVertex(0, -38.75);
        p.splineVertex(-5, -32.5);
        p.splineVertex(-8.25, -23.75);
        p.splineVertex(-10, 0.75);
        p.splineVertex(-10, 25);
        p.splineVertex(0, 31.25);
        p.splineVertex(16.25, 38.75);
        p.splineVertex(25, 42.5);
        p.splineVertex(47.5, 47.5);
        p.splineVertex(45, 25);
        p.endShape(p.CLOSE);

        p.fill(255, g, 61);
        p.beginShape();
        p.splineVertex(2, -32);
        p.splineVertex(2, -32);
        p.splineVertex(-2.3, -25.6);
        p.splineVertex(-5.0, -18.2);
        p.splineVertex(-6.5, 2.6);
        p.splineVertex(-6.5, 20);
        p.splineVertex(2, 24);
        p.splineVertex(19, 21);
        p.splineVertex(20, -8);
        p.endShape(p.CLOSE);

        p.fill(255, g, 61);
        p.beginShape();
        p.splineVertex(25, 26);
        p.splineVertex(25, 26);
        p.splineVertex(35, 14);
        p.splineVertex(42, 26);
        p.splineVertex(35, 32);
        p.endShape(p.CLOSE);

        p.pop();
      };

    }, container);

    return () => {
      sketch.remove();
      container.innerHTML = '';
    };
  }, []);

  return <div className="home" ref={sketchRef} />;
}

export default Home;