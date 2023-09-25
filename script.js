const textElement = document.getElementById('text');
const textContent = "こんにちは、私の自己紹介サイトへようこそ。\n私の名前はJohn Doeです。\nこのサイトでは、私の経歴や興味を共有します。";

let index = 0;

function typeText() {
    textElement.textContent += textContent[index];
    index++;
    if (index < textContent.length) {
        setTimeout(typeText, 50); // タイピングの速さを調整する場合、この値を調整してください
    }
}

typeText();
