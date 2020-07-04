function calculaPeso(){
  const peso = Number(document.querySelector('#peso').value.replace(',','.'));
  const altura = Number(document.querySelector('#altura').value.replace(',','.'));

    if(peso && altura){

      const imc = peso / (altura * altura);
      let resultado = '';
      if (imc <= 18.5) {
        resultado = `Baixo Peso`;

      } else if (imc > 18.5 && imc < 25 ){
        resultado = `Peso ideal`;

      } else if (imc >= 25 && imc < 30 ){
        resultado =`Sobrepeso`;

      }else if (imc >= 30 && imc < 35 ){
        resultado = `Obesidade Grau 1`;

      }else if (imc >= 35  && imc < 40 ){
        resultado =`Obesidade Grau 2`;

      }else if (imc >= 40){
        resultado =`Obesidade Grau 3`;
      }
      console.log('resultado',resultado);
      document.querySelector('#resultado').innerHTML = `${resultado} <br>\n ${imc.toFixed(2) }`;
  }
}
