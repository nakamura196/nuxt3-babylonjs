<script setup lang="ts">
// シーンをインポート
import myScene from "../../scenes/Scene10";

// キャンバスの参照と選択されたメッシュ名を格納するためのリファレンスを作成
const bjsCanvas = ref(null);
const pickedMeshName = ref("");

const count = ref(3)

const boxes = computed(() => {
  const boxes_ = []
  for(let i = 0; i < count.value; i++) {
    boxes_.push({
      "name": `box-${i}`,
      "color": {
        "r": Math.random(),
        "g": Math.random(),
        "b": Math.random()
      },
      "position": {
        "x": -10 + 2 * i,
        "y": 0,
        "z": 0
      }
    })
  }
  return boxes_
})

watch(() => count.value, () => {
  myScene.setBoxes(boxes.value)
})

// シーンがマウントされたら、BabylonJSのシーンを作成
onMounted(() => {
  if (bjsCanvas.value) {
    // fpsCallbackで選択されたメッシュ名を更新
    const fpsCallback = (val: string) => {
      pickedMeshName.value = val;
    };
    myScene.createScene(bjsCanvas.value, fpsCallback);
    myScene.setBoxes(boxes.value);
  }
});

// 選択されたメッシュの位置を変更する関数
const moveCube = () => {
  const pickedMeshName_ = pickedMeshName.value;
  if(!pickedMeshName_) return;
  const cubePosition = myScene.getPosition(pickedMeshName_);
  myScene.setPosition(pickedMeshName.value, cubePosition.x, cubePosition.y + 0.5, cubePosition.z);
};


</script>

<template>
  <LayoutsCommon>
    <v-row>
      <v-col>
        <v-text-field label="Mesh Number" type="number" class="mb-5" v-model="count" hide-details single-line variant="outlined" density="compact"></v-text-field>
      </v-col>
      <v-col>
        <!-- 選択されたメッシュを動かすボタン -->
        <v-btn color="primary" flat class="mb-5" @click="moveCube">選択されたmeshを動かす</v-btn>
      </v-col>
    </v-row>  
    
    <!-- 選択されたメッシュ名を表示 -->
    <p class="mb-5">
      <label>選択されたmesh: {{ pickedMeshName }}</label>
    </p>
    <!-- BabylonJSのキャンバス -->
    <canvas ref="bjsCanvas" width="500" height="500" />
    
  </LayoutsCommon>
</template>