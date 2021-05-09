var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyRange = /** @class */ (function () {
    function MyRange(from, to) {
        // Store the start and end points (state) of this new range object.
        // These are noninherited properties that are unique to this object.
        this.from = from;
        this.to = to;
    }
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    MyRange.prototype.includes = function (x) {
        return this.from <= x && x <= this.to;
    };
    // Return a string representation of the range
    MyRange.prototype.toString = function () {
        return "(" + this.from + "..." + this.to + ")";
    };
    MyRange.parse = function (s) {
        var matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
        if (!matches) {
            throw new TypeError("Cannot parse MyRange from \"" + s + "\".");
        }
        return new MyRange(parseInt(matches[1]), parseInt(matches[2]));
    };
    return MyRange;
}());
// Here are example uses of this new MyRange class
var r1 = new MyRange(0, 3); // Create a MyRange object
console.log(r1.includes(2)); // => true: 2 is in the range
console.log(r1.toString()); // => "(1...3)"
console.log(r1); // => [1, 2, 3]; convert to an array via iterator
// A Span is like a MyRange, but instead of initializing it with
// a start and an end, we initialize it with a start and a length
var MySpan = /** @class */ (function (_super) {
    __extends(MySpan, _super);
    function MySpan(start, length) {
        var _this = this;
        if (length >= 0) {
            _this = _super.call(this, start, start + length - 1) || this;
        }
        else {
            _this = _super.call(this, start + length, start) || this;
        }
        return _this;
    }
    return MySpan;
}(MyRange));
var r2 = new MySpan(0, 3); // Create a Span object
console.log(r2.includes(2)); // => true: 2 is in the Span
console.log(r2.toString()); // => "(1...3)"
console.log(r2);
r2 = MyRange.parse('(1...10)');
console.log(r2.includes(2));
console.log(r2.toString());
console.log(r2);
