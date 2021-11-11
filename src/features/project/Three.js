import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three"

class Three extends Component {
    componentDidMount() {
      // === THREE.JS CODE START ===
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      let renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );
      const  geometry = new THREE.SphereGeometry(1, 32, 32);
      const material =  new THREE.MeshNormalMaterial({
        roughness: 0.1,
        envMapIntensity: 10,
      })
      let sphere = new THREE.Mesh( geometry, material );
      scene.add( sphere );
      camera.position.z = 5;
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