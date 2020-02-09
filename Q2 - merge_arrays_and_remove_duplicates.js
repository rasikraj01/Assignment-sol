function mergeArrAndRemoveDuplicates(arr1, arr2) {
	mergedArr = [...arr1, ...arr2]

	let uniqueMergedArr = mergedArr.filter((item, index) => {

		// compare th position of current occurance with the first occurance of item
		return mergedArr.indexOf(item) === index
	})

	return uniqueMergedArr
}



// driver code

let arr1 = [1,2,3,22]
let arr2 = [3,5,9,3,22,91,22]

// arr1 = ['dog', 'cat', 'MOUSE']
// arr2 = ['dog', 'cat', 'kitten']

console.log(mergeArrAndRemoveDuplicates(arr1,arr2))