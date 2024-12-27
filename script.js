function firstNonRepeatedChar(str) {
 // Write your code here
	for(let value of str){
		let map = new map
		if(map.includes(value)){
			let t = map.get(value)
			map.set(value,t+1)
		}
		else{
			map.set(value,1)
		}
	}
	let count = 0;
	for(let [key,value] of map){
		if(value==1){
			return key
			break;
		}
		else{
			count++
		}
	}
	if(count>1){
		return null
	}

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
