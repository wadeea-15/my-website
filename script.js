let currentQuestion = 1;  // Tracks which question is currently being displayed

function checkQuiz(questionNumber) {
    // Get the answer input element based on question number
    const answerElement = document.getElementById(questionNumber === 1 ? 'answer' : 'bonus-answer');
    const resultElement = document.getElementById(`quiz-result-${questionNumber}`);
    const answer = answerElement.value.trim().toLowerCase();

    // Provide immediate feedback based on the answer
    setTimeout(() => {
        if (questionNumber === 1) {
            if (answer === "library of alexandria") {
                resultElement.innerHTML = "✅ Correct! The Library of Alexandria is the oldest known public library.";
                resultElement.style.color = "green";
            } else {
                resultElement.innerHTML = "❌ Incorrect. The correct answer is the Library of Alexandria.";
                resultElement.style.color = "red";
            }
        } else if (questionNumber === 2) {
            if (answer.includes("gabriel garcia marquez")) {
                resultElement.innerHTML = "✅ That's right! Gabriel García Márquez wrote 'One Hundred Years of Solitude'.";
                resultElement.style.color = "green";
            } else {
                resultElement.innerHTML = "❌ Oops! The correct answer is Gabriel García Márquez.";
                resultElement.style.color = "red";
            }
        }

        // Smooth fade-in effect for the result
        resultElement.style.opacity = 1;
    }, 300);

    // Automatically progress to the next question after 1 second
    setTimeout(() => {
        // Hide the current question
        document.getElementById(`question-${questionNumber}`).classList.remove('active');

        // Move to the next question if there is one
        if (questionNumber < 2) {
            currentQuestion++;
            document.getElementById(`question-${currentQuestion}`).classList.add('active');
        } else {
            alert("Congratulations, you've completed the quiz!");
        }
    }, 1000);
}

// Form validation for the contact form
window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const errorMessage = document.getElementById("error-message");

        errorMessage.style.opacity = 0;
        let error = "";

        // Check if any field is empty
        if (!name || !email || !message) {
            error = "All fields are required.";
        } else {
            // Validate email format
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(email)) {
                error = "Please enter a valid email address.";
            }
        }

        if (error) {
            errorMessage.textContent = error;
            errorMessage.style.color = "red";
            event.preventDefault();
        } else {
            errorMessage.textContent = "✅ Form submitted successfully!";
            errorMessage.style.color = "green";
        }

        // Smooth fade-in effect for error or success message
        setTimeout(() => {
            errorMessage.style.opacity = 1;
        }, 200);
    });
});
