function times(num1) {
    return num1*2;
}

// we learnd how to use functions so here is a simply one

var user = Number(prompt("Enter a number you wish to dubble"));
var dubble = times(user);


// we learnd about conditions 

var con = 12;
if(con<13) {
  document.write("Good Job");
}

document.write("<br>Dubble of " + user + " is " + dubble ); 

//we leard about loops 
var answer = 0;
while(answer<100){
    document.write("<br><br><br> Nice"); 
    answer = answer + 1;  
}