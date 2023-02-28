let blocos = [
    {
        nome: 'O Python do vovô não sobe mais',
        location: 'São Paulo - SP',
        capa: './assets/img_capas/img1.jpg',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
        nome: 'Todo mundo null',
        location: 'Florianópolis - SC',
        capa: './assets/img_capas/img2.jpg',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
        nome: 'Hoje dou exception',
        location: 'Curitiba - PR',
        capa: './assets/img_capas/img3.jpg',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
        nome: 'Manda Node',
        location: 'Salvador - BA',
        capa: './assets/img_capas/img4.jpg',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
        nome: 'Só no back-end',
        location: 'São Paulo - SP',
        capa: './assets/img_capas/img5.jpg',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
        nome: 'Esse anel não é de Ruby',
        location: 'São Paulo - SP',
        capa: './assets/img_capas/img6.jpg',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
        nome: 'Pimenta no C# dos outros é refresco',
        location: 'Rio de Janeiro - RJ',
        capa: './assets/img_capas/img7.jpg',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
        nome: 'EnCACHE aqui',
        location: 'Porto Alegre - RS',
        capa: './assets/img_capas/img8.jpg',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
        nome: 'Não valho nada mas JAVA li',
        location: 'São Paulo - SP',
        capa: './assets/img_capas/img9.jpg',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
];

const content = document.querySelector('.cards');
// const map = document.querySelector("#map-button");
// const lista = document.querySelector("#list-button");

function addHTML() {
    content.innerHTML = '';

    // map.className = "btn-disabled";
    // lista.className = "btn-enabled";

    const inputSearch = document.querySelector("input[type='search']").value;

    let resultados = blocos;

    if (inputSearch !== '') {
        resultados = blocos.filter((bloco) => bloco.nome.includes(inputSearch));
    }

    resultados.forEach((element) => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = element.capa;
        card.appendChild(img);

        const contentCard = document.createElement('div');
        contentCard.className = 'content';
        card.appendChild(contentCard);

        const h3 = document.createElement('h3');
        h3.innerText = element.nome;
        contentCard.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = element.text;
        contentCard.appendChild(p);

        const location = document.createElement('div');
        location.className = 'location';
        contentCard.appendChild(location);

        const icon = document.createElement('i');
        icon.className = "ph-map-pin-light"
        location.appendChild(icon);

        const city = document.createElement('p');
        city.innerText = element.location;
        location.appendChild(city);

        content.append(card);
    });
}

addHTML();

let botaoBuscar = document.getElementById('buscar-agora');
botaoBuscar.addEventListener('click', addHTML);

/* Adicionando Mapa */

// map.addEventListener('click', Map);
// lista.addEventListener('click', addHTML);

// async function Map() {
//     content.innerHTML = '';

//     map.className = 'btn-enabled';
//     lista.className = 'btn-disabled';

//     const mapElement = document.createElement('iframe');
//     mapElement.className = 'map';

//     mapElement.src =
//         'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3773262.043546493!2d-50.87934892425565!3d-22.54818187707487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSP!5e0!3m2!1spt-BR!2sbr!4v1676818660293!5m2!1spt-BR!2sbr';
//     content.append(mapElement);
// }
