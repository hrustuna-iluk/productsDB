var ProductView = Backbone.View.extend({

    template: _.template($('#productTemplate').html()),

    tagName: 'tr',

    className: 'product',

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});