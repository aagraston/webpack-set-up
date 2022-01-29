import dash from 'lodash';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  //lodash manipulation
  element.innerHTML = dash.join(['Hello', 'webpack'], ' ');

btn.innerHTML = 'Click me and check the console!';
btn.onclick = printMe;

element.appendChild(btn);
  
  return element;
}

document.body.appendChild(component());