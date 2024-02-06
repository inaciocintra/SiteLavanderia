//menu responsivo---------------------------------------------------
function menushow(){
    var menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src="/imgs/menu.svg"
    }
        else{
            menuMobile.classList.add('open')
            document.querySelector('.icon').src="/imgs/closewhite.svg"
        }
    }
    // troca de imagens automatica no slider
    let count = 1;
    document.getElementById("radio1").checked = true;
    
    setInterval(
        function aciona(){proximaimagem();},5000// milisegundos
    )
    
    function proximaimagem(){
        count ++;
        if(count>3){
            count = 1;
        }
        document.getElementById("radio"+count).checked = true;
    }