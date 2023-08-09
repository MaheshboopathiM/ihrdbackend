const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;

const jsonwebtoken = (data) => {
    console.log(data)
    const first_name = data.first_name;
    const last_name = data.last_name;
    const user_type = data.user_type;
    const email_id = data.email_id;
    const id = data.id;

    const token = jwt.sign({
        first_name: first_name,
        last_name: last_name,
        email_id: email_id,
        user_type: user_type,
        user_id:id
    }, JWT_KEY, { expiresIn: '48h' })

    return token;
}


module.exports = jsonwebtoken;