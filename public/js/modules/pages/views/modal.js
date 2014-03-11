define(['backbone', 'bootstrap'], function (Backbone, Bootstrap) {
    var PageModal = Backbone.View.extend({
        tagName:'div',
        className:'modal',
        template:_.template($('#page-popup').html()),
        
        initialize : function () {
        this.render();
             this.fields.slug = this.$el.find('#slug');
            this.fields.type = this.$el.find('#type');
            this.fields.content = this.$el.find('#page-content');
     
        },
        events: {
            submit : 'editModel'
        },
        fields:{},
        editModel : function(e) {

            e.preventDefault();
            var ret = {};
            
            for(var key in this.fields) {
                ret[key] = this.fields[key].val();
            }
            this.model.set(ret);
        },
        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        show : function () {
    
            this.$el.modal();

        }

    });
    return PageModal;
});
