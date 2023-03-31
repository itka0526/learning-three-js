import { Object3D, Scene } from "three";

class HowToUpdateThings {
    obj1 = new Object3D();

    constructor(s: Scene) {
        s.add(this.obj1);

        const combined = new CombinedObject();

        s.add(combined.obj2);

        const staticObject = new StaticObject();

        s.add(staticObject.obj);
    }
}

class CombinedObject {
    obj2 = new Object3D();
    private obj3 = new Object3D();

    constructor() {
        this.obj2.add(this.obj3);
    }
}

class StaticObject {
    obj = new Object3D();

    constructor() {
        this.obj.matrixAutoUpdate = false;
        this.obj.updateMatrix();
    }
}

export { HowToUpdateThings, CombinedObject, StaticObject };
