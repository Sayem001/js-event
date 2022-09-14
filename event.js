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

// in a single line usually done by pro developer
document.getElementById('make-lightBlue-btn').addEventListener('click',function(){
    document.body.style.backgroundColor='lightBlue';
})

// inner text added by function 
function addInnerText(){
    document.getElementById('clicking-method').innerText='inner text added by js function'
}

// inner text added  by direct  method 
document.getElementById('direct').addEventListener('click',function(){
    document.getElementById('clicking-method').innerText='inner text added by direct method'
})

// update name by input field 
document.getElementById('update-btn').addEventListener('click',function(){
    const name=document.getElementById('input-name')
    // console.log(name.value)
    document.getElementById('clicking-method').innerText=name.value;
    name.value=''
})

// post comment section 
document.getElementById('comment-post').addEventListener('click',function(){
    const commentInput=document.getElementById('comment-input')
    // const commentText=commentInput.value;
   
    const newComment=document.createElement('p');
    newComment.innerText=commentInput.value;

    const commentContainer=document.getElementById('comment-container')
    commentContainer.appendChild(newComment);
    commentInput.value=''
})

// delete text by typing delete for confoemation 

document.getElementById('delete-btn').addEventListener('click',function(){
    document.getElementById('secrate-text').style.display='none'
})