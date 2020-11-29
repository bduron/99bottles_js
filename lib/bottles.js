String.prototype.title = function () {
  return this.substring(0, 1).toUpperCase() + this.substring(1);
};

const ngettext = (number, plural, singular) => number > 1 ? plural : singular;

class BottleVerse {

  
  static bottleNumber(i) {
    if (i < 0) return '99 bottles of beer';
    if (i === 0) return 'no more bottles of beer';
    return `${i} ${ngettext(i, 'bottles', 'bottle')} of beer`;
  }

  static whatToDo(i) {
    if (i > 0) return `Take ${ngettext(i, 'one', 'it')} down and pass it around, `;
    return 'Go to the store and buy some more, ';
  }

  static getChorus(i) {
    return (
      `${this.bottleNumber(i).title()} on the wall, ` +
      `${this.bottleNumber(i)}.\n` +
      `${this.whatToDo(i)}` +
      `${this.bottleNumber(i - 1)} on the wall.\n`
    );
  }

  static lyrics(i) {
    return this.getChorus(i);
  }
}

export { BottleVerse };
