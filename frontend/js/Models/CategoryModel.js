var CategoryModel =  Backbone.Model.extend({

    defaults: function(){
        return{
            //id from db
            categoryName:'',
            cid: this.cid
        }
    }

});