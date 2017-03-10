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

