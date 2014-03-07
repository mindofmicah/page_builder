define(['backbone', 'modules/pages/models/page'], function (Backbone, PageModel) {
    var PageCollection = Backbone.Collection.extend({
        url:'/api/pagebuilder/collection',
        model:PageModel
    });

    return PageCollection;
});
