class BottleVerse {
  
  static _cases = {
    ZERO: { 
      cond: n => n === 0,
      fn: () =>
        'No more bottles of beer on the wall, ' +
        'no more bottles of beer.\n' +
        'Go to the store and buy some more, ' +
        '99 bottles of beer on the wall.\n'
    },
    ONE: {
      cond: n => n === 1,
      fn: () =>
        '1 bottle of beer on the wall, ' +
        '1 bottle of beer.\n' +
        'Take it down and pass it around, ' +
        'no more bottles of beer on the wall.\n',
    }, 
    TWO: {
      cond: n => n === 2,
      fn: () =>
        '2 bottles of beer on the wall, ' +
        '2 bottles of beer.\n' +
        'Take one down and pass it around, ' +
        '1 bottle of beer on the wall.\n'
    }, 
    SIXPACK: {
      cond: n => n % 6 === 0,
      fn: () =>
        '1 six-pack of beer on the wall, ' +
        '1 six-pack of beer.\n' +
        'Take one down and pass it around, ' +
        '5 bottles of beer on the wall.\n'
    }, 
    DEFAULT: {
      fn: n =>
        `${n} bottles of beer on the wall, ` +
        `${n} bottles of beer.\n` +
        'Take one down and pass it around, ' +
        this._getSuccessor(n)
    }
  }
 
  static _getSuccessor(n) {
    const { SIXPACK } = this._cases
    const successor = n - 1

    if (SIXPACK.cond(successor))
      return `1 six-pack of beer on the wall.\n`

    return `${successor} bottles of beer on the wall.\n` 
  }

  static lyrics(n) {
    const { ZERO, ONE, TWO, SIXPACK, DEFAULT } = this._cases

    if (ZERO.cond(n))   return ZERO.fn()
    if (ONE.cond(n))    return ONE.fn()
    if (TWO.cond(n))    return TWO.fn()
    if (SIXPACK.cond(n)) return SIXPACK.fn()

    return DEFAULT.fn(n)
  }

}

export { BottleVerse };