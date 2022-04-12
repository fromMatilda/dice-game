// // Тоглогчдын ээлжийг хадгалах хувьсагч. Нэгдүгээр тогчлогч - 0, хоёрдугаар тоглогч - 1
var activePlayer;

// Тоглоом дууссаныг шалгагч boolean хувьсагч
var isGameOver;

// // Тоглогчдын оноог цуглуулах хувьсагч
var scores;

// // Ээлжийн оноог хадгалах хувьсагч
var roundScore;

// 100 дээш гарвал онооноос нь хасна.
var minusScore;

var diceDom = document.querySelector(".dice");

newGame();
////////////////////////////////////// Шинэ тоглоом эхлэх /////////////////////////////////////
function newGame() {
  //
  isGameOver = false;

  // Тоглогчдын ээлжийг хадгалах хувьсагч. Нэгдүгээр тогчлогч - 0, хоёрдугаар тоглогч - 1
  activePlayer = 0;

  // Тоглогчдын оноог цуглуулах хувьсагч
  scores = [0, 0];

  // Ээлжийн оноог хадгалах хувьсагч
  roundScore = 0;

  // Эхний тоглогч
  var PlayerOneScore = document.getElementById("score-0");
  PlayerOneScore.textContent = 0;
  var PlayerOneCurrentScore = document.getElementById("current-0");
  PlayerOneCurrentScore.textContent = 0;

  // Хоёр дахь тоглогч
  var PlayerTwoScore = document.getElementById("score-1");
  PlayerTwoScore.textContent = 0;
  var PlayerTwoCurrentScore = document.getElementById("current-1");
  PlayerTwoCurrentScore.textContent = 0;

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  // DICE-ийг алга болгож байна
  diceDom.style.display = "none";
}

////////////////////////////////////////////// Эхлэх үед //////////////////////////////////////////////

// Шоог шидэх үед зураг нь солигдоно. Бас оноо нэмэгдэнэ
document.querySelector(".btn-roll").addEventListener("click", rollDice);

////////////////////////////////////////////// Hold button дарагдах үед //////////////////////////////////////////////
document.querySelector(".btn-hold").addEventListener("click", holdButton);

//////////////////////////////////////////////// Keyboard-той холбосон //////////////////////////////////////////////
document.addEventListener("keydown", (e) => {
  if (e.key === "n") {
    newGame();
  }
  if (e.key === "r") {
    rollDice();
  }
  if (e.keyCode === 32) {
    holdButton();
  }
});
////////////////////////////////////// Шинээр хэлэх //////////////////////////////////////////////
document.querySelector(".btn-new").addEventListener("click", newGame);

function nextPlayer() {
  // Шооны зургыг алга болгох
  diceDom.style.display = "none";

  // Нэг буусан тоглогчийн roundScore-ыг тэглэж байна
  roundScore = 0;

  // Нэг буусан тоглогчийн currentScore-ыг тэглэж байна
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Идэвхитэй тоглогчийг сольж байна
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Active Player-ын жижигхэн бөөрөнхийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
function holdButton() {
  //Эхлээд тогоом дууссан үгүйг шалгана
  if (isGameOver !== true) {
    // Current Score-ыг идэвхитэй тоглогчийн онооруу нэмэх
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Идэвхитэй тоглогчийн оноог харуулах
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] === 100) {
      // Тоглоом дууссан
      isGameOver = true;

      //Хожсон тоглогчийн нэрийг WINNER болгож байна
      document.getElementById("name-" + activePlayer).textContent = "WINNER";

      // Хожсон тоглогчийн нэрийг CSS-ээс winner гэсэн class-тай холбож өгч байна
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
    }

    // Хэрвээ хэн нэг нь хожоогүй бол nextPlayer функцийг дуудсаар байх хэрэгтэй

    if (scores[activePlayer] > 100) {
      minusScore = scores[activePlayer] - 100;

      scores[activePlayer] = scores[activePlayer] - minusScore - roundScore;

      document.getElementById("score-" + activePlayer).textContent =
        scores[activePlayer];
      nextPlayer();
    } else {
      nextPlayer();
    }
  }
}

function rollDice() {
  //Эхлээд тогоом дууссан үгүйг шалгана
  if (isGameOver !== true) {
    // 1 - 6 хүртэл санамсаргүй тоо олгож байна
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //Шооны зургийг гаргаж ирнэ
    diceDom.style.display = "block";

    // Random-оор буусан тоонд таарсан шооны зургийг гаргаж ирнэ
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1 ээс ялгаатай бол идэвхитэй тоглогчийн оноог нэмж өгнө
    if (diceNumber !== 1) {
      // Нэгээс ялгаатай тоо буулаа буусан тоог идэвхитэй тоглогч дээр нэмнэ
      roundScore = roundScore + diceNumber;

      // Argument-ийн ID-аар дамжиж утгыг өгч байна
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    }

    // Нэгтэй тэнцүү буулаа идэвхитэй тоглогчийг солино
    else {
      nextPlayer();
    }
  }
}
