function show_scan_complete() {
    document.getElementById("complete").style.zIndex = "10";
}
function close_scan_complete() {
    document.getElementById("complete").style.zIndex = "-10";
}

const field = ["Logo_and_Icon/field1.jpg","Logo_and_Icon/field2.jpg","Logo_and_Icon/field3.jpg"];

let i = 1;

function next(){
    i = i+1;
    if (i > 2) {
        i = 0;
    }
    document.getElementById("field").src=field[i];
}
function prev(){
    i = i-1;
    if (i < 0) {
        i = 2;
    }
    document.getElementById("field").src=field[i];
}

function show_macth(){
    document.getElementById("display_macth").style.zIndex = "10";
}

function close_macth(){
    document.getElementById("display_macth").style.zIndex = "-10";
}

let state = 0;

function swap(){
    if(state == 0){
        document.getElementById("your_front_main").style.zIndex =  "-10";
        document.getElementById("label_your_front_main").style.zIndex =  "-10";
        document.getElementById("model_front_main").style.zIndex =  "-10";
        document.getElementById("label_model_front_main").style.zIndex =  "-10";
        
        document.getElementById("your_side_main").style.zIndex =  "10";
        document.getElementById("label_your_side_main").style.zIndex =  "10";
        document.getElementById("model_side_main").style.zIndex =  "10";
        document.getElementById("label_model_side_main").style.zIndex =  "10";

        document.getElementById("front_view_side").style.zIndex = "10";
        document.getElementById("side_view_side").style.zIndex = "-10";

        state = 1;
    }
    else{
        document.getElementById("your_front_main").style.zIndex = "10";
        document.getElementById("label_your_front_main").style.zIndex = "10";
        document.getElementById("model_front_main").style.zIndex = "10";
        document.getElementById("label_model_front_main").style.zIndex = "10";
        
        document.getElementById("your_side_main").style.zIndex =  "-10";
        document.getElementById("label_your_side_main").style.zIndex =  "-10";
        document.getElementById("model_side_main").style.zIndex =  "-10";
        document.getElementById("label_model_side_main").style.zIndex =  "-10";

        document.getElementById("front_view_side").style.zIndex = "-10";
        document.getElementById("side_view_side").style.zIndex = "10";

        state = 0;
    }
}