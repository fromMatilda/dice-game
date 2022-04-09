// Тоглогчдын ээлжийг хадгалах хувьсагч. Нэгдүгээр тогчлогч - 0, хоёрдугаар тоглогч - 1
var activePlayer = 0;

// Тоглогчдын оноог цуглуулах хувьсагч
var scores = [0, 0];

// Ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны буусан утгыг хадгалах хувьсагч

// Эхний тоглогч
// document.querySelector("#score-0").textContent = 0;
// document.querySelector("#current-0").textContent = 0;
var PlayerOneScore = document.getElementById("score-0");
PlayerOneScore.textContent = 0;
var PlayerOneCurrentScore = document.getElementById("current-0");
PlayerOneCurrentScore.textContent = 0;

// Хоёр дахь тоглогч
// document.querySelector("#score-1").textContent = 0;
// document.querySelector("#current-1").textContent = 0;
var PlayerTwoScore = document.getElementById("score-1");
PlayerTwoScore.textContent = 0;
var PlayerTwoCurrentScore = document.getElementById("current-1");
PlayerTwoCurrentScore.textContent = 0;

// Эхлэх үед
var diceDom = document.querySelector(".dice");

// Шоог шидэх үед зураг нь солигдоно. Click хийхэд гэхдээ зөвхөн энүүн доторх код л ажиллана.

document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1 - 6 хүртэл санамсаргүй тоо олгож байна

  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";

  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1 ээс ялгаатай бол идэвхитэй тоглогчийн оноог нэмж өгнө

  if (diceNumber !== 1) {
    // Нэгээс ялгаатай тоо буулаа буусан тоог идэвхитэй тоглогч дээр нэмнэ
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  }
  // Нэгтэй тэнцүү буулаа идэвхитэй тоглогчийг солино
  else {
    // Нэг буусан үед шооны зургийг арилгаж байна
    diceDom.style.display = "none";

    // roundScore тэглэхгүй бол дараачийн тоглогчид оноо дамжигдана
    roundScore = 0;

    // Нэг буусан тоглогчийн current оноог тэг болгож байна
    document.getElementById("current-" + activePlayer).textContent = 0;

    // active class-ыг нэг буусан болохоор remove хийж байна
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");

    // Идэвхтэй тоглогчийг нөхцөл шалгаж шилжүүлж байна
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("active");

    // Улаан цэгийг бас ингэж шилжүүлж болно.
    // document.querySelector(".player-0-panel").classList.toggle("active");
    // document.querySelector(".player-1-panel").classList.toggle("active");
  }
});

// Hold дарвал тоглогч солигдоно

document.querySelector(".btn-hold").addEventListener("click", function () {});
