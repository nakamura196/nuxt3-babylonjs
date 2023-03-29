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
      const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
      camera.setTarget(Vector3.Zero());
      camera.attachControl(canvas, true);
  
      // 光源の設定
      new HemisphericLight("light", Vector3.Up(), scene);
  
      // 赤いボックスの作成
      const boxRed = MeshBuilder.CreateBox("box-red", { size: 1 }, scene);
      const materialRed = new StandardMaterial("box-red-material", scene);
      materialRed.diffuseColor = Color3.Red();
      boxRed.material = materialRed;
      boxRed.position.x = -2;
  
      // 黄色いボックスの作成
      const boxBlue = MeshBuilder.CreateBox("box-yellow", { size: 1 }, scene);
      const materialYellow = new StandardMaterial("box-blue-material", scene);
      materialYellow.diffuseColor = Color3.Yellow();
      boxBlue.material = materialYellow;
  
      // 緑のボックスの作成
      const boxGreen = MeshBuilder.CreateBox("box-green", { size: 1 }, scene);
      const materialGreen = new StandardMaterial("box-green-material", scene);
      materialGreen.diffuseColor = Color3.Green();
      boxGreen.material = materialGreen;
      boxGreen.position.x = 2;
  
      // レンダリングループ
      engine.runRenderLoop(() => {
        scene.render();
  
        // 緑のボックスを回転させる
        boxGreen.rotation.y += 0.01;
  
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
    }
  };
  
  export default myScene;