const path = require('path')
const app = path()

app.get('/', (req, res) => {res.sendFile(path.join(_dirname, 'views/index.html'))})
app.get('/cadastro', (req, res) => {res.sendFile('voce esta na pagina de cadastro')})
app.get('/login', (req, res) => {res.sendFile('voce esta na pagina de login')})

app.listen(3000, () => console.log('servidor rodando na url http://localhost:3000'))