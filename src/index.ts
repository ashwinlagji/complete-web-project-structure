import 'core-js/client/shim';
import 'zone.js/dist/zone';
import 'rxjs';

import './index.scss';
import './test.sass';

import './abcd.html';

interface MyInterface {
    a: string;
    b: Number;
}

function fun (obj: MyInterface) {
    console.log('Hello world ');
    console.log(`a: ${obj.a} b:${obj.b}`);
};

let P: MyInterface = {
    a: 'AAAA',
    b: 1234
};
fun(P);
