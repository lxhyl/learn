
import _ from "lodash";
// import './style.css';
// import testImg from "./TIM图片20190920124939.jpg"
import printMe from './print.js'

function component() {
    var element = document.createElement('div');
    

   
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');
   
    // var myImg = new Image();
    // myImg.src = testImg;
    // element.appendChild(myImg);

    var button = document.createElement('button');
    button.innerHTML = "点我";
    button.onclick = printMe;
    element.appendChild(button);


    return element;
  }
  
  document.body.appendChild(component());