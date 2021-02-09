let books = [
	{ id: 1, name: 'Javascript', price: 100, author: 'Tom' },
	{ id: 2, name: 'Java', price: 200, author: 'Alex' },
	{ id: 3, name: 'J2EE', price: 150, author: 'Jerry' },
	{ id: 4, name: 'AngularJS', price: 50, author: 'Eva' },
];

function displayBook(data) {
  $('tbody').empty();
  data.forEach(e => {
    $('tbody').append(
      '<tr>' +
        '<td class="tsm">' + e.id + '</td>' +
        '<td class="tmd">' + e.name + '</td>' +
        '<td class="tmd">' + e.price + '</td>' +
        '<td class="tmd">' + e.author + '</td>' +
        '<td class="tlg">' + 
          '<a href="#" class="to-edit" data-book-Id="' + e.id + '">Edit</a> ' + 
          '<a href="#" class="to-delete" data-book-Id="' + e.id + '">Delete</a></td>' +
      '</tr>'
    );
  });
}

$(document).ready(function ready() {
  displayBook(books);

  
  $('.arrow-up').click(function(event) {
    let colName = $(this).data('colName');
    books.sort((a, b) => {
      if(a[colName] > b[colName]) return 1;
      if(a[colName] < b[colName]) return -1;
      return 0;
    });
    displayBook(books);
  });

  $('.arrow-down').click(function(event) {
    let colName = $(this).data('colName');
    books.sort((a, b) => {
      if(a[colName]< b[colName]) return 1;
      if(a[colName] > b[colName]) return -1;
      return 0;
    });
    displayBook(books);
  });

  $('#filter .flt-btn').click(event => {
    let prop = $('#filter select').val();
    let value = $('#filter input').val();
    let result = books.filter(e => String(e[prop]) === String(value));
    displayBook(result);
  });

  $('#filter .reset-btn').click(event => {
    $('#filter input').val('');
    displayBook(books);
  });

  $('#add-form').submit(event => {
    let book = {
      id: $('#add-id').val(),
      name: $('#add-name').val(),
      price: $('#add-price').val(),
      author: $('#add-author').val(),
    };
    books.push(book);
    displayBook(books);
    event.preventDefault();
  });

  $('#edit-form').submit(event => {
    let bookId = parseInt($('#edit-id').val());
    let pos = books.findIndex((e, ...rest) => e.id === bookId);
    books[pos].name = $('#edit-name').val();
    books[pos].price = $('#edit-price').val();
    books[pos].author = $('#edit-author').val();
    displayBook(books);
    event.preventDefault();
  });

  $('.to-edit').click(function(event) {
    let bookId = $(this).data('bookId');
    let pos = books.findIndex((e, ...rest) => e.id === bookId);
    $('#edit-id').val(books[pos].id);
    $('#edit-name').val(books[pos].name);
    $('#edit-price').val(books[pos].price);
    $('#edit-author').val(books[pos].author);
  });

  $('.to-delete').click(function(event) {
    let bookId = $(this).data('bookId');
    let pos = books.findIndex((e, ...rest) => e.id === bookId);
    books.splice(pos, 1);
    displayBook(books);
  });

});
