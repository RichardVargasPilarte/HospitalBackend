const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect( process.env.DB_CNN,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // useCreteIndex: true
            });

        console.log('DB en linea');

    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la conexión con la BD revisar logs');
    }
}


module.exports = {
    dbConnection
}