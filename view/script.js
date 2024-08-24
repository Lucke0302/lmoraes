s1 = document.getElementById("s1");
s2 = document.getElementById("s2");
s3 = document.getElementById("s3");
nav = document.getElementById("nav");
menu = document.getElementById("menu");

nav.addEventListener('click', function(){
    c1 = menu.className;
    console.log(c1);
    if(c1 == "button"){
        menu.className = "button-active";
        nav.style.marginLeft = "0px";
        s1.style.rotate = "-360deg";
        s3.style.rotate = "-360deg";
        menu.style.marginRight = "-80%";
        s1.style.backgroundColor = "white";
        s2.style.backgroundColor = "white";
        s3.style.backgroundColor = "white";
    }
    else{
        menu.className = "button";
        s1.style.rotate = "0deg";
        s3.style.rotate = "0deg";
        menu.style.marginRight = "-120%";
        s1.style.backgroundColor = "#164c45";
        s2.style.backgroundColor = "#164c45";
        s3.style.backgroundColor = "#164c45";
        if(window.innerWidth  <= 1024){
            nav.style.marginLeft = "-72vw";
        }
        else{
            nav.style.marginLeft = "-16vw";
        }
    }
});

/*nav.addEventListener('mouseenter', function() {
    
    s1.style.rotate = "140deg";
    s1.style.marginLeft = "-5px";
    s1.style.width = "inherit";
    s3.style.rotate = "40deg";
    s3.style.marginLeft = "-5px";
    s3.style.width = "inherit";
});

nav.addEventListener('mouseleave', function() {
    
    s1.style.rotate = "360deg";
    s1.style.marginLeft = "0px";
    s1.style.width = "inherit";
    s3.style.rotate = "360deg";
    s3.style.marginLeft = "0px";
    s3.style.width = "inherit";
});*/