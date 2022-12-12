const app = require('../app');
const request = require('supertest');
const model = require('../models/ProfessionalModel');
const modelClient = require('../models/ClientModel')
const modelUser = require('../models/UserModel')
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

describe('Professional Controller', () => {

    const token = "bearer " + jwt.sign({ name: "Natalia" }, SECRET)

    const professionalMock = {
        name: "Colaboradora Teste",
        cpf: "123456789101122",
        telephone: "telefoneteste",
        residence: false,
        own_place: true,
        address: {
            zip_code: 'cepteste',
            road: 'rua teste',
            number: 12,
            complement: 'complementoteste',
            state: 'estadoteste',
            city: 'cidadeteste',
            district: 'bairroteste'
        },
        modality: 'modalidadeteste',
        payment_form: 'Pagamentoteste'
    }
    beforeAll(async () => {
        const newProfessional = new model(professionalMock)
        await newProfessional.save()

        professionalMock.id = newProfessional._id

    })
    test('GET /professional/getall', (done) => {
        request(app)
            .get('/professional/getall')
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe("Professionals found")
            })
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })

    test('GET /professional/modality', (done) => {
        request(app)
            .get('/professional/modality')
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe("Professionals found:")
            })
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })

    test('GET /professional/district', (done) => {
        request(app)
            .get('/professional/district')
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe("Professionals found:")
            })
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })

    test('GET /professional/search/:id', (done) => {
        request(app)
            .get('/professional/search/' + professionalMock.id)
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe(`Professional corresponding to the ID entered`)
            })
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })

    test('POST /professional/create', (done) => {
        const professionalBody = {
            name: "professional Teste",
            cpf: "123456789101122",
            telephone: "telefoneteste",
            residence: true,
            own_place: true,
            address: {
                zip_code: 'cepteste',
                road: 'rua teste',
                number: 12,
                complement: 'complementoteste',
                state: 'estadoteste',
                city: 'cidadeteste',
                district: 'bairroteste'
            },
            modality: 'modalidadeteste',
            payment_form: 'Pagamentoteste'
        }
        request(app)
            .post('/professional/create')
            .send(professionalBody)
            .expect(201)
            .expect((res) => {
                expect(res.body.Professional.name).toBe("professional Teste")
            })
            .end((err) => {
                return done(err)
            })
    })

    test('PATCH /professional/update/:id', (done) => {
        const professionalBody = {
            telephone: "testepatchtelefone",
            residence: true,
            own_place: true,
            address: {
                zip_code: 'cepteste',
                road: 'ruateste',
                numeber: 44,
                complement: 'complementoteste',
                state: 'estadoteste',
                city: 'cidadeteste',
                district: 'bairroteste'
            },
            modality: 'testepatchmodalidade',
            payment_form: 'testepatchpagamento'
        }
        request(app)
            .patch('/professional/update/' + professionalMock.id)
            .send(professionalBody)
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe(`Successfully updated professional.`)
            })
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })

    test('DELETE /professional/delete/:id', (done) => {
        request(app)
            .delete('/professional/delete/' + professionalMock.id)
            .set("authorization", token)
            .expect(200)
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })

})


describe('Client Controller', () => {

    const token = "bearer " + jwt.sign({ name: "Natalia" }, SECRET)

    const clientMock = {
        name: "Colaboradora Teste",
        cpf: "123456789101122",
        telephone: "telefoneteste",
        residence: false,
        own_place: true,
        address: {
            zip_code: 'cepteste',
            road: 'rua teste',
            number: 12,
            complement: 'complementoteste',
            state: 'estadoteste',
            city: 'cidadeteste',
            district: 'bairroteste'
        },
        modality: 'modalidadeteste',
        payment_form: 'Pagamentoteste'
    }
    beforeAll(async () => {
        const newClient = new modelClient(clientMock)
        await newClient.save()

        clientMock.id = newClient._id

    })

    test('GET /client/all', (done) => {
        request(app)
            .get('/client/all')
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe("Client found")
            })
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })

    test('GET /client/search/:id', (done) => {
        request(app)
            .get('/client/search/' + clientMock.id)
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe(`Client corresponding to the ID entered`)
            })
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })

    test('POST /client/create', (done) => {
        const clientBody = {
            name: "client Teste",
            cpf: "123456789101122",
            telephone: "telefoneteste",
            residence: true,
            own_place: true,
            address: {
                zip_code: 'cepteste',
                road: 'rua teste',
                number: 12,
                complement: 'complementoteste',
                state: 'estadoteste',
                city: 'cidadeteste',
                district: 'bairroteste'
            },
            modality: 'modalidadeteste',
            payment_form: 'Pagamentoteste'
        }
        request(app)
            .post('/client/create')
            .send(clientBody)
            .expect(201)
            .expect((res) => {
                expect(res.body.Client.name).toBe("client Teste")
            })
            .end((err) => {
                return done(err)
            })
    })

    test('PATCH /client/update/:id', (done) => {
        const clientBody = {
            telephone: "testepatchtelefone",
            residence: true,
            own_place: true,
            address: {
                zip_code: 'cepteste',
                road: 'ruateste',
                numeber: 44,
                complement: 'complementoteste',
                state: 'estadoteste',
                city: 'cidadeteste',
                district: 'bairroteste'
            },
            modality: 'testepatchmodalidade',
            payment_form: 'testepatchpagamento'
        }
        request(app)
            .patch('/client/update/' + clientMock.id)
            .send(clientBody)
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe(`Client updated successfully.`)
            })
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })

    test('DELETE /client/delete/:id', (done) => {
        request(app)
            .delete('/client/delete/' + clientMock.id)
            .set("authorization", token)
            .expect(200)
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })

})


describe('Auth Controller', () => {

    const token = "bearer " + jwt.sign({ name: "Natalia" }, SECRET)

    const userMock = {
        name: "User Teste",
        email: "user@mail.com",
        password: "senha",
    }
    beforeAll(async () => {
        const newUser = new modelUser(userMock)
        await newUser.save()

        userMock.id = newUser._id

    })

    test('GET /users/all', (done) => {
        request(app)
            .get('/users/all')
            .set("authorization", token)
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe("User found")
            })
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })

    /*test('POST /users/create', (done) => {
        const userBody = {
            name: "User Test",
            email: "user@mail.com",
            password: "senha",
            createdAt:"21-65-48626556"
        }
        request(app)
            .post('/users/create')
            .send(userBody)
            .expect(201)
            .expect((res) => {
                expect(res.body.message).toBe('User cadastrado com sucesso!')
            })
            .end((err) => {
                return done(err)
            })
    })

    test('POST users/login', (done) => {
        const userBody = {
            name: "user login test",
            email: "user@mail.com",
            password: "senha",
            createdAt:"21-65-48626556"
        }
        request(app)
            .post('users/login')
            .set("authorization", token)
            .send(userBody)
            .expect(201)
            .expect((res) => {
                expect(res.body.message).toBe("Bem vinda!")
            })
            .end((err) => {
                return done(err)
            })
    })*/

    test('DELETE /users/delete/:id', (done) => {
        request(app)
            .delete('/users/delete/' + userMock.id)
            .set("authorization", token)
            .expect(200)
            .end((err) => {
                if (err) return done(err)
                return done()
            })
    })


})