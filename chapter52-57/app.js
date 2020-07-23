var image = ["1.jpg","2.jpg","3.jpg","4.png","5.jpg","6.jpg","7.png","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.png","15.jpg"];
for(var i = 0; i<15 ; i++ ){
    document.getElementById(i+1).src  = "images/"+image[i]
}
var modal = document.getElementById("modal")


function onOpenImagModal(img){
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
    modal.style.display = "block";
    var imgid = img.getAttribute("id")
    console.log(imgid);
    console.log(document.getElementById("modal-img").getAttribute("id"))
    document.getElementById("modal-img").src = "images/"+image[imgid-1]
}
function onClosedImagModal(){
    modal.classList.remove('modal-open');
    modal.classList.add('modal-close');
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}
// function zoomin(a){
//     var parent  = a.parentNode.parentNode;

//     console.log(parent)

//     var image = document.getElementById("modal-img")
//     console.log(parent.getAttribute("id"))
// console.log(parent.nodeName)
// var myImg = parent.querySelector("#modal-img");
// var currWidth = myImg.clientWidth;
// var currHeight = myImg.clientHeight;
// console.log(currHeight)
// console.log(currWidth)
// console.log(currHeight+=1)
// console.log(currWidth+=1)
// image.setAttribute("width",currWidth.toString()+"px")
// image.setAttribute("height",currHeight.toString()+"px")
// var currWidth = myImg.clientWidth;
// var currHeight = myImg.clientHeight;
// console.log(currHeight)
// console.log(currWidth)
// // console.log(parent.getElementsByTagName("img").getAttribute("height"))

// }
// function zoomout(a){
//     var parent  = a.parentNode.parentNode;
//     var image = document.getElementById("modal-img")
//     console.log(parent)
//     console.log(parent.nodeName)
//     console.log(parent.getAttribute("id"))
//     var myImg = parent.querySelector("#modal-img");
//     var currWidth = myImg.clientWidth;
//     var currHeight = myImg.clientHeight;
//     console.log(currHeight)
// console.log(currWidth)
// console.log(currHeight-=1)
// console.log(currWidth-=1)

// image.setAttribute("width",currWidth.toString()+"px")
// image.setAttribute("height",currHeight.toString()+"px")
// var currWidth = myImg.clientWidth;
// var currHeight = myImg.clientHeight;
// console.log(currHeight)
// console.log(currWidth)
// // console.log(parent.getElementsByTagName("img").getAttribute("height"))

// }

function zoomin(){
    var myImg = document.getElementById("modal-img");
    var currHeight = myImg.clientHeight;
    var currWidth = myImg.clientWidth;
    if(currWidth >= 500 && currHeight >= 500){
        alert("Maximum zoom-in level reached.");
    } else{
        myImg.style.width = (currWidth + 20) + "px";
        myImg.style.height = (currWidth + 20) + "px";
    } 
    console.log(currHeight+20)
}
function zoomout(){
    var myImg = document.getElementById("modal-img");
    var currHeight = myImg.clientHeight;
    var currWidth = myImg.clientWidth;
    if(currWidth <= 150 && currHeight <= 150){
        alert("Maximum zoom-out level reached.");
    } else{
        myImg.style.width = (currWidth - 20) + "px";
        myImg.style.height = (currHeight - 20) + "px";
    }
}