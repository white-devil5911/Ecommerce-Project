const questions=[
    {
        question: "What is Qasim's Favorite Food?",
        options: ["Red Beans", "Karahi", "Fish", "Sabzi"],
        answer: "Red Beans"
    },
    {
        question: "What is Qasim's Favorite Singer",
        options: ["Sidhu", "Karan Aujla", "Diljit Dosanjh", "Nusrat Fateh Ali Khan"],
        answer: "Sidhu"
    },
    {
        question: "Whom is Qasim's Best Friend",
        options: ["Mama", "Arsal", "Me", "Gaming"],
        answer: "Me"
    },
    {
      question: "What is Qasim's Favorite Game",
      options: ["PUBG", "FIFA", "CALL OF DUTY", "GTA SERIES"],
      answer: "FIFA"
    },
    {
      question: "What is Qasim's Current Playstation Name",
      options: ["PS5", "PS3", "PS4", "X-BOX"],
      answer: "PS4"
    },
    {
      question: "What is Qasim's Mother Full Name",
      options: ["Amna Wali", "Amna Akhtar", "Amna Rehman", "Muhammad Amna"],
      answer: "Amna Rehman"
    },
    {
      question: "What is Qasim's Current Laptop Company Name",
      options: ["HP", "KENWOOD", "Lenovo", "Dell"],
      answer: "Dell"
    },
    {
      question: "What Was Qasim's College Name",
      options: ["Punjab Colleges", "Askaria", "Concordia", "Step College"],
      answer: "Askaria"
    },
    {
      question: "Who is Qasim's Inspiration and role model",
      options: ["Messi", "Ronaldo", "Karan Aujla", "Ap Dhillon"],
      answer: "Ronaldo"
    },
    {
      question: "Currently how many books and quran para's Qasim have read so far?",
      options: ["5 Parah & 3 Books", "6 Parah & 7 Books", "7 Parah & 7 Books", "5 Parah & 8 Books"],
      answer: "7 Parah & 7 Books"
    },
];
let currentQuestionIndex = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
function loadQuestion(){
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option-btn");
      btn.addEventListener("click", () => {
        checkAnswer(option);
      });
      optionsEl.appendChild(btn);
    });
}
function checkAnswer(selectedOption){
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
}
function showResult(){
    document.getElementById("quiz-box").classList.add("hide");
    resultEl.classList.remove("hide");
    scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
}
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
});
loadQuestion();
  
  
  