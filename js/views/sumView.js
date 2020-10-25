app = app || {};
(function($) {
    'use strict';
    app.SumView = Backbone.View.extend({
        attributes : {
            'class' : 'term',
        },
        initialize : function(options) {
            _.bindAll(this, 'render');
            this.model = options.model;
            this.model.on('change', this.render);
        },
        render : function() {
            this.$el.html(t(this.attributes.class, {value:this.model.sum()}));
            return this;
        },
    });
})(jQuery);