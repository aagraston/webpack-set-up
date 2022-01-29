import dash from 'lodash';

function component() {
  const element = document.createElement('div');

  //lodash manipulation
  element.innerHTML = dash.join(['Roboto', 'webpack'], ' ');
  
  return element;
}

document.body.appendChild(component());