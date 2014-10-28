var SendOrderView = Backbone.View.extend({

    template: _.template($('#sendOrderTemplate').html()),

    _attachEvents: function() {
        this.$('.sendOrder').on('click', $.proxy(this._sendOrder, this));
        this.$('.cancelModalWindow').on('click', $.proxy(this._cancelModalWindow, this));
    },

    _sendOrder: function() {
        this._cancelModalWindow();
    },

    _cancelModalWindow: function() {
        this.remove();
        $('.modal-backdrop').remove();
    },

    render: function() {
        this.$el = $(this.template());
        this.$el.modal('show');
        this._attachEvents();
        return this;
    }

});