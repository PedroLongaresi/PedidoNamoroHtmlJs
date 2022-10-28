document.querySelector("#button1").addEventListener('mouseover', (e) => { 
    e.preventDefault();
    createButtons(1)
});
document.querySelector("#button").addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href ="decisao.html";  
});



function createButtons(idOld){
    let idNew = idOld + 1;
    let exec = idOld + 1

    if(idOld === 1){
        document.querySelector('#button' + `${idOld}`).remove();
    }
    else{
        document.querySelector('#box-b-' + `${idOld}`).remove();
    }

    if(idOld === 7){
       idNew = 1;
    }
    
    let div = document.createElement("div");
    let button = document.createElement("button");
      
    
    if(exec <= 2){
        var string ="Não, sai fora! 💔";
    }else if(exec === 3){
        var string = "Não 💔(Para de ser insistente haha) ";
    }else if(exec === 4){
        var string = "Não 💔(Pode tentar mas não vai fugir)";
    }else if(exec === 5){
        var string = "Não 💔(Para de ser insistente 💔)";
    }else if(exec => 6){
        var string = "Não 💔(Clica logo no sim amor)";
    }

    let textButton = document.createTextNode(string)
    button.appendChild(textButton);

    div.appendChild(button);
    button.addEventListener('mouseover', () => { createButtons(idNew)});
   
    if(idNew === 1){
        button.setAttribute('id', "button"+`${idNew}`);
        document.querySelector('.button-box').appendChild(button);
    }else{
        div.setAttribute('id', "box-b-"+`${idNew}`);
        button.setAttribute('class', "box-b-b");
        button.style.animation = "wiggle 4s 0.1s infinite";
        document.querySelector('.container').appendChild(div);
    }
}