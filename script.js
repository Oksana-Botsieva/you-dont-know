const container = document.querySelector('.books');

const booksArray = Array.from(container.querySelectorAll('.book'));

const booksWithNumbers = [];

booksArray.forEach(function(book) {
  const linkText = book.querySelector('h2 a').textContent;

  const cleanedText = linkText.trim();

  let numberText = cleanedText.slice(6); 
  
  numberText = numberText.replace('.', '').trim();

  const bookNumber = parseInt(numberText, 10);

  const bookObject = {
    bookElement: book,
    number: bookNumber
  };
  console.log(bookObject);

  booksWithNumbers.push(bookObject);
});

console.log(booksWithNumbers);
booksWithNumbers.sort(function(a, b) {
  if (a.number < b.number) {
    return -1;
  } else if (a.number > b.number) {
    return 1;
  } else {
    return 0;
  }
});
console.log(booksWithNumbers);

container.innerHTML = '';

booksWithNumbers.forEach(function(item) {
  const currentBook = item.bookElement;
  container.appendChild(currentBook);
});
