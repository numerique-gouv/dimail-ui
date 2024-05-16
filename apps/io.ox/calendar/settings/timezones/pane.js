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

define('io.ox/calendar/settings/timezones/pane', [
    'io.ox/backbone/views/extensible',
    'settings!io.ox/calendar',
    'gettext!io.ox/calendar',
    'io.ox/core/extensions',
    'io.ox/calendar/settings/timezones/favorite-view',
    'less!io.ox/calendar/settings/timezones/style.less'
], function (ExtensibleView, settings, gt, ext, FavoriteView) {

    'use strict';

    ext.point('io.ox/settings/pane/main/io.ox/calendar').extend({
        id: 'io.ox/timezones',
        title: gt('Favorite timezones'),
        ref: 'io.ox/calendar/timezones',
        loadSettingPane: false,
        index: 100
    });

    ext.point('io.ox/calendar/timezones/settings/detail').extend({
        index: 100,
        id: 'view',
        draw: function () {
            this.append(
                new ExtensibleView({ point: 'io.ox/calendar/timezones/settings/detail/view', model: settings })
                .render().$el
            );
        }
    });

    ext.point('io.ox/calendar/timezones/settings/detail/view').extend(
        {
            id: 'header',
            index: 100,
            render: function () {
                this.$el.addClass('io-ox-calendar-settings').append(
                    $('<h1>').text(gt.pgettext('app', 'Favorite timezones'))
                );
            }
        },
        {
            id: 'favorite-timezone',
            index: 200,
            render: function () {
                this.$el.append(
                    new FavoriteView({ model: settings }).render().$el
                );
            }
        }
    );
});
