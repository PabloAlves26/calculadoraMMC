
function calcular() {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById("altura").value/100
    let peso = document.getElementById("peso").value

    let imc = peso/altura ** 2;

    let text = "";

    if (imc < 18.5) {
        text=(`${nome}, você está muito magro(a)! É importanter mater uma dieta rica em carboidratos, como pães e macarrão`);
    } else if (imc < 24.9) {
        text=(`${nome}, seu peso está normal. Mantenha uma dieta regular e sempre lembre de calcular o seu IMC para saber como está sua saúde`);
    } else if (imc < 29.9) {
        text=(`${nome}, você está com sobre-peso! É recomendado que diminua seu peso mantendo uma dieta regular e praticando exercicios fisicos.`);
    } else if (imc < 39.9) {
        text=(`${nome}, você está com obesidade morbida! Atenção! Sua saúde está em risco. Procure um nutricionista e comece uma diéta já!`);
    }
    document.getElementById("textarea").innerText=text;
}