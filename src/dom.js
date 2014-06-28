/**
 * dom compute
 *
 * @author jackhou2007@gmail.com
 * @date 2014-06-28
 */
(function (window, document, undefined) {
    'use strict';

    var dom = {};
    dom.getById = function (id, parent) {
        parent = parent || document;
        return parent.getElementById(id);
    };

    // get elements by classname
    dom.getByClass = function (classname, parent) {
        var oParent = parent ? document.getElementById(parent) : document,
            eles = [],
            elements = oParent.getElementsByTagName("*");

        for (var i = 0, len = elements.length; i < len; i++) {
            if (classReg(elements[i].className).test(classname)) {
                eles.push(elements[i]);
            }
        }

        return eles;
    }

    // function helper
    function classReg(classname) {
        return new RegExp("(^|\\s)" + classname + "(\\s|$)");
    }

    window.dom = dom;
}) (window, document);