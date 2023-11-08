const listElement = document.querySelector('.list');
const btnList = document.querySelector(".btn");

const url = 'https://books-backend.p.goit.global/books/category?category=Paperback Nonfiction';


fetch(url)
  .then(response => response.json())
  .then(data => {
    
    const firstFiveImages = data.slice(0, 5);
    const allImages = data;

   
    fiveImage(firstFiveImages);

    
    btnList.addEventListener("click", () => {
        listElement.innerHTML = ''; 
        onClick(allImages);
    });
  })
  .catch(error => console.error('Ошибка:', error));

function fiveImage(firstFiveImages) { 
    const markup = firstFiveImages.map((image) => `<li class="list_item">
        <img src="${image.book_image}" alt="" width = "180" height="260" />
        <h2 class="title">${image.title}</h2>
        <p class="text">${image.author}</p>
      </li>`).join("");
    listElement.insertAdjacentHTML("beforeend", markup);
}

function onClick(allImages) { 
    const markup = allImages.map((image) => `<li class="list_item">


        <img src="${image.book_image}" alt="" width = "180" height="260" />
        <h2 class="title">${image.title}</h2>
        <p class="text">${image.author}</p>
      </li>`).join("");
    listElement.insertAdjacentHTML("beforeend", markup);
}