function Kula() {
    console.log("kula LOADED")
    var geometry = new THREE.SphereGeometry(2, 32, 32);
    var material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x000000 });
    var sphere = new THREE.Mesh(geometry, material);
    //armata.getArmata().add(sphere);
    this.getKula = function () {
        return sphere;
    }
    this.updatePosition=function(){
        sphere.position=armata.getArmata().getObjectByName("lufa").position;
        
    }
}