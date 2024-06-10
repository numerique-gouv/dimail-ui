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

define('fr.dinum/assistance/register', ['io.ox/core/extensions', 'gettext!io.ox/core'], function (ext, gt) {
    'use strict';
    console.log('Bonjour Benjamin, ceci est le register mis a jour');
    if (ox.manifests.plugins['fr.dinum/assistance/register'].version !== 'DINUM-VERNUM') {
        self.suicide();
    }


    function assistance() {
        this.link('assistance', gt('Assistance'), function (e) {
            e.preventDefault();
            window.open('https://webmail.numerique.gouv.fr/assistance/', 'Assistance');
        });
    }

    // function rdvPage() {
    //     this.link('rdv', 'Rdv', function (e) {
    //         e.preventDefault();
    //         ox.launch('fr.dinum/pageRdv/main');
    //     });
    // }

    ext.point('io.ox/core/appcontrol/right/help').extend({
        id: 'divider-third',
        index: 500,
        extend: function () {
            this.divider();
        }
    });

    ext.point('io.ox/core/appcontrol/right/help').extend({
        id: 'assistance',
        index: 600,
        extend: function () {
            assistance.apply(this, arguments);
        }
    });

    // ext.point('io.ox/core/appcontrol/right/help').extend({
    //     id: 'divider-fourth',
    //     index: 700,
    //     extend: function () {
    //         this.divider();
    //     }
    // });

    // ext.point('io.ox/core/appcontrol/right/help').extend({
    //     id: 'Rdv',
    //     index: 800,
    //     extend: function () {
    //         rdvPage.apply(this, arguments);
    //     }
    // });
});
