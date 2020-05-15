function fun1() {
    var sel=document.getElementById('mySelect').selectedIndex;
    var options =document.getElementById('mySelect').options;
    alert('Checked option '+options[sel].text);
}
function fun2(){
    var rtl=document.getElementById('rtl').value;
    var ttl=document.getElementById('ttl');
    ttl.value=rtl;

}
