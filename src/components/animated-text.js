window.onload = init;

function init() {
  const root = new THREERoot({
    createCameraControls: false,
    antialias: true,
    fov: 60,
  });
  root.renderer.setClearColor(0xffffff);
  root.renderer.setPixelRatio(window.devicePixelRatio || 1);
  root.camera.position.set(0, 0, 400);

  const textAnimation = createTextAnimation();
  textAnimation.position.y = -40;
  root.scene.add(textAnimation);

  const tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 0.25,
    yoyo: true,
  });
  tl.fromTo(
    textAnimation,
    4,
    { animationProgress: 0.0 },
    { animationProgress: 1.0, ease: Power1.easeInOut },
    0,
  );

  createTweenScrubber(tl);
}

function createTextAnimation() {
  const geometry = generateTextGeometry(`Then you've come to the wrong place`, {
    size: 14,
    height: 3,
    font: 'droid sans',
    weight: 'bold',
    style: 'normal',
    bevelSize: 0.75,
    bevelThickness: 0.5,
    bevelEnabled: true,
    anchor: { x: 0.2, y: 0.0, z: 0 },
  });

  THREE.BAS.Utils.separateFaces(geometry);

  return new TextAnimation(geometry);
}

function generateTextGeometry(text, params) {
  const geometry = new THREE.TextGeometry(text, params);

  geometry.computeBoundingBox();

  geometry.userData = {};
  geometry.userData.size = {
    width: geometry.boundingBox.max.x - geometry.boundingBox.min.x,
    height: geometry.boundingBox.max.y - geometry.boundingBox.min.y,
    depth: geometry.boundingBox.max.z - geometry.boundingBox.min.z,
  };

  const anchorX = geometry.userData.size.width * -params.anchor.x;
  const anchorY = geometry.userData.size.height * -params.anchor.y;
  const anchorZ = geometry.userData.size.depth * -params.anchor.z;
  const matrix = new THREE.Matrix4().makeTranslation(anchorX, anchorY, anchorZ);

  geometry.applyMatrix(matrix);

  return geometry;
}

// //////////////////
// CLASSES
// //////////////////

function TextAnimation(textGeometry) {
  const bufferGeometry = new THREE.BAS.ModelBufferGeometry(textGeometry);

  const aAnimation = bufferGeometry.createAttribute('aAnimation', 2);
  const aCentroid = bufferGeometry.createAttribute('aCentroid', 3);
  const aControl0 = bufferGeometry.createAttribute('aControl0', 3);
  const aControl1 = bufferGeometry.createAttribute('aControl1', 3);
  const aEndPosition = bufferGeometry.createAttribute('aEndPosition', 3);

  const faceCount = bufferGeometry.faceCount;
  let i;
  let i2;
  let i3;
  let i4;
  let v;

  const size = textGeometry.userData.size;

  const maxDelayX = 2.0;
  const maxDelayY = 0.25;
  const minDuration = 2;
  const maxDuration = 8;
  const stretch = 0.1;

  this.animationDuration = maxDelayX + maxDelayY + maxDuration - 3;
  this._animationProgress = 0;

  for (
    i = 0, i2 = 0, i3 = 0, i4 = 0;
    i < faceCount;
    i++, i2 += 6, i3 += 9, i4 += 12
  ) {
    const face = textGeometry.faces[i];
    const centroid = THREE.BAS.Utils.computeCentroid(textGeometry, face);

    // animation
    const delayX = Math.max(0, (centroid.x / size.width) * maxDelayX);
    const delayY = Math.max(0, (1.0 - centroid.y / size.height) * maxDelayY);
    const duration = THREE.Math.randFloat(minDuration, maxDuration);

    for (v = 0; v < 6; v += 2) {
      aAnimation.array[i2 + v] = delayX + delayY + Math.random() * stretch;
      aAnimation.array[i2 + v + 1] = duration;
    }

    // centroid
    for (v = 0; v < 9; v += 3) {
      aCentroid.array[i3 + v] = centroid.x;
      aCentroid.array[i3 + v + 1] = centroid.y;
      aCentroid.array[i3 + v + 2] = centroid.z;
    }

    // ctrl
    const c0x = centroid.x + THREE.Math.randFloat(40, 120);
    const c0y = centroid.y + size.height * THREE.Math.randFloat(0.0, 12.0);
    const c0z = THREE.Math.randFloatSpread(120);

    const c1x = centroid.x + THREE.Math.randFloat(80, 120) * -1;
    const c1y = centroid.y + size.height * THREE.Math.randFloat(0.0, 12.0);
    const c1z = THREE.Math.randFloatSpread(120);

    for (v = 0; v < 9; v += 3) {
      aControl0.array[i3 + v] = c0x;
      aControl0.array[i3 + v + 1] = c0y;
      aControl0.array[i3 + v + 2] = c0z;

      aControl1.array[i3 + v] = c1x;
      aControl1.array[i3 + v + 1] = c1y;
      aControl1.array[i3 + v + 2] = c1z;
    }

    // end position
    var x;
    var y;
    var z;

    x = centroid.x + THREE.Math.randFloatSpread(120);
    y = centroid.y + size.height * THREE.Math.randFloat(0.0, 12.0);
    z = THREE.Math.randFloat(-20, 20);

    for (v = 0; v < 9; v += 3) {
      aEndPosition.array[i3 + v] = x;
      aEndPosition.array[i3 + v + 1] = y;
      aEndPosition.array[i3 + v + 2] = z;
    }
  }

  const material = new THREE.BAS.BasicAnimationMaterial(
    {
      shading: THREE.FlatShading,
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {
        uTime: { type: 'f', value: 0 },
      },
      shaderFunctions: [
        THREE.BAS.ShaderChunk.cubic_bezier,
        THREE.BAS.ShaderChunk.ease_out_cubic,
      ],
      shaderParameters: [
        'uniform float uTime;',
        'attribute vec2 aAnimation;',
        'attribute vec3 aCentroid;',
        'attribute vec3 aControl0;',
        'attribute vec3 aControl1;',
        'attribute vec3 aEndPosition;',
      ],
      shaderVertexInit: [
        'float tDelay = aAnimation.x;',
        'float tDuration = aAnimation.y;',
        'float tTime = clamp(uTime - tDelay, 0.0, tDuration);',
        'float tProgress =  ease(tTime, 0.0, 1.0, tDuration);',
        // 'float tProgress = tTime / tDuration;'
      ],
      shaderTransformPosition: [
        'vec3 tPosition = transformed - aCentroid;',
        'tPosition *= 1.0 - tProgress;',
        'tPosition += aCentroid;',
        'tPosition += cubicBezier(tPosition, aControl0, aControl1, aEndPosition, tProgress);',
        'transformed = tPosition;',

        // 'vec3 tPosition = transformed;',
        // 'tPosition *= 1.0 - tProgress;',
        // 'tPosition += cubicBezier(transformed, aControl0, aControl1, aEndPosition, tProgress);',
        // 'tPosition += mix(transformed, aEndPosition, tProgress);',
        // 'transformed = tPosition;'
      ],
    },
    {
      diffuse: 0x000000,
    },
  );

  THREE.Mesh.call(this, bufferGeometry, material);

  this.frustumCulled = false;
}
TextAnimation.prototype = Object.create(THREE.Mesh.prototype);
TextAnimation.prototype.constructor = TextAnimation;

Object.defineProperty(TextAnimation.prototype, 'animationProgress', {
  get() {
    return this._animationProgress;
  },
  set(v) {
    this._animationProgress = v;
    this.material.uniforms.uTime.value = this.animationDuration * v;
  },
});

function THREERoot(params) {
  params = utils.extend(
    {
      antialias: false,

      fov: 60,
      zNear: 1,
      zFar: 10000,

      createCameraControls: true,
    },
    params,
  );

  this.renderer = new THREE.WebGLRenderer({
    antialias: params.antialias,
  });
  document
    .getElementById('three-container')
    .appendChild(this.renderer.domElement);

  this.camera = new THREE.PerspectiveCamera(
    params.fov,
    window.innerWidth / window.innerHeight,
    params.zNear,
    params.zfar,
  );

  this.scene = new THREE.Scene();

  if (params.createCameraControls) {
    this.controls = new THREE.OrbitControls(
      this.camera,
      this.renderer.domElement,
    );
  }

  this.resize = this.resize.bind(this);
  this.tick = this.tick.bind(this);

  this.resize();
  this.tick();

  window.addEventListener('resize', this.resize, false);
}
THREERoot.prototype = {
  tick() {
    this.update();
    this.render();
    requestAnimationFrame(this.tick);
  },
  update() {
    this.controls && this.controls.update();
  },
  render() {
    this.renderer.render(this.scene, this.camera);
  },
  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  },
};

// //////////////////
// UTILS
// //////////////////

var utils = {
  extend(dst, src) {
    for (const key in src) {
      dst[key] = src[key];
    }

    return dst;
  },
  randSign() {
    return Math.random() > 0.5 ? 1 : -1;
  },
};

function createTweenScrubber(tween, seekSpeed) {
  seekSpeed = seekSpeed || 0.001;

  function stop() {
    TweenMax.to(tween, 2, { timeScale: 0 });
  }

  function resume() {
    TweenMax.to(tween, 2, { timeScale: 1 });
  }

  function seek(dx) {
    const progress = tween.progress();
    const p = THREE.Math.clamp(progress + dx * seekSpeed, 0, 1);

    tween.progress(p);
  }

  let _cx = 0;

  // desktop
  let mouseDown = false;
  document.body.style.cursor = 'pointer';

  window.addEventListener('mousedown', e => {
    mouseDown = true;
    document.body.style.cursor = 'ew-resize';
    _cx = e.clientX;
    stop();
  });
  window.addEventListener('mouseup', e => {
    mouseDown = false;
    document.body.style.cursor = 'pointer';
    resume();
  });
  window.addEventListener('mousemove', e => {
    if (mouseDown === true) {
      const cx = e.clientX;
      const dx = cx - _cx;
      _cx = cx;

      seek(dx);
    }
  });
  // mobile
  window.addEventListener('touchstart', e => {
    _cx = e.touches[0].clientX;
    stop();
    e.preventDefault();
  });
  window.addEventListener('touchend', e => {
    resume();
    e.preventDefault();
  });
  window.addEventListener('touchmove', e => {
    const cx = e.touches[0].clientX;
    const dx = cx - _cx;
    _cx = cx;

    seek(dx);
    e.preventDefault();
  });
}
