import {
  ImageProcessingConfiguration,
  UniversalCamera,
  DefaultRenderingPipeline,
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
  ParticleHelper,
  SubEmitterType,
  AbstractMesh,
  Texture,
  Color4,
  ParticleSystem,
  SubEmitter,
} from "@babylonjs/core";
const createScene = (canvas) => {
  const engine = new Engine(canvas);
  // This creates a basic Babylon Scene object (non-mesh)
  var scene = new Scene(engine);

  // Camera
  var camera = new UniversalCamera(
    "UniversalCamera",
    new Vector3(0, 0, -5),
    scene
  );
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, false);

  // Scene color
  scene.clearColor = new Color3(0.0, 0.0, 0.0);

  // Set up new rendering pipeline
  var pipeline = new DefaultRenderingPipeline("default", true, scene);

  // Tone mapping
  scene.imageProcessingConfiguration.toneMappingEnabled = true;
  scene.imageProcessingConfiguration.toneMappingType =
    ImageProcessingConfiguration.TONEMAPPING_ACES;
  scene.imageProcessingConfiguration.exposure = 1;

  // Bloom
  pipeline.bloomEnabled = true;
  pipeline.bloomThreshold = 0.7;
  pipeline.bloomWeight = 2;
  pipeline.bloomKernel = 64;
  pipeline.bloomScale = 0.5;

  // Spawn particle system on key press
  document.addEventListener("keydown", toggleEmission);

  // Remove listeners when scene disposed
  scene.onDisposeObservable.add(function () {
    document.removeEventListener("keydown", toggleEmission);
  });

  // Set up animation sheet
  var setupAnimationSheet = function (
    system,
    texture,
    width,
    height,
    numSpritesWidth,
    numSpritesHeight,
    animationSpeed,
    isRandom
  ) {
    // Assign animation parameters
    system.isAnimationSheetEnabled = true;
    system.particleTexture = new Texture(texture, scene, false, false);
    system.spriteCellWidth = width / numSpritesWidth;
    system.spriteCellHeight = height / numSpritesHeight;
    var numberCells = numSpritesWidth * numSpritesHeight;
    system.startSpriteCellID = 0;
    system.endSpriteCellID = numberCells - 1;
    system.spriteCellChangeSpeed = animationSpeed;
    system.spriteRandomStartCell = isRandom;
    system.updateSpeed = 1 / 30;
  };

  // Code
  var line = ParticleHelper.CreateDefault(new Vector3(0, 3, 0), 300);
  line.createBoxEmitter(
    new Vector3(0, -1, 0),
    new Vector3(0, -1, 0),
    new Vector3(-5, 0, -0.5),
    new Vector3(5, 0, 0.5)
  );
  line.minLifeTime = 1;
  line.maxLifeTime = 1.5;
  line.minSize = 0.4;
  line.maxSize = 0.4;
  line.emitRate = 50;
  line.minEmitPower = 4;
  line.maxEmitPower = 4;
  line.addColorGradient(0, new Color4(0.0, 0.1, 0.0, 1));
  line.addColorGradient(1, new Color4(0.0, 0.1, 0.0, 1));
  line.blendMode = ParticleSystem.BLENDMODE_ADD;

  // Sub emitters
  // var a = new ParticleHelper.CreateDefault(new Vector3(0, 60, 0), 300)
  var a = ParticleHelper.CreateDefault(new Vector3(0, 60, 0), 300);
  var code = new SubEmitter(a);
  // https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Code/characters
  setupAnimationSheet(
    code.particleSystem,
    "characters.png",
    512,
    512,
    6,
    6,
    0,
    true, // false, //true
  );
  console.log("code", code.particleSystem)
  code.particleSystem.emitter = new AbstractMesh("", scene);
  code.particleSystem.createSphereEmitter(0.01, 1);
  code.particleSystem.minLifeTime = 4;
  code.particleSystem.maxLifeTime = 6;
  code.particleSystem.minEmitPower = 0;
  code.particleSystem.maxEmitPower = 0;
  code.particleSystem.emitRate = 15;
  code.particleSystem.minSize = 0.15;
  code.particleSystem.maxSize = 0.3 // 0.15;
  code.particleSystem.addColorGradient(
    0.0,
    new Color4(225 / 255, 255 / 255, 220 / 255, 1)
  );
  code.particleSystem.addColorGradient(
    0.2,
    new Color4(41 / 255, 208 / 255, 19 / 255, 1)
  );
  code.particleSystem.addColorGradient(
    1.0,
    new Color4(20 / 255, 97 / 255, 10 / 255, 0)
  );
  code.type = SubEmitterType.ATTACHED;
  code.particleSystem.blendMode = ParticleSystem.BLENDMODE_ADD;

  line.subEmitters = [code];


  // Start
  var toggle = true;
  line.start();

  function toggleEmission() {
    if (event.keyCode == 32) {
      if (toggle == false) {
        line.start();
        toggle = !toggle;
      } else {
        line.stop();
        toggle = !toggle;
      }
    }
  }

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };
