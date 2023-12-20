// 変数でリストを代入
let holiday = ['正月','成人の日','建国記念日','天皇誕生日','春分の日','昭和の日','憲法記念日','みどりの日','こどもの日','海の日','山の日','敬老の日','秋分の日','スポーツの日','文化の日','勤労感謝の日'];
// インデックスを登録
let index = 0;
// while文で出力するようにする
while (index < holiday.length) {
    console.log(holiday[index]);
    // index++で1つずつ進むように繰り返す
    index++;
}
// for文で0からholidayの長さ分まで出力するようにする
for ( let i= 0; i <= holiday.length; i++ ) {
    console.log(holiday[i]);
}