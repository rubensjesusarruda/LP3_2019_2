const requisicao = require('supertest');
const app = require('./app');

describe('Testa o serviço de inversão de string',() =>{

    test('Deve retornar a string original inveertida',async ()=>{
        let str = 'animal';
        /**
         * Realiza uma requisição ao serviço de inversão de string, passando a palavra "animal" como parametro
         * a resposta do serviço será armazenada na variavel "resposta".
         */
        let resposta = await requisicao(app).get(`/inverter/${str}`);
        //bory representa o corpo da resposta 
        //let resultado = resposta.body.resultado;
        let {resultado} = resposta.body;
        /**
         * Espero que o valor da variavel resultado seja igual a "lamina"
         */
        expect(resultado).toBe('lamina');

       /* str= 'b';
        let resposta = await requisicao(app).get(`/inverter/${str}`);
        let {resultado} = resposta.body;
        expect(resultado).toBe('b');

        str= 'LandRover Evoque';
        let resposta = await requisicao(app).get(`/inverter/${str}`);
        let {resultado} = resposta.body;
        expect(resultado).toBe('euqovE revoRdnaL');
*/
    });

    describe('Testa o serviço de alidação de CPFs', ()=> {
        test('Deve retornar true ao revceber um cpf válido', async()=>{
            const cpfsVaidos=[
                '04117722107',
                '14733715897',
                '82415211206',
               ];
               for (let i = 0; i<cpfsVaidos.length; i++){
                   let resposta = await requisicao(app).get(`/cpf/${cpfsVaidos[i]}`);
                   let {valido}= resposta.body;
                   expect(valido).toBe('valido');
               }
        });
        test('Deve retornar false ao receber um cpf invalido', async () =>{
            const cpfsInvalidos = [
                '04117722106',
                '14733715895',
                '82415211204',
                '00000000000',
                '123',
                'abc'
            ];
        })
    });
});