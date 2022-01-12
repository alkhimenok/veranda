const { Router } = require('express')

const router = Router()

router.get('/basket', (req, res) => res.render('basket', { title: 'this catalog' }))

module.exports = router
