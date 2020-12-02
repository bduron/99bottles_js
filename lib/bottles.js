
class BottleVerse {
  static _getFirstVerse(number) {
    if (number === 0) return 'No more bottles of beer on the wall, ';
    if (number % 6 === 0) return `${number / 6} six-pack${number / 6 > 1 ? 's' : ''} of beer on the wall, `;
    return `${number} bottle${number > 1 ? 's' : ''} of beer on the wall, `;
  }

  static _getSecondVerse(number) {
    if (number === 0) return 'no more bottles of beer.\n';
    if (number % 6 === 0) return `${number / 6} six-pack${number / 6 > 1 ? 's' : ''} of beer.\n`;
    return `${number} bottle${number > 1 ? 's' : ''} of beer.\n`;
  }

  static _getThirdVerse(number) {
    if (number === 0) return 'Go to the store and buy some more, ';
    if (number === 1) return 'Take it down and pass it around, ';
    return 'Take one down and pass it around, ';
  }

  static _getFourthVerse(number) {
    if (number === 0) return '99 bottles of beer on the wall.\n';
    if (number === 1) return 'no more bottles of beer on the wall.\n';
    const newNumber = number - 1;
    if (newNumber % 6 === 0) return `${newNumber / 6} six-pack${newNumber / 6 > 1 ? 's' : ''} of beer on the wall.\n`;
    return `${newNumber} bottle${newNumber > 1 ? 's' : ''} of beer on the wall.\n`;
  }

  static lyrics(number) {
    const firstVerse = this._getFirstVerse(number);
    const secondVerse = this._getSecondVerse(number);
    const thirdVerse = this._getThirdVerse(number);
    const fourthVerse =this._getFourthVerse(number);
    return `${firstVerse}${secondVerse}${thirdVerse}${fourthVerse}`;
  }
}
  
export { BottleVerse };
