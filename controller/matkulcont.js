const matkulModel = require('../models/matkulmodels')

exports.insertMatkul = (data) =>
    new Promise((resolve, reject) => {
        matkulModel.create(data)
            .then(res => {
                resolve({
                    error: false,
                    pesan: 'Input Mata Kuliah Sukses'
                })
            })
            .catch(() => {
                reject({
                    error: false,
                    pesan: 'Input Mata Kuliah Error'
                })
            })
    })