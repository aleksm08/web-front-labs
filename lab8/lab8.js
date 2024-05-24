function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = `
        <div class="frame">
            <div>Дата и время для локали России: ${today.toLocaleString('ru-RU')}</div>
            <div>Дата и время для локали Греции: ${today.toLocaleString('el-GR')}</div>
            <div>Дата и время для локали Швейцарии: ${today.toLocaleString('fr-CH')}</div>
            <div>Дата и время для локали Албании: ${today.toLocaleString('sq-AL')}</div>
            <div>Дата и время для локали Макао, Китай: ${today.toLocaleString('zh-MO')}</div>
            <div>Дата и время для локали Словакии: ${today.toLocaleString('sk-SK')}</div>
        </div>

    `;
}