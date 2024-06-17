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
define('fr.dinum/clear-file-cache/register', [], function () {
    'use strict';

    var key = ox.manifests.plugins['fr.dinum/clear-file-cache/register'].version;

    var envDev = (window.location.origin).includes('localhost');

    function getIndexedDB() {
        var request = window.indexedDB.open('appsuite.filecache', 1);
        return request;
    }

    if (key !== 'DINUM-VERNUM' || envDev) {
        localStorage.versionPlugin = key;
        var r = getIndexedDB();
        var db = null;
        r.onsuccess = function (event) {
            db = event.target.result;
            var store = db.transaction(['filecache']).objectStore('filecache').getAllKeys();
            store.onsuccess = function (e) {
                e.target.result.filter(function (k) {
                    return k.includes('fr.dinum');
                }).forEach(function (i) {
                    db.transaction(['filecache'], 'readwrite').objectStore('filecache').delete(i);
                });
            };
        };
    }

});
