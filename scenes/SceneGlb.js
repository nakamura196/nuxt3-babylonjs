import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  HemisphericLight,
  SceneLoader,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
const myScene = {
  engine: null,
  scene: null,
  createScene: function (canvas) {
    const engine = new Engine(canvas);
    const scene = new Scene(engine);
    myScene.engine = engine;
    myScene.scene = scene;

    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);

    new HemisphericLight("light", Vector3.Up(), scene);

    SceneLoader.Append(
      "./models/",
      "test.glb",
      scene,
      function (/*newMeshes*/) {
        // const mesh = scene.meshes[0];
        scene.activeCamera = null;
        scene.createDefaultCameraOrLight(true);
        scene.activeCamera.attachControl(canvas, false);
      }
    );

    engine.runRenderLoop(() => {
      scene.render();
    });
  },
};
export default myScene;
