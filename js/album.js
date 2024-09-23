const mediaSets = [

    [
        { src: '/albumimg/carol1.jpg', type: 'image', caption: 'q linda' },
        { src: '/albumimg/carol2.jpg', type: 'image', caption: 'hermosaaa, me encta' },
        { src: '/albumimg/carol3.jpg', type: 'image', caption: 'q linda mi mujer😢' }
    ],
    [
        { src: '/albumimg/carol4.jpg', type: 'image', caption: 'pero q hermosa' },
        { src: '/albumimg/carol5.jpg', type: 'image', caption: 'ya dije q eras linda no?' },
        { src: '/albumimg/carol6.jpg', type: 'image', caption: 'q niña hermosa,q culote por cierto' }
    ],
    [
        { src: '/albumimg/carol7.jpg', type: 'image', caption: 'me fascinas miamor bella ' },
        { src: '/albumimg/carol8.jpg', type: 'image', caption: 'te amo demasido miamor' },
        { src: '/albumimg/videoimg/videocarol.mp4', type: 'video', caption: 'muak' }, 
    ],
    [
        { src: '/albumimg/carol9.jpg', type: 'image', caption: 'm gustas mucho miamor bella' },
        { src: '/albumimg/carol10.jpg', type: 'image', caption: 'me debes muchos besitos no crees?' },
        { src: '/albumimg/carol11.jpg', type: 'image', caption: 'te amo demasiadoooooooooooooo' },
        { src: '/albumimg/carol12.jpg', type: 'image', caption: 'Feliz cumpleaños miamor, espero la pases genial, perdon por no consentirete tanto o algo asi, te has vuelto muy consetida, pero lo siento, te deseo un felliz cumpleaños y un hermos dia. Recuerda que te amo demasiado, lindo dia te desea tu novio<3' } 
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
