(function (w, d) {
    'use strict';

    // function helper
    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // define variable
    var hasClass, addClass, removeClass;

    // modern borwser
    if ('classList' in d.documentElement) {
        hasClass = function (ele, c) {
            return ele.classList.contains(c);
        };

        addClass = function (ele, c) {
            if (!hasClass(ele, c)) {
                ele.classList.add(c);
            }
        };

        removeClass = function (ele, c) {
            ele.classList.remove(c);
        };
    } else {
        hasClass = function (ele, c) {
            return classReg(c).test(ele.className);
        };

        addClass = function (ele, c) {
            if (!hasClass(ele, c)) {
                ele.className = ele.className + " " + c;
            }
        };

        removeClass = function (ele, c) {
            ele.className = ele.className.replace(classReg(c), " ");
        }
    }

    function toggleClass(ele, c) {
        var fn = hasClass(ele, c) ? removeClass : addClass;
        fn(ele, c);
    }

    // shortcut
    var classie = {

        // short name
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass,

        // full name
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass
    };

    w.classie = classie;
})(window, document);