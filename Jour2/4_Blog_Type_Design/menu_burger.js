let myUL = document.getElementsByTagName('ul')[0];
let myLI = document.getElementsByTagName('li');
let myBurger = document.getElementById('burger');

console.log(myLI.length);
console.log(myUL);
console.log(myBurger);


myBurger.addEventListener("click", () =>{
    myBurger.style.display = "none";
    myUL.style.display = "block";

    for(i=0; i < myLI.length; i++){
        myLI[i].style.display = "block";
        myLI[i].addEventListener("mouseout", function() {
            this.style.backgroundColor = "none";
            console.log(that)
        });
        console.log("display on");
    }

});


for(i=0; i < myLI.length; i++){
    myLI[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "grey";
        console.log(this)
    });
}

window.addEventListener("click", function(event) {
    if(event.target != myBurger){
        myUL.style.display = "none";
        myBurger.style.display ="block";
    }
});