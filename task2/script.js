const prompt = document.querySelector('#prompt');

prompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})

const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const Alert = document.querySelector('#Alert');
Alert.addEventListener('click', () => {
    alert('Сообщает пользователю важную информацию');
})
