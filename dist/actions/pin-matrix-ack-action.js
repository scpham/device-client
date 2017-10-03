"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var device_message_helper_1 = require("../device-message-helper");
var PinMatrixAckAction = (function () {
    function PinMatrixAckAction() {
    }
    PinMatrixAckAction.operation = function (client, options) {
        var o = _.extend({}, PinMatrixAckAction.DEFAULT_OPTIONS, options);
        return client.featuresService.promise
            .then(function (features) {
            var message = device_message_helper_1.DeviceMessageHelper.factory('PinMatrixAck');
            message.setPin(o.pin);
            return client.writeToDevice(message);
        });
    };
    PinMatrixAckAction.DEFAULT_OPTIONS = {
        pin: ''
    };
    return PinMatrixAckAction;
}());
exports.PinMatrixAckAction = PinMatrixAckAction;
