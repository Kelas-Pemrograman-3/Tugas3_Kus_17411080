const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MatkulSchema = new Schema({
    namamatkul: {
        type: String
    },
    jam: {
        type: String
    },
    hari: {
        type: String
    },
    ruangan: {
        type: String
    },
    IDdosen: {
        type: String
    },
    namadosen: {
        type: String
    }
})

module.exports = mongoose.model('matkul', MatkulSchema)
