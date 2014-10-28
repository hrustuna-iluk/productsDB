var OrderProductView = Backbone.View.extend({

    template: _.template($('#insertProductTemplate').html()),
    templateOptionForSelectCategory: _.template($('#selectOptionTemplate').html()),

    initialize: function(options) {
        this.collection = options.collection;
        this.categoryCollection = options.categoryCollection;
    },

    _attachEvents: function() {
        this.$('.orderProduct').on('click', $.proxy(this._insertProductInDB, this));
        this.$('.cancelModalWindow').on('click', $.proxy(this._cancelModalWindow, this));
    },

    _insertProductInDB: function() {
        this._addNewProduct();
        this.remove();
        this._cancelModalWindow();
    },

    _cancelModalWindow: function() {
        this.remove();
        $('.modal-backdrop').remove();
    },

    _addNewProduct: function() {
        var goodsModel = new GoodsModel;
        var categoryId = this.$('.categoryTitle').val();
        var categoryModel = this.categoryCollection.findWhere({cid: categoryId});
        goodsModel.set({
            nameOfGoods: this.$('.nameOfProduct').val(),
            priceOfUnit: this.$('.priceOfProduct').val(),
            numberOfGoods: this.$('.amountOfProduct').val(),
            category : categoryModel
        });
        this.collection.add(goodsModel);
    },

    _clearFieldsInModal: function() {
        this.$('.nameOfProduct').val('');
        this.$('.priceOfProduct').val('');
        this.$('.amountOfProduct').val('')
    },

    _fillCategoryList: function() {
        this._clearFieldsInModal();

        this.categoryCollection.each(function(model){
            this.$('.categoryTitle').append(this.templateOptionForSelectCategory(model.toJSON()));
        }, this);
    },

    render: function() {
        this.$el = $(this.template());
        this.$el.modal('show');
        this._fillCategoryList();
        this._attachEvents();
        return this;
    }

});