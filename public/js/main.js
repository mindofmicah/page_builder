require.config({
    baseUrl:'/js',

    paths: {
        jquery     : 'vendor/jquery/dist/jquery.min',
        underscore : 'vendor/underscore/underscore',
        backbone   : 'vendor/backbone/backbone',
        alerts     : 'vendor/backbone-alert/src/alerts',
        bootstrap  : 'vendor/bootstrap/dist/js/bootstrap'
    },
    shim: {
        bootstrap:{
            deps:['jquery'],
            exports:"$.fn.popover"
        }
    }
});

require([
    'backbone',
    'modules/pages/views/page_view',
    'modules/pages/collections/pages'
], function (Backbone, PageView, PageCollection) {
    page_view = new PageView({
        collection : new PageCollection
    });
});
