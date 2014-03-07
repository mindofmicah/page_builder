define(['backbone', 'modules/pages/views/page_line_view', 'modules/pages/views/modal', 'modules/pages/models/page'], function (Backbone, PageLineView, Popup, PageModel) {
    var PageView = Backbone.View.extend({
            el : '#main', 
            initialize : function () {
            var that = this;
                this.collection.fetch({
                    success : function () {
                        that.render();
                    }
                });
                return this.render();
            },
            events : {
                'click button' : 'launchPopup'
            },
            render : function () {
                var $div = this.$el.empty();
                this.collection.each(function (model) {
                    $view = new PageLineView({model:model});
                    $div.append(
                        $view.render().$el
                    );
                });
                $div.append('<button>Add New Page</button>');
                return this;
            },
            launchPopup : function () {
                new Popup({
                    model : new PageModel
                }).show();
            }
        });
    return PageView;
});
