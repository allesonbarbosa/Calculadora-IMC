const button = document.getElementById("button");

calculateIMC = () =>{
    const heightInput = document.getElementById("input-height");
    const weightInput = document.getElementById("input-weight");
    const calculatedIMC = document.getElementById("calculated-imc");
    const imcText = document.getElementById("imc-text");
    const weightValue = document.getElementById("weight-value");
    const weightStatus = document.getElementById("weight-status");

    const imc = (weightInput.value / (Math.pow(heightInput.value,2))).toFixed(1);

    calculatedIMC.innerHTML = imc;

    if(imc<18.4){
        calculatedIMC.style.color = "blue";
        imcText.style.color = "blue";
        imcText.innerHTML = "Você está abaixo do seu Peso.";
        const newWeight = calculateWeightHealthy(imc,heightInput.value,weightInput.value);
        weightStatus.innerHTML = "Ganhar";
        weightValue.innerHTML = newWeight;
    }else if(imc >= 18.5 && imc <= 24.9){
        calculatedIMC.style.color = "green";
        imcText.style.color = "green";
        imcText.innerHTML = "Você está no seu Peso ideal.";
        weightStatus.innerHTML = "Manter";
        weightValue.innerHTML = weightInput.value;
    }else if(imc >=25 && imc <= 29.9){
        calculatedIMC.style.color = "yellow";
        imcText.style.color = "yellow";
        imcText.innerHTML = "Você está com <b>Sobrepeso</b>.";
        const newWeight = calculateWeightHealthy(imc,heightInput.value,weightInput.value);
        weightStatus.innerHTML = "Perder";
        weightValue.innerHTML = newWeight;
    }else if(imc >=30 && imc <= 34.9){
        calculatedIMC.style.color = "orange";  
        imcText.style.color = "orange";
        imcText.innerHTML = "Você está com <b>Obesidade Grau I</b>.";
        const newWeight = calculateWeightHealthy(imc,heightInput.value,weightInput.value);
        weightStatus.innerHTML = "Perder";
        weightValue.innerHTML = newWeight;
    }else if(imc >=35 && imc <= 39.9){
        calculatedIMC.style.color = "red";  
        imcText.style.color = "red";
        imcText.innerHTML = "Você está com <b>Obesidade Severa Grau II</b>.";
        const newWeight = calculateWeightHealthy(imc,heightInput.value,weightInput.value);
        weightStatus.innerHTML = "Perder";
        weightValue.innerHTML = newWeight;
    }else{
        calculatedIMC.style.color = "purple";  
        imcText.style.color = "purple";
        imcText.innerHTML = "Você está com <b>Obesidade Mórbida Grau III</b>.";
        const newWeight = calculateWeightHealthy(imc,heightInput.value,weightInput.value);
        weightStatus.innerHTML = "Perder";
        weightValue.innerHTML = newWeight;
    }
}
calculateWeightHealthy = (imc,height,weight) =>{
    if(imc < 18.4){
        const imcHealthy = 18.5;
        const weightHealthy = (imcHealthy * Math.pow(height,2)).toFixed(2);
        const newWeight = (weightHealthy - weight).toFixed(2);
        return newWeight;
    }else{
        const imcHealthy = 24.9;
        const weightHealthy = (imcHealthy * Math.pow(height,2)).toFixed(2);
        const newWeight = (weight - weightHealthy).toFixed(2);
        return newWeight;
    }
}
button.addEventListener("click", calculateIMC);
