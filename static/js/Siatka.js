function Siatka() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
        45, // kąt patrzenia kamery (FOV - field of view)
        window.innerWidth / window.innerHeight, // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
        0.1, // minimalna renderowana odległość
        10000 // maxymalna renderowana odległość
    );
    camera.position.set(-5,100,-50);
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    var axes = new THREE.AxesHelper(1000)
    var planeGeo = new THREE.PlaneGeometry(1000, 1000, 50, 50)
    var planeMesh = new THREE.MeshBasicMaterial({
        
        side: THREE.DoubleSide,
        wireframe:true,
        color:"red"
    })
    var plane = new THREE.Mesh(planeGeo, planeMesh);
    plane.rotateX(Math.PI/2)








    scene.add(axes);
    scene.add(armata.getArmata())
    scene.add(plane)
    function render() {

        requestAnimationFrame(render);

        //ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą

        renderer.render(scene, camera);
    }
    $("#root").append(renderer.domElement);
    camera.lookAt(armata.getArmata().position)
    render();

    $('#cRotate').on('input',function(){
        var angle=$('#cRotate').val();
        
        armata.cannonRotate(angle)
    })
    $('#cAngle').on('input',function(){
        var angle=$('#cAngle').val();
        
        armata.cannonAngle(angle)
    })
}