var arr =[1,2,3,4,5];
// console.log(arr);

function arrSq(a)
{
for (var i =0; i<a.length; i++){
 a[i]=a[i]*a[i];

}
return a
}

console.log(arr);




function setup() 
{
  createCanvas(400, 400);

  var result = arrSq(arr);

  console.log(result);

}

function draw() 
{
   background(220);
  
}