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
},




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
            petsVacinados++;
        }
    }
    console.log(`${petsVacinados} foram vacinados nesta campanha!`);
}

const adicionarPet = (nome, tipo, idade, raca, peso, tutor, vacinado, servicos) => 
    { 
        novoPet = {
            nome,
            tipo,
            idade,
            raca,peso,
            tutor,
            vacinado,
            servicos
        }
        pets.push(novoPet);
}

const darBanhoPet = (pet) => {
    pet.servicos.push('banho');
    console.log (`O serviço de banho foi realizado no ${pet.nome}.`);
    

}

const tosarPet = (pet) => {
    pet.servicos.push('tosa');
    console.log (`O serviço de tosa foi realizado no ${pet.nome}.`);
}

const apararUnhasPet = (pet)=> {
    pet.servicos.push('aparar unhas');
    console.log (`O serviço de aparar unhas foi realizado no ${pet.nome}.`);

 }
adicionarPet('garfield', 'cachoro', 1, 'pastor alemão', 15, 'marina', true, []);
darBanhoPet(pets[3]);
apararUnhasPet(pets[3]);
tosarPet(pets[3]);
console.log(pets);


// listarPets();
// vacinarPet(pet[0])

// campanhaVacina();

//console.log(pets)




