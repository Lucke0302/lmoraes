s1 = document.getElementById("s1");
s3 = document.getElementById("s3");
nav = document.getElementById("nav");

nav.addEventListener('mouseenter', function() {
    
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
});