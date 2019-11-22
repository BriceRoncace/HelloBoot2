import {arrowFunctionExample} from './feature-mods/arrow-functions.js';
import {forEachExample, mapExample, filterExample, findExample, everyExample, someExample, reduceExample} from './feature-mods/array-helpers.js';
import {objectLiteralExample} from './feature-mods/object-literal.js';
import {defaultArgExample} from './feature-mods/default-args.js'
import {restSpreadExample} from './feature-mods/rest-spread.js'
import {destructuringExample} from './feature-mods/destructuring.js'
//import {promiseExample} from './promise.js'
//import {fetchExample} from './fetch.js'

document.getElementById('arrowFunction').addEventListener('click', arrowFunctionExample);
document.getElementById('forEach').addEventListener('click', forEachExample);
document.getElementById('map').addEventListener('click', mapExample);
document.getElementById('filter').addEventListener('click', filterExample);
document.getElementById('find').addEventListener('click', findExample);
document.getElementById('every').addEventListener('click', everyExample);
document.getElementById('some').addEventListener('click', someExample);
document.getElementById('reduce').addEventListener('click', reduceExample);
document.getElementById('object-literal').addEventListener('click', objectLiteralExample);
document.getElementById('default-args').addEventListener('click', defaultArgExample);
document.getElementById('rest-spread').addEventListener('click', restSpreadExample);
document.getElementById('destructuring').addEventListener('click', destructuringExample);
//document.getElementById('promise').addEventListener('click', promiseExample);
//document.getElementById('fetch-title').addEventListener('click', fetchExample);