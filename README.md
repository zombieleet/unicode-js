# Unicode-js

This javascript script library allows you to access a unicode value with it's name . 

It's still undergoing to development. 

# How To Use

``npm install unicode-js``


example 

```javascript

'use strict';

// to use punctuation
import { Punct } from "unicode-js"

console.log(Punct.PilcrowSign())


```

# Naming conventions

to access a capital letter  maybe an Eu Latin Letter the static method will start with a capital letter

for example to access a Capital A Macron you do this

```javascript
EuLatin.AMacron();

```

to access a small lettter maybe an Eu Latin letter the static method will start with a small letter for example a small letter a macron

```javascript
EuLatin.aMacron();

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
