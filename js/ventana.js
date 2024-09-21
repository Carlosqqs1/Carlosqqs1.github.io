document.addEventListener('DOMContentLoaded', () => {
    const modalTitle = document.getElementById('modal-title');
    const noButton = document.getElementById('no-btn');
    const yesButton = document.getElementById('yes-btn');
    const modal = document.getElementById('modal');
    const celebrationScreen = document.querySelector('.celebration');

    // Ajusta segun tus prefencias 
    let counter = 0;
    const titles = [
        "¿Segura que no?",
        "¿Estás 100% segura?",
        "¿De verdad no me quieres?",
        "¿En serio?",
        "Última oportunidad...",
        "De verdad que no?",
        "No importa, di que siii"
    ];
    const emojiUrl = 'https://cdn.discordapp.com/attachments/1271610111458152542/1284560747082285096/emoji.png?ex=66e713ec&is=66e5c26c&hm=42d2d2802e1234e95417f933ad20d83d7d9410864688aff2724e80039023d677&';

    modal.classList.add('show');

    noButton.addEventListener('click', () => {
        if (counter < titles.length - 1) {
            modalTitle.textContent = titles[counter];
            const existingEmoji = document.querySelector('.modal-content .emoji');
            if (existingEmoji) {
                existingEmoji.src = emojiUrl;
            } else {
                const emojiImg = document.createElement('img');
                emojiImg.src = emojiUrl;
                emojiImg.alt = 'emoji';
                emojiImg.classList.add('emoji');
                modalTitle.insertAdjacentElement('afterend', emojiImg);
            }
            counter++;
        } else if (counter === titles.length - 1) {
            modalTitle.textContent = titles[counter];
            const existingEmoji = document.querySelector('.modal-content .emoji');
            if (existingEmoji) {
                existingEmoji.src = emojiUrl;
            }
            noButton.addEventListener('mouseover', () => {
                moveButtonRandomly(noButton);
            });

            counter++;
        }
    });

    yesButton.addEventListener('click', () => {
        modal.classList.remove('show');
        celebrationScreen.classList.add('show');

        setTimeout(() => {
            celebrationScreen.classList.remove('show');
        }, 5000);
    });

    function moveButtonRandomly(button) {
        const modalBounds = modal.getBoundingClientRect();
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        const randomX = Math.random() * (modalBounds.width - buttonWidth);
        const randomY = Math.random() * (modalBounds.height - buttonHeight);

        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }
});
