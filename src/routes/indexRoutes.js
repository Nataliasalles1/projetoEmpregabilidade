const router = require('express').Router()

router.get('/', (req,res)=>{
    res.send({
        "versao": "1.0",
        "titulo": "projetoEmpregabilidade",
        "descricao": "Um olhar sobre a importância da tecnologia na promoção de trabalhadores autônomos."
    })
})

module.exports = router