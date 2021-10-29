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
        let select = document.createElement('select')
        select.classList.add('listaextremadura')
        let option1 = document.createElement('option')
        let option2 = document.createElement('option')
        option1.appendChild(document.createTextNode('BADAHO'))
        option2.appendChild(document.createTextNode('Campo'))

        select.appendChild(option1)
        select.appendChild(option2)
        document.getElementById('comuni').appendChild(select)
    }
}