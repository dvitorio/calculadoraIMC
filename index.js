function calcularIMC(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
        if((peso>0 && peso<=250 || altura>1.00 && altura<=2.72)){
            var imc = peso/(altura*altura);
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
