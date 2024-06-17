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

define('fr.dinum/gaufre/register', [
    'io.ox/core/extensions',
    'less!fr.dinum/gaufre/style'], function (ext) {
    'use strict';

    function loadScript() {
        var script = document.createElement('script');
        script.src = 'https://integration.lasuite.numerique.gouv.fr/api/v1/gaufre.js';
        script.async = true;
        script.defer = true;
        script.id = 'lasuite-gaufre-script';
        document.head.appendChild(script);
    }

    loadScript();

    ext.point('io.ox/core/appcontrol/right').extend({
        id: 'launcherdinum',
        index: 500,
        draw: function () {
            this.append(
                $('<div class="dinum-toolbar-launch">')
                .append($('<button tabindex="-1" type="button" class="dinum-toolbar-launch-button lasuitenumerique-gaufre-btn js-lasuite-gaufre-btn btn btn-link lcell fr-btn fr-btn--lg fr-btn--icon fr-btn--secondary fr-icon-lasuite lasuitenumerique-gaufre-btn lasuitenumerique-gaufre-btn--dsfr">')
                ));
        }
    });
});
