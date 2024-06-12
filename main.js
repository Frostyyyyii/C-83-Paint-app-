canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouse_event="empty"
var last_X,last_Y;
color= "purple"
width_of_line= 1
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouse_event="mousedown"   
}

canvas.addEventListener("mouseUP",my_mouseup)
function my_mouseup(e){
    mouse_event="mouseUP"   
}


canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouse_event="mouseleave"   
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_position_of_mouse_X= e.clientX-canvas.offsetLeft;
    current_position_of_mouse_Y= e.clientY-canvas.offsetTop;

    if(mouse_event=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle= color;
     ctx.lineWidth= width_of_line

     console.log("last_position_of_X_and_Y_Coordinates=")
     console.log("x="+last_X+"y="+last_Y);
     ctx.moveTo(last_X,last_Y);

     console.log("Current_position_of_X_and_Y_Coordinates=")
     console.log("x="+current_position_of_mouse_X+"y="+current_position_of_mouse_Y);
     ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y)
     ctx.stroke();
    }
    last_X=current_position_of_mouse_X;
    last_Y=current_position_of_mouse_Y;

}


function clear_canvas(){
  //  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
  document.getElementById("myCanvas").style.background="white"
}