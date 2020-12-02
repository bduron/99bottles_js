const BottleVerse = {
	lyrics: function (verse) {
		if (verse === 7) {
			return (
				'7 bottles of beer on the wall, ' +
				'7 bottles of beer.\n' +
				'Take one down and pass it around, ' +
				'1 six-pack of beer on the wall.\n'
			);
		}
		if (verse === 6) {
			return (
				'1 six-pack of beer on the wall, ' +
				'1 six-pack of beer.\n' +
				'Take one down and pass it around, ' +
				'5 bottles of beer on the wall.\n'
			);
		}
		if (verse > 2) {
			return (
				`${verse} bottles of beer on the wall, ` +
				`${verse} bottles of beer.\n` +
				'Take one down and pass it around, ' +
				`${verse - 1} bottles of beer on the wall.\n`
			);
		}
		if (verse === 2) {
			return (
				'2 bottles of beer on the wall, ' +
				'2 bottles of beer.\n' +
				'Take one down and pass it around, ' +
				'1 bottle of beer on the wall.\n'
			);
		}
		if (verse === 1) {
			return (
				'1 bottle of beer on the wall, ' +
				'1 bottle of beer.\n' +
				'Take it down and pass it around, ' +
				'no more bottles of beer on the wall.\n'
			);
		}
		if (verse === 0) {
			return (
				'No more bottles of beer on the wall, ' +
				'no more bottles of beer.\n' +
				'Go to the store and buy some more, ' +
				'99 bottles of beer on the wall.\n'
			);
		}
	},
};

export { BottleVerse };
