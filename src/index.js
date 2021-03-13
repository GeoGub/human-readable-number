module.exports = function toReadable (number) {
  let numbers = {
      onse: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
            'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      tens: [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
      hadred: 'handred',
  }
  if (number < 20) {
      return numbers.onse[number]
  } else if (number < 100)  {
      return number % 10 == 0 ? numbers.tens[Math.floor(number/10)] : `${numbers.tens[Math.floor(number/10)]} ${numbers.onse[number%10]}`
  } else {
      console.log(`${numbers.onse[Math.floor(number/100)]} handred ${numbers.tens[Math.floor(number%100/10)]} ${numbers.onse[number%100%10]}`)
      return `${numbers.onse[Math.floor(number/100)]} handred ${numbers.tens[Math.floor(number%100/10)]} ${numbers.onse[number%100%10]}`
  }

}
