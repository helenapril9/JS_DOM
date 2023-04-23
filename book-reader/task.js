const fontSizes = document.querySelectorAll('.font-size');
const book = document.querySelector('#book');

fontSizes.forEach(function(fontSize) {
  fontSize.addEventListener('click', function(e) {
    e.preventDefault();
    fontSizes.forEach(function(size) {
      size.classList.remove('font-size_active');
    });
    this.classList.add('font-size_active');
    const size = this.dataset.size;
    book.classList.remove('book_fs-big', 'book_fs-small');
    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});
