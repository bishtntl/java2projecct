let task=document.getElementById("popupbox")
const container=document.getElementById("container")
let cardinput =document.getElementById("userinput")
let popupboxnew=document.getElementById("popupboxnew")

//  ***************************************************************************************************//
let box =false
let box2=false
//  function of when we click on  clickitem button
function addpopup(){
   
    if(box){
        //add class here and thair display none in css card is not visible its pre define in css
        task.classList.add("hide");
        box=false;
    }
    // when click on button so first class is remove and display none will remove from css
    // and poppup card is visible
    else{
        task.classList.remove("hide");
        box=true;  
    }
    // document.body.style.backgroundColor="white"
document.body.style.opacity=0.8,
   task.style.opacity=1

}

function addpopupnew(){
    if(box2){
    popupboxnew.classList.add("hide")
    box2=false    
}
else{
    popupboxnew.classList.remove("hide")
box2=true
}
}

// second close button function
function hideme(){
    task.classList.add("hide");
    box=false;
}

// ********************card container**************

// creating a structure of card add heading inside div and 2 button in the on div //
function addcard(){
    //creating element//
    let newcard =document.createElement("div")
    let heading =document.createElement("h2")
    let hrline =document.createElement("hr")
    let newdiv = document.createElement("div")
    let addbutton=document.createElement("button")
    let removebutton=document.createElement("button")




//*****************************************************************************************************//


 ///attached a element in parent container//
  newcard.appendChild(heading)
  //heading is child of newcard
  newcard.appendChild(hrline)
  //hrline is also child of newcard
  newcard.appendChild(newdiv)
  //newdiv is also child of newcard
  newcard.appendChild(addbutton)
  //addbutton is also child of newcard
  newcard.appendChild(removebutton)
  //remove is also child of newcard
  container.appendChild(newcard)
//   here new card is child of main container that is flex container 

//*************************************************************************CSS Part************************//

  newcard.setAttribute("class","card")
//   add new class in newcard using setattribute
 addbutton.setAttribute("id","btn3")
 removebutton.setAttribute("class","btn4")
hrline.setAttribute("class","line")
heading.setAttribute("class","high")


// **************************************************************************data of card

heading.innerHTML = cardinput.value
addbutton.innerHTML="+"
removebutton.innerHTML="-"
cardinput.value="";





addbutton.addEventListener("click",()=>{
addpopupnew();

})
    hideme()
}
// function popup2(){
//     document.createElement("h3")
//     document.createElement("button")
//     document.


//     newdiv.innerHTML=newinputvalue.value




// }




   
    
































// let addnewitem = document.createElement("div");
// let title = document.createElement("h2")
// let input = document.createElement("input")
// let taskaddbutton = document.createElement("button")
// let taskremovebutton = document.createElement("button")



// body.appendChild(addnewitem);

// addnewitem.appendChild(title);

// addnewitem.appendChild(input);

// addnewitem.appendChild(taskaddbutton);

// addnewitem.appendChild(taskremovebutton);





// addnewitem.setAttribute(`class`,"popupboxnew")

// title.setAttribute(`class`,"title")

// input.setAttribute(`class`,"newinputvalue")

// taskaddbutton.setAttribute(`class`,"taskbutton1")

// taskremovebutton.setAttribute(`class`,"taskbutton1")



// // newdiv.innerHTML= input .value






   
// })


// }

// function addbutton(){

// }




