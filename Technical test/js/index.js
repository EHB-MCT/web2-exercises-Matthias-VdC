"use strict"


/////////////////
//THREE.JS CODE//
/////////////////

// import * as THREE from './three/src/Three.js';


// let scene = new THREE.Scene();
// let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// let renderer = new THREE.WebGLRenderer({
//     antialias: true,
//     canvas: document.getElementById("canvas")
// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(new THREE.Color('black'));
// document.body.appendChild(renderer.domElement);

// //add testcube
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshPhongMaterial({
//     color: "red",
// });
// const cube = new THREE.Mesh(geometry, material);

// scene.add(cube);

// let light = new THREE.HemisphereLight(0xf6e86d, 0x404040, 0.5);
// scene.add(light);


// camera.position.z = 10;

// let animate = function () {
//     requestAnimationFrame(animate);
//     cube.position.set(0, 8 - window.scrollY / 520, 0);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
// };

// animate();

/////////////////////
//NON-THREE.JS code//
/////////////////////

let data;
let randomNumber = Math.floor(Math.random() * 59);

window.onload = function () {
    async function getData(url, _callback) {
        let response = await fetch(url);
        data = await response.json();
        _callback();
        return data;
    }

    getData(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=${randomNumber}`, async () => {
        await data;
        console.log(data);
        document.getElementById("randomThumb").innerHTML = `<img src="${data[randomNumber].thumb}" alt="${data[randomNumber].title}">`;
        document.getElementById("randomTitle").innerHTML = `<p>Random game: <b>${data[randomNumber].title}</p>`;
    });
}