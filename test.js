const listElement = document.querySelector('.list');
const btnList = document.querySelector(".btn");

const url = 'https://books-backend.p.goit.global/books/category?category=Paperback Nonfiction';

// Получение данных с бэкэнда
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Получение первых пяти изображений
    const firstFiveImages = data.slice(0, 5);
    const allImages = data;

    // Отображение первых пяти изображений
    fiveImage(firstFiveImages);

    // Обработчик событий для кнопки
    btnList.addEventListener("click", () => {
        listElement.innerHTML = ''; // Очистка содержимого listElement
        onClick(allImages);
    });
  })
  .catch(error => console.error('Ошибка:', error));

function fiveImage(firstFiveImages) { 
    const markup = firstFiveImages.map((image) => `<li class="list_item">
        <img src="${image.book_image}" alt="" width = "180"/>
        <h2 class="title">${image.title}</h2>
        <p class="text">${image.author}</p>
      </li>`).join("");
    listElement.insertAdjacentHTML("beforeend", markup);
}

function onClick(allImages) { 
    const markup = allImages.map((image) => `<li class="list_item">
        <img src="${image.book_image}" alt="" width = "180"/>
        <h2 class="title">${image.title}</h2>
        <p class="text">${image.author}</p>
      </li>`).join("");
    listElement.insertAdjacentHTML("beforeend", markup);
}