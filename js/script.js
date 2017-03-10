/*
var bear = document.getElementById('bear1');
var count = document.getElementById('count1');
var outside = document.getElementById('container1');
var counter = 0;

bear.addEventListener('click', function(){
  counter++;
  count.innerHTML = 'You have clicked ' + counter + ' times';
  if (counter % 5 === 0) {
    outside.classList.add('fiveClick');
  } else {
    outside.classList.remove('fiveClick');
  }
});
*/

var allBears = document.getElementById('allBears');

var Bear = function(name, i) {
  this.img = 'images/' + name + '.jpg';
  this.name = name;
  this.clicks = 0;

  this.nameElem = document.createElement('h2');
  this.nameElem.innerHTML = this.name;

  this.imgElem = document.createElement('img');
  this.imgElem.id = 'bear' + i;
  this.imgElem.src = this.img;
  this.imgElem.alt = this.name;
/*
  this.imgElem.addEventListener('click', bearClicked(i));
*/
  this.countPara = document.createElement('p');
  this.countPara.id = 'count' + i;
  this.countPara.className = 'count';
  this.countPara.innerHTML = this.clicks + ' Clicks';


};

Bear.prototype.enterHTML = function() {
  console.log('entering HTML');
  var container = document.createElement('div');
  container.className = 'bearContainer';
  container.appendChild(this.nameElem);
  container.appendChild(this.imgElem);
  container.appendChild(this.countPara);
  allBears.appendChild(container);
};

function bearClicked(i) {
  bearArray[i].clicks ++;
}

var nameArray = ['vonGrizzmon', 'Fuzzy', 'Whitey', 'Zeke', 'Vera'];
var bearArray = [];
var numBears = nameArray.length;

for (var i = 0; i < numBears; i++) {
  console.log('bear made');
  bearArray[i] = new Bear(nameArray[i], i);
  console.log(bearArray[i]);
  bearArray[i].enterHTML();
}


/*
var addBear = function(name, i) {
  var bearContainer;   // all info on one bear
  var bearName;
  var imageContainer;
  var bearImage;
  var bearCount;
  var bear;

  bearContainer = document.createElement('div');
  bearContainer.id = 'container' + i;
  bearContainer.className = 'bearContainer';

  bearName = document.createElement('h2');
  bearName.innerHTML = name;
  bearContainer.appendChild(bearName);

  imageContainer = document.createElement('div');
  bearImage = document.createElement('img');
  bearImage.id = 'bear' + i;
  bearImage.src = 'images/' + name + '.jpg';
  bearImage.alt = name;
  bearImage.clicks = 0;
  bearArray[i] = bearImage;
  bearImage.addEventListener('click', upBearCounter(bearArray[i]));
  imageContainer.appendChild(bearImage);
  bearContainer.appendChild(imageContainer);

  bearCount = document.createElement('p');
  bearCount.id = 'count' + i;
  bearCount.className = 'count';
  bearCount.innerHTML = name + ' has been clicked 0 times';
  bearContainer.appendChild(bearCount);

  allBears.appendChild(bearContainer);

}

nameArray.forEach(addBear(bear, i));
*/
