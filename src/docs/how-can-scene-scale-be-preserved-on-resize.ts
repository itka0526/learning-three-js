const preserveSceneScale = (c: THREE.PerspectiveCamera, distanceFromCamera: number) => {
    return 2 * Math.tan(((Math.PI / 180) * c.fov) / 2) * distanceFromCamera;
};

export { preserveSceneScale };
