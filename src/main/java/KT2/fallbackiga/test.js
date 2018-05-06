function allAnagrams (word) {
	var anagrams = {};
	var recurse = function(ana, str) {
		if (str === ''){
			anagrams[ana] = 1;
			console.log(">", ana);
			//postMessage({ 'anagram': ana });
		}
		for (var i = 0; i < str.length; i++){
			recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
			//console.log("recurse",ana, str);
		}
	};

	recurse('', word);
	//return Object.keys(anagrams);
	console.log("done", Object.keys(anagrams));
	postMessage({ 'anagrams': Object.keys(anagrams) });
	postMessage({ 'isDone': true });
	this.close();

}

onmessage = function(oEvent) {
	//console.log("worker onmessage:", oEvent);
	if (oEvent.data instanceof Object && oEvent.data.hasOwnProperty('word'))
	{
		allAnagrams(oEvent.data.word);
	} else {
		console.log("unknown data, ignoring...");
	}
};