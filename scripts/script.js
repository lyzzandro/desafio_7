/*Lista com todos os blocos*/

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
];

const content = document.querySelector(".content-main");

function addHTML() {
    content.innerHTML = "";

    const inputSearch = document.querySelector("input[type='search']").value;

    let resultados = blocos;

    if (inputSearch !== "") {
        resultados = blocos.filter((bloco) => bloco.nome.includes(inputSearch));
    }

    resultados.forEach((element) => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = element.capa;
        card.appendChild(img);

        const div = document.createElement("div");
        card.appendChild(div);

        const h3 = document.createElement("h3");
        h3.innerText = element.nome;
        div.appendChild(h3);

        const p = document.createElement("p");
        p.innerText = element.text;
        div.appendChild(p);

        const cidade = document.createElement("div");
        div.appendChild(cidade);

        const icon = document.createElement("img");
        icon.src = "../assets/location.svg";
        cidade.appendChild(icon);

        const pCidade = document.createElement("p");
        pCidade.innerText = element.cidade;
        cidade.appendChild(pCidade);

        content.append(card);
    });
}

addHTML();

let botaoBuscar = document.getElementById("buscar-agora");
botaoBuscar.addEventListener("click", addHTML);
