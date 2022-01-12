const del = require('del')

const folders = require('../config/folders')

module.exports = () => del(folders.clean)
