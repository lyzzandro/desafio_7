const express = require("express");

const app = express();
const port = 3000;

const cors = require("cors");

app.use(cors());

let blocos = [
    {
        nome: "O Python do vovô não sobe mais",
        cidade: "São Paulo - SP",
        capa: "../assets/img_capas/img1.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Todo mundo null",
        cidade: "Florianópolis - SC",
        capa: "../assets/img_capas/img2.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Hoje dou exception",
        cidade: "Curitiba - PR",
        capa: "../assets/img_capas/img3.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Manda Node",
        cidade: "Salvador - BA",
        capa: "../assets/img_capas/img4.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Só no back-end",
        cidade: "São Paulo - SP",
        capa: "../assets/img_capas/img5.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Esse anel não é de Ruby",
        cidade: "São Paulo - SP",
        capa: "../assets/img_capas/img6.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Pimenta no C# dos outros é refresco",
        cidade: "Rio de Janeiro - RJ",
        capa: "../assets/img_capas/img7.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "EnCACHE aqui",
        cidade: "Porto Alegre - RS",
        capa: "../assets/img_capas/img8.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Não valho nada mas JAVA li",
        cidade: "São Paulo - SP",
        capa: "../assets/img_capas/img9.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
];

app.get("/blocos", (req, res) => {
    const { nome, cidade } = req.query;

    if (nome && !cidade) {
        return res.json(blocos.filter((bloco) => bloco.nome.includes(nome)));
    }

    if (!nome && cidade) {
        return res.json(blocos.filter((bloco) => bloco.cidade === cidade));
    }

    if (nome && cidade) {
        return res.json(
            blocos
                .filter((bloco) => bloco.nome.includes(nome))
                .filter((bloco) => bloco.cidade === cidade)
        );
    }

    return res.json(blocos);
});

app.listen(port, () => {
    console.log("App rodando na porta: " + port);
});
