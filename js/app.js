// Variáveis
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');



// Visor da calculadora
let realTimeScreenValue = []

// Limpar
clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// Função anexada a todos os botões
buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        // Se o botão clicado não é o botão de apagar
        if (!btn.id.match('erase')) {
            // Mostrar o valor do botão pressionado
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // Executar e mostrar a resposta em tempo real
            if (btn.classList.contains('num_btn')) {

                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));

            }

        }

    })
})
