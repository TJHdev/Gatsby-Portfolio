import React, { Component } from 'react';

import PNLTRI from './three/pnltri.min';
import * as THREE from './three/modifiedthree/three';
import importedFont from './three/droid_sans_bold.typeface';

console.log(THREE);
console.log(importedFont);

THREE.ShapeUtils.triangulateShape = (contour, holes) => {
  const myTriangulator = new PNLTRI.Triangulator();
  return myTriangulator.triangulate_polygon([contour].concat(holes));
};

class ThreeScene extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth; // mount is the container div
    const height = this.mount.clientHeight;
    // ADD SCENE
    this.scene = new THREE.Scene();
    // ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(0, -150, 1000);
    // ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setClearColor('#000000', 0.25);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    // ADD TEXT
    const geometry = this.createTextAnimation();
    const textMaterial = new THREE.MeshBasicMaterial({ color: '#000' });
    this.writing = new THREE.Mesh(geometry, textMaterial);
    this.scene.add(this.writing);
    this.renderScene();
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    // this.writing.rotation.x += 0.01;
    // this.writing.rotation.y += 0.01;
    this.renderScene();
    // this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  createTextAnimation = () => {
    const inputText = "Then you've come to the wrong place";
    const inputParams = {
      font: 'droid sans',
      size: 80,
      height: 2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 4,
      bevelSize: 3,
      bevelSegments: 3,
      anchor: { x: 0.5, y: 0.0, z: 0.6 },
    };

    const geometry = this.generateTextGeometry(inputText, inputParams);

    // setup TextAnimation constructor
    this.TextAnimation.prototype = Object.create(THREE.Mesh.prototype);
    this.TextAnimation.prototype.constructor = this.TextAnimation;

    Object.defineProperty(this.TextAnimation.prototype, 'animationProgress', {
      get() {
        return this._animationProgress;
      },
      set(v) {
        this._animationProgress = v;
        this.material.uniforms.uTime.value = this.animationDuration * v;
      },
    });

    return geometry;
    // BAS.Utils.separateFaces(geometry);
    // return new this.TextAnimation(geometry);
  };

  generateTextGeometry = (text, params) => {
    const textGeometry = new THREE.TextGeometry(text, params);

    textGeometry.computeBoundingBox();

    textGeometry.userData = {};
    textGeometry.userData.size = {
      width: textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x,
      height: textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y,
      depth: textGeometry.boundingBox.max.z - textGeometry.boundingBox.min.z,
    };

    const anchorX = textGeometry.userData.size.width * -params.anchor.x;
    const anchorY = textGeometry.userData.size.height * -params.anchor.y;
    const anchorZ = textGeometry.userData.size.depth * -params.anchor.z;
    const matrix = new THREE.Matrix4().makeTranslation(
      anchorX,
      anchorY,
      anchorZ
    );

    textGeometry.applyMatrix(matrix);

    return textGeometry;
  };

  TextAnimation(textGeometry) {
    const bufferGeometry = new BAS.ModelBufferGeometry(textGeometry);

    const aAnimation = bufferGeometry.createAttribute('aAnimation', 2);
    const aCentroid = bufferGeometry.createAttribute('aCentroid', 3);
    const aControl0 = bufferGeometry.createAttribute('aControl0', 3);
    const aControl1 = bufferGeometry.createAttribute('aControl1', 3);
    const aEndPosition = bufferGeometry.createAttribute('aEndPosition', 3);

    const { faceCount } = bufferGeometry;
    let i;
    let i2;
    let i3;
    let i4;
    let v;

    const { size } = textGeometry.userData;

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
      const centroid = BAS.Utils.computeCentroid(textGeometry, face);

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

      const x = centroid.x + THREE.Math.randFloatSpread(120);
      const y = centroid.y + size.height * THREE.Math.randFloat(0.0, 12.0);
      const z = THREE.Math.randFloat(-20, 20);

      for (v = 0; v < 9; v += 3) {
        aEndPosition.array[i3 + v] = x;
        aEndPosition.array[i3 + v + 1] = y;
        aEndPosition.array[i3 + v + 2] = z;
      }
    }

    const material = new BAS.BasicAnimationMaterial(
      {
        flatShading: true,
        side: THREE.DoubleSide,
        transparent: true,
        uniforms: {
          uTime: { type: 'f', value: 0 },
        },
        shaderFunctions: [
          BAS.ShaderChunk.cubic_bezier,
          BAS.ShaderChunk.ease_cubic_out,
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
        ],
        shaderTransformPosition: [
          'vec3 tPosition = transformed - aCentroid;',
          'tPosition *= 1.0 - tProgress;',
          'tPosition += aCentroid;',
          'tPosition += cubicBezier(tPosition, aControl0, aControl1, aEndPosition, tProgress);',
          'transformed = tPosition;',
        ],
      },
      {
        diffuse: 0x000000,
      }
    );

    THREE.Mesh.call(this, bufferGeometry, material);

    this.frustumCulled = false;
  }

  render() {
    return (
      <div
        style={{ width: '600px', height: '400px' }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeScene;
