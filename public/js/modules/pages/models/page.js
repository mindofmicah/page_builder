define(['backbone'], function (Backbone) {
    var PageModel = Backbone.Model.extend({
        defaults:{slug:'asfd', content:'content'} 
    });

    return PageModel;
});
