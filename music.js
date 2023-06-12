// selectors

const musicListSelector = document.querySelector('.music_list');

const songSelector = document.querySelector('.song');

const btnSelector = document.querySelector('.send__btn');

const songNameInputSelector = document.querySelector('.song_name__input');


function createCard(songName) {
    const songSelector = document.querySelector('.song');

    const cloneSongElement = songSelector.cloneNode(true);

    const songNameSelector = cloneSongElement.querySelector('.song_name');

    songNameSelector.innerHTML = songName

    cloneSongElement.style.display = 'flex'

    return cloneSongElement;
}

btnSelector.addEventListener('click', () => {

    const songName = songNameInputSelector.value

    const songCard = createCard(songName);

    musicListSelector.appendChild(songCard)
})


songNameInputSelector.addEventListener('input', (generation) => {
    const songNameInputValue = generation.target.value;
    const object = {
        songInput: songNameInputValue,
    }

    const objectToStr = JSON.stringify(object);

    localStorage.setItem('songs', objectToStr);
})

if(localStorageToObject) {
    songNameInputSelector.value = localStorageToObject.songInput;
}

const localStorageSongs = localStorage.getItem('music_list');

if(localStorageSongs) {
    const localStorageToObj = JSON.parse(localStorageSongs);

    localStorageToObj.forEach(item => {
        const songs = createCard(item.songInput);

        musicListSelector.appendChild(songs);
    })
}







// функция рендера компонентов ( вывод карточек на экран )
// функция добавления в LocalStorage
// функция добавления карточки.

/* 
    1. Создать селекторы 
        music_list
        song
        send__btn
        song_name__input
        song_name (внутри функции создания карты)

    2. создать eventListener для btn список на будущую реализацию:
        1. Создать карту createCard()
        2. Запихнуть данные в local storage. getItem, setItem
        3. appendChild (отрисовать созданную карту);

    3. Создать функцию для создания карты:
        1. Скопировать элемент
        2. Задать скопированному элементу display: flex
        3. Подменить данные в скопированном элементе на полученные из аргумента. (song_nameSelector.innerText = name)

    4. Создать функцию добавления новых данных в LocalStorage.
        1. getLocalStorage ( получить данные )
        2. Из строки сделать массив (JSON.parse(storage));
        3. Проверка является ли полученный массив пустым, если да то в переменную где JSON.parse мы кладём обычный пустой массив
        4. Добавить данные из аргумента функции ( аргумент является объектом );
        5. преобразовать массив в строку
        6. отправить эту строку по ключу в localStorage

    5. Создать функцию рендера странички.
        1. Взять данные из LocalStorage
        2. Проверить является ли пустым массив, если да то делаем return
        3. Преобразовать данные из LS в массив ( какой-то тип, JSON.parse)
        4. Создать цикл внутри которого мы будет создавать карточку на основе каждого элемента внутри массива (функция createCard) затем добавлять их через appendChild
    6. вызвать функции в нужном порядке, протестировать результат.
    
*/