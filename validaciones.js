window.onload = function () {

    function esNif(nif) {
        nif = nif.trim().toUpperCase();
        
        const letraInicio = nif[0];
        const numeros = nif.substr(1, nif.length - 2);
        let letraControl = nif[nif.length - 1];
        
        const letrasInicio = ['X', 'Y', 'Z', 'L', 'K', 'M'];
    
        if (letrasInicio.includes(letraInicio)) {
            if (letraInicio === 'X') letraInicio = '0';
            else if (letraInicio === 'Y') letraInicio = '1';
            else if (letraInicio === 'Z') letraInicio = '2';
    
            const nifNumerico = letraInicio + numeros;
            const letrasControl = 'TRWAGMYFPDCHXBNJZSQVHLCKE';
            const letraCalculada = letrasControl[parseInt(nifNumerico) % 23];
    
            if (letraCalculada === letraControl) {
                return 1;
            } else {
                return 2;
            }
        } else if (/^\d{6,8}$/.test(numeros) && parseInt(numeros) >= 100000) {
            return 3;
        } else {
            return 0;
        }
    }
    
    function validarNif() {
        const inputNif = document.querySelector('input[name="nif"]');
        const nif = inputNif.value;
        const resultado = esNif(nif);
    
        console.log('Resultado:', resultado);
    }
    
}