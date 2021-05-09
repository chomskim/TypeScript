var Bunsu = /** @class */ (function () {
    function Bunsu(top, bot) {
        this.bunja = top;
        this.bunmo = bot;
        this.normalize();
    }
    Bunsu.prototype.toString = function () {
        return this.bunja + "/" + this.bunmo;
    };
    Bunsu.prototype.compareTo = function (right) {
        return this.bunja * right.bunmo - this.bunmo * right.bunja;
    };
    Bunsu.gcd = function (n, m) {
        // Euclids Greatest Common Divisor algorithm.
        while (n !== m) {
            if (n < m) {
                m = m - n;
            }
            else {
                n = n - m;
            }
        }
        return n;
    };
    Bunsu.prototype.normalize = function () {
        // Normalize fraction by
        // (a) moving sign to bunja
        // (b) ensuring bunja and bunmo have no common divisors
        var sign = 1;
        if (this.bunja < 0) {
            sign = -1;
            this.bunja = -this.bunja;
        }
        if (this.bunmo < 0) {
            sign = -sign;
            this.bunmo = -this.bunmo;
        }
        var d = this.bunja !== 0 ? Bunsu.gcd(this.bunja, this.bunmo) : 1;
        this.bunja = sign * (this.bunja / d);
        this.bunmo = this.bunmo / d;
        //console.log(`sign=${sign} d=${d} bunja=${this.bunja} bunmo=${this.bunmo}`)
    };
    Bunsu.prototype.plus = function (right) {
        return new Bunsu(this.bunja * right.bunmo + right.bunja * this.bunmo, this.bunmo * right.bunmo);
    };
    Bunsu.prototype.minus = function (right) {
        // binary - operator (a - b)
        return new Bunsu(this.bunja * right.bunmo - right.bunja * this.bunmo, this.bunmo * right.bunmo);
    };
    Bunsu.prototype.multiply = function (right) {
        return new Bunsu(this.bunja * right.bunja, this.bunmo * right.bunmo);
    };
    Bunsu.prototype.div = function (right) {
        return new Bunsu(this.bunja * right.bunmo, this.bunmo * right.bunja);
    };
    Bunsu.prototype.negative = function () {
        // unary - operator (-a)
        return new Bunsu(-this.bunja, this.bunmo);
    };
    Bunsu.prototype.next = function () {
        // ++ operator
        this.bunja += this.bunmo;
        return this;
    };
    return Bunsu;
}());
var a = new Bunsu(0, 1); // Value is 0/1
var b = new Bunsu(4, 1); // Value is 4/1
var c = new Bunsu(6, 8); // Value is 6/8, which is converted to 3/4
console.log("Constructed values " + a + " " + b + " " + c);
var d = c; // d reference c(3/4) instance(aliasing)
c.next();
console.log("Value of c is " + c);
console.log("Value of d is " + d);
// Test arithmetic instructions
c = new Bunsu(3, 4);
console.log("Value of c is " + c);
console.log("Value of d is " + d);
// d = b + c
d = b.plus(c);
console.log("4 + 3/4 is " + d);
// d = b - c
d = b.minus(c);
console.log("4 - 3/4 is " + d);
//let e = (b + (-c));
var e = b.plus(c.negative());
console.log("Done with negation e = " + e);
if (d.compareTo(e) === 0) {
    console.log("Subtraction test successful.");
}
else {
    console.log("Subtraction test failed.");
}
a = new Bunsu(6, 8);
b = new Bunsu(7, 8);
if (a.compareTo(b) < 0) {
    console.log("Compare successful. a<=>b = " + a.compareTo(b));
}
if (a.compareTo(b) <= 0) {
    console.log("a<=b = " + (a.compareTo(b) <= 0));
}
var h = new Bunsu(0, 1);
for (var i = 1; i <= 30; ++i) {
    //h = h + new Bunsu(1,i);
    h = h.plus(new Bunsu(1, i));
    console.log(" 1/1+...+1/" + i + " = " + h);
}
console.log(" 1/1+...+1/30 = " + h);
