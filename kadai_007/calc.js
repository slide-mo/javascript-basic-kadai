// 変数の代入
let num = 135; {
    // 変数が3と5の倍数の場合の出力
    if (num % 3 ===0 && num % 5 ===0){
        console.log('3と5の倍数です');
    // 変数が5の倍数の場合の出力
    } else if (num % 5 === 0) {
        console.log('5の倍数です') ;
        // 変数が3の倍数の場合の出力
    } else if(num % 3 === 0) {
        console.log('3の倍数です');
        // それ以外の変数の出力
    } else {
        console.log(num);
    }
    
}