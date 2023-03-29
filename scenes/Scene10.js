import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
} from "@babylonjs/core";

const myScene = {
  engine: null,
  scene: null,

  // シーンを作成する関数
  createScene: function (canvas, onPointerDownCallback) {
    // エンジンとシーンの初期化
    const engine = new Engine(canvas);
    const scene = new Scene(engine);
    myScene.engine = engine;
    myScene.scene = scene;

    // カメラの設定
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -30), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);

    // 光源の設定
    new HemisphericLight("light", Vector3.Up(), scene);

    // レンダリングループ
    engine.runRenderLoop(() => {
      scene.render();

      // 緑のボックスを回転させる
      // boxGreen.rotation.y += 0.01;

      // クリックイベントが発生したら
      scene.onPointerDown = function (evt, pickResult) {
        let pickedMeshName = "";
        if (pickResult.hit) {
          pickedMeshName = pickResult.pickedMesh.name;
        }
        onPointerDownCallback(pickedMeshName);
      };
    });
  },

  // メッシュの位置を設定する関数
  setPosition: function (name, x, y, z) {
    const mesh = this.scene.getMeshByName(name);
    if (mesh) {
      mesh.position = new Vector3(x, y, z);
    }
  },

  // メッシュの位置を取得する関数
  getPosition: function (name) {
    const mesh = this.scene.getMeshByName(name);
    if (mesh) {
      return mesh.position;
    }
  },

  setBoxes: function (boxes) {
    const scene = this.scene;
    const meshes = scene.meshes;
    for (let i = 0; i < meshes.length; i++) {
      const mesh = meshes[i];
      mesh.dispose();
    }
    boxes.forEach((box) => {
      const mesh = MeshBuilder.CreateBox(box.name, { size: 1 }, this.scene);
      const material = new StandardMaterial(`${box.name}-material`, this.scene);
      material.diffuseColor = new Color3(box.color.r, box.color.g, box.color.b);
      mesh.material = material;
      mesh.position.x = box.position.x;
      mesh.position.y = box.position.y;
      mesh.position.z = box.position.z;
    });
  },
};

export default myScene;
