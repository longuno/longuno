const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let storyText = '今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。';
let insertX = ['怪兽威利','大老爹','圣诞老人'];
let insertY = ['肯德基','迪士尼乐园','白宫'];
let insertZ = ['自燃了','在人行道化成了一坨泥','变成一条鼻涕虫爬走了'];

randomize.addEventListener('click', result);

function result() {
  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);
  
  let newStory = storyText.replace(/:inserta:/g,xItem);
  newStory = newStory.replace(/:insertb:/g,yItem);
  newStory = newStory.replace(/:insertc:/g,zItem);
  
  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace(/李雷/g,name);
  }

  if(document.getElementById("american").checked) {
    let weight = Math.round(300);
    let temperature = Math.round(94);

  }   

  story.textContent = newStory;
  story.style.visibility = 'visible';

}