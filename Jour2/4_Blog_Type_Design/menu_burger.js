//Variables declaration
let myMenu = document.getElementById('burger_menu');
let myUL = document.getElementsByTagName('ul')[0];
let myLI = document.getElementsByTagName('li');
let myBurger = document.getElementById('burger');
let isCliked= false; //boolean for the know if the burger menu is cliked


//Event for the "click" on burger
myBurger.addEventListener("click", () =>{
    if( isCliked == false){
        myMenu.style.display = "flex";
        myMenu.style.flexDirection = "column";
        myMenu.style.position = "absolute";
        myMenu.style.top = "16px";
        myMenu.style.right = "-12px";
        myBurger.style.marginLeft = "5rem";
        myBurger.style.transition = "all 1s";
        myBurger.style.width = "24px";
        myBurger.style.height = "20px";
        myBurger.style.transform = "rotate(90deg)";
        myUL.style.transiton = "all 2s";
        myUL.style.display = "block";
        isCliked = true;
        for(i=0; i < myLI.length; i++){
            myLI[i].style.display = "block";
            myLI[i].style.color = "black"    
        }

    } else {
        isCliked = false;
        myMenu.style.position ="static";
        myBurger.style.transition = "all 1s";
        myBurger.style.transform = "rotate(0deg)";
        myUL.style.display = "none";

    }

});


//Event for the menu list
for(i=0; i < myLI.length; i++){
    myLI[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "grey";
    });
    myLI[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "transparent";
    });   
}

// listen click everywhere
window.addEventListener("click", function(event) {    
    if(event.target != myBurger){
        myMenu.style.position ="static";
        myBurger.style.transition = "all 1s";
        myBurger.style.transform = "rotate(0deg)";
        myUL.style.display = "none";
    } 
});

sizeWin=window.matchMedia("(max-width: 500px)").matches;
console.log(sizeWin);

//try to use an order to overwrite the css querry
// if(!sizeWin){
//     myMenu.style.display = "none";
//     myBurger.style.display = "none";
// }


// know issues:
//  * when you resize after use the burger menu create a space at the right of the nav