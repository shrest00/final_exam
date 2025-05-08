document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");

    quizForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const answers = Array.from(quizForm.elements).filter(input => input.checked);
        const result = tallyResults(answers.map(a => a.value));
        quizResult.textContent = `You're best suited for: ${result}`;
    });

    function tallyResults(answers) {
        const count = {
            "Software Development": 0,
            "Cybersecurity": 0,
            "Networking": 0,
            "Data Management": 0
        };

        answers.forEach(answer => {
            if (count[answer] !== undefined) count[answer]++;
        });

        return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
    }
});
