require('dotenv').config();

let PORT = process.env.PORT;
let DATABASE_URI = process.env.DATABASE_URI;

module.exports = {
    PORT,
    DATABASE_URI
}