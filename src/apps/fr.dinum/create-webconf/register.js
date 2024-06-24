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

define('fr.dinum/create-webconf/register', ['io.ox/core/extensions'], function (ext) {
    'use strict';

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function generateRoomName() {
        var charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var digitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var roomName = shuffle(digitArray).join('').substring(0, randomIntFromInterval(3, 6)) + shuffle(charArray).join('').substring(0, randomIntFromInterval(7, 10));
        return shuffle(roomName.split('')).join('');
    }

    var url = 'https://webconf.numerique.gouv.fr/' + generateRoomName();

    ext.point('io.ox/calendar/edit/section').extend({
        id: 'create-webconf',
        index: 310,
        draw: function () {
            this.append(
                $('<div class="hidden-xs col-sm-6 find-free-time">')
                    .append($('<button type="button" class="btn btn-link mb-4" data-action="create-webconf">')
                    .text('Créer un lien webconf')
                    .on('click', function (e) {
                        e.stopPropagation();
                        var target =  $(document).find('.form-control[name="location"]');
                        target.val(url);
                    })
                    )
            );
        }
    });

});
