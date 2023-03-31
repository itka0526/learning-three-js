import { PerspectiveCamera, RGBA_ASTC_12x10_Format, Scene, WebGLRenderer } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { TAARenderPass } from "three/examples/jsm/postprocessing/TAARenderPass";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";

class PostProcessing {
    composer: EffectComposer;
    TAARenderPass: TAARenderPass;
    glitchPass: GlitchPass;

    constructor(r: WebGLRenderer, s: Scene, c: PerspectiveCamera) {
        this.composer = new EffectComposer(r);

        this.TAARenderPass = new TAARenderPass(s, c, "aliceblue", RGBA_ASTC_12x10_Format);

        this.glitchPass = new GlitchPass();

        this.composer.addPass(this.glitchPass);
    }
}

export { PostProcessing };
