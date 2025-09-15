const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João']

function retornarUsuarios() {
    return usuarios
}

function adicionarNovoNome(nome) {
    usuarios.push(nome);
}
    
module.exports = {
    retornarUsuarios,
    adicionarNovoNome
};