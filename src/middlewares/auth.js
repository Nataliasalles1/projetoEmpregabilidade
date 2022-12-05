const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

exports.checkAuth = (req, res, next) => {
    
    const authHeader = req.get('authorization');
    if (!authHeader) {
        return res.status(401).send({
            message: 'Você não possui autorização.',
            statusCode: 401
        });
    }
    
    const token = authHeader.split(' ')[1];
    console.log("token: ", token)
    
    if (!token) {
        return res.status(401).send({
            message: "Você precisa de um token para prosseguir"
        })
    }
    
    try {
        jwt.verify(token, SECRET, (err) => {
            if(err) {
                return res.status(401).send({
                    message: "Não autorizada."
                })    
            }
            next();
        })
    } catch(err) {
        console.error(err)
    }
}