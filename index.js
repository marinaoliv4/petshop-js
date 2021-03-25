const nomePetshop = "PETSHOP AVANADE"

let pets = [{
    nome: 'Tatinha',
    tipo: 'cachorro',
    idade: 7,
    raca: 'miniatura pinscher',
    peso: 3,
    tutor: 'Katia',
    vacinado: true,
    servicos: ['banho']
},
{ 
    nome: 'Beckinho',
    tipo: 'cachorro',
    idade: 6,
    raca: 'pug',
    peso: 5,
    tutor: 'Taiza',
    vacinado: false,
    servicos: ['banho', 'tosa']
},
{
    nome: 'Rayla',
    tipo: 'cachoro',
    idade: 7,
    raca: 'Pitbull',
    peso: 10,
    tutor: 'Brunna',
    vacinado: false,
    servicos: ['banho', 'corte de unha']
}


];

const listarPets = () => {
    for (let pet of pets){
    // for(let i = 0; i < pets.length; i++){
        // console.log(pets[i].nome + " - " + pets[i].raca);
        console.log(`O nome do pet é  ${pet.nome}`);
        

    }
}
// listarPets();
// console.log(pets);

const vacinarPet = (pet) => {
    
        if (pet.vacinado === true) {
          console.log(`${pet.nome} já está vacinado.`);
        }

        else{
            pet.vacinado = true;
            console.log(`${pet.nome} foi vacinado com sucesso.`);
        }
}

const campanhaVacina = ()=> {
    petsVacinados = 0;
    for(let pet of pets) {
        if(pet.vacinado === false){
            pet.vacinado = true;
            petsVacinados++
        }
    }
    console.log(`${petsVacinados} foram vacinados nesta campanha!`);
}

campanhaVacina(pets);




