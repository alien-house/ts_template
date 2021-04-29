
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



/**
 * ジェネレーター・いてレーター
 * 一連の値を生成するための便利な方法
 * 
 */

function* createFibonacciGenerator() {

}

/**
 * 呼び出しシグネチャ・型シグネチャ
 * 関数の型。
 * 関数を引数として渡す場合や、関数を別の関数から返す場合に必要。
 * 
 */

//function greet(name:string)
type Greet = (name:string) => string