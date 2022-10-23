// VARIAVEIS!!!!

var texto1 = document.getElementById('texto1')
var texto2 = document.getElementById('texto2')
var texto3 = document.getElementById('texto3')
var texto4 = document.getElementById('texto4')
let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let text3 = document.getElementById('text3')
let text4 = document.getElementById('text4')
let alfabeto = "abcdefghijklmnopqrstuvwxyz"

//29 -> 28 - 24

// FUNCAO CODIFICAR E DECODIFICAR BASE64

function encodeBase64(){
    var emBase64 = btoa(texto3.value)
    text1.innerHTML = emBase64
}


function decodeBase64(){
    var emBase64dec = atob(texto4.value)
    text2.innerHTML = emBase64dec
}

// FUNCAO CODIFICAR E DECODIFICAR CESARCIPHER

function cesarCode(){

    let code = texto1.value
    let result = ""
    let reversed = alfabeto.split("").reverse().join("")

    for(let l of code) {
        if(l == " ") continue;

        l = l.toLowerCase()

        let index = alfabeto.indexOf(l)
        //palavra velha 11

        
        //palavra nova 14
        let newIndex = (index + 3) % alfabeto.length
        
       
        l = alfabeto.charAt(newIndex)
        result += l
        text3.value = result
        
    }
}

function cesarDecode(){
    let code = texto2.value
    let result = ""
    let reversed = alfabeto.split("").reverse().join("")

    for(let l of code) {
        if(l == " ") continue;

        l = l.toLowerCase()

        let index = alfabeto.indexOf(l)
        //palavra velha 11

        
        //palavra nova 14
        let newIndex = (index - 3) % alfabeto.length
        
       
        l = alfabeto.charAt(newIndex)
        result += l
        text4.value = result 
        
    }
}




    

