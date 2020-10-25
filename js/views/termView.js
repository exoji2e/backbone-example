app = app || {};
(function($) {
    'use strict';
    app.TermView = Backbone.View.extend({
        attributes : {
            'class' : 'term',
        },
        events : {
            'click' : 'clicked',
        },
        initialize : function(options) {
            _.bindAll(this, 'clicked', 'render');
            this.model = options.model;
            this.listenTo(this.model, 'change', this.render);
            this.varId = options.varId;
        },
        render : function() {
            var value = this.model.getVar(this.varId);
            this.$el.html(t(this.attributes.class, {value: value}));
            return this;
        },
        clicked : function(event) {
            this.model.add(this.varId);
        },
    });
})(jQuery);