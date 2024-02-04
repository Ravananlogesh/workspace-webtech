let color=document.getElementById("color")
color.addEventListener("change",function(){
document.getElementById("container").style.backgroundColor=color.value;
})