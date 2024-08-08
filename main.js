#!/usr/bin/env node
import inquirer from 'inquirer';
const questions = [
    { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], correctAnswer: 2 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: 1 },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correctAnswer: 3 },
    { question: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Potassium"], correctAnswer: 1 },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["William Wordsworth", "Charles Dickens", "William Shakespeare", "Mark Twain"], correctAnswer: 2 },
    { question: "What is the smallest unit of life?", options: ["Atom", "Molecule", "Cell", "Organ"], correctAnswer: 2 },
    { question: "Which language is primarily spoken in Brazil?", options: ["Spanish", "English", "Portuguese", "French"], correctAnswer: 2 },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"], correctAnswer: 2 },
    { question: "Which year did World War II end?", options: ["1918", "1939", "1945", "1965"], correctAnswer: 2 },
    { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "NaCl"], correctAnswer: 0 }
];
async function askQuestions(questions) {
    const userResponses = [];
    for (const question of questions) {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: question.question,
                choices: question.options
            }
        ]);
        const selectedIndex = question.options.indexOf(answers.answer);
        userResponses.push(selectedIndex);
        console.log(`User response for "${question.question}": ${selectedIndex}`);
    }
    return userResponses;
}
function calculateResult(userResponses, questions) {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (userResponses[i] === questions[i].correctAnswer) {
            score++;
        }
        console.log(`Question: ${questions[i].question}, User Response: ${userResponses[i]}, Correct Answer: ${questions[i].correctAnswer}`);
    }
    return score;
}
async function runQuiz() {
    console.log("Starting the quiz...");
    const userResponses = await askQuestions(questions);
    const score = calculateResult(userResponses, questions);
    console.log(`You scored ${score} out of ${questions.length}`);
}
runQuiz();
