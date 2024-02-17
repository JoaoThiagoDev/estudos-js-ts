/*
 UTILIZAÇÃO DO MÉTODO:
 array.splice(indexMudar, qtdItensContinuar, ...elementosAdd)
*/

const nomes = ['João', 'Rafael', 'Thiago', 'Victor', 'Fernando', 'Kerlon', 'Kezia', 'Luan', 'Davi', 'Larissa', 'Carlos', 'Matheus', 'Abner'];

// simulando unshift
nomes.splice(0, 0, 'Unshift');
console.log("Unshift:", nomes);

// simulando shift
nomes.splice(0, 1);
console.log("Shift:", nomes);

// simulando push
nomes.splice(nomes.length, 0, 'Push');
console.log("Push", nomes);

// simulando pop
nomes.splice(-1, 1);
console.log("Pop:", nomes);
