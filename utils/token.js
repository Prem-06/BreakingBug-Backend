const jwt = require("jsonwebtoken");

const createNewToken = (payload) => {
    // instead of process.getuid.SECRET_KEY it must be .env 
    // return jwt.sign({ userId: payload }, process.getuid.SECRET_KEY, { expiresIn: '10d' });
    return jwt.sign({ userId: payload }, process.env.SECRET_KEY, { expiresIn: '10d' });
}
// we are not exporting it 
module.exports={createNewToken}
