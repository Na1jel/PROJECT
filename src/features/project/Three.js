import React, { Component } from "react";
import * as THREE from "three"

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



class Three extends Component {
    componentDidMount() {
      // === THREE.JS CODE START ===
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      let renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );
      const geometry = new THREE.SphereGeometry( 2, 16, 16 );
      const material = new THREE.MeshBasicMaterial( { color: 0xffff00  } );
      const sphere = new THREE.Mesh( geometry, material );
      scene.add( sphere );
      camera.position.x = 1;
      camera.position.y = 1;
      camera.position.z = 10;
      const controls = new OrbitControls( camera, renderer.domElement );
      camera.lookAt(scene.position);
      let animate = function () {
        requestAnimationFrame( animate );
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render( scene, camera );
      };
      animate();
      // === THREE.JS EXAMPLE CODE END ===
    }
    render() {
      return (
        <div />
      )
    }
  }

export default Three

// https://coderoad.ru/5706129/HTML5-Canvas-%D0%BC%D0%B5%D1%82%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-Google-Maps-API-v3

//https://threejs.org/examples/#webgl_geometry_text
// https://threejs.org/docs/#examples/en/controls/OrbitControls
// https://github.com/josdirksen/essential-threejs