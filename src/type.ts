
/*
*  型について

    TypeScript’s type hierarchy by oreilly.com
    https://www.oreilly.com/library/view/programming-typescript/9781492037644/assets/prts_0301.png
*/

/**
*   boolean
*   ===========================
*/
let a = true; //boolean
var b = false; //boolean
const c = true; //true
let d: boolean = true; //boolean
let e: true = true; //true
let f: true = false; //エラー
/**
 * 
 * 
 * 【リテラル型】
 * c, e, fはリテラル型
 * ただ一つの値を表、それ以外は受け入れない型。
 */



/**
*   Object
*   ===========================
*/
let a = {
    b:'x'
}
//これでもいい
let a : {b:number} = {
    b : 12
}

// aはstring型のcを持つ可能性がある。undifinedでもいい。
// boolean型であるプロパティを任意の数だけ持つことができる
// インデックスシグネチャという。
let a : {
    b:number
    c?:string
    [key:number]:boolean
}

/**
 * 合併：|
 * 交差：&
 * 
 */


/**
 * 配列
 * 一般的な経験則では、配列を均一に保つこと。混ぜると作業が多くなる。
 * 
 * 
 */

let ko = [1,2,3]
let wa = [1,'a']

/**
 *　タプル
 * 明示的に型付けする必要がある
 * 
 */
let a:[number] = [1]

//少なくとも一つの要素を持つ文字列リスト
let friends:[string,...string[]] = ['Sara','Tali','chloe']

//読み取り専用タプル
let as: readonly number[] = [1, 2, 3]
let bs: readonly number[] = as.concat(4)

