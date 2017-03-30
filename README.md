# kitapyurdu-crawler

(WIP)

A book data crawler that works by parsing HTML with cheerio, using popular Turkish book selling website - database kitapyurdu.com

## Usage

Get via NPM (Not yet published to npm) or Clone this repository.

```javascript
let KitapYurdu = require("kitapyurdu-crawler");

let ky = new KitapYurdu();

ky.getBookById(30574).then((res) => {
  console.log(res);
  // { title: 'Hayvan Çiftliği (Ciltsiz)', author: ' George Orwell', publisher: 'CAN YAYINLARI' ... }
});
```

//todo: Add other functions and how to use them.
