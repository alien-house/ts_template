/*
*   unknown：前もって本当に型がわからない場合は、anyではなく、unknownを使用する。
*/

let a: unknown = 30
let b = a === 123
let c = a + 10 //エラー 型は'unknown'です。
if(typeof a === 'number') {
    let d = a + 10
}

