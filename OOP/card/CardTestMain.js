"use strict";
exports.__esModule = true;
var card_1 = require("./card");
var LINE_MAX = 13;
function printList(list) {
    var res = [];
    list.forEach(function (card, i) {
        res.push(card);
        i += 1;
        if (i % LINE_MAX === 0) {
            console.log("" + res.join(' '));
            res = [];
        }
    });
}
// Main
// Test for a Card Deck
var deck = [];
for (var s = card_1.Card.CLUB; s <= card_1.Card.SPADE; s++) {
    for (var r = card_1.Card.ACE; r <= card_1.Card.KING; r++) {
        deck.push(new card_1.Card(s, r));
    }
}
console.log('---init---');
printList(deck);
console.log('---sorted---');
printList(deck.sort());
console.log('---sorted rank compare---');
printList(deck.sort(card_1.Card.compare));
console.log('---sorted rank compare---');
printList(deck.sort(function (left, right) { return left.compareTo(right); }));
