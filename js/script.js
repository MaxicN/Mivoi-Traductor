var speak = document.getElementById('speak');
var textarea = document.getElementById('textarea');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var traducir = document.getElementById('traducir');
var escuchar = document.getElementById('escuchar');
var resultado = document.getElementById('resultado');
const codigoIdiomas = ["es", "en", "pt", "ru", "zh", "ja", "bn", "fil", "ko", "it", "fr"];
const idiomas = ["Spanish Latin American Female","US English Female", "Portuguese Female", "Russian Female", "Chinese Female", "Japanese Female", "Hindi Female", "Filipino Female", "Korean Female", "Italian Female", "French Female"];
responsiveVoice.setDefaultRate(0.8);

/*Si se presiona boton de microfono */
speak.addEventListener('click', function () {
    recognition.start();
    var idiomaEntrada = document.querySelector('#idiomaEntrada');
    for (var idiomaNum=0 in codigoIdiomas){ /* recorrera los codigos de los idiomas, asignandole un numero a cada uno de 0 a n */
        if (codigoIdiomas[idiomaNum] == idiomaEntrada.value){
            recognition.lang = codigoIdiomas[idiomaNum];
            console.log(codigoIdiomas[idiomaNum]);
            break;
        }
    }
    speak.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16"><path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/></svg>';
    textarea.innerHTML = 'Escuchando...';
    /* si se escribio en el textarea bajo el microfono*/
    if (textarea.value.trim() !== "") {
        traducir.removeAttribute('disabled');
    } else {
        traducir.setAttribute('disabled', "true");
        escuchar.setAttribute('disabled', "true");
    }
})
recognition.onresult = function (e) {
    var transcript = e.results[0][0].transcript;
    speak.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mic-mute-fill" viewBox="0 0 16 16"><path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"/><path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"/></svg> ';
    textarea.innerHTML = transcript;
    traducir.setAttribute("style", "animation-name: desbloquear;animation-duration: 1.5s; animation-fill-mode: forwards;cursor:pointer;");
}
/*Si se presiona boton de traducir */
traducir.addEventListener('click', function () {
    var idioma = document.querySelector('#idioma');
    /* var idiomaEntrada = document.querySelector('#idiomaEntrada'); */
    escuchar.removeAttribute('disabled');
    escuchar.setAttribute("style", "animation-name: desbloquear;animation-duration: 1.5s; animation-fill-mode: forwards;cursor:pointer;");
    var text = textarea.value;
    var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl='+idiomaEntrada.value+'&tl=' + idioma.value + '&dt=t&q=' + text;
    $.get(url, function (data) {
        resultado.innerHTML = data[0][0][0];
        console.log("datos: "+data);
    })

});
/*Si se presiona boton de escuchar */
escuchar.addEventListener('click', function(){
    for (var idiomaNum=0 in codigoIdiomas){ /* recorrera los codigos de los idiomas, asignandole un numero a cada uno de 0 a n */
        if (codigoIdiomas[idiomaNum] == idioma.value){
            responsiveVoice.setDefaultVoice(idiomas[idiomaNum]);
            break;
        }
    }
    responsiveVoice.speak(resultado.innerHTML);
});
