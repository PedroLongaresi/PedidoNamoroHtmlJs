const imgButton = document.querySelector('.container');

imgButton.addEventListener('click', function(){
const audio = document.querySelector('audio');

audio.muted =false;
audio.play();
});

document.querySelector("#button").addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href = "[LINK DO WHATSAPP]";  
});