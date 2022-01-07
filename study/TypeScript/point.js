"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    //     x: number;
    //     y: number;
    function Point(_x, _y) {
        var _this = this;
        if (_y === void 0) { _y = 2; }
        this._x = _x;
        this._y = _y;
        this.drawPoint = function () {
            console.log(_this._x, _this._y);
        };
        this.getDistance = function (p) {
            var distance = Math.pow(p.x - _this._x, 2) + Math.pow(p.y - _this._y, 2);
            console.log(distance);
            return distance;
        };
        // this.x = x;
        // this.y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
