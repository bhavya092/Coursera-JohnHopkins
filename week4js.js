
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i< 10;i++) {
    var x= names[i];
    var a=x[0];

  if ( a==='j' || a==='J') {
     console.log("Good Bye "+ x)
  } 
  else {
   console.log("Hello " + x)
  }
}
