window.onload = function() {
  const wait = document.getElementById('loading');
  wait.classList.add('loaded');
}

window.addEventListener('load', init);

    function init() {

      // サイズを指定 
      const width = 414;
      const height = 540;
      let rot = 0;
      let mouseX = 0;

      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#canvas')
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      // シーンを作成
      const scene = new THREE.Scene();

      // カメラを作成
      const camera = new THREE.PerspectiveCamera(45, width / height);


      // マテリアルにテクスチャーを設定
      const material = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('img/IMG_0011.jpg'),
        side: THREE.Doubleside
      });
      const geometry = new THREE.TorusGeometry(100, 70, 30, 100);
      const earthMesh = new THREE.Mesh(geometry, material);
       // を作成
          
      scene.add(earthMesh);
      // 星屑を作成します (カメラの動きをわかりやすくするため)
      createStarField();
      function createStarField() {
        // 形状データを作成
        const geometry = new THREE.Geometry();
        for (let i = 0; i < 1000; i++) {
          geometry.vertices.push(
            new THREE.Vector3(
              3000 * (Math.random() - 0.5),
              3000 * (Math.random() - 0.5),
              3000 * (Math.random() - 0.5)
            )
          );
        }
      
      // マテリアルを作成
      const material = new THREE.PointsMaterial({
        size: 10,
        color: 0xffffff
      });

      // 物体を作成
      const mesh = new THREE.Points(geometry, material);
      scene.add(mesh);
      }
      
      // マウス座標はマウスが動いた時のみ取得できる
      document.addEventListener('mousemove', event => {
          mouseX = event.pageX;
      });

      // 平行光源
      const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      tick();

      // 毎フレーム時に実行されるループイベントです
      function tick() {
        // マウスの位置に応じて角度を設定
          // マウスのX座標がステージの幅の何%の位置にあるか調べてそれを360度で乗算する
          const targetRot = (mouseX / window.innerWidth) * 360;
          // イージングの公式を用いて滑らかにする
          // 値 += (目標値 - 現在の値) * 減速値
          rot += (targetRot - rot) * 0.02;

          // ラジアンに変換する
          const radian = (rot * Math.PI) / 180;
          // 角度に応じてカメラの位置を設定
          camera.position.x = 1000 * Math.sin(radian);
          camera.position.z = 1000 * Math.cos(radian);
          // 原点方向を見つめる
          camera.lookAt(new THREE.Vector3(0, 0, 0));  
        earthMesh.rotation.y += 0.01;
        renderer.render(scene, camera); // レンダリング 

        requestAnimationFrame(tick);
      }
    }

$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});
