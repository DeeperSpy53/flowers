const db = require('../db_connect');
const bcrypt = require('bcrypt');

class Login{
    async login(req, res){
        console.log(req.body);

        const {phone, password} = req.body;
        let resQuery = await db.query(`SELECT * FROM clients WHERE phone='${phone}'`);
        const user = resQuery.rows[0];

        if(user != undefined){
            const passHash = await bcrypt.compare(password, user.password);
            if(passHash){
                res.json(true)
            }

        } else{

        }

        res.json(false);
    }

    async reg(req, res){
        console.log(req.body);

        const {phone, name, password} = req.body;
        let resQuery = await db.query(`SELECT id FROM clients WHERE phone = '${phone}'`);
        if(resQuery.rows[0] === undefined){
            const passHash = await bcrypt.hash(password, 3);
            resQuery = await db.query(`INSERT INTO clients (phone, name, password) VALUES
                                                            ('${phone}', '${name}', '${passHash}')
                                                            RETURNING *`);

            res.json(true);
        } else{
            res.json('Пользователь с таким номером уже зарегистрирован!');
        }

    }
}

module.exports = new Login();