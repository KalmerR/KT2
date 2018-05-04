function addLetters(){
	let test1 = document.getElementById("letters").value
	//arr.push(test1);
	document.getElementById("results").innerHTML = allAnagrams([test1]).join(",\n");
}

var arr = ['kati','venti'];

function allAnagrams (arr) {
    var anagrams = {};
    arr.forEach(function(str) {
        var recurse = function(ana, str) {
            if (str === '') 
                anagrams[ana] = 1;
            for (var i = 0; i < str.length; i++)
                recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        };
        recurse('', str);
    });

    return Object.keys(anagrams);

}

//console.log(allAnagrams(arr));