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

define('fr.dinum/delete-button-archive/register', [
    'io.ox/core/extensions'], function (ext) {
    'use strict';

    var toolbars = ext.point('io.ox/mail/toolbar/links');

    toolbars.replace({
        id: 'compose',
        index: 100,
        title: '+ Nouveau mail'
    });

    ext.point('io.ox/mail/detail/content-general').extend({
        id: 'archive-disabled',
        draw: function (baton) {
            console.log(baton);
        },
        process: function (baton) {
            console.log(this.$el);
            var folder_id = baton.data.folder_id;
            console.log(folder_id);
            var isArchive = folder_id.includes('Archives');
            if (isArchive) {
                toolbars.disable('archive');
            } else {
                toolbars.enable('archive');
            }
        }
    });
});
