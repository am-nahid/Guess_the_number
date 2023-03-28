let rn = Math.floor((Math.random())*100+1);
let inum = document.getElementById('rnum');
let text = document.getElementsByClassName('text1')
let quest = document.querySelector('.button2')
let text2 = document.querySelector('.text2')
let text3 = document.querySelector('.text3')
let parent = document.querySelector('body')
let count=100;



function checkNum(){
    
    console.log(rn)
    if (inum.value.length>0 && inum.value<=100 && inum.value>0){

   if (count === 0){
        text[0].innerHTML = "You lost"
        text2.innerHTML = "💯 Chances: 0"
    }
    else if (rn > parseInt(inum.value)){
        text[0].innerHTML = "Your guess is low"
        count--;
        text2.innerHTML = `💯 Chances: ${count}`
    }
    else if (rn<parseInt(inum.value)) {
        text[0].innerHTML = "Your guess is high";
        count--;
        text2.innerHTML = `💯 Chances: ${count}`
    }
    else {
        text[0].innerHTML = "🤩🤩 Hurray You Won 🤩🤩"
        quest.innerText = parseInt(inum.value);
        count --;
        text3.innerHTML = `🥇 Highscore: ${count}`
        parent.setAttribute('style','background-color: green;');  
    }

    if (count === 0){
        text[0].innerHTML = "You lost"
        count = 0;
        text2.innerHTML = "💯 Chances: 0"
    }
}
else{
    alert("Enter Valid Number")
}
}

function clearNum(){
    inum.value="";
}
