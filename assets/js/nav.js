let getNav = document.getElementById("NavLinks")

let navState = false

function navBar() {

    
    if(navState){
        navState = false
        getNav.style.display = "none"
    } else {
        navState = true
        getNav.style.display = "block"
    }
    

}

