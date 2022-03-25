function  useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    }

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
}

function displayResult(apiData) {
    let cards = '';
    console.log('cards before request' + cards);
    apiData.forEach(item => {
        const cardBlock =` 
        <div class="card">
            <img 
                src="${item.download_url}"
                class="card-image"
                alt="Картинка"/>
            <p>${item.author}</p>
        </div>
        `;
        cards = cards + cardBlock;
    })
    console.log('cards after request' + cards);
    resultNode.innerHTML = cards;

}

const btnNode = document.querySelector('.btn');
const resultNode = document.querySelector('.result');

btnNode.addEventListener('click', () => {
    const inputValue = document.querySelector('input').value;
    console.log('inputValue = ' + inputValue);
    if (inputValue < 1 || inputValue > 10) {
        resultNode.innerHTML = '<p>число вне диапазона от 1 до 10</p>';
    } else {
        useRequest(' https://picsum.photos/v2/list?limit=' + inputValue, displayResult)
    }
})

