define([
        'jquery',
        'underscore',
        'backbone',
        'lib/SpineView'
], function ($, _, Backbone, SpineView) {
    var AppView = SpineView.extend({

        el: '#content',

        $el: $(this.el),

        events: {
            'submit form.proceed': 'proceedForm',
            'click input.submit': 'proceedForm',
            'click a.proceed': 'proceedLink',
        },

        proceedForm: function (e) {
            $("#content").html("<h2>Loading...</h2>");

            $.post(e.target.action, $(e.target).serialize(), function (json) {
                this.showPage(json);
            });

            e.preventDefault();
        },

        proceedLink: function (e) {
            this.getPage(e.target.href);
            e.preventDefault();
        },

        showPage: function (json) {
            var that = this;
            
            require(['views/' + json.viewName], function (View) {
                dust.render('public/templates/' + json.viewName + '.dust', json, function (err, out) {
                    $("#content").html(out);
                });
                var pageView = new View({parent: that});
            });

            Backbone.history.navigate('#' + json.viewName);
        },

        getPage: function (url) {
            var that = this; // Oh I know. Just lazy to do proxy for now.

            $("#content").html("<h2>Loading...</h2>");

            $.get(url, function (json) {
                that.showPage(json);
            });
        }

    });

    return AppView;
});