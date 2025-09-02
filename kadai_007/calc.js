// 変数numに1以上の正の数を代入する
let num = Math.floor(Math.random() * 15)+ 1;

// 変数numの値を出力する(確認用)
console.log(num);

// 変数numの値が出れば文字列を出力する
if (num % 3 === 0 && num % 5 === 0){
    console.log('3と5の倍数です');
} else if (num % 3 === 0){
    console.log('3の倍数です');
} else if (num % 5 === 0){
    console.log('5の倍数です');
} else {
    console.log(num);
}
