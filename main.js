
const textArea = document.querySelector('.textarea-form');
const containerMessageEl = document.querySelector('.container-message');
const containerTextEl = document.querySelector('.container-text');
const textEncryptedEl = document.querySelector('.text-encrypted');
const buttonEncryptEl = document.querySelector('.button-encrypt');
const buttonDecryptEl = document.querySelector('.button-decrypt');
const buttonCleanEl = document.querySelector('.button-clean');
const buttonClear = document.querySelector('.button-clear');

const toggleThemeBtn = document.querySelector('.toggle-theme-btn');
const body = document.querySelector('body');
const lightModeIcon = document.querySelector('.light-mode-icon');
const darkModeIcon = document.querySelector('.dark-mode-icon');

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

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        lightModeIcon.style.display = 'inline-block'; 
        darkModeIcon.style.display = 'none'; 
    } else {
        lightModeIcon.style.display = 'none'; 
        darkModeIcon.style.display = 'inline-block';
    }
});

const copyText = () => navigator.clipboard.writeText(textEncryptedEl.innerText);

const cleanText = () => {
    textEncryptedEl.innerHTML = "";
    containerTextEl.classList.add('hidde');
    containerMessageEl.classList.remove('hidde');
}

const clearInputText = () => {
    textArea.value = '';
};

buttonClear.addEventListener('click', clearInputText);
textArea.addEventListener("input", onInputTextArea)
textArea.addEventListener("click", clearInput);
document.addEventListener("click", resetInput);
buttonDecryptEl.onclick = decrypt;
buttonEncryptEl.onclick = encrypt;
buttonCopy.onclick = copyText;
buttonCleanEl.onclick = cleanText;
