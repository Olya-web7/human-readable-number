module.exports = function toReadable(number) {
	if (number === 0) return 'zero'

	const numbers = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety'
	}
	let arr = String(number).split('').map(item => +item)
	let result = ''


	if (arr.length === 3) {
		result += numbers[arr[0]] + ' hundred '

		if (arr[1] === 1) {
			result += numbers[arr[1] + '' + arr[2]]
			return result.trim()
		} else if (arr[1] > 1) {
			result += numbers[arr[1] * 10] + ' '
		}

		if (arr[2] > 0) {
			result += numbers[arr[2]]
			return result.trim()
		}
	}

	if (arr.length === 2) {

		if (arr[0] === 1) {
			result += numbers[arr[0] + '' + arr[1]]
			return result.trim()
		} else if (arr[0] > 1) {
			result += numbers[arr[0] * 10] + ' '
		}

		if (arr[1] > 0) {
			result += numbers[arr[1]]
			return result.trim()
		}

	}

	if (arr.length === 1) result += numbers[arr[0]]

	return result.trim()
}
