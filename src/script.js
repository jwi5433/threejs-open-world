 import * as THREE from 'three'
 import gsap from 'gsap'

 //cursor
 const cursor = {
    x: 0,
    y: 0
 }
 window.addEventListener('mousemove', (event) =>
 {
     cursor.x = event.clientX / sizes.width - 0.5
     cursor.y = - (event.clientY / sizes.height - 0.5)
 })

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width  / sizes.height, .1, 100)
const aspectRatio = sizes.width / sizes.height
camera.position.z = 3
 camera.lookAt(mesh.position)
 scene.add(camera)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

 // time
 const clock = new THREE.Clock()
 // animations'

 const tick = () =>
 {
     //time
     const elapsedTime = clock.getElapsedTime()
     //update objects
     //update camera
     camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
     camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
     camera.position.y = cursor.y * 5
     camera.lookAt(mesh.position)
     //mesh.rotation.y = elapsedTime
     // render
     renderer.render(scene,camera)

     window.requestAnimationFrame(tick)
 }

 tick()