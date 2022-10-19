// скачивание файла с нужным значением



function getText(){ // объявление функции
    let currentBG = document.getElementsByClassName('currentBG');// по классу получеаешь нужные элемент
    let currentValue = ' '; // переменная, где будешь хранить нужное значение
    for (var i = 0; i < currentBG.length; i++) { // циклом построчно проходишь по эелементу
      let value = currentBG[i].innerText; // достаёшь нужную строку методом
      currentValue = ('Value: ' + value); // создаёшь строку на вывод
    }
    console.log(currentValue) // эта команда выводит в консоль
    alert(currentValue) // эта команда вызывает всплывающее окно
    * эта часть кода отвечает за скачивание файла
    let blob = new // объект блоб
    Blob([currentValue], {type: 'text/plain'}); // закидываешь нужную строку
    let link = document.createElement('a'); // создаёшь невидимую ссылку
    link.setAttribute('href', URL.createObjectURL(blob)); // кидаешь якорь на объект блоб
    link.setAttribute('download', 'my-text.txt'); // добавляешь атрибут на скачивание и название документа
    link.click(); // производишь клик по невидимой ссылке командой
    */
}
setInterval(getText, 30000); // устанавливаешь интервал срабатывания функции(30сек)


