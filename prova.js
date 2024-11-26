//Questao 1:  Desenvolva um programa em Javascript que leia todas as cores da página https://www.w3schools.com/tags/ref_colornames.asp e as insira em um vetor de cores, todas com letras minúsculas. 

// Inicializa o vetor que armazenará os nomes das cores
const colors = [];

// Seleciona todas as divs que têm a classe "innerbox"
const colorDivs = document.querySelectorAll('.innerbox');

// Itera sobre as divs encontradas
colorDivs.forEach(div => {
    // Seleciona o elemento que contém o nome da cor (span com a classe "colornamespan")
    const colorNameElement = div.querySelector('.colornamespan a');
    if (colorNameElement) {
        // Adiciona o nome da cor ao vetor em letras minúsculas
        colors.push(colorNameElement.textContent.trim().toLowerCase());
    }
});

// Exibe o vetor de cores no console
console.log(colors);

//Questão 2: A partir do vetor de cores escolhido, faça uma nova função que escolhe 10 cores aleatórias dentre todas as cores escolhidas.

function selectRandomColors(colors) {
    // Clona o vetor original para evitar alterações no vetor original
    const colorsCopy = [...colors];
    const randomColors = [];

    // Loop para selecionar 10 cores aleatórias
    for (let i = 0; i < 10; i++) {
        // Gera um índice aleatório
        const randomIndex = Math.floor(Math.random() * colorsCopy.length);
        
        // Remove a cor do vetor original e adiciona ao resultado
        const selectedColor = colorsCopy.splice(randomIndex, 1)[0];
        randomColors.push(selectedColor);
    }

    return randomColors;
}

// Exemplo de uso:
const allColors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue'];
const randomColors = selectRandomColors(allColors);

console.log('10 Cores aleatórias:', randomColors);

//Questão 3:  Dentre as 10 cores aleatórias, faça uma nova função que escolha uma cor aleatória e a imprima no console do navegador.

function pickRandomColor(colors) {
    if (colors.length === 0) {
        console.error('O vetor de cores está vazio.');
        return;
    }

    // Gera um índice aleatório
    const randomIndex = Math.floor(Math.random() * colors.length);

    // Seleciona a cor correspondente
    const selectedColor = colors[randomIndex];

    // Imprime a cor no console
    console.log('Cor escolhida aleatoriamente:', selectedColor);
}

// Exemplo de uso:
const tenRandomColors = ['blue', 'azure', 'black', 'aqua', 'aquamarine', 'aliceblue', 'beige', 'antiquewhite', 'bisque', 'blanchedalmond'];
pickRandomColor(tenRandomColors);

