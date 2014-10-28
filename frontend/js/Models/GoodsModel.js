var GoodsModel = Backbone.Model.extend({

    defaults: function() {
        return {
            //id from db
            nameOfGoods: '',
            category: CategoryModel,
            priceOfUnit: 0,
            tara: TareModel,
            numberOfGoods: 0
        }
    },

    deleteModel:function() {
        this.destroy();
    }

});