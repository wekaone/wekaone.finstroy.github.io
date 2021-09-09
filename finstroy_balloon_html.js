ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [53.30721192564775,50.28714746557643],
            zoom: 16,
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
        }, {
            searchControlProvider: 'yandex#search'
        });
    myMap.geoObjects
        .add(new ymaps.Placemark([53.31005907115121,50.28758199999998], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "http://finstroy.tilda.ws/object" target="_blank">ЖК «Новая Самара»</a><br>' +
            '<span class="description">г. Самара, пос. Мехзавод, Квартал 1, Дом 33</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<a href = "#popup:zvonok" target="_blank" style="font-size: 14px">➥ <u>Смотреть подробнее</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: 'УК «Финстрой»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'г. Самара, пос. Мехзавод, Квартал 1, Дом 33'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3661-3365-4466-b332-383331646438/ns_op_oapng.png',
                // Размеры метки.
                iconImageSize: [40, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }));
}
