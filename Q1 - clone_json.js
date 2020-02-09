function cloneObj(obj){
	return JSON.parse(JSON.stringify(obj))
}

let obj = {
	a : 'a',
	b :  3,
	c : {
		d : {
			x : '9'
		},
		f : {
			y: '10'
		}
	},
	m : 'p'
}

console.log(cloneObj(obj))
