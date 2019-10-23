export function displayTitle(gameMode, keyPress) {
  if ( document.getElementsByClassName('titleText')[0] === undefined ) {
    const container = document.getElementById('root');
    const title = document.createElement('p');
    const subtitle = document.createElement('p');

    let titleText = document.createTextNode('Radiant Tower');
    let subtitleText = document.createTextNode('Press \'Spacebar\' to begin');

    container.appendChild(title);
    title.appendChild(titleText);
    title.classList.add('titleText');

    container.appendChild(subtitle);
    subtitle.appendChild(subtitleText);
    subtitle.classList.add('subtitleText');
  }

  if ( document.getElementsByClassName('titleText')[0] !== undefined && keyPress.upPressed ) {
    document.getElementsByClassName('titleText')[0].classList.add('hidden');
    document.getElementsByClassName('subtitleText')[0].classList.add('hidden');
  }

};