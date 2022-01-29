import dash from 'lodash';
import './index.css';
import profile from './profile_pic.png';

function component() {
  const element = document.createElement('div');

  //lodash manipulation
  element.innerHTML = dash.join(['Hi', 'webpack'], ' ');
  element.classList.add('hello');

  const profilePic = new Image();
  profilePic.src = profile;

  element.appendChild(profilePic);
  
  return element;
}

document.body.appendChild(component());