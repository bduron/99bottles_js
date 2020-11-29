import { BottleVerse, ngettext } from '../lib/bottles';

const testPlaysVerseRole = rolePlayer => {
  test('plays verse role', () => {
    expect(rolePlayer).toHaveProperty('lyrics', expect.any(Function));
  });
};

describe('ngettext', () => {
  testPlaysVerseRole(BottleVerse);

  test('upper', () => {
    const expected = 'plural';
    expect(ngettext(2, 'plural', 'singular')).toBe(expected);
  });

  test('lower', () => {
    const expected = 'singular';
    expect(ngettext(1, 'plural', 'singular')).toBe(expected);
  });
});

describe('BottleVerse', () => {
  testPlaysVerseRole(BottleVerse);


  test('String title', () => {
    const expected = 'Ben l’architecte';
    expect('ben l’architecte'.title()).toBe(expected);
  });


  test('_getNumber many', () => {
    const expected ='2 bottles of beer';
    expect(BottleVerse._getBottles(2)).toBe(expected);
  });

  test('_getNumber one', () => {
    const expected ='1 bottle of beer';
    expect(BottleVerse._getBottles(1)).toBe(expected);
  });

  test('_getNumber no', () => {
    const expected ='no more bottles of beer';
    expect(BottleVerse._getBottles(0)).toBe(expected);
  });

  test('_getNumber negative', () => {
    const expected ='99 bottles of beer';
    expect(BottleVerse._getBottles(-1)).toBe(expected);
  });


  test('verse general rule upper bound', () => {
    const expected =
      '99 bottles of beer on the wall, ' +
      '99 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '98 bottles of beer on the wall.\n';
    expect(BottleVerse.lyrics(99)).toBe(expected);
  });

  test('verse general rule lower bound', () => {
    const expected =
      '3 bottles of beer on the wall, ' +
      '3 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '2 bottles of beer on the wall.\n';
    expect(BottleVerse.lyrics(3)).toBe(expected);
  });

  test('verse 2', () => {
    const expected =
      '2 bottles of beer on the wall, ' +
      '2 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '1 bottle of beer on the wall.\n';
    expect(BottleVerse.lyrics(2)).toBe(expected);
  });

  test('verse 1', () => {
    const expected =
      '1 bottle of beer on the wall, ' +
      '1 bottle of beer.\n' +
      'Take it down and pass it around, ' +
      'no more bottles of beer on the wall.\n';
    expect(BottleVerse.lyrics(1)).toBe(expected);
  });

  test('verse 0', () => {
    const expected =
      'No more bottles of beer on the wall, ' +
      'no more bottles of beer.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of beer on the wall.\n';
    expect(BottleVerse.lyrics(0)).toBe(expected);
  });
});
