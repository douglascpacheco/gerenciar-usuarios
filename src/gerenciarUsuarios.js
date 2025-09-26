const usuarios = [
    {
        nome: 'Matheus', 
        email: 'matheus@teste.com.br'
    },
    {
        nome: 'Marcos', 
        email: 'marcos@teste.com.br'
    },
    {
        nome: 'Lucas', 
        email: 'lucas@teste.com.br'
    },
    {
        nome: 'João', 
        email: 'joao@teste.com.br'
    }
    
   ]

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