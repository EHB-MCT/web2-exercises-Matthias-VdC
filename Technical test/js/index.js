"use strict"


/////////////////
//THREE.JS CODE//
/////////////////

import * as THREE from "./three/build/three.module.js";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

//adding a linear material (texture)
const material = new THREE.LineBasicMaterial({
    color: 0x0000ff
});

//creates the geometry
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

//adds the material and the combined points(geometry) into the const line
const line = new THREE.Line(geometry, material);

scene.add(line);

//Renders the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


/////////////////////
//NON-THREE.JS code//
/////////////////////

let data;
let randomNumber = Math.floor(Math.random() * 60);

window.onload = function () {
    async function getData(url, _callback) {
        let response = await fetch(url);
        data = await response.json();
        _callback();
        return data;
    }

    getData(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=${randomNumber}`, () => {
        console.log(data);
        document.getElementById("randomThumb").innerHTML = `<img src="${data[randomNumber].thumb}" alt="${data[randomNumber].title}">`;
        document.getElementById("randomTitle").innerHTML = `<p>Random game: <b>${data[randomNumber].title}</p>`;
    });
}