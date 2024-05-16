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

define('fr.dinum/pageRdv/main', [
    'io.ox/core/notifications',
    'io.ox/core/http',
    'io.ox/core/folder/api',
    'gettext!io.ox/calendar',
    'settings!io.ox/calendar'
], function (notifications, http, folderAPI, gt, settings) {

    'use strict';

    function iCalProbe(uri) {

        return http.PUT({
            module: 'chronos/account',
            params: {
                action: 'probe'
            },
            data: {
                'com.openexchange.calendar.provider': 'ical',
                'com.openexchange.calendar.config': {
                    uri: uri
                }
            }
        });
    }

    function getURISCalendar() {
        return folderAPI.list('1');
    }

    // this is just code. loading this does not imply to launch the application

    // application object. 'name' is mandatory!
    var app = ox.ui.createApp({ name: 'fr.dinum/pageRdv' });

    // by using setLauncher this way, we register a callback function
    // that is called when the application is really launched
    app.setLauncher(function () {

        // application window (some applications don't have a window)
        var win = ox.ui.createWindow({
            name: 'fr.dinum/pageRdv',
            title: 'Test ajout rendez vous'
        });

        app.setWindow(win);

        // Add css class with your namespace
        win.addClass('com-example-helloWorld');

        // add something on 'main' node
        win.nodes.main
            .css({ padding: '13px', textAlign: 'center' })
            .append($('<h1>').text('Test ajout calendrier'))
            .append(($('<button id="addCalendarButton">').text('Ajouter à mon calendrier'))
            .on('click', function () {
                var uri = 'https://calendar.google.com/calendar/ical/a55eccc8c9ac6a5b8bf08499aa931cab2a881b16e1322ebeac55de30270345e5%40group.calendar.google.com/public/basic.ics';
                var calendar = getURISCalendar().then(function (data) {
                    return data;
                }).catch(function (error) {
                    console.error('Erreur lors de la récupération des calendriers :', error);
                });

                calendar.then(function (calendarsArray) {
                    var alreadyExist = calendarsArray.filter(function (e) {
                        return e['com.openexchange.calendar.accountError'] && e['com.openexchange.calendar.accountError'].uri === uri;
                    });

                    if (!alreadyExist.length) {
                        iCalProbe(uri).then(function (data) {
                            data.module = 'event';

                            data['com.openexchange.calendar.config'] = _.extend({}, data['com.openexchange.calendar.config'], {
                                defaultAlarmDate: settings.get('chronos/defaultAlarmDate', []),
                                defaultAlarmDateTime: settings.get('chronos/defaultAlarmDateTime', [])
                            });

                            return folderAPI.create('1', data);
                        }).then(function () {
                            notifications.yell('success', gt('Agenda synchronisé avec succès'));
                        }).catch(function (err) {
                            notifications.yell(err);
                        });
                    } else {
                        notifications.yell('error', gt('Cet agenda est déja ajouté'));
                    }

                }).catch(function (error) {
                    console.error('Une erreur est survenue :', error);
                });
            }));

        win.show();
    });

    return {
        getApp: app.getInstance
    };
});
