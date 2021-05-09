class MyRange {
  from: number
  to: number
  constructor(from: number, to: number) {
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    this.from = from
    this.to = to
  }
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes(x: number) {
    return this.from <= x && x <= this.to
  }
  // Return a string representation of the range
  toString() {
    return `(${this.from}...${this.to})`
  }
  static parse(s: string): MyRange {
    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/)
    if (!matches) {
      throw new TypeError(`Cannot parse MyRange from "${s}".`)
    }
    return new MyRange(parseInt(matches[1]), parseInt(matches[2]))
  }
}

// Here are example uses of this new MyRange class
let r1 = new MyRange(0, 3) // Create a MyRange object
console.log(r1.includes(2)) // => true: 2 is in the range
console.log(r1.toString()) // => "(1...3)"
console.log(r1) // => [1, 2, 3]; convert to an array via iterator

// A Span is like a MyRange, but instead of initializing it with
// a start and an end, we initialize it with a start and a length
class MySpan extends MyRange {
  constructor(start: number, length: number) {
    if (length >= 0) {
      super(start, start + length - 1)
    } else {
      super(start + length, start)
    }
  }
}
let r2 = new MySpan(0, 3) // Create a Span object
console.log(r2.includes(2)) // => true: 2 is in the Span
console.log(r2.toString()) // => "(1...3)"
console.log(r2)

r2 = MyRange.parse('(1...10)')
console.log(r2.includes(2))
console.log(r2.toString())
console.log(r2)
