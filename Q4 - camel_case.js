function camelCase(string) {
	// remove any white spaces from the ends
	string = string.trim()
	
	return string.split(' ').map((word, index)=>{

		// convert the first word to lowercase
		if (index == 0)
			return word.toLowerCase()

		// capitalize first letter and lowercase all others in a word
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
	}).join('')
}


// driver code
let string = 'test string'
console.log(camelCase(string))