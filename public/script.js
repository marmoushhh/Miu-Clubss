console.log("Script loaded!");

let availableNames = [
    { name: 'Enactus', link: 'Enactus.html' },
    { name: 'Mun', link: 'MUN.html' },
    { name: 'Tedx', link: 'TEDx.html' },
    { name: 'ACPC', link: 'ACPC.html' },
    { name: 'Gamers Legacy', link: 'Gamers Legacy.html' },
    { name: 'Tuners', link: 'Tunners.html' },
    { name: 'El Warsha', link: 'El warsha.html' },
    { name: 'Move', link: 'MOVE.html' },
    { name: 'IHEPC', link: 'IHEPC.html' },
    { name: 'ASCC', link: 'ASCC.html' }
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.querySelector(".search");

inputBox.onkeyup = function () {
    let input = inputBox.value.trim().toLowerCase();
    let result = [];

    if (input.length > 0) {
        result = availableNames.filter(item => 
            item.name.toLowerCase().includes(input)
        );
    }

    display(result);

    if (!result.length) {
        resultBox.innerHTML = '';
    }
};

function display(results) {
    const content = results.map(item => 
        `<li onclick="selectInput('${item.name}', '${item.link}')">${item.name}</li>`
    ).join('');
    resultBox.innerHTML = `<ul>${content}</ul>`;
}

function selectInput(name, link) {
    inputBox.value = name;
    resultBox.innerHTML = '';
    window.location.href = link;
}
fetch('miu-clubss-production.up.railway.app')
  .then(res => res.json())
  .then(data => {
    console.log("Backend says:", data.message); // this should show in console
    document.getElementById('message').textContent = data.message;
  })
  .catch(err => console.error('Fetch error:', err));