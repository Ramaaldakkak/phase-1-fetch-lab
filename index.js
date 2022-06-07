function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then((res) => res.json())
  .then((json) => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// document.addEventListener('DOMContentLoaded', () => fetchBooks())
// document.addEventListener('DOMContentLoaded', fetchBooks)

                  // ******** // 
const init = () => {

  // Add event listeners to capture form data and override a form's default behavior
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const input = document.querySelector('input#searchByID');
  console.log(input.value)

  // Fetch data based on what the user types into that form

  fetch(`http://localhost:3000/movies/${input.value}`)
  .then(response => response.json())
  .then(data => {

  // Display that data on the page
  const title = document.querySelector('section#movieDetails h4')
  const summary = document.querySelector('section#movieDetails p')

  title.innerText = data.title
  summary.innerText = data.summary
  })
})
}

document.addEventListener('DOMContentLoaded', init)