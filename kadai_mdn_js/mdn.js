// 現在の年月日や時刻の取得
const today = new Date("2025-09-03");

// 取得した年のみ
const year = today.getFullYear();

// 取得した月のみ
const month = today.getMonth() + 1;

// 取得した日のみ
const day = today.getDate();

console.log(year + '年',month + '月',day + '日');