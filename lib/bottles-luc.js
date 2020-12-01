const ngettext = (number, plural, singular) => number > 1 ? plural : singular;

class BottleVerse {

  static _getBottles(i, upper=false) {
    if (i === 0) return `${upper ? 'N' : 'n'}o more bottles of beer`;
    if (i % 6 === 0 ) return `${ngettext(Math.trunc(i/6), `${ngettext(Math.trunc(i/6))} six-packs`, '1 six-pack')} of beer`;
    if (i < 0) return '99 bottles of beer';
    return `${i} ${ngettext(i, 'bottles', 'bottle')} of beer`;
  }

  static _whatToDo(i) {
    if (i > 0) return `Take ${ngettext(i, 'one', 'it')} down and pass it around, `;
    return 'Go to the store and buy some more, ';
  }

  static getChorus(i) {
    return (
      `${this._getBottles(i, true)} on the wall, ` +
      `${this._getBottles(i)}.\n` +
      `${this._whatToDo(i)}` +
      `${this._getBottles(i - 1)} on the wall.\n`
    );
  }

  static lyrics(i) {
    return this.getChorus(i);
  }
}

export { BottleVerse, ngettext };