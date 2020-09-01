window.onload = function() {
  const wait = document.getElementById('loading');
  wait.classList.add('loaded');
}

window.addEventListener("DOMContentLoaded", init);

function init() {
  const width = 414;
  const height = 540;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#canvas")
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  const scene = new THREE.Scene();

  // new THREE.PerspectiveCamera(画角, アスペクト比, 描画開始距離, 描画終了距離)
  const camera = new THREE.PerspectiveCamera(
    45,
    width / height,
    1,
    10000
  );
  camera.position.set(0, 0, +1000);
  
  // new THREE.BoxGeometry(幅, 高さ, 奥行き)
const geometry = new THREE.BoxGeometry(300, 300, 300);
const material = new THREE.MeshStandardMaterial({
    color: 0x2060ff
  }); 
  // new THREE.Mesh(ジオメトリ,マテリアル)
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// new THREE.DirectionalLight(色)
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
// シーンに追加
scene.add(directionalLight);

// 初回実行
tick();

function tick() {
  requestAnimationFrame(tick);

  // 箱を回転させる
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  // レンダリング
  renderer.render(scene, camera);
}
}