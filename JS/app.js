'use strict';
var count=0;

alert('Hey Youuuuu ,Welcome to My website');
var dana = prompt('What was you do in the quarantine ??'+'[study/read/take a course/playing games/eat/watch movies/watch serise]').toLowerCase();
// console.log(dana);

if(dana == 'read' || dana == 'study' || dana == 'take a course'){
  alert('Excellent, you haven\'t wasted your time');
  
} else if (dana == 'eat' || dana == 'playing games'){
  alert('Hhhh thats cool .. sa7teen btw');
  
} else if (dana == 'watch movies' || dana == 'watch serise'){
  alert('WOW, I love that ,Tell me its name please ');
  
} else {
  alert('Sorry I cant\'t approve you');
}

// ----------------------------------------------


 var user = prompt('Do you want to know more about me ??').toLowerCase();
  //  console.log(user);

  if(user === "yes" || user === "y"){
  alert('OH! Thanx Dear welcome welcome');
   count++;
   } else if (  user === "no" || user === "n") {
  alert('Oops! WHYYYYYYYY =0');
   }
  else alert ("Wrong");
    

    //  ------------------------------------------------

    var user = prompt('Mmmm , Do i love Software??').toLowerCase();
    // console.log(user);
    switch (true){
    case (user === "yes" || user === "y"): 
    alert('OH! nice i\'m software-developer');
    count++;
    break;

    case (  user === "no" || user === "n"):
    alert('Oops! WHYYYYYYYY =0');
    break;
    default : alert("wrong input");
    }

    // ------------------------------------------------


      var user = prompt('Do you know Arab-Bank & Zain-Telecom ??').toLowerCase();
      //  console.log(user);

      if(user === "yes" || user === "y"){
      alert('dandy! I\'m trained thier ');
      count++;

      } else if(user === "no" || user === "n") {
      alert('Oops! GOOGLE it');
      }
      else alert("??");


     // ------------------------------------------------



          var user = prompt('Do you active on social-media?').toLowerCase();
          // console.log(user);

          if(user === "yes" || user === "y"){
           alert('OH! Nice');
           count++;

            } else if ( user === "no" || user === "n") {
           alert('Oops!');
             }
             else alert ("??");


     // ------------------------------------------------
    

          var user = prompt('Are you bored of my questions? ').toLowerCase();
          // console.log(user);

          if(user === "yes" || user === "y"){
           alert('I\'m Sorry for your time');
           count++;
            } else if(user === "no" || user === "n") {
           alert('Thank you');
             }
<<<<<<< HEAD
             else alert("??");

    //  -----------------------------------


//  var guess= [1,2,3,4,5,6,7,8,9,10];
//  var usernum=prompt("Can you guess a number from 1 to 10 thats in my mind..!");
//      usernum=Number(usernum);

// for(var h=0; h < 4 ;h++){
// console.log(h);
// }










            
alert ("your score is"+ count + "/7");

=======
>>>>>>> e83e1c77d0498e7eb8fb4136dce45348c5632936
