var allBears = document.getElementById('allBears');
var bearList = document.getElementById('bearList');

var Bear = function(name, i) {
  this.img = 'images/' + name + '.jpg';
  this.name = name;
  this.clicks = 0;
  this.visible = false;

  this.listItem = document.createElement('li');
  this.listItem.innerHTML = this.name;
  this.listItem.addEventListener('click', function() {
    bearChosen(i);
  });


  this.nameElem = document.createElement('h2');
  this.nameElem.innerHTML = this.name;

  this.imgElem = document.createElement('img');
  this.imgElem.id = 'bear' + i;
  this.imgElem.src = this.img;
  this.imgElem.alt = this.name;
  this.imgElem.addEventListener('click', function() {
    bearClicked(i);
  });

  this.countPara = document.createElement('p');
  this.countPara.id = 'count' + i;
  this.countPara.className = 'count';
  this.countPara.innerHTML = this.clicks + ' Clicks';

  this.container = document.createElement('div');
  this.container.className = 'bearContainer';

};

Bear.prototype.enterList = function() {
  bearList.appendChild(this.listItem);
}

Bear.prototype.enterHTML = function() {
  this.container.appendChild(this.nameElem);
  this.container.appendChild(this.imgElem);
  this.container.appendChild(this.countPara);
  allBears.appendChild(this.container);
};

Bear.prototype.leaveHTML = function() {
  allBears.removeChild(this.container);
}

function bearChosen(i) {
  if (bearArray[i].visible === false) {
    bearArray[i].visible = true;
    bearArray[i].enterHTML();
  } else {
    bearArray[i].visible = false;
    bearArray[i].leaveHTML();
  }
}

function bearClicked(i) {
  bearArray[i].clicks ++;
  bearArray[i].countPara.innerHTML = bearArray[i].clicks + ' Clicks';

  if (bearArray[i].clicks % 5 === 0) {
    bearArray[i].container.classList.add('fiveClick');
  } else {
    bearArray[i].container.classList.remove('fiveClick');
  }
}


var nameArray = ['vonGrizzmon', 'Fuzzy', 'Whitey', 'Zeke', 'Vera'];
var numBears = nameArray.length;
var bearArray = [];

for (var i = 0; i < numBears; i++) {
  bearArray[i] = new Bear(nameArray[i], i);
  bearArray[i].enterList();
  /*bearArray[i].enterHTML();*/
}

