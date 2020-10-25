app = app || {};
var t = function(id, data) {
    return $($.parseHTML(_.template($.trim($('#' + id + '-template').html()))
        (data || {})));
}