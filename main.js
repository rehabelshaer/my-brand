//check if there's local storge color option
let maincolors = localStorage.getItem("color_option");

if (maincolors !== null) {

    document.documentElement.style.setProperty("--main-color", maincolors);

    //remove all active class from all colors list
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active")

        //add active class on element with data-color === local storge item
        if (element.dataset.color === maincolors) {

            element.classList.add("active");
        }
    });

}

//random background option
let backgroundOption = true;

//variable to control  background interval
let backgroundInterval;

//check if there's local storge random background
let backgroundLocalItem = localStorage.getItem("background_option");

//check if random background local storge is not empty
if (backgroundLocalItem !== null) {

    if (backgroundLocalItem === true) {

        backgroundOption = true;

    } else {

        backgroundOption = false;

    }
    //remove all active class from  background spans
    document.querySelectorAll(".random-background span").forEach(element => {

        element.classList.remove("active");

    });

    if (backgroundLocalItem === true) {

        document.querySelector(".random-background .yes").classList.add("active");

    } else {
        (backgroundLocalItem === false)

        document.querySelector(".random-background .no").classList.add("active");
    }

}

//toggle spin class on icon
document.querySelector(".toggle-setting i").onclick = function () {

    //toggle class fa-spin for rotation on self
    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");
}

//switch colors
let colorsli = document.querySelectorAll(".colors-list li");

//loop on li
colorsli.forEach(li => {

    li.addEventListener("click", (e) => {

        //set color on root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)

        //set color on local storge
        localStorage.setItem("color_option", e.target.dataset.color);

        activeclass(e);
    });
});

//switch random backgrounds
let Randombackground = document.querySelectorAll(".random-background span");

//loop on span
Randombackground.forEach(span => {

    span.addEventListener("click", (e) => {

        activeclass(e);

        if (e.target.dataset.background === 'yes') {

            backgroundOption = true;

            randomImags();

            localStorage.setItem("background_option", true);

        } else {
            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);

        }

    });
});


//select landing page Element
let landingPage = document.querySelector(".landing-page");

//get array of imags
let ImagsArray = ["photo1.jpg", "photo2.jpg", "photo4.jpg", "photo6.jpg", "photo5.jpg"];


//function to random imags
function randomImags() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            //get random number
            let RandomNumber = Math.floor(Math.random() * ImagsArray.length);

            //change background url
            landingPage.style.backgroundImage = 'url("imags/' + ImagsArray[RandomNumber] + '")';

        }, 1000);

    }
}
randomImags()

// select brand selector
let ourbrand = document.querySelector(".brand");

window.onscroll = function () {

    //brand offset top
    let brandOffset = ourbrand.offsetTop;

    //outer hight
    let brandOuterHeight = ourbrand.offsetHeight;

    //window height
    let windowHeight = this.innerHeight;

    //window scroll top
    let windowScrolltop = this.pageYOffset;

    if (windowScrolltop > (brandOffset + brandOuterHeight - windowHeight)) {

        let allBrand = document.querySelectorAll(".brand-box .brand-progress span");

        allBrand.forEach(brand => {

            brand.style.width = brand.dataset.progress;

        });

    }

}

// create popup with the image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener("click", (e) => {

        //create overlay element
        let Overlay = document.createElement("div");

        //add class to overlay
        Overlay.className = "popup-overlay";

        //append overlay to the body
        document.body.appendChild(Overlay);

        //create the popup box
        let popupBox = document.createElement("div");

        //add class to the popup box
        popupBox.className = "popup-box"

        if (img.alt !== null) {

            //create heading
            let imgHeading = document.createElement("h3");

            //create text for head
            let imgText = document.createTextNode(img.alt);

            //append text to head
            imgHeading.appendChild(imgText);

            //add head to the popup box
            popupBox.appendChild(imgHeading);

            //create img of the popup
            let popupImage = document.createElement("img");

            //set img source
            popupImage.src = img.src;

            //add image to the popup box
            popupBox.appendChild(popupImage);

            //add popup box to the body
            document.body.appendChild(popupBox);

            //create the close span
            let closeSpan = document.createElement("span");

            //create text to close span
            let closeSpanText = document.createTextNode("x");

            //append text to close span
            closeSpan.appendChild(closeSpanText);

            //add class to the close span
            closeSpan.className = "close-span";

            //append close span to the popup box
            popupBox.appendChild(closeSpan);

        }

    })

})

//close popup
document.addEventListener("click", (e) => {

    if (e.target.className == "close-span") {

        //remove current popup

        e.target.parentNode.remove();

        //remove overlay
        document.querySelector(".popup-overlay").remove();

    }

})

//nav bulltes
//sellect all bulttes
let allBullets = document.querySelectorAll(".nav-bullets .bullet");

//select all link
let alllinks = document.querySelectorAll(".links a")

// function scrolltiview
function scrolltoview(element){

    element.forEach(bullet => {

        bullet.addEventListener("click", (e) => {

            e.preventDefault()
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior:"smooth"
    
            });
        });
    });
}

scrolltoview(allBullets);
scrolltoview(alllinks);

//handle active state
function activeclass(event){

    //remove all active class from all spans
    event.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active")
    })

    //add active class on self
    event.target.classList.add("active")

}

//show bullets
let bulletSpan = document.querySelectorAll(".bullets-option span");

//nav bullets
let navBullets = document.querySelector(".nav-bullets");

//bullet local storge
let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null){

    bulletSpan.forEach( span =>{

        span.classList.remove("active");
    });

    if (bulletLocalItem === "block"){

        navBullets.style.display = "block";

        document.querySelector(".bullets-option .yes").classList.add("active");

    }else{

        navBullets.style.display = "none";

        document.querySelector(".bullets-option .no").classList.add("active");
    }
}

bulletSpan.forEach( span =>{

    span.addEventListener("click" ,(e)=>{

        if(span.dataset.display === "show"){

            navBullets.style.display = "block";

            localStorage.setItem("bullets_option" ,"block")

        }else{
            navBullets.style.display = "none";

            localStorage.setItem("bullets_option" ,"none")
        }

        activeclass(e);
    });

});

//reset button
document.querySelector(".reset-option").onclick = function(){

    localStorage.clear();
    //localStorage.removeItem("color_option");// if we dont need to remove all
   // localStorage.removeItem("background_option");
    //localStorage.removeItem("bullets_option");

    //reload window
    window.location.reload();
}

//toggle menu
let toggleButton = document.querySelector(".toggle-menu");
let thelinks = document.querySelector(".links");

toggleButton.onclick = function(e){

    //stop propagation
    e.stopPropagation();

    //toggle class "menu-active" on button
    this.classList.toggle("menu-active");

    //toggle class "open" on links
    thelinks.classList.toggle("open");
};

//to close menu anywhere  
//click any where outside menu and toggle button
document.addEventListener("click" , (e)=>{

    if(e.target !== toggleButton && e.target !== thelinks){

        //check if the menu open
        if(thelinks.classList.contains("open")){

            //toggle class "menu-active" on button
            toggleButton.classList.toggle("menu-active");

            //toggle class "open" on links
            thelinks.classList.toggle("open");
        }
    }
});

//stop propagation on li on the menu
thelinks.onclick =function (e){
    e.stopPropagation();
}