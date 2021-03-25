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
    vacinado: true,
    servicos: ['banho', 'tosa']
},
{
    nome: 'Rayla',
    tipo: 'cachoro',
    idade: 7,
    raca: 'Pitbull',
    peso: 10,
    tutor: 'Brunna',
    vacinado: true,
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
listarPets();
// console.log(pets);