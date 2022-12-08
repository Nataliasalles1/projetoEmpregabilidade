const app = require('../app');
const request = require('supertest');
const model = require('../models/ColaboradoraSchema');

describe('Colaboradora Controller', () => {
    const colaboradoraMock = {
        nome: "Colaboradora Teste",
        cpf: "123456789101122",
        telefone:"telefoneteste",
        domicilio: false,
        local_proprio:true,
        endereco: {
            cep: 'cepteste',
            rua: 'rua teste',
            numero: 12,
            complemento:'complementoteste',
            estado: 'estadoteste',
            cidade: 'cidadeteste',
            bairro: 'bairroteste'
        },
        modalidade: 'modalidadeteste',
        forma_pagamento: 'Pagamentoteste'
    }
    beforeAll(async () => { 
        const newColaboradora = new model(colaboradoraMock)
        await newColaboradora.save()

        colaboradoraMock.id = newColaboradora._id

    })
test('GET /colaboradora/getall', (done) => {
    request(app)
        .get('/colaboradora/getall')
        .expect(200)
        .expect((res) => {
            expect(res.body.message).toBe("Colaboradoras encontradas")
        })
        .end((err) => {
            if (err) return done(err)
            return done()
        })
})

test('GET /colaboradora/buscar/:id', (done) => {
    request(app)
        .get('/colaboradora/buscar/' + colaboradoraMock.id)
        .expect(200)
        .expect((res) => {
            expect(res.body.message).toBe(`Colaboradora correspondente ao ID digitado`)
        })
        .end((err) => {
            if (err) return done(err)
            return done()
        })
})

test('POST /colaboradora/criar', (done) => {
    const colaboradoraBody = {
        nome: "Colaboradora Teste",
        cpf: "123456789101122",
        telefone:"telefoneteste",
        domicilio: false,
        local_proprio:true,
        endereco: {
            cep: 'cepteste',
            rua: 'rua teste',
            numero: 12,
            complemento:'complementoteste',
            estado: 'estadoteste',
            cidade: 'cidadeteste',
            bairro: 'bairroteste'
        },
        modalidade: 'modalidadeteste',
        forma_pagamento: 'Pagamentoteste'
    }
    request(app)
        .post('/colaboradora/criar')
        .send(colaboradoraBody)
        .expect(201)
        .expect((res) => {
            expect(res.body.colaboradora.nome).toBe("Colaboradora Teste")
        })
        .end((err) => {
            return done(err)
        })
})

test('PATCH /colaboradora/update/:id', (done) => {
    const colaboradoraBody = {
        telefone:"testepatchtelefone", 
        domicilio: true,
        local_proprio: true,    
        endereco:{
            cep: 'cepteste',
            rua: 'ruateste',
            numero: 44,
            complemento:'complementoteste',
            estado: 'estadoteste',
            cidade: 'cidadeteste',
            bairro: 'bairroteste'
            },
        modalidade:'testepatchmodalidade',
        forma_pagamento:'testepatchpagamento'
        }
        request(app)
        .patch('/colaboradora/update/' + colaboradoraMock.id)
        .send(colaboradoraBody)
        .expect(200)
        .expect((res) => {
            expect(res.body.message).toBe(`Colaboradora atualizada com sucesso.`)
        })
        .end((err)=>{
            if(err) return done(err)
            return done()
        })
})

/*test('DELETE /colaboradora/delete/:id', (done) => {
    const colaboradoraBody = {
        id: "",
    }
    request(app)
        .delete('/colaboradora/delete/' + colaboradoraMock.id)
        .send(colaboradoraBody)
        .expect(200)
        .expect((res) => {
            expect(res.body.message).toBe(`A colaboradora ${colaboradora.nome} foi removida com sucesso.`)
        })
        .end((err) => {
            if (err) return done(err)
            return done()
        })
})*/













})