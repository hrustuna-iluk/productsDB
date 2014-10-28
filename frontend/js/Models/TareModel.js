var TareModel = Backbone.Model.extend({

    defaults: function() {
        return {
            //id from db
            tareName: '',
            numberOfUnits: 0
        }
    }

});