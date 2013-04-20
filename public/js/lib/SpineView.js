define([
        'jquery',
        'underscore',
        'backbone'
], function ($, _, Backbone) {

    'use strict';

    var SpineView = Backbone.View.extend({

        doRender: function (json) {
            var that = this,
                options = this.options,
                $placeToRender,
                template;

            if (typeof this.$el === 'undefined') {
                this.$el = $(this.el);
            }

            if((typeof json === 'undefined') || (typeof that.$el === 'undefined')) {
                json = {};
            } else {
                template = that.$el.is('body') ? json.baseTemplate : json.viewName;
            }

            if(options.parent && options.placeToRender) {
                $placeToRender = options.placeToRender;
            }

            dust.render('public/templates/' + template + '.dust', json, function (err, out) {
                if(that.$el) {
                    that.$el.html(out);
                }

                if($placeToRender) {
                    $placeToRender.html(out);
                    that.$el = $($placeToRender.find('#' + json.viewName));
                }

            });

            if(this.onRender) {
                this.onRender();
            }
        }

    });

    return SpineView;
});