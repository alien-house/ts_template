
/**
*  関数
*   戻り値の型アノテーションは省略可。パラメータは必須。
*/
function greet(name:string) {
    return 'hello ' + name
}
let greet2 = function(name:string) {
    return 'hello ' + name
}
let greet3 = (name: string) => {
    return 'hello ' + name
}
let greet4 = (name: string) =>
    'hello ' + name

//？で省略可パラメータ（必須パラは最初、省略可はあとに指定する）
function log(message: string, userId?:string, userId2 = 'Not in') {
    let time = new Date().toLocaleDateString()
    console.log(time, message, userId || 'Not signed in')
}



