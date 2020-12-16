var elements=[];
//storage the data in window
window.onload = function(){
    if(JSON.parse(localStorage.getItem("Do List"))!==null){
//convert into JSON format
       elements= JSON.parse(localStorage.getItem("Do List"));
       console.log(elements);
       display();
    }
}

//add text and clean out all white spaces
function addElement(){
    if (document.querySelector(".addTxt").value.trim()!=""){
        elements.push(document.querySelector(".addTxt").value.trim())
        alert(elements);
    //add local STORAGE
    if (localStorage.getItem("Do List")==null){
        localStorage.setItem("Do List",JSON.stringify(elements));
    }
    else{
        localStorage.setItem("Do List",JSON.stringify(elements));

    }
    console.log(localStorage.getItem("Do List"));

        display();

    }
}
//add and display task list function
function display(){
    document.querySelector(".list").innerHTML = "<center><strong>Your Entry!</strong></center>";
    for(var i=0;i<elements.length;i++){
        document.querySelector(".list").innerHTML += "<center><div class='element'>"+elements[i]+"<img src='tick.png' class='tick' onclick='strike("+i+")'><img src='deletebin.png' class='bin' onclick='del("+i+")'></div></center>";
    } 
}
//delete 1 tasklist when onclick
function del(index){
    elements.splice(index,1);
    display();
}
//cross out task list
function strike(index){
    if(elements[index].includes("<strike>")){
    elements[index] =elements[index].replace("<strike>","tik");
    elements[index] =elements[index].replace("</strike>","tik");
    }
    else{
        elements[index]= "<strike>" + elements[index]+ "</strike>";
    }
    display();
}

