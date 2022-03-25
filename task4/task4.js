const btnNode = document.querySelector('.btn');
const resultNode = document.querySelector('.result');
const inputs = document.querySelectorAll('input');

const useRequest = async (url) => {
    fetch(url)
        .then((response) => {
            console.log('response', response);
            let image = document.createElement('img');
            image.setAttribute('src', response.url);
            resultNode.innerHTML = '';
            resultNode.appendChild(image);
        })
        .catch(() => { console.log('error') });
}

btnNode.addEventListener('click', async () => {

    if (inputs.item(0) < 100 || inputs.item(0) > 300
        || inputs.item(1) < 100 || inputs.item(1) > 300) {
        resultNode.innerHTML = '<p>одно из чисел вне диапазона от 100 до 300</p>';
    } else {
        await useRequest(
            'https://picsum.photos/' + inputs.item(0).value +'/' + inputs.item(1).value);
        console.log('end');
    }
})

