# Unicode-js

This javascript script library allows you to access a unicode value with it's name . 

It's still undergoing to development. 

# How To Use

``npm install unicode-js``


example 

```javascript

'use strict';

// to use punctuation

let { LatinPunct } = require("unicode-js")
//½
console.log(LatinPunct.VulgarFractionOneHalf)


```

# Naming conventions

to access a particular langauge , the name of the language and the functionality is the objects name , while the property is the name of the unicode character you want access

if you also want to access a  capital letter you should start it with a capital letter
for example to access a Capital A Macron you do this

```javascript
let Unicode = require('unicode-js')

// Ā
Unicode.EuLatin.AMacron // to get a capital letter A Macron

//թ
Unicode.ArmeniaLetters.zhe  // to get a small letter armenia to

```

to access a small lettter maybe an Eu Latin letter or an Armenia Symbol

```javascript
//with destructuring

const { EuLatin , ArmeniaSymbols } = require('unicode-js')

// 'đ'
EuLatin.dStroke

// '֏'
ArmeniaSymbols.DramSign

```


This project is still undergoing development. Support for other languages will be added regularly



# License

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
