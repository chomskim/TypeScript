"use strict";
exports.__esModule = true;
var card_1 = require("./card");
var fivecards_1 = require("./fivecards");
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
function generate5CardList(gencount) {
    // Generate List<FiveCards>
    var p5CardsList = [];
    var deckCard = [];
    // Make a Card Deck
    for (var s = card_1.Card.CLUB; s <= card_1.Card.SPADE; s++)
        for (var r = card_1.Card.ACE; r <= card_1.Card.KING; r++) {
            deckCard.push(new card_1.Card(s, r));
        }
    //console.log(`deckCard=${deckCard}`)
    for (var i = 1; i <= gencount; i++) {
        suffle(deckCard);
        //console.log(`deckCard=${deckCard}`)
        // Make a Card Deck
        var indDeck = 0;
        var fc = new Array(5);
        var ipos = 0;
        while (indDeck < deckCard.length) {
            fc[ipos] = deckCard[indDeck];
            indDeck++;
            ipos++;
            if (ipos == 5) {
                p5CardsList.push(new fivecards_1.FiveCards(fc));
                ipos = 0;
            }
        }
    }
    return p5CardsList;
}
function suffle(list) {
    var SUFFLECOUNT = 100;
    //println "List before Suffle"
    //printList(list);
    var oneOrzero = 0;
    var lsize = list.length;
    var ind = 0;
    for (var i = 1; i <= SUFFLECOUNT * lsize; i++) {
        // random number  0 or 1
        oneOrzero = Math.random() <= 0.5 ? 0 : 1;
        //console.log(`ind=${ind} rand=${oneOrzero} card=${list[ind]}`)
        if (oneOrzero === 0) {
            // swap with last element
            var mov = list[ind];
            list[ind] = list[list.length - 1];
            list[list.length - 1] = mov;
        }
        else {
            ind++;
            ind %= lsize;
        }
    }
    //println "List after Suffle"
    //printList(list);
}
function printFiveCardsList(fcList) {
    fcList.forEach(function (fc, i) {
        console.log(i + 1 + " " + fc);
    });
}
// Main
// Test for Five Cards List
var list5card = generate5CardList(10);
console.log('---init 5 cards list---');
printFiveCardsList(list5card);
