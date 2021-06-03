
const player1 = {
    name: 'SCORPION',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Dildo', 'knife', 'gun', 'nunchaki'],
    attack: () => {
        console.log(this.name + ' ' + 'Fight...')
    }
}

const player2 = {
    name: 'KITANA',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Dildo', 'knife', 'gun', 'nunchaki'],
    attack: () => {
        console.log(this.name + ' ' + 'Fight...')
    }
}


let createPlayer = (players, PlayerNames) => {

    const arenas = document.querySelector('.arenas');

    const player = document.createElement('div');
    player.classList.add(players);
    
    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    
    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = PlayerNames.hp + '%';
    
    const playerName = document.createElement('div');
    playerName.classList.add('name');
    playerName.innerText = PlayerNames.name;
    
    const character = document.createElement('div');
    character.classList.add('character');
    
    const playerImg = document.createElement('img');
    playerImg.src = PlayerNames.img

    return (
        arenas.appendChild(player),
        player.appendChild(progressbar),
        progressbar.appendChild(life),
        progressbar.appendChild(playerName),
        player.appendChild(character),
        character.appendChild(playerImg)
    )
}

createPlayer('player1', player1)
createPlayer('player2', player2)




