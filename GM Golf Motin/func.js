

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
let Mine = [174.0,28.01,27.20,28.11,27.23,50.01,45.10,50.02,46.05,49.20,49.44,39.52];

let Morikawa = [175,27.91,28.05,28.20,27.59,51.23,46.73,51.01,46.03,49.43,50.21,41.22];
let Ko = [167.0,26.59,27.32,26.87,27.55,48.98,43.43,49.21,43.53,47.87,48.43,38.24];
let Korda = [178.0,28.45,29.32,28.01,29.45,52.22,46.55,52.39,46.97,51.43,51.67,39.44];
let Mcliroy = [175.0,28.03,28.10,28.22,27.67,50.67,45.98,51.21,46.12,49.66,50.42,42.01];
let Wood = [185.0,31.23,32.22,31.40,32.13,55.34,53.45,56.01,53.09,53.67,54.57,44.23];

let arr_player = [Morikawa,Ko,Korda,Mcliroy,Wood];

function calc(arr){
    let result = 0;
    for(let i = 0; i <= 12;i++){
        if(Math.abs(Mine[i] - arr[i]) <= 1){
            result = result + 1;
        }
    }
    return (result/12)*100; 
}