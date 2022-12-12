const UserSchema = require('../models/UserModel'); // importei o model
const bcrypt = require('bcrypt'); // importei o bcrypt para criptografar a senha
const jwt = require('jsonwebtoken'); // importei o jwt para gerar o token

const SECRET = process.env.SECRET; // importei a secret para ser usada pelo JWT na geracao do token

const login = (req, res) => {
  try {

    UserSchema.findOne({ email: req.body.email }, (error, user) => {
      console.log("Usuário: ", user)
      if (!user) {
        return res.status(404).send({
          message: 'Usuário não encontrado',
          email: `${req.body.email}`
        });
      }

      const validPassword = bcrypt.compareSync(req.body.password, user.password)
      console.log("A SENHA EH VALIDA AMOR?", validPassword)

      if (!validPassword) {
        return res.status(401).send({
          message: "Senha ou email inválido, tente novamente",
          statusCode: 401
        })
      }

      const token = jwt.sign({ name: user.name }, SECRET);
      console.log("Token: ", token)

      res.status(200).send({
        message: "Bem vinda!",
        token
      })
    })
  } catch (err) {
    console.error(err)
  }
};

const createUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword

  const emailExists = await UserSchema.exists({ email: req.body.email })

  if (emailExists) {
    return res.status(409).send({
      message: 'Email já cadastrado',
    })
  }

  try {
    const newUser = new UserSchema(req.body)

    const savedUser = await newUser.save()

    res.status(201).send({
      message: 'User cadastrado com sucesso!',
      savedUser,
    })
  } catch (err) {
    console.error(err)
    res.status(500).send({
      message: err.message,
    })
  }
}

const getAllUsers = async (req, res) => {
  UserSchema.find(function (err, users) {
    if (err) {
      res.status(500).send({
        message: err.message
      })
    }
    res.status(200).json({
      message: "User found",
      Users: users
    })
  })
}

const deleteUserById = async (req, res) => {
  try {
    const user = await UserSchema.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    await user.delete();
    res.status(200).json({ message: "Usuário deletado com sucesso." })

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

module.exports = {
  login,
  createUser,
  getAllUsers,
  deleteUserById
};