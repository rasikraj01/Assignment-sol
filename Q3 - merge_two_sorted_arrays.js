function mergeSortedArr(arr1, arr2) {
	
	let mergedArray = []
	
	// calculate length of arrays
	let lenArr1 = arr1.length
	let lenArr2 = arr2.length

	let i = 0, j = 0 ,k = 0

	while(i < lenArr1 && j < lenArr2){
		if(arr1[i] < arr2[j]){
			mergedArray[k] = arr1[i]
			k += 1
			i += 1
		}
		else{
			mergedArray[k] = arr2[j]
			j += 1
			k += 1
		}

	}

	// append the rest of the array to the end 
	while(i < lenArr1){
		mergedArray[k] = arr1[i]
		k += 1
		i += 1
	}

	while(j < lenArr2){
		mergedArray[k] = arr2[j]
		k += 1
		j += 1
	}

	return mergedArray
}




//driver code

let arr1 = [1,2,50,99,120]
let arr2 = [3,5,9,22]

console.log(mergeSortedArr(arr1,arr2))