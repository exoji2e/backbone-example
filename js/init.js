var app = app || {};
app.init = function() {
    var additionView = new app.AdditionView();
    var el = additionView.render().el;
    $('#main').append(el);
};

(function ($) { // Need to load templates before initializing.
    $.holdReady(true);
    $.ajax({
        url: 'templates.html',
        method: 'GET',        
        dataType: 'html',
        cache: true,
        success: function(data) {             
            $('head').append(data); 
            $.holdReady(false);
            app.init();
        },
        error: function(data) {
            console.log('failed to load templates..');
            console.log(data);
        },
    });
})(jQuery);