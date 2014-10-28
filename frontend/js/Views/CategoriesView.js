var CategoriesView = Backbone.View.extend ({
    //template: _.template($('#categoriesTemplate').html()),
   // className: 'nav nav-pills nav-stacked',

    initialize: function(options) {
        this.collection = options.collection;
        this._attachEvents();
    },

    _attachEvents: function() {
        this.collection.on('add',$.proxy( this._renderCategory,this));
        $('#newNameOfCategory').on('keypress', $.proxy(this._createCategory,this));
    },

    _renderCategory: function(model) {
        $('#list-container #category-container ul').append(
            new CategoryView({
                model: model
            }).render().el);
    },

    _createCategory: function(e) {
        if(e.keyCode == 13 && $('.newNameOfCategory').val() ){
        var categoryTitle = $('.newNameOfCategory').val();
        $('.newNameOfCategory').val('');
        var categoryModel = new CategoryModel();
       // if(categoryTitle){
            categoryModel.set({categoryName: categoryTitle});
            this.collection.add(categoryModel);
       // }
    }
    }

});