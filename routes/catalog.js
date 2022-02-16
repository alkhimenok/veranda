const { Router } = require('express')

const router = Router()

router.get('/catalog', (req, res) => {
	res.render('catalog', { title: 'this catalog' })
})

module.exports = router
