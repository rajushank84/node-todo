define([
        'jquery',
        'underscore',
        'backbone'
], function ($, _, Backbone) {

    'use strict';

    var SpineView = Backbone.View.extend({

        renderTemplate: function (json, callback) {
            var that = this;

            dust.render('public/templates/' + json.viewName + '.dust', json, function (err, out) {
                if(that.el) {
                    $(that.el).html(out);
                }
            });

            if(callback) {
                callback();
            }
        },

        showTemplate: function() {
            $(this.el).show();
        },

        hideTemplate: function() {
            $(this.el).hide();
        }


    });

    return SpineView;
});