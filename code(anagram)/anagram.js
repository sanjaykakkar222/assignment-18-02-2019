function toArray(string) {   //converting string top array

    var a = [];
    var size = string.length;

   

    for (var i = 0; i < size; i++) {

        a[i] = string.charAt(i)

    }

    return a;

}

function sorting(Array) { //sorting the array

    var lengthS1 = Array.length;
    

    for (var i = 0; i < lengthS1; i++) {

        for (var j = i + 1; j < lengthS1; j++) {

            if (Array[i] > Array[j]) {

                //swap

                var temp = Array[i];

                Array[i] = Array[j];

                Array[j] = temp;

            }

        }

    }

    return Array;

}

function isAnagram(sort1, sort2) {   //checking for anagram

    var flag = 0;

    var len = sort1.length;

    for (var i = 0; i < len; i++) {
        if (sort1[i] == sort2[i]) {

            flag++;
        }

    }

    if (flag == len) {
        console.log('true');
    } else
        console.log('false');

}

function msg() { //mainFunction

    var x = "keep";//inputs
    var y = "peek";

    var lowerstringx = x.toLowerCase();//converting tolowercase

    var lowerstringy = y.toLowerCase();

    var toArrayS1 = toArray(lowerstringx);//converting to array
    var toArrayS2 = toArray(lowerstringy);

    var sort1 = sorting(toArrayS1);//sorting the array

    var sort2 = sorting(toArrayS2);

    isAnagram(sort1, sort2);//checking anagram

  

}
msg();//Functioncalling