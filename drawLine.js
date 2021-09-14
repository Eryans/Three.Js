const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

//create cube
const cubeGeometry = new THREE.BoxGeometry(5,5,5,1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x7d33ff } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );


//create a blue LineBasicMaterial
const material = new THREE.LineDashedMaterial( { color: 0x0000ff } );

const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, -10, 0) );
points.push( new THREE.Vector3( -10, 0, 0) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );

renderer.render( scene, camera );

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    line.rotation.y += 0.01;
    line.rotation.z += 0.03;
    cube.rotation.x -= 0.01;
    cube.rotation.y -= 0.03;
    }
animate();