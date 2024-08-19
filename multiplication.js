let currentExercise = 1;
const totalExercises = 10;
let correctAnswersCount = 0;

document.querySelectorAll('.answer').forEach(button => {
    button.addEventListener('click', function() {
        const exerciseNumber = currentExercise;
        const feedback = document.getElementById(`feedback${exerciseNumber}`);
        const correctAnswers = {
            '1': '1/3',
            '4': '2/5',
            '7': '15/32',
            '10': '1/3'
        };
        const answer = this.getAttribute('data-answer');
        if (answer === correctAnswers[exerciseNumber]) {
            feedback.textContent = "Correto!";
            feedback.style.color = "green";
            new Audio('correct.mp3').play();
            correctAnswersCount++; // Incrementa a contagem de respostas corretas
        } else {
            feedback.textContent = "Incorreto. Tente novamente!";
            feedback.style.color = "red";
            new Audio('incorrect.mp3').play();
        }
        showNextButton(); // Exibe o botão "Próximo Exercício" mesmo se a resposta estiver incorreta
    });
});

document.getElementById('checkAnswer2').addEventListener('click', function() {
    const answer = document.getElementById('answerInput2').value;
    const feedback = document.getElementById('feedback2');
    if (answer === '3/8') {
        feedback.textContent = "Correto!";
        feedback.style.color = "green";
        new Audio('correct.mp3').play();
        correctAnswersCount++; // Incrementa a contagem de respostas corretas
    } else {
        feedback.textContent = "Incorreto. Tente novamente!";
        feedback.style.color = "red";
        new Audio('incorrect.mp3').play();
    }
    showNextButton(); // Exibe o botão "Próximo Exercício" mesmo se a resposta estiver incorreta
});

document.getElementById('checkAnswer5').addEventListener('click', function() {
    const answer = document.getElementById('answerInput5').value;
    const feedback = document.getElementById('feedback5');
    if (answer === '6/35') {
        feedback.textContent = "Correto!";
        feedback.style.color = "green";
        new Audio('correct.mp3').play();
        correctAnswersCount++; // Incrementa a contagem de respostas corretas
    } else {
        feedback.textContent = "Incorreto. Tente novamente!";
        feedback.style.color = "red";
        new Audio('incorrect.mp3').play();
    }
    showNextButton(); // Exibe o botão "Próximo Exercício" mesmo se a resposta estiver incorreta
});

document.getElementById('checkAnswer8').addEventListener('click', function() {
    const answer = document.getElementById('answerInput8').value;
    const feedback = document.getElementById('feedback8');
    if (answer === '3/25') {
        feedback.textContent = "Correto!";
        feedback.style.color = "green";
        new Audio('correct.mp3').play();
        correctAnswersCount++; // Incrementa a contagem de respostas corretas
    } else {
        feedback.textContent = "Incorreto. Tente novamente!";
        feedback.style.color = "red";
        new Audio('incorrect.mp3').play();
    }
    showNextButton(); // Exibe o botão "Próximo Exercício" mesmo se a resposta estiver incorreta
});

document.getElementById('nextExercise').addEventListener('click', function() {
    if (currentExercise < totalExercises) {
        document.getElementById(`exercise${currentExercise}`).style.display = 'none';
        currentExercise++;
        document.getElementById(`exercise${currentExercise}`).style.display = 'block';
        this.style.display = 'none';
    } else {
        showFinalScore(); // Mostra o aproveitamento ao final da lição
    }
});

// Função para mostrar o botão "Próximo Exercício"
function showNextButton() {
    document.getElementById('nextExercise').style.display = 'block';
}

function setupDragAndDrop(exerciseNumber, correctAnswer) {
    const dropZone = document.getElementById(`dropZone${exerciseNumber}`);
    const feedback = document.getElementById(`feedback${exerciseNumber}`);
    
    document.querySelectorAll(`#dropZone${exerciseNumber} ~ .drag-options .draggable`).forEach(item => {
        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text', e.target.getAttribute('data-answer'));
        });
    });
    
    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    
    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        const answer = e.dataTransfer.getData('text');
        if (answer === correctAnswer) {
            feedback.textContent = "Correto!";
            feedback.style.color = "green";
            dropZone.textContent = answer;
            new Audio('correct.mp3').play();
            correctAnswersCount++; // Incrementa a contagem de respostas corretas
        } else {
            feedback.textContent = "Incorreto. Tente novamente!";
            feedback.style.color = "red";
            new Audio('incorrect.mp3').play();
        }
        showNextButton(); // Exibe o botão "Próximo Exercício" mesmo se a resposta estiver incorreta
    });
}

// Configurando os exercícios de arraste e solte
setupDragAndDrop(3, '1/2');
setupDragAndDrop(6, '1/3');
setupDragAndDrop(9, '7/16');

// Exercícios 4, 7, 10: Múltipla Escolha
document.querySelectorAll('.answer').forEach(button => {
    button.addEventListener('click', function() {
        const exerciseNumber = currentExercise;
        const feedback = document.getElementById(`feedback${exerciseNumber}`);
        const correctAnswers = {
            '4': '2/5',  // Exercício 4
            '7': '15/32',  // Exercício 7
            '10': '1/3'  // Exercício 10
        };
        const answer = this.getAttribute('data-answer');
        if (answer === correctAnswers[exerciseNumber]) {
            feedback.textContent = "Correto!";
            feedback.style.color = "green";
            new Audio('correct.mp3').play();
            correctAnswersCount++; // Incrementa a contagem de respostas corretas
        } else {
            feedback.textContent = "Incorreto. Tente novamente!";
            feedback.style.color = "red";
            new Audio('incorrect.mp3').play();
        }
        showNextButton(); // Exibe o botão "Próximo Exercício" mesmo se a resposta estiver incorreta
    });
});

// Função para mostrar o aproveitamento final
function showFinalScore() {
    const container = document.querySelector('.container');
    container.innerHTML = `<h1>Parabéns!</h1>
                           <p>Você respondeu corretamente ${correctAnswersCount} de ${totalExercises} exercícios.</p>
                           <a href="index.html" class="back-link">Voltar ao Início</a>`;
}
