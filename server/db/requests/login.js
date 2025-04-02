const db = require('../db_connect');
const bcrypt = require('bcrypt');
const token = require('./token');

class Login{
    async login(req, res){
        console.log(req.body);

        const {phone, password} = req.body;
        let resQuery = await db.query(`SELECT * FROM clients WHERE phone='${phone}'`);
        const user = resQuery.rows[0];

        if(user != undefined){
            const passHash = await bcrypt.compare(password, user.password);
            if(passHash){
                const tokens = token.generationTokens();
                token.saveToken(user.id, tokens.refreshToken);
    
                res.cookie('refreshToken', token.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
                res.json({id: user.id, phone: user.phone, accessToken: token.accessToken});
                
                return;
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

            const user = resQuery.rows[0];
            const tokens = token.generationTokens();
            token.saveToken(user.id, tokens.refreshToken);

            res.cookie('refreshToken', token.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            res.json({id: user.id, phone: user.phone, accessToken: token.accessToken});
        } else{
            res.json('Пользователь с таким номером уже зарегистрирован!');
        }
    }
}

module.exports = new Login();