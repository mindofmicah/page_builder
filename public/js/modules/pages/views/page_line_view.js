define(['backbone', 'modules/pages/views/modal'], function (Backbone, Modal) {
    var PageLineView = Backbone.View.extend({
        tagName: 'div',
        fields : {},
        initialize: function () {
            this.render();
            this.listenTo(this.model, 'change', this.render);
        },
        render: function () {
            this.$el.html(this.model.get('id') + '-' + this.model.get('slug') + '<br>'+this.model.get('content'));
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
