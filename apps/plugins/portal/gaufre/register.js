/*
 *
 * @copyright Copyright (c) Open-Xchange GmbH, Germany <info@open-xchange.com>
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with OX App Suite. If not, see <https://www.gnu.org/licenses/agpl-3.0.txt>.
 *
 * Any use of the work other than as authorized under this license or copyright law is prohibited.
 *
 */

define('plugins/portal/gaufre/register', ['io.ox/core/extensions'], function (ext) {

    'use strict';

    // function appendIframe() {
    //     // if (document.querySelector('#lasuitenumerique-gaufre-iframe')) {
    //     //     return;
    //     // }
    //     var iframe = document.createElement('iframe');
    //     iframe.title = 'Applications de La Suite numérique';
    //     iframe.id = 'lasuitenumerique-gaufre-iframe';
    //     iframe.width = '304';
    //     iframe.height = '360';
    //     iframe.style.cssText = 'display: none !important';
    //     iframe.src =
    //       'https://lasuite-center-preprod.osc-fr1.scalingo.io/apps-iframe';
    //     document.body.appendChild(iframe);
    // }


    ext.point('io.ox/portal/widget').extend({
        id: 'gaufre'
    });

    ext.point('io.ox/portal/widget/gaufre').extend({

        load: function (baton) {
            var def = $.Deferred();
            def.resolve('Its like solid happiness.').done(function () {
                baton.data = {
                    teaser: 'Buy stuff',
                    fullText: 'Buy stuff. It is like solid happiness.'
                };
            });
            return def;
        },

        preview: function () {
            var iframe = document.createElement('iframe');
            iframe.title = 'Applications de La Suite numérique';
            iframe.id = 'lasuitenumerique-widget';
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.style.cssText = 'display: block; position: absolute; top: 0; left: 0';
            iframe.src =
              'https://lasuite-center-preprod.osc-fr1.scalingo.io/apps-iframe';
            this.append(iframe);
        },

        draw: function (baton) {
            var content = $('<div class="myAdd">')
                .text(baton.data.fullText);
            this.append(content);
        }
    });

    // add widget to portal settings including the 'add widget' dropdown
    ext.point('io.ox/portal/widget/gaufre/settings').extend({
        title: 'Suite numérique',
        type: 'gaufre'
    });
});
