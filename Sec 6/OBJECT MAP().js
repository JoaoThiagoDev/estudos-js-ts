const pessoas = [
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'João' },
    { id: 1, nome: 'Pedro' },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa }
// }

// console.log(novasPessoas) -> pq não é viável: mudou a ordem dos objetos e a chave virou uma String, quando deveria ser Number

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa })
}
console.log(novasPessoas)