'use strict';

// touchstart - спрацьовує, коли палець торкається елемента.
// touchmove - спрацьовує, коли палець рухається по екрану (після touchstart).
// touchend - спрацьовує, коли палець піднімається (торкання завершується).
// touchenter - спрацьовує, коли палець заходить на межі елемента.
// touchleave - спрацьовує, коли палець виходить за межі елемента.
// touchcancel - спрацьовує, коли подія торкання скасовується (наприклад, через системне переривання).


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches)
    })

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        //console.log('Move');
        console.log(e.targetTouches[0].pageX); // Виводить координату X першого дотику відносно сторінки.
    })

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    })
});

// touches - масив усіх пальців, що наразі торкаються екрана.
// targetTouches - масив пальців, що торкаються конкретного елемента (на якому спрацювала подія).
// changedTouches - масив пальців, які змінили свій стан під час події (наприклад, додано або прибрано дотик).