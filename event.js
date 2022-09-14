function makeYellow(){
    document.body.style.backgroundColor='yellow';
}


function makeBlue(){
    document.body.style.backgroundColor='blue';
}

const  blueBtn=document.getElementById('make-blue-btn')
blueBtn.onclick=makeBlue;
// just function nam likhte hobe 1st braket dewa jabe na na hole agei call kore dibe 

// using annonimus function 
const greenBtn=document.getElementById('make-green-btn');
greenBtn.onclick=function(){
    document.body.style.backgroundColor='green'
}

// add event listener 
const goldenRodBtn=document.getElementById('make-goldenRod-btn');
goldenRodBtn.addEventListener('click',function(){
    document.body.style.backgroundColor='goldenRod'
})