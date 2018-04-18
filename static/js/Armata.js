function Armata() {
    this.cannonAngle = function () {
        console.log("ruch lufy")
    };
    this.cannonRotate = function (angle) {
        console.log("Rotate:"+angle)
        console.log(angle * Math.PI / 360)
        armata.rotation(angle * Math.PI / 360)
    };

    var geometry = new THREE.CylinderGeometry(2, 2, 10, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    var material1 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    var lufa = new THREE.Mesh(geometry, material);

    var armata= new THREE.Object3D();
    var koloGeo=new THREE.CylinderGeometry(2,2,2,32);
    var kolo =new THREE.Mesh(koloGeo,material1)
    kolo.rotateX(0.5*Math.PI)
    kolo.rotateZ(0.5*Math.PI)
    kolo.position.y-=5
    var kolo2= kolo.clone()
    kolo.position.x+=3
    
    kolo2.position.x-=3
    
    

    armata.add(lufa)
    armata.add(kolo)
    armata.add(kolo2)
    this.getArmata=function(){
        return armata;
    }
};