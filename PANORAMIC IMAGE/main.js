const panoImage = document.querySelector('.pano-image');

const panorama = new PANOLENS.ImagePanorama( './images/image5.jpg' );
const viewer = new PANOLENS.Viewer({
    container: panoImage,
    autoRotate: true
});
viewer.add( panorama );