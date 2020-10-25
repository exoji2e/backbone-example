app = app || {};
(function($) {
    'use strict';
    app.AdditionView = Backbone.View.extend({
        attributes : {
            'class' : 'addition',
        },
        initialize : function(options) {
            this.model = new app.AdditionModel({});
            console.log('init_view');
        },
        render : function() {
            this.$el.html(t(this.attributes.class, {}));
            var termView1 = new app.TermView({model: this.model, varId: 't1'});
            var termView2 = new app.TermView({model: this.model, varId: 't2'});
            var sumView = new app.SumView({model: this.model});
            this.$('#term1').append(termView1.render().el);
            this.$('#term2').append(termView2.render().el);
            this.$('#sum').append(sumView.render().el);
            return this;

        },
        getVar : function(varId) {
            return this.get(varId);
        },
    });
})(jQuery);