function Armata() {
    this.cannonAngle = function (angle) {
        console.log("ruch lufy" + angle)
        var vector = new THREE.Vector3(1, 0, 0);

        var lufa = armata.getObjectByName('lufa');
        
        lufa.setRotationFromAxisAngle(vector, angle * Math.PI / 180);
    };
    this.cannonRotate = function (angle) {
        console.log("Rotate:" + angle)
        console.log(angle * Math.PI / 180)
        var vector = new THREE.Vector3(0, 1, 0);
        armata.setRotationFromAxisAngle(vector, angle * Math.PI / 180);
        //armata.rotation.y=angle * Math.PI / 180
    };

    var geometry = new THREE.CylinderGeometry(2, 2, 10, 32);
    var material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xff0000 });
    var material1 = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x0000ff });
    var lufa = new THREE.Mesh(geometry, material);
    lufa.name = "lufa";
    

    var armata = new THREE.Object3D();
    var koloGeo = new THREE.CylinderGeometry(2, 2, 2, 32);
    var kolo = new THREE.Mesh(koloGeo, material1)
    kolo.rotateX(0.5 * Math.PI)
    kolo.rotateZ(0.5 * Math.PI)
    
    var kolo2 = kolo.clone()
    kolo.position.y=2
    kolo2.position.y=2
    lufa.position.y = kolo.position.y
    kolo.position.x += 3

    kolo2.position.x -= 3


    var axes = new THREE.AxesHelper(1000)
    
    armata.add(lufa)
    armata.add(kolo)
    armata.add(kolo2)
    armata.add(axes)
    lufa.geometry.translate(0,4,0)
    console.log(armata.getObjectByName('lufa'))
    this.getArmata = function () {
        return armata;
    }
};