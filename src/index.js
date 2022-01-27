import dash from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = dash.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());