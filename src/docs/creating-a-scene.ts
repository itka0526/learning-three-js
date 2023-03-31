import * as THREE from "three";
import { createTHREEJSMetaTag } from "./adding-meta-tag";
import { PostProcessing } from "./post-processing";

class MyScene {
    // setting up a scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas") as HTMLCanvasElement });

    constructor() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

class Cube {
    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshBasicMaterial({ color: "red" });
    mesh: THREE.Mesh;

    constructor() {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    rotateCube() {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    }
}

class Main {
    s: MyScene;
    c: Cube;

    pp: PostProcessing;

    constructor() {
        this.s = new MyScene();

        this.c = new Cube();

        this.s.scene.add(this.c.mesh);

        this.s.camera.position.z = 5;
        // optimize head tag for threeJS

        createTHREEJSMetaTag();

        // animate loop function lies here !

        const animateLoopForCube = () => {
            requestAnimationFrame(animateLoopForCube);

            this.s.renderer.render(this.s.scene, this.s.camera);
            this.c.rotateCube();
        };

        animateLoopForCube();

        this.pp = new PostProcessing(this.s.renderer, this.s.scene, this.s.camera);

        const animateComposer = () => {
            requestAnimationFrame(animateComposer);

            this.pp.composer.render();
        };

        // animateComposer();
    }
}

export { Main };
