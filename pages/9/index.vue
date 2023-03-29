<script setup lang="ts">
// シーンをインポート
import myScene from "../../scenes/Scene9";

// キャンバスの参照と選択されたメッシュ名を格納するためのリファレンスを作成
const bjsCanvas = ref(null);
const pickedMeshName = ref("");

// シーンがマウントされたら、BabylonJSのシーンを作成
onMounted(() => {
  if (bjsCanvas.value) {
    // fpsCallbackで選択されたメッシュ名を更新
    const fpsCallback = (val: string) => {
      pickedMeshName.value = val;
    };
    myScene.createScene(bjsCanvas.value, fpsCallback);
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
    <!-- 選択されたメッシュを動かすボタン -->
    <v-btn color="primary" flat class="mb-5" @click="moveCube">選択されたmeshを動かす</v-btn>
    
    <!-- 選択されたメッシュ名を表示 -->
    <p class="mb-5">
      <label>選択されたmesh: {{ pickedMeshName }}</label>
    </p>
    <!-- BabylonJSのキャンバス -->
    <canvas ref="bjsCanvas" width="500" height="500" />
    
  </LayoutsCommon>
</template>