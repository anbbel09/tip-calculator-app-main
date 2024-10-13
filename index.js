let form = document.getElementById('form');
let porcentajes = form.querySelectorAll('.porcentaje');
let tipContainer = document.querySelector('.tipContainer');
let inputNumber;
let porcentaje;
let inputPerson;
let propinaValor;
let total;
let resultado;

form.addEventListener('input', (e) =>{
    let input = e.target;
    let reset =  document.querySelector('.reset');
  
    if(input.focus) reset.classList.remove('opacity-40');

    if(input.classList.contains('inputNumber')) inputNumber = input.value;

    if(input.classList.contains('inputPerson')){
        inputPerson = input.value;
        
        resultado = totalPersonas(inputPerson, total);     
    }
    
    reset.addEventListener('click', (e) =>{
        reset.classList.add('opacity-40');
        
        document.querySelector('.inputNumber').value = ''; 
        document.querySelector('.inputPerson').value = ''; 
        
        inputNumber = 0;
        inputPerson = 0;
        total = 0;
        propinaValor = 0;
        
        tipContainer.querySelector('.tipAmount').textContent = '0';
        tipContainer.querySelector('.totalPerson').textContent = '0';
    });
});

porcentajes.forEach((porcentaje) =>{
    porcentaje.addEventListener('click', (e) =>{
        porcentaje = e.target;
        propina(inputNumber, porcentaje);
    });
});


const propina = (inputNumber, porcentaje) => {
    let inputNumberValor = parseFloat(inputNumber);
    let porcentajeValor = parseFloat(porcentaje.placeholder);

    propinaValor = parseFloat((inputNumberValor * porcentajeValor / 100)).toFixed(2);

    total = parseFloat(inputNumberValor) + parseFloat(propinaValor);
}


const totalPersonas = (inputPerson, total) => {
    let totalPorPersona = (total / inputPerson).toFixed(2);
    let PropinaPersona = (propinaValor / inputPerson).toFixed(2);

    if (totalPorPersona == Infinity) totalPorPersona = 0;
    if (PropinaPersona == Infinity) PropinaPersona = 0;

    setContent('.tipAmount', PropinaPersona)
    setContent('.totalPerson', totalPorPersona)
    
    return [totalPorPersona, PropinaPersona];
}

const setContent = (element, value) => tipContainer.querySelector(element).textContent = value;

