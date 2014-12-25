(function (window, document) {
    'use strict';

    function drag() {

    }

    function down() {
        document.onmousemove = function (event) {
            event = event || window.event;
        }
    }
})(window, document);