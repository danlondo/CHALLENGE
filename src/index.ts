import express from 'express'//ESModules (Cuando tenemos import y export)
import tareaRouter from './routes/tareas'
import { Database } from './mysql'

const app = express()
const database = new Database()
app.use(express.json()) //Este es el middleware que transforma la req.body a un json

const PORT = 3000

app.get('/', async (_req, res) => {
    try {
        const connection = database.getConnection();
        const [rows] = await connection.query('SELECT * FROM tareas');
        res.json(rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
    }
});



app.get('/ping', (_req, res) => {

    console.log('Alguien envio un ping')
    res.send('pong')
})

app.use('/', tareaRouter)


database.connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database:', error);
});
