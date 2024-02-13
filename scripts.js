// Get references to elements
const h1Element = document.querySelector('h1');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const result = document.getElementById('result');
const resultImage = document.getElementById('resultImage');
const resultText = document.getElementById('resultText');

yesButton.addEventListener('click', function() {

    h1Element.classList.add('hidden');

    resultImage.src = 'love.jpg';
    resultText.textContent = 'Хехехе ну да я знал, люблю тебяяя!!!';
    result.classList.remove('hidden');
});

noButton.addEventListener('click', function() {
    // Hide h1 element
    h1Element.classList.add('hidden');

    resultImage.src = 'mad.jpg';
    resultText.textContent = 'Эээ какашка что ли ваще!!!';
    result.classList.remove('hidden');
});
