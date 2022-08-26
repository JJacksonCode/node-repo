//git@github/JJacksonCode

const book1 = {
  title: 'Book One',
  author: 'Billy Authorsons',
  year: '2020',
  getSummary: function() {
    return `{$this.title} was written by
    ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title: 'Book Two - Sequel of One',
  author: 'Billy Authorsons',
  year: '2022',
  getSummary: function() {
    return `{$this.title} was written by
    ${this.author} in ${this.year}`;
  }
};

console.log(book1.title, book2);
