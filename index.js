const express = require("express");

const server = express();

// Read JSON
server.app.use(
    express.urlencoded({
        extended: true,
    }),
)

server.use(express.json());

const cursos = ['Aprender ingles', 'desnvolvimento de games', 'viver de programção'];

// retorna um curso
server.get('/cursos/:index', async (req, res) => {
    const { index } = req.params

    res.json(cursos[index]);

})

// retornar todos os cursos
server.get('/cursos', async (req, res) => {
    res.json(cursos)
});

// criar um novo curso
server.post('/cursos', async (req,res) => {
    const { name } = req.body;
    cursos.push(name);

    res.json(cursos);
})

// atualizar um curso
server.put('/cursos/:index', async (req, res) => {
    const { index } = req.params;
    const { name } = req.body

    cursos[index] = name;

    res.json(cursos);
});

// deletar um curso
server.delete('/cursos/:index', async (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    res.json({ message: "O curso foi deletado"});
});

server.listen(8888, () => {
    console.log(`Server started on port 8888.`)
})