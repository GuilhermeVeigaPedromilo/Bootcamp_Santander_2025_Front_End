const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById('score-points')
    },
    cardSprites: {
        avatar: document.getElementById("card_image"),
        name: document.getElementById("card_name"),
        type: document.getElementById("card_type"),
    },
    fieldCards: {
        player: document.getElementById('player-field-card'),
        computer: document.getElementById('computer-field-card')
    },
    playerSides: {
        player1: "player-cards",
        playerBox: document.querySelector('#player-cards'),
        computer: "computer-cards",
        computerBox: document.querySelector('#computer-cards')
    },
    actions: {
        button: document.getElementById('next-duel'),
        buttonAudio: document.getElementById('config-audio')
    },
    audio: {
    isPlaying: true,
    bgm: document.getElementById("bgm"),
    button: document.getElementById("config-audio"),
    icon: document.getElementById("audio-icon"),
    icons: {
        play: "./src/assets/icons/audio-volume-medium-svgrepo-com.png",
        mute: "./src/assets/icons/sem-som.png"
    }
    }
};

const pathImages = './src/assets/icons/'

const cardData = [
    {
        id: 1,
        name: 'Blue Eyes White Dragon',
        type: "Paper",
        img: pathImages + "dragon.png",
        WinOf: [2],
        LoseOf: [3]
    },
    {
        id: 2,
        name: 'Dark Magician',
        type: "Rock",
        img: pathImages + "magician.png",
        WinOf: [3],
        LoseOf: [1]
    },
    {
        id: 3,
        name: 'Exodia',
        type: "Scissors",
        img: pathImages + "exodia.png",
        WinOf: [1],
        LoseOf: [2]
    }
]

const playerSides = {
    player1: "player-cards",
    computer: "computer-cards"
}

const getRandomCardId = async () => {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id
}

const createCardImage = async (IdCard, fieldSide) => {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", pathImages + "card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");

    if (fieldSide === playerSides.player1) {
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        })


        cardImage.addEventListener("mouseover", () => {
            drawSelectCard(IdCard);
        });
    }

    return cardImage
}

const setCardsField = async (cardId) => {
    await removeAllCardsImage();
    let computerCardId = await getRandomCardId();

    const playerCard = cardData[cardId - 1];   // pega a carta do jogador
    const computerCard = cardData[computerCardId - 1]; // pega a carta do pc

    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    await hiddenCardDetails()

    state.fieldCards.player.src = playerCard.img;     // ✅ insere carta no campo do player
    state.fieldCards.computer.src = computerCard.img; // ✅ insere carta no campo do computador

    let duelResults = await checkDuelResults(cardId, computerCardId);

    await updateScore();
    await drawButton(duelResults);
};

const updateScore = async () => {
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`
}

const drawButton = async (text) => {
    state.actions.button.innerText = text;
    state.actions.button.style.display = "flex"
    state.actions.button.style.justifySelf = "center"
    state.actions.button.style.textAlign = "center"
    state.actions.button.style.alignItems = "center"
    state.actions.button.style.textTransform = "uppercase";
}

const checkDuelResults = async (playerCardId, ComputerCardId) => {
    let duelResults = "Draw"
    let playerCard = cardData[playerCardId - 1];

    if (playerCard.WinOf.includes(ComputerCardId)) {
        duelResults = "Win";
        await playAudio(duelResults)
        state.score.playerScore++
    } else if (playerCard.LoseOf.includes(ComputerCardId)) {
        duelResults = "lose";
        await playAudio(duelResults)
        state.score.computerScore++
    }

    return duelResults
}

const removeAllCardsImage = async () => {
    let { computerBox, playerBox } = state.playerSides
    let imgElements = computerBox.querySelectorAll('img');
    imgElements.forEach((img) => img.remove())

    imgElements = playerBox.querySelectorAll('img');
    imgElements.forEach((img) => img.remove())
}

const drawSelectCard = async (id) => {
    const card = cardData[id - 1];
    state.cardSprites.avatar.src = card.img;
    state.cardSprites.name.innerText = card.name;
    state.cardSprites.type.innerText = "Attribute: " + card.type;
};


const drawCards = async (cardNumbers, fieldSide) => {
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage)
    }
}

const resetDuel = async () => {
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "none";
    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none"
    init()
}

const playAudio = async (status) => {
    try {
        const audio = new Audio(`./src/assets/audios/${status}.wav`);
        audio.play()
    } catch (err) {
        console.error(err)
    }
}

const hiddenCardDetails = async () => {
    state.cardSprites.name.innerText = ""
    state.cardSprites.type.innerText = ""
    state.cardSprites.avatar.src = ""
}

const settingAudio = async () => {
        if (fieldSide === playerSides.player1) {

        cardImage.addEventListener("mouseover", () => {
            drawSelectCard(IdCard);
        });
    }
}

const initAudio = () => {
    const audioState = state.audio;

    audioState.button = document.getElementById("audio-btn");
    audioState.icon = document.getElementById("audio-icon");

    // ícone inicial
    audioState.icon.src = audioState.icons.play;

    // Tentar tocar automaticamente
    audioState.bgm.play().catch(() => {
        console.warn("Autoplay bloqueado. Aguardando interação do usuário.");
        audioState.isPlaying = false;
        audioState.icon.src = audioState.icons.mute;
    });

    // Botão de controle
    audioState.button.addEventListener("click", () => {
        if (audioState.isPlaying) {
            audioState.bgm.pause();
            audioState.icon.src = audioState.icons.mute;
        } else {
            audioState.bgm.play();
            audioState.icon.src = audioState.icons.play;
        }
        audioState.isPlaying = !audioState.isPlaying;
    });
};



function init() {
    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";

    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
}


init()
initAudio();