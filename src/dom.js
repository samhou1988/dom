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

    window.dom = dom;
}) (window, document);