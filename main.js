
const textArea = document.querySelector('.textarea-form');
const containerMessageEl = document.querySelector('.container-message');
const containerTextEl = document.querySelector('.container-text');
const textEncryptedEl = document.querySelector('.text-encrypted');
const buttonEncryptEl = document.querySelector('.button-encrypt');
const buttonDecryptEl = document.querySelector('.button-decrypt');
const buttonCopy = document.querySelector('.button-copy');
const letters = ["e", "i", "a", "o", "u"];
const keywords = ["enter", "imes", "ai", "ober", "ufat"];

let text = "";
let initialHight = textArea.clientHeight;

textArea.setAttribute("style", "min-height: " + initialHight + "px;")

const onInputTextArea = (event) => {
    target = event.target;
    target.style.height = (target.scrollHeight) + "px";
    text = event.target.value;

    console.log(text);
}

const clearInput = () => {
    if (textArea.value == "Ingresa el texto aquí") {
        textArea.value = "";
    }
};

const resetInput = (event) => {
    if (event.target !== textArea) {
        if (textArea.value.trim() == "") {
            textArea.value = "Ingresa el texto aquí";
        }
    }
}

const encrypt = () => {
    if (text.trim() == "") {
        return;
    }

    letters.forEach((letter, index) => text = text.replaceAll(letter, keywords[index]));
    textEncryptedEl.innerHTML = text;
    containerTextEl.classList.remove('hidde');
    containerMessageEl.classList.add('hidde');
}

const decrypt = () => {
    if (text.trim() == "") {
        return
    }

    keywords.forEach((keyword, index) => text = text.replaceAll(keyword, letters[index]));
    textEncryptedEl.innerHTML = text;

    containerTextEl.classList.remove('hidde');
    containerMessageEl.classList.add('hidde');
}

const copyText = () => navigator.clipboard.writeText(textEncryptedEl.innerText);

textArea.addEventListener("input", onInputTextArea)
textArea.addEventListener("click", clearInput);
document.addEventListener("click", resetInput);
buttonDecryptEl.onclick = decrypt;
buttonEncryptEl.onclick = encrypt;
buttonCopy.onclick = copyText;
