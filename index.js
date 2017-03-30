var fetch = require('node-fetch');
var cheerio = require('cheerio');

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

String.prototype.clean = function() {
    var text = this;
    return text.split("\t").join().split("\r").join("").split("\n").join(" ");
};

class KitapYurdu {
  constructor(){
    this.status = true;
    this.siteDomain = 'http://www.kitapyurdu.com/';
    fetch(this.siteDomain).catch(function(err) {
      this.status = false;
      // There is a problem with kitapyurdu.com server.
      console.log(err);
    });
  }

  getBookById(bookId){
    // bookId - ID of book => eg: 30574 (Hayvan Çiftliği)
    return new Promise((resolve) => {
      fetch(`${this.siteDomain}kitap/-/${bookId}.html`).then(function(res) {
            return res.text();
        }).then(function(body) {
            let $ = cheerio.load(body);
            resolve({
                title: $("h1.product-heading").text(),
                author: $(".description .manufacturers a span").text(),
                publisher: $(".publishers a span").text(),
                description: $("#description_text span").text(),
                attributes: $(".attribute").text().clean(),
            });
        });
    });
  }

  getBooksByAuthorId(authorId){
    // authorId - ID of author => eg: 12084 (George Orwell)
    // TODO:
  }

  getBooksByCategoryId(categoryId){
    // categoryId - ID of category => eg: 432 (Bilim Felsefesi)
    // TODO:
  }

  getBooksFromSearch(searchSlug){
    // searchSlug - word to search => eg: 'bilim'
    // TODO: 
  }
}


var ky = new KitapYurdu();
ky.getBookById(30574).then((res) => {
  console.log(res);
});
