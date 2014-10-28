var CategoryView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#newCategoryTemplate').html()),
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});