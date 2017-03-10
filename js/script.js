var bear = document.getElementById('bear');
var count = document.getElementById('count');
var outside = document.getElementById('outside');
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

