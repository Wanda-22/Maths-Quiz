function au() {
    x=document.getElementById("h").value;
    y=document.getElementById("w").value;

    localStorage.setItem("z1",x);
    localStorage.setItem("z2",y);

    window.location ="game.html";
}