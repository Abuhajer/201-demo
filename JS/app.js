'use strict';
var count = 0;

alert('Hey Youuuuu ,Welcome to My wibsite');

var userName = prompt('Whats your name');
alert('Welcome to my website ' + userName);


var dana = prompt('What was you do in the quarantine ??' + '[study/read/take a course/playing games/eat/watch movies/watch serise]').toLowerCase();
// console.log(dana);

if (dana === 'read' || dana === 'study' || dana === 'take a course') {
  alert('Excellent, you haven\'t wasted your time');

} else if (dana === 'eat' || dana === 'playing games') {
  alert('Hhhh thats cool .. sa7teen btw');

} else if (dana === 'watch movies' || dana === 'watch serise') {
  alert('WOW, I love that ,Tell me its name please ');

} else {
  alert('Sorry I cant\'t approve you');
}

// ----------------------------------------------

function f1() {
  var user = prompt('Do i want to know more about you ??').toLowerCase();
  //  console.log(user);

  if (user === 'yes' || user === 'y') {
    alert('Yes' + name + ' i want that');
    count++;
  }
  else if (user === 'no' || user === 'n') {
    alert('Oops! WHYYYYYYYY , iwant in fact =0');
  }
  else alert('Wrong');
}
f1();
//  ------------------------------------------------
function f2()
{
  var user = prompt('Mmmm , Do i love Software??').toLowerCase();
  // console.log(user);
  switch (true) {
  case (user === 'yes' || user === 'y'):
    alert('OH! nice i\'m software-developer');
    count++;
    break;
  case (user === 'no' || user === 'n'):
    alert('You wrong , i love software');
    break;
  default: alert('wrong input');
  }
}
f2();
// ------------------------------------------------
function f3()
{
  var user = prompt('Do i train in Arab-Bank & Zain-Telecom ??').toLowerCase();
  //  console.log(user);
  if (user === 'yes' || user === 'y')
  {
    alert('dandy! I\'m trained thier ');
    count++;
  }
  else if (user === 'no'|| user === 'n')
  {
    alert('Oops! you answer uncorrect' + name);
  }
  else alert('??');
}
f3();
// ------------------------------------------------
function f4()
{
  var user = prompt('Do i active on social-media?').toLowerCase();
  // console.log(user);
  if (user === 'yes' || user === 'y')
  {
    alert('yes i am ' + name + '.');
    count++;

  }
  else if (user === 'no' || user === 'n')
  {
    alert('Oops! , Uncoreect');
  }
  else alert('??');
}
f4();
// ------------------------------------------------
function f5()
{
  var user = prompt('i an bored person ? ').toLowerCase();
  // console.log(user);

  if (user === 'yes' || user === 'y') {
    alert('no i am not ' + name);
  } else if (user === 'no' || user === 'n') {
    alert('Thank you' + name);
    count++;
  }
  else alert('??');
}
f5();
//  -----------------------------------
var numcorrect = false;
var mynum = 6;
function f6(myNubmer,numberCorrect)
{
  for (var h = 0; h < 4; h++) {
    var usernum = Number(prompt('guess the number in my mind From 1-10'));


    if (usernum === myNubmer) {
      alert('Correct answer');
      count++;
      numberCorrect = true;
      break;
    }
    else if (usernum > myNubmer) {
      alert('too high');
    }
    else if (usernum < myNubmer) {
      alert('too low');
    }
    else ('Bad input');


  }
  if (!numberCorrect) {
    alert('the correct number ' + mynum);
  }
}
f6(mynum,numcorrect);
// -----------------------------------------------
function f7()
{
  var burgerlist = ['BURGER MAKERS', 'FIREFLY', 'MACDONALDS'];
  var x = 0;
  var yes = false;

  while (x < 6) {
    var burger = prompt('What the best famous burger store in jordan').toUpperCase();


    for (var a = 0; a < burgerlist.length; a++) {
      if (burger === burgerlist[a]) {
        alert('Thats true');
        count++;
        yes = true;
        break;

      }
    }
    if (yes) {
      break;
    }
    x++;
  }
}
f7();

alert('your score is' + count + '/7');

