
function fun1() {
    let myAnimation=document.getElementById("myAnimation")
    let pos = 0;
    let id = setInterval(frame,10);

    function frame(){
        if(pos===350){
            clearInterval(id)
        }else {
            pos++;
            myAnimation.style.top=pos+"px";
            myAnimation.style.left=pos+"px";
        }
    }
}
