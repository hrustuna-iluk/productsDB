var GoodsView = Backbone.View.extend({

    template: _.template($('#goodsTemplate').html()),

    initialize: function(options) {
        this.collection = options.collection;
        this.categoryCollection = options.categoryCollection
        this._attachEvents();
    },

    _attachEvents: function() {
        $('#send').on('click', $.proxy(this._sendOrder, this));
        $('#order').on('click', $.proxy(this._orderProduct, this));
        this.collection.off().on('add', this._renderProduct);
    },

    _sendOrder: function() {
        new SendOrderView().render()
    },

    _orderProduct: function() {
        new OrderProductView({
            collection: this.collection,
            categoryCollection: this.categoryCollection
        }).render()
    },


    _renderProduct: function(model) {
        $('table tbody').append(new ProductView({
            model: model
        }).render().el);
    },


    render: function() {
       $('#content-main #table-container').html(this.template());
        return this;
    }

});