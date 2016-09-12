use-root-path
=============

Enables root-based require statements in node.js.

This module is based on [fabmos'](https://www.npmjs.com/~fabmos) wonderful node.js helper named [rootpath](https://www.npmjs.com/package/rootpath). This version is just a tiny bit cleaner to use, slightly more descriptive, and involves less code behind the scenes. Like the original, this version works with your existing local and global modules. All props to [fabmos](https://www.npmjs.com/~fabmos)!


Install
-------

`npm install use-root-path`


Usage
-----

`require( 'use-root-path' );`


Examples
--------

Before (the usual relative local paths in node.js)
```JavaScript
var lib     = require( './app/lib/library' );
var util    = require( '../../app/utilities/util'  );
var test    = require( '../../app/unit-tests/test' );
var morgan  = require( 'morgan'  );
var express = require( 'express' );
```

After (root-based local paths in node.js)
```JavaScript
require( 'use-root-path' );

var lib     = require( 'app/lib/library' );
var util    = require( 'app/utilities/util'  );
var test    = require( 'app/unit-tests/test' );
var morgan  = require( 'morgan'  );
var express = require( 'express' );
```


Notes
-----

Place `require( 'use-root-path' );` at the top of any module that you want to use root-based require statements. This is completely friendly with global modules too, as shown in the examples above.


Version
-------

0.1.0 Initial Release


License
-------

MIT
