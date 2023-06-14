import {createPool} from "mysql2/promise";

const pool = createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: 3306,
    database: "productsdb"
})

export { pool }

