let gallery = ['download.jfif', 'company.jfif'];
var slide = [];

for (let index = 0; index < gallery.length; index++ ){
    let src = '../images/' + gallery[index];
    slide.push(src);
 
}
var i = 0;

function next(){
    document.getElementById("home-images").src = slide[i]
    i++;
    if (i >= slide.length){
        i = 0;
    }
}
function previous(){
    document.getElementById("home-images").src = slide[i]
    i--;
    if (i <= 0){
        i = slides.length - 1;
    }
}
