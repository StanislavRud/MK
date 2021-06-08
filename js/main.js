const arenas = document.querySelector('.arenas');
const randomBtn = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Dildo', 'knife', 'gun', 'nunchaki'],
    attack: () => {
        console.log(this.name + ' ' + 'Fight...');
    }
}

const player2 = {
    player: 2,
    name: 'KITANA',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Dildo', 'knife', 'gun', 'nunchaki'],
    attack: () => {
        console.log(this.name + ' ' + 'Fight...');
    }
}

const createNewElement = (tag, className) => {
const $tag = document.createElement(tag);
        if (className) {
            $tag.classList.add(className);
        }

    return $tag;
}

const createPlayer = (playerNames) => {

    const player = createNewElement('div', 'player' + playerNames.player);
    const progressbar = createNewElement('div', 'progressbar');
    const character = createNewElement('div', 'character');
    const life = createNewElement('div', 'life');
    const playerName = createNewElement('div', 'name');
    const playerImg = createNewElement('img');

    life.style.width = playerNames.hp + '%';
    playerName.innerText = playerNames.name;
    playerImg.src = playerNames.img;

    return (
        arenas.appendChild(player),
        player.appendChild(progressbar),
        progressbar.appendChild(life),
        progressbar.appendChild(playerName),
        player.appendChild(character),
        character.appendChild(playerImg)
        
    )
}

createPlayer(player1);
createPlayer(player2);


const playerLose = (name) => {
    const loseTitle = createNewElement('div', 'loseTitle');
    loseTitle.innerText = name + ' lose';
    return
        loseTitle
        
}

const changeHP = (player) => {
    const playerLife = document.querySelector('.player'+ player.player +' .life')
    player.hp = player.hp - 20;
    playerLife.style.width = player.hp + '%'
    const arenas = document.querySelector('.arenas');

        if (player.hp < 0) {
           return arenas.appendChild(playerLose(player.name));
        } 
    
}

randomBtn.addEventListener('click', () => {
    changeHP(player1)
    //changeHP(player2)
})



