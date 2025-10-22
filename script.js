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

booksWithNumbers.sort(function(a, b) {
  if (a.number < b.number) {
    return -1;
  } else if (a.number > b.number) {
    return 1;
  } else {
    return 0;
  }
});

container.innerHTML = '';

booksWithNumbers.forEach(function(item) {
  const currentBook = item.bookElement;
  container.appendChild(currentBook);
});


document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
booksArray[4].querySelector('h2 a').textContent = 'Книга 3. this и Прототипы Объектов';
document.querySelector('body').removeChild(document.querySelector('.adv')); 


function addAndSortSixthBook() {
  const sixthBook = document.querySelectorAll('.book')[5];
  const ul = sixthBook.querySelector('ul');

  const newLi = document.createElement('li');
  newLi.textContent = 'Глава 8: За пределами ES6';
  ul.appendChild(newLi);

  const items = Array.from(ul.children);
  items.sort((a, b) => {
    const t1 = a.textContent.trim();
    const t2 = b.textContent.trim();

    const order = text => {
      if (text.startsWith('Введение')) return 0;
      if (text.startsWith('Предисловие')) return 1;
      if (text.startsWith('Глава')) return 2;
      if (text.startsWith('Приложение')) return 3;
      return 4;
    };

    const diff = order(t1) - order(t2);
    if (diff !== 0) return diff;

    if (t1.startsWith('Глава') && t2.startsWith('Глава')) {
      return parseInt(t1.split(' ')[1]) - parseInt(t2.split(' ')[1]);
    }

    if (t1.startsWith('Приложение') && t2.startsWith('Приложение')) {
      return t1.localeCompare(t2);
    }

    return 0;
  });

  ul.innerHTML = '';
  items.forEach(li => ul.appendChild(li));
}


addAndSortSixthBook();






