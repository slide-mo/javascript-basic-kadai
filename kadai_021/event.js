const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
    const text = document.getElementById('text');
    text.innerText = 'ボタンをクリックしました';
    },2000);
})