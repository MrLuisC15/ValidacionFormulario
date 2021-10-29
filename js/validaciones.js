/**
    Validaciones.js
    Script para validar un formiulario
    @author Luis C Marzal
    @license GPL V3 2021

**/
'use strict'

window.onload = iniciar

function iniciar() {
    let formulario = document.forms[0]

    formulario.onsubmit = validar

    let select = document.getElementById('sComunidad')
    select.onchange = validarComunidad
}

function validar() {

    //Comprobamos la aceptacion de la politica de privacidad
    if(!document.getElementById('iPolitica').checked)
        return false

    if(document.getElementById('nombre').length < 2)
        return false


    
    // console.log('Estoy validando');
    // return false
}

function validarComunidad(){
    if(document.getElementById('sComunidad').value == 11){
        select = document.createElement('select')
        input1 = document.createElement('input')
        input2 = document.createElement('input')
        input1.appendChild(document.createTextNode('BADAHO'))
        input2.appendChild(document.createTextNode('Campo'))
        document.insertBefore(select, document.getElementById('sComunidad'))
        
    }
}