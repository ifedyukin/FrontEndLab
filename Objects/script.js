var test = { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254};


function size(object){
	var count  = 0;
	for (key in object){
		if (object.hasOwnProperty(key))
			count++;
	}
	return count;
}

function properties(object){
   var ps = [];
   for(var key in object){
      ps.push(key);
   }
   return ps;
}