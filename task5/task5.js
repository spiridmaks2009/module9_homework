const btnNode = document.querySelector('.btn');
const resultNode = document.querySelector('.result');
const inputs = document.querySelectorAll('input');

const useRequest = async (url) => {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            localStorage.setItem('items', JSON.stringify(data))
            let cards = '';
            data.forEach(item => {
                const cardBlock = `
                  <div class="card">
                    <img
                      src="${item.download_url}"
                      class="card-image"
                    />
                  </div>
                `;
                cards = cards + cardBlock;
            });
            resultNode.innerHTML = cards;
        })
        .catch(() => {
            console.log('error')
        });
}

btnNode.addEventListener('click', async () => {

    let pageNumber = inputs.item(0).value;
    let limit = inputs.item(1).value;

    if ( pageNumber < 1 || pageNumber > 10) {
        if (limit < 1 || limit > 10) {
            resultNode.innerHTML = '<p>Номер страницы и лимит вне диапазона от 1 до 10</p>';
        } else {
            resultNode.innerHTML = '<p>Номер страницы вне диапазона от 1 до 10</p>';
        }
    } else if (limit < 1 || limit > 10) {
            resultNode.innerHTML = '<p>Лимит вне диапазона от 1 до 10</p>';
    } else {
        await useRequest(
            'https://picsum.photos/v2/list?page=' + pageNumber + '&limit=' + limit);
        console.log('end');
    }
})

const state = localStorage.getItem('items')
const jsonState = JSON.parse(state)

window.onload = function () {
    if(state) {
        let cards = '';
        jsonState.forEach(item => {
            const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
      </div>
    `;
            cards = cards + cardBlock;
        });
        resultNode.innerHTML = cards;
    }
}

