define(['backbone', 'modules/pages/views/modal'], function (Backbone, Modal) {
    var PageLineView = Backbone.View.extend({
        tagName: 'div',
        fields : {},
        initialize: function () {
            this.render();
            this.fields.slug = this.$el.find('#slug');
            this.fields.type = this.$el.find('#type');
            this.fields.content = this.$el.find('#page-content');
        },
        render: function () {
            this.$el.html(this.model.get('id') + '<br>'+this.model.get('content'));
           return this;
        },
        events : {
            'click' : 'launchPopup',
              },
        launchPopup : function (evt) {
            new Modal({model:this.model}).show();
        }
          });
    return PageLineView;
});
