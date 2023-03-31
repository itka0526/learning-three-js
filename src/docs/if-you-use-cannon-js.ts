import { Object3D, Quaternion, Vector3 } from "three";

class OptimizedObject {
    object = new Object3D();

    constructor() {
        // this implies that the engine will be controling its position and rotation etc
        this.object.matrixAutoUpdate = false;
        this.object.quaternion;
    }

    updateObject(p: Vector3, q: Quaternion) {
        // this is accessing the matrix directly, therefore, its more optimized
        this.object.matrix.makeRotationFromQuaternion(q);
        this.object.matrix.setPosition(p);
    }
}

export { OptimizedObject };
