// 'btn'と'text'というidを持つHTML要素を取得し、定数に代入する
const btn =document.getElementById('btn');
const text=document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // 非同期処理を実行する（2秒後）
    setTimeout(() => {
        text.textContent = 'テキストをクリックしました';
    }, 2000);
});