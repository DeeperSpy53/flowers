const jwt = require('jsonwebtoken');
const db = require('../db_connect');

class Token{
    generateTokens(payLoad) {
        const accessToken = jwt.sign(payLoad, process.env.JWT_ACCESS);
        const refreshToken = jwt.sign(payLoad, process.env.JWT_REFRESH);

        return { accessToken, refreshToken };
    }

    async saveToken(userId, refreshToken){
        const resultQuery = await db.query(`SELECT * FROM clients_token WHERE id = ${userId}`);
        if(resultQuery.rows[0] != undefined){
            await db.query(`UPDATE clients_token SET refreshToken = '${refreshToken}'  WHERE client_id=${userId}`);
            return;
        }

        await db.query(`INSERT INTO clients_token (client_id, refreshToken)
                        VALUES(${userId}, '${refreshToken}')`);
    }

    validateRefreshToken(token){
        try {
            jwt.verify(token, process.env.JWT_REFRESH);
        } catch (error) {
            return null;
        }
    }

    validateAccessToken(token){
        try {
            jwt.verify(token, process.env.JWT_ACCESS);
        } catch (error) {
            return null;
        }
    }
}

module.exports = new Token();