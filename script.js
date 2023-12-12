const text = "> Hi, my name is Mariana.";
const typingDiv = document.getElementById('typingAnimation');
let index = 0;

function typeLetter() {
    if (index < text.length) {
        typingDiv.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeLetter, 75); // Adjust typing speed here
    } else {
        // Remove the cursor after the typing is done
        typingDiv.style.borderRight = 'none';
    }
}

window.onload = typeLetter;
