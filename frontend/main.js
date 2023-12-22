import 'core-js/stable'

import './assets/css/style.css'

import 'regenerator-runtime/runtime'

import GeraCPF from '../src/modules/GeraCPF'

(function() { // função auto-executada
    
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf()
})()