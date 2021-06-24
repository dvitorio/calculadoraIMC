function calcularIMC(){
    var peso = document.getElementById("peso").value.replace(",", ".");
    var altura = document.getElementById("altura").value.replace(",", ".");
        if((peso>0 && peso<=250 || altura>1.00 && altura<=2.72)){
            var imc = parseFloat(peso)/(parseFloat(altura)*parseFloat(altura));
            document.getElementById("imc-input").value = imc.toFixed(2);
        }
}
calcularIMC();

function limpar(){
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("imc-input").value = "";
}
limpar();
