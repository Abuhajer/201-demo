'use strict';
var count = 0;

alert('Hey Youuuuu ,Welcome to My wibsite');

var name = prompt("Whats your name");
alert("Welcome to my website" + name);


var dana = prompt('What was you do in the quarantine ??' + '[study/read/take a course/playing games/eat/watch movies/watch serise]').toLowerCase();
// console.log(dana);

if (dana == 'read' || dana == 'study' || dana == 'take a course') {
  alert('Excellent, you haven\'t wasted your time');

} else if (dana == 'eat' || dana == 'playing games') {
  alert('Hhhh thats cool .. sa7teen btw');

} else if (dana == 'watch movies' || dana == 'watch serise') {
  alert('WOW, I love that ,Tell me its name please ');

} else {
  alert('Sorry I cant\'t approve you');
}

// ----------------------------------------------


var user = prompt('Do you want to know more about me ??').toLowerCase();
//  console.log(user);

if (user === "yes" || user === "y") {
  alert('OH! Thanx' + name + ' welcome welcome');
  count++;
} else if (user === "no" || user === "n") {
  alert('Oops! WHYYYYYYYY =0');
}
else alert("Wrong");


//  ------------------------------------------------

var user = prompt('Mmmm , Do you love Software??').toLowerCase();
// console.log(user);
switch (true) {
  case (user === "yes" || user === "y"):
    alert('OH! nice i\'m software-developer');
    count++;
    break;

  case (user === "no" || user === "n"):
    alert('Oops! WHYYYYYYYY =0');
    break;
  default: alert("wrong input");
}

// ------------------------------------------------


var user = prompt('Do you know Arab-Bank & Zain-Telecom ??').toLowerCase();
//  console.log(user);

if (user === "yes" || user === "y") {
  alert('dandy! I\'m trained thier ');
  count++;

} else if (user === "no" || user === "n") {
  alert('Oops! GOOGLE it' + name);
}
else alert("??");


// ------------------------------------------------



var user = prompt('Do you active on social-media?').toLowerCase();
// console.log(user);

if (user === "yes" || user === "y") {
  alert('OH! Nice' + name + 'keep going');
  count++;

} else if (user === "no" || user === "n") {
  alert('Oops!');
}
else alert("??");


// ------------------------------------------------


var user = prompt('Are you bored of my questions? ').toLowerCase();
// console.log(user);

if (user === "yes" || user === "y") {
  alert('I\'m Sorry for your time' + name);
  count++;
} else if (user === "no" || user === "n") {
  alert('Thank you' + name);
}
else alert("??");

//  -----------------------------------




var mynum = 6;
var numcorrect = false;

for (var h = 0; h < 4; h++) {
  var usernum = Number(prompt('guess the number in my mind From 1-10'));


  if (usernum === mynum) {
    alert('Correct answer');
    count++;
    numcorrect = true;
    break;
  }
  else if (usernum > mynum) {
    alert('too high');
  }
  else if (usernum < mynum) {
    alert('too low')
  }
  else ('Bad input');


}
if (!numcorrect) {
  alert('the correct number ' + mynum);
}

// -----------------------------------------------

var burgerlist = ['BURGER MAKERS', 'FIREFLY', 'MACDONALDS'];
var x = 0;
var yes=false;

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


alert("your score is" + count + "/7");

