import './css/main.css';
import './css/input-elements.css';

const button = document.querySelector('button');
const content = document.querySelector('p');
let showContent = true;

button.addEventListener('click', toggleState);

function toggleState() {
    showContent = !showContent;

    if (showContent) {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}