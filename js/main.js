window.onload = function () {
    let pinc = document.querySelector('.mar-r')
    let ypos = window.pageXOffset
    pinc.classList.add('pinc-bg')
}

// => вместо onload => onscroll, из-за плагина не отрабатывает это событие
// => на слбытие скролл отсчитывать высоту экрана и добавлять классы к элементам с анимациями

// window.onscroll = function () {
//     let pinc = document.querySelector('.mar-r')
//     let ypos = window.pageYOffset
//     if (ypos >= 400) {
//         pinc.classList.add('pinc-bg')
//     }
// }

// document.addEventListener('scroll', function (e) {
//         var currScroll = document.body.scrollTop;
//         document.body.scrollTop = calc(~"currScroll + 100vh");
//     }
// );