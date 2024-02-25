import './assets/css/style.css';
import GeraCPF from './modules/geraCPF';


(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.resultado');

    cpfGerado.innerHTML = gera.geraNovoCPF();
})();