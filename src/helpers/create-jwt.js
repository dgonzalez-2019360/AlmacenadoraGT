const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET_KEY;

const generateJWT = async (uId, user, email) => {
    const playload = {uId, user, email};

    try{
        const token = await jwt.sign(playload, secret, {
            expiresIn: '1h'
        });
        return token;
        
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {generateJWT}