let gallery1 = ['mitad4.jpg', 'mitad3.jpg', 'mitad5.jfif'];
let gallery2 = ['wall.jpg', 'mitad1.jpg', 'wall2.jpg'];
var model1 = [];
var model2 = [];

for (let index = 0; index < gallery1.length; index++ ){
    let src = 'images/' + gallery1[index];
    model1.push(src);
 
}
for (let index = 0; index < gallery2.length; index++ ){
    let src = 'images/' + gallery2[index];
    model2.push(src);
 
}

var i = 0;
var j = 0;
function next1(){
  
    i++;
    if (i >= model1.length){
        i = 0;
    }
    document.getElementById("model-1").src = model1[i]
}
function previous1(){
    document.getElementById("model-1").src = model1[i]
    i--;
    if (i <= 0){
        i = model1.length - 1;
    }
}

function next2(){
    document.getElementById("model-2").src = model2[j]
    j++;
    if (j >= model2.length){
        j = 0;
    }
}
function previous2(){
    document.getElementById("model-2").src = model2[j]
    j--;
    if (j <= 0){
        j = model2.length - 1;
    }
}