

var elements= [];
//storage the data in window
window.onload = function(){
    if(JSON.parse(localStorage.getItem("taskForm"))!==null){
//convert into JSON format
       elements= JSON.parse(localStorage.getItem("taskForm"));
       console.log(localStorage.getItem('taskForm'))
       display();
    }
}
//end storage window

function addElement(){
    if (document.querySelector(".addForm1,.addForm2,.addForm3").value.trim() !=""){
        elements.push(document.querySelector(".addForm1,.addForm2,.addForm3").value.trim());
        console.log(elements);
        alert(elements);      
    }
 //add local STORAGE
 if (localStorage.getItem("taskForm")==null){
    localStorage.setItem("taskForm",JSON.stringify(elements));
}
else{
    localStorage.setItem("taskForm",JSON.stringify(elements));

}
console.log(localStorage.getItem("taskForm"));
//end local storage
    display();
}
function display(){
    document.querySelector(".addForm1,.addForm2,.addForm3").innerHTML = "Enter here";
    for (let i=0;i<elements.length;i++){
        document.querySelector(".addForm1,.addForm2,.addForm3").innerHTML += elements[i];
        console.log(elements[i]);
    }
}

