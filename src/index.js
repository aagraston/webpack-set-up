import dash from 'lodash';
import myName from './myName';

function component() {
  const element = document.createElement('div');

  element.innerText = myName('Aaron');

  return element;
}

document.body.appendChild(component());