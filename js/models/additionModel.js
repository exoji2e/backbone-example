app = app || {};
(function($) {
    'use strict';
    app.AdditionModel = Backbone.Model.extend({
        initialize : function() {
            this.set('t1', 0);
            this.set('t2', 0);
        },
        add : function(varId) {
            this.set(varId, this.get(varId) + 1);
        },
        getVar : function(varId) {
            return this.get(varId);
        },
        sum : function() {
            return this.get('t1') + this.get('t2');
        },
    });
})(jQuery);