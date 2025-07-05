import express  from 'express';
const app = express();
import projectRoutes from './routes/project.routes.js'
import cors from 'cors'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/',(req, res) => {
    res.send('Hello World!')
})
app.use('/projects',projectRoutes)

export default app