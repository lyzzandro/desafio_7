let blocos = [
    {
        nome: "O Python do vovô não sobe mais",
        cidade: "São Paulo - SP",
        capa: "./assets/img_capas/img1.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Todo mundo null",
        cidade: "Florianópolis - SC",
        capa: "./assets/img_capas/img2.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Hoje dou exception",
        cidade: "Curitiba - PR",
        capa: "./assets/img_capas/img3.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Manda Node",
        cidade: "Salvador - BA",
        capa: "./assets/img_capas/img4.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Só no back-end",
        cidade: "São Paulo - SP",
        capa: "./assets/img_capas/img5.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Esse anel não é de Ruby",
        cidade: "São Paulo - SP",
        capa: "./assets/img_capas/img6.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Pimenta no C# dos outros é refresco",
        cidade: "Rio de Janeiro - RJ",
        capa: "./assets/img_capas/img7.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "EnCACHE aqui",
        cidade: "Porto Alegre - RS",
        capa: "./assets/img_capas/img8.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        nome: "Não valho nada mas JAVA li",
        cidade: "São Paulo - SP",
        capa: "./assets/img_capas/img9.jpg",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
];

const content = document.querySelector(".content-main");
const map = document.querySelector("#map-button");
const lista = document.querySelector("#list-button");

function addHTML() {
    content.innerHTML = "";

    map.className = "btn-disabled";
    lista.className = "btn-enabled";

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
        icon.src = "./assets/location.svg";
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

/* Adicionando Mapa */

map.addEventListener("click", Map);
lista.addEventListener("click", addHTML);

async function Map() {
    content.innerHTML = "";

    map.className = "btn-enabled";
    lista.className = "btn-disabled";

    const mapElement = document.createElement("iframe");
    mapElement.className = "map";

    mapElement.src =
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3773262.043546493!2d-50.87934892425565!3d-22.54818187707487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSP!5e0!3m2!1spt-BR!2sbr!4v1676818660293!5m2!1spt-BR!2sbr";
    content.append(mapElement);
}
