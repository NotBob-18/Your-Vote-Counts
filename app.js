let voters =[]


function onSubmitButton() {
   
    const firstname =document.getElementById("firstname").value;
    let age= document.getElementById("age").value;
    let Nationality= document.getElementById("Nationality").value;
    let halftmieBoard=document.getElementById("halftmieBoard");
    let voters = document.getElementById("voters"); 
    

let lowerCaseName=firstname.toLowerCase()


//fist name cannot be empyt
if (firstname == "") { 
    halftmieBoard.style.color = "red"
    halftmieBoard.innerHTML = "you need to have a valid name in order to vote.";
    return
}


//cannot below the age of 18 to vote
if(age < 18) {
    halftmieBoard.style.color = "red"
    halftmieBoard.innerHTML = "you need to be above the age of 18 to vote."
    return

}



//Nationality cant be blank
if(Nationality == "South African"){
    halftmieBoard.style.color = "red"
    halftmieBoard.innerHTML = "you are eligible to vote.";
    return
}

//other nationality cannot vote
if(Nationality == "others"){
    halftmieBoard.style.color = "red"
    halftmieBoard.innerHTML = "you need to be South African to vote in order to vote.";
    return
}



//Nationaliyt must be south african
    

if (voters.includes(lowerCaseName)) {
    halftmieBoard.style.color = 'red'
    halftmieBoard.innerHTML = `Wena ${firstname}, u might get arrested for trying to vote twice!!!`
    return
}

halftmieBoard.style.color =`green`
halftmieBoard.innerHTML= `congats ${firstname}, you can vote now`

  voters.push(lowerCaseName)


  halftmieBoard.innerHTML = " "

  for (let i = 0; i < voters.length; i++) {
    halftmieBoard.innerHTML += voters[i] + ', '
  }


}