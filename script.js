function firstNonRepeatedChar(str) {
 // Write your code here
	let map = new Map()
	for(let value of str){
		if(map.has(value)){
			let t = map.get(value)
			map.set(value,t+1)
		}
		else{
			map.set(value,1)
		}
	}
	for(let [key,value] of map){
		if(value==1){
			return key
			break;
		}
	}
	return null
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
