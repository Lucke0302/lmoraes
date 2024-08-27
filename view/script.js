s1 = document.getElementById("s1");
s2 = document.getElementById("s2");
s3 = document.getElementById("s3");
nav = document.getElementById("nav");
menu = document.getElementById("menu");
btn = document.getElementById("mode");
ball = document.getElementById("ball");

menu.addEventListener('click', function(){
    c1 = menu.className;
    stts = ball.className;
    if(c1 == "button"){
        menu.className = "button-active";
        nav.className = "active";
        s1.style.rotate = "-360deg";
        s3.style.rotate = "-360deg";
        menu.style.marginRight = "-80%";
        s1.style.backgroundColor = "white";
        s2.style.backgroundColor = "white";
        s3.style.backgroundColor = "white";
    }
    else{
        menu.className = "button";
        nav.className = "inactive";
        s1.style.rotate = "0deg";
        s3.style.rotate = "0deg";
        menu.style.marginRight = "-120%";
        if(stts == "ball inactive"){
            s1.style.backgroundColor = "#183b59";
            s2.style.backgroundColor = "#183b59";
            s3.style.backgroundColor = "#183b59";
        }
        else{
            s1.style.backgroundColor = "white";
            s2.style.backgroundColor = "white";
            s3.style.backgroundColor = "white";
        }
    }
});

btn.addEventListener('click', function(){
    stts = ball.className;
    if(stts == "ball inactive"){
        ball.className = "ball active";
        document.body.style.backgroundColor = "#262626";
    }
    if(stts == "ball active"){
        ball.className = "ball inactive";
        document.body.style.backgroundColor = "white";
    }
});