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

define('fr.dinum/pageRdv/register', [
    'io.ox/core/extPatterns/stage',
    'io.ox/core/desktop'
], function (Stage, ui) {
    'use strict';

    new Stage('io.ox/core/stages', {
        id: 'fr.dinum/pageRdv',
        // register before all core apps get registered
        before: 'app_register',
        run: function () {
            var app = ui.createApp({
                // a name is mandatory, it should be the path fo the main.js file
                name: 'fr.dinum/pageRdv',
                // just a title for the app
                title: 'Test page',
                // this app allows for deep links
                refreshable: true,
                // do not register settings
                settings: true,
                // this will be injected into DOM as is
                icon: '<i class="fa fa-address-book">'
            });
            ui.apps.add(app);
        }
    });
});
