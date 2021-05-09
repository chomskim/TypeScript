"use strict";
exports.__esModule = true;
exports.FiveCards = void 0;
var FiveCards = /** @class */ (function () {
    function FiveCards(cards) {
        var _this = this;
        this.fiveCards = [];
        cards.forEach(function (card) {
            _this.fiveCards.push(card);
        });
        //FiveCards.reorder()
    }
    FiveCards.prototype.compareTo = function (right) {
        return this.fiveCards[0].compareTo(right.fiveCards[0]);
    };
    FiveCards.prototype.toString = function () {
        var allCardString = this.fiveCards.join(', ');
        return "[" + allCardString + "]";
    };
    return FiveCards;
}());
exports.FiveCards = FiveCards;
