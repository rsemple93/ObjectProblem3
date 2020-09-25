// Check to see the length of an object.//

function getObjectLength() {
		let vehicle = {
	name: 'merecedes',
	color: 'red',
	type: 'sedan'
 }

 let objectLength = Object.keys(vehicle).length;
 console.log('The length of this object is ' + objectLength);
}
 getObjectLength();