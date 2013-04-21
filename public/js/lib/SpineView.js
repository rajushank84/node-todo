define([
        'jquery',
        'underscore',
        'backbone'
], function ($, _, Backbone) {

    'use strict';

    var SpineView = Backbone.View.extend({

        renderTemplate: function (json, callback) {
            var that = this;

            renderTemplate(json.viewName, json, function(out) {
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