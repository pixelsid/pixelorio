function init() {
    canvasContainer = document.getElementById('canvasbg'), camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 3e3), camera.position.z = 1440, n = [cubeImageUrl + "px.jpg", cubeImageUrl + "nx.jpg", cubeImageUrl + "py.jpg", cubeImageUrl + "ny.jpg", cubeImageUrl + "pz.jpg", cubeImageUrl + "nz.jpg"], o = (new THREE.CubeTextureLoader).load(n), o.mapping = THREE.CubeRefractionMapping, scene = new THREE.Scene, scene.background = o;
    var e = new THREE.TextureLoader,
        i = e.load(meteor),
        t = e.load(star_3),
        a = e.load(planet);
    group = new THREE.Group, scene.add(group);
    for (var r = doc_body.classList.contains("mobile-device-detected") ? 2e3 : 3500, d = 1; r > d; d++) {
        var c = "";
        c = d % 1500 == 0 ? a : d % 12 == 0 ? t : i;
        var s = new THREE.SpriteMaterial({
            map: c
        });
        particle = new THREE.Sprite(s), particle.position.x = 2e3 * Math.random() - 1e3, particle.position.y = 2e3 * Math.random() - 1e3, particle.position.z = 2e3 * Math.random() - 1e3, particle.scale.x = particle.scale.y = 5 * Math.random() + 5, d % 3e3 == 0 && (particle.position.x = 2e3 * Math.random() - 1e3, particle.position.y = 2e3 * Math.random() - 1e3, particle.position.z = 2e3 * Math.random() - 1e3, particle.scale.x = particle.scale.y = 150), group.add(particle)
    }
    renderer = new THREE.WebGLRenderer({
        alpha: !0
    }), renderer.setPixelRatio(window.devicePixelRatio), renderer.domElement.id = "universe", canvasContainer.appendChild(renderer.domElement), onWindowResize(), document.addEventListener("mousemove", onDocumentMouseMove, !1), document.addEventListener("touchstart", onDocumentTouchStart, !1), document.addEventListener("touchmove", onDocumentTouchMove, !1), window.addEventListener("resize", onWindowResize, !1), window.addEventListener("scroll", onWindowResize, !1);
}

function onWindowResize(e) {
    var n = document.body,
        o = n.clientWidth,
        i = n.clientHeight;
    (e || n.width !== o || n.height !== i) && (camera.aspect = o / i, camera.updateProjectionMatrix(), renderer.setPixelRatio(window.devicePixelRatio), renderer.setSize(o, i, !1))
}

function onDocumentMouseMove(e) {
    mouseX = 1.5 * (e.clientX - windowHalfX), mouseY = 1.5 * (e.clientY - windowHalfY)
}

function onDocumentTouchStart(e) {
    1 === e.touches.length && (mouseX = e.touches[0].pageX - windowHalfX, mouseY = e.touches[0].pageY - windowHalfY)
}

function onDocumentTouchMove(e) {
    1 === e.touches.length && (mouseX = e.touches[0].pageX - windowHalfX, mouseY = e.touches[0].pageY - windowHalfY)
}

function animate() {
    requestAnimationFrame(animate), render()
}

function render() {
    var e = 8e-6 * Date.now();
    camera.position.x += .05 * (mouseX - camera.position.x), camera.position.y += .05 * (-mouseY - camera.position.y), camera.lookAt(scene.position);
    for (var n = 0; n < scene.children.length; n++) group.rotation.x = e * (4 > n ? n + 1 : -(n + 1)), group.rotation.y = e * (4 > n ? n + 1 : -(n + 1));
    renderer.render(scene, camera);
    //alert('saa');
}

function playAudio() {
    var e = document.querySelector("#space-bg-music");
    if (!window.AudioContext) {
        if (!window.webkitAudioContext) return;
        window.AudioContext = window.webkitAudioContext
    }
    var n = new AudioContext;
    "suspended" === n.state ? (n.resume().then(function() {}), setTimeout(function() {
        e.play()
    }, 10500)) : setTimeout(function() {
        e.play()
    }, 10500)
}
var meteor = "assets/img/meteor2.png",
    star_3 = "assets/img/star-3.png",
    planet = "assets/img/planet.png",
    cubeImageUrl = "assets/img/",
    canvasContainer = document.getElementById('canvasbg'),
    camera, scene, renderer, group, particle, mouseX = 0,
    mouseY = 0,
    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,
    innerWidth = window.innerWidth,
    innerHeight = window.innerHeight,
    doc_body = document.querySelector("body"),
    sprite;
window.addEventListener("load", function() {
    init(), animate()
}), window.addEventListener("resize", onWindowResize, !1), window.addEventListener("scroll", onWindowResize, !1), window.addEventListener("contextmenu", function(e) {
    //return e.preventDefault(), alert("All materials on this site are copyright protected."), !1
}, !1);

module.exports={
    init: init,
    animate:animate
}