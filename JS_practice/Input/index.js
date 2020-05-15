function fun1(){
    var chbox = document.getElementById('one');
    if (chbox.checked) {
        alert('Checked');
    }else{
        alert('Unchecked');
    }
}
function fun2(){
    var rb=document.getElementsByName('r1');
    for (var i = 0;i<rb.length;i++){
        if (rb[i].checked){
            alert('Checked '+i+' element');
        }
    }
}