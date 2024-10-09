
let form = document.getElementById('form');
let porcentajes = form.querySelectorAll('.porcentaje');
let tipContainer = document.querySelector('.tipContainer');
let inputNumber;
let porcentaje;
let inputPerson;
let  propinaValor;
let total;
let resultado;


form.addEventListener('input', (e) =>{

    let input = e.target;
    let reset =  document.querySelector('.reset');
  
    if(input.focus){
        reset.classList.remove('opacity-40');
    } 

    if(input.classList.contains('inputNumber')){
        inputNumber = input.value;

    } 

    if(input.classList.contains('inputPerson')){
        inputPerson = input.value;
        
        resultado = totalPersonas(inputPerson, total); // Capturas el valor retornado       
    }
    
    reset.addEventListener('click', (e) =>{
        reset.classList.add('opacity-40');
        
        document.querySelector('.inputNumber').value = ''; // Vaciar input de números
        document.querySelector('.inputPerson').value = ''; // Vaciar input de personas
        
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
    let totalPorPersona = (total / inputPerson).toFixed(2);  // Lo que debe abonar cada persona
    let PropinaPersona = (propinaValor / inputPerson).toFixed(2);

    let tipAmount = tipContainer.querySelector('.tipAmount');
    tipAmount.textContent = PropinaPersona;
    let totalPerson = tipContainer.querySelector('.totalPerson');
    totalPerson.textContent = totalPorPersona; // Lo que debe abonar cada persona
    console.log(tipAmount, totalPerson);
    

    return [totalPorPersona, PropinaPersona]; // Retorna el valor
}






// porcentaje.forEach((porcentaje) =>{

    //     console.log('hola');
        
        
    //     porcentaje = elementClick.placeholder; // porcentaje de propina

          
    //     propina = (inputNumber.value * parseFloat(porcentaje) / 100).toFixed(2); // la propina

       
    //      // total ingresado de donde se saca la propina
    //     total = parseFloat(inputNumber.value) + parseFloat(propina); //Suma de lo gastado junto con la propina

    //     console.log(total);
        
    // })