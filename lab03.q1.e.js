
var DL=5;
var d = [25.0, 9.0,10.0,25.0,15.0];
var mi = 0;
var m = d[mi];
for (var i=1; i < DL; i++){
  
  if (d[i] < m){
    
    mi=i;
    m=d[mi];
    console.log(m)
  } 
}

console.log("mi =", mi, "m=", m)

// answer: "mi =" 1 "m=" 9
