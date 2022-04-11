document.querySelector('.chat-open').addEventListener("click", function(){
    document.querySelector('.main-chat').style.display = 'block'
    document.querySelector('.chat').classList.add('chat-active');
})
document.querySelector('.chat-close').addEventListener("click", function(){
    document.querySelector('.main-chat').style.display = 'none'
    document.querySelector('.chat').classList.remove('chat-active');
})

document.querySelector('.menu .button button').addEventListener("click", function(){
    document.querySelector('.call').style.display = "block"
})

document.querySelector('.callclose').addEventListener("click", function(){
    document.querySelector('.call').style.display = "none"
})

document.querySelector('.frontend').addEventListener("click", function(){  
    document.querySelector('.frontend').classList.toggle('paragraph-active');
})
document.querySelector('.backend').addEventListener("click", function(){  
    document.querySelector('.backend').classList.toggle('paragraph-active');
})
document.querySelector('.mobile').addEventListener("click", function(){  
    document.querySelector('.mobile').classList.toggle('paragraph-active');
})
document.querySelector('.cms').addEventListener("click", function(){  
    document.querySelector('.cms').classList.toggle('paragraph-active');
}) 
document.querySelector('.database').addEventListener("click", function(){  
    document.querySelector('.database').classList.toggle('paragraph-active');
})
document.querySelector('.infra').addEventListener("click", function(){  
    document.querySelector('.infra').classList.toggle('paragraph-active');
})

document.querySelector('.question1').addEventListener("click", function(){  
    document.querySelector('.question1').classList.toggle('paragraph-active');
})
document.querySelector('.question2').addEventListener("click", function(){  
    document.querySelector('.question2').classList.toggle('paragraph-active');
})
document.querySelector('.question3').addEventListener("click", function(){  
    document.querySelector('.question3').classList.toggle('paragraph-active');
})
document.querySelector('.question4').addEventListener("click", function(){  
    document.querySelector('.question4').classList.toggle('paragraph-active');
})
document.querySelector('.question5').addEventListener("click", function(){  
    document.querySelector('.question5').classList.toggle('paragraph-active');
})
