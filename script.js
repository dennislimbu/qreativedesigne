import { Renderer, Program, Mesh, Geometry, Vec2 } from "https://cdn.skypack.dev/ogl";

class Bg extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.canvas = document.createElement("canvas");
    this.shadowRoot.appendChild(this.canvas);
  }

  connectedCallback() {
    const renderer = new Renderer({ canvas: this.canvas });
    const gl = renderer.gl;
    this.resizeCanvas();

    const geometry = new Geometry(gl, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
    });

    const program = new Program(gl, {
      vertex: `
        attribute vec2 position;
        attribute vec2 uv;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0, 1);
        }
      `,
      fragment: `
        precision highp float;
        varying vec2 vUv;
        uniform vec2 uMouse;
        uniform vec2 uResolution;
        void main() {
          vec2 st = gl_FragCoord.xy / uResolution;
          float dist = distance(st, uMouse);
          float intensity = smoothstep(0.2, 0.0, dist);
          gl_FragColor = vec4(1.0, 0.0, 0.0, intensity); // Red color with intensity
        }
      `,
      uniforms: {
        uMouse: { value: new Vec2(0.5, 0.5) },
        uResolution: { value: new Vec2(window.innerWidth, window.innerHeight) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const updateMouse = (e) => {
      program.uniforms.uMouse.value.set(
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight
      );
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("resize", () => this.resizeCanvas());

    const render = () => {
      renderer.render({ scene: mesh });
      requestAnimationFrame(render);
    };
    render();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

customElements.define("bg-grad", Bg);