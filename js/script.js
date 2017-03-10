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

function upBearCounter(bear) {
  bear.clicks++;
  count.innerHTML = 'You have clicked ' + counter + ' times';
  if (counter % 5 === 0) {
    outside.classList.add('fiveClick');
  } else {
    outside.classList.remove('fiveClick');
  }

}



var allBears = getElementById('allBears');

var nameArray = ['vonGrizzmon', 'Fuzzy'];
var bearArray = [];

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
