/* actualiza con la ruta a tus imagenes, si las pones en la carpeta albumimg ira de esta manera
{ src: '/albumimg/nombredetufo.jpg', type: 'image', caption: 'descripcion' 
reemplaza "nombredetufo" por el nombre que tenes en la carpeta "albumimg"
reemplaza "descripcion" por la descripcion o el mensaje que quieras que se muestre en la foto
*/
const mediaSets = [

    [
        { src: '/albumimg/lau1.jpg', type: 'image', caption: 'q linda' },
        { src: '/albumimg/lau2.jpg', type: 'image', caption: 'playita, hermosa' },
        { src: '/albumimg/lau3.jpg', type: 'image', caption: 'no me invitas a playa Laurita?😢' }
    ],
    [
        { src: '/albumimg/lau4.jpg', type: 'image', caption: 'pero q hermosa' },
        { src: '/albumimg/lau5.jpg', type: 'image', caption: 'ya dije q eras linda no?' },
        { src: '/albumimg/lau6.jpg', type: 'image', caption: 'q niña hermosa' }
    ],
    [
        { src: '/albumimg/lau7.jpg', type: 'image', caption: 'ya dije q hermosa?' },
        { src: '/albumimg/lau8.jpg', type: 'image', caption: 'tqm' },
        { src: '/albumimg/videoimg/videolau.mp4', type: 'video', caption: 'muak' }, 
        { src: '/albumimg/videoimg/videolau.mp4', type: 'video', caption: 'preciosa' }
    ],
    [
        { src: '/albumimg/lau9.jpg', type: 'image', caption: 'gafitas AJAJJ' },
        { src: '/albumimg/lau10.jpg', type: 'image', caption: 'q le partan la torta' },
        { src: '/albumimg/lau11.jpg', type: 'image', caption: 'abejita chikita' },
        { src: 'https://cdn.discordapp.com/attachments/1265134207592829062/1285316144084946995/emoji.png?ex=66e9d370&is=66e881f0&hm=682f37da77ecc02afdd3b6033a12b6375b8dfe150c6f8d66f267505e0d7ebc5f&', type: 'image', caption: 'perdon si t molesta q te haga esto, nda vi en tt algo y quise hacerlo y no tenia a nadie mas, espero no te incomes<3. Tampoco quiero que pienses que es con mala intencion o algo. Lindo dia o noche, no se cuando te lo mande.' } 
    ]
];

const emojiUrl = 'https://cdn.discordapp.com/attachments/1271610111458152542/1284560747082285096/emoji.png?ex=66e713ec&is=66e5c26c&hm=42d2d2802e1234e95417f933ad20d83d7d9410864688aff2724e80039023d677&';
let currentMediaSetIndex = 0;
let currentMediaIndex = 0;

function openModal(index) {
    currentMediaSetIndex = index; 
    currentMediaIndex = 0;

    showMedia();
    const modal = document.getElementById('imageModal');
    modal.style.display = 'flex';
}

function showMedia() {
    const media = mediaSets[currentMediaSetIndex];
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const modalCaption = document.getElementById('modalCaption');

    modalImage.style.display = 'none';
    modalVideo.style.display = 'none';

    if (media[currentMediaIndex].type === 'image') {
        modalImage.src = media[currentMediaIndex].src;
        modalImage.style.display = 'block';
    } else if (media[currentMediaIndex].type === 'video') {
        modalVideo.src = media[currentMediaIndex].src;
        modalVideo.style.display = 'block';
    }

    modalCaption.textContent = media[currentMediaIndex].caption;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

function changeImage(direction) {
    const media = mediaSets[currentMediaSetIndex];
    currentMediaIndex = (currentMediaIndex + direction + media.length) % media.length;

    showMedia();
}
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('imageModal');
    if (modal.style.display === 'flex') {
        if (event.key === 'ArrowLeft') {
            changeImage(-1);  
        } else if (event.key === 'ArrowRight') {
            changeImage(1);   
        }
    }
});

window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}
