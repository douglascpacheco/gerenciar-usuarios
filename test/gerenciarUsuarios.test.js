const {retornarUsuarios, adicionarNovoNome} = require ('../src/gerenciarUsuarios');
const { expect } = require ('chai');

describe ('Testar as funções de Gestão de Usuários', function () {
    it ('Validar que posso adicionar um novo nome de usuário na lista', function() {
        //1. Adicionar um novo nome na lista de Usuários
            adicionarNovoNome({
                nome: 'Maria', 
                email: 'maria@teste.com.br'
    });
               
        //2. Retornar a lista de usuários na caixa lista de usuários
            const listarUsuario = retornarUsuarios();
           
        //3. Comparar se o novo nome está no fim da lista de usuários
            //expect(listarUsuario.at(-1).nome).to.equal('Maria');
            //expect(listarUsuario.at(-1).email).to.equal('maria@teste.com.br');
            expect(listarUsuario.at(-1)).to.eql({
                nome: 'Maria', 
                email: 'maria@teste.com.br'
                });
    });
});