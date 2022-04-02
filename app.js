// Тоглогчдын ээлжийг хадгалах хувьсагч. Нэгдүгээр тогчлогч - 0, хоёрдугаар тоглогч - 1
var activePlayer = 1;

// Тоглогчдын оноог цуглуулах хувьсагч
var scores = [0, 0];

// Ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны буусан утгыг хадгалах хувьсагч
var dice = Math.floor(Math.random() * 6) + 1;

// Эхлэх үед
document.querySelector(".dice").style.display = "none";

// Эхний тоглогч
document.querySelector("#score-0").textContent = 0;
document.querySelector("#current-0").textContent = 0;

// Хоёр дахь тоглогч
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-1").textContent = 0;

console.log("Шоо: " + dice);
