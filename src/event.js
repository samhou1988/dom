/**
 * event handle
 *
 * @author  jackhou2007@gmail.com
 * @date 2014-06-28
 */
(function (w) {
    'use strict';

    var eventUtil = {

        // add event handle
        addEvent: function (ele, type, handle) {
            if ('addEventListener' in ele) {
                ele.addEventListener(type, handle, false);
            } else if ('attachEvent' in ele) {
                ele.attachEvent('on' + type, handle);
            } else {
                ele['on' + type] = handle;
            }
        },

        // remove event handle
        removeEvent: function (ele, type, handle) {
            if ('removeEvnetListener' in ele) {
                ele.removeEvnetListener(type, handle, false);
            } else if ('detachEvent' in ele) {
                ele.detachEvent('on' + type, handle);
            } else {
                ele['on' + type] = null;
            }
        }
    };

    w.eventUtil = eventUtil;

}) (window);