class BottleVerse {
  static subOne = (number) => {
    if (number === 0) return 99
    return number - 1
  }

  static getBottleDisplay = ({ number, uppercase = false }) => {
    if (number === 0) return (uppercase ? "No" : "no") + " more bottles of beer"
    else if (number === 1) return `${number} bottle of beer`
    else if (number === 6) return `1 six-pack of beer`
    return `${number} bottles of beer`
  }

  static getAction = ({ number }) => {
    if (number > 1) return `Take one down and pass it around,`
    else if (number === 1) return `Take it down and pass it around,`
    return "Go to the store and buy some more,"
  }

  static lyrics = (number) => {
        return `${this.getBottleDisplay({ number, uppercase: true })} on the wall, ` + 
                `${this.getBottleDisplay({ number })}.\n` +
                `${this.getAction({ number })} ` +
                `${this.getBottleDisplay({ number: this.subOne(number) })} on the wall.\n`
  }
}

export { BottleVerse }