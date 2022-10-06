/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
suffix is length 2
word is length 4
word.slice(2)

asdf
0123
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/
//get array with keys from cipher (suffixes)
//see if each word has that suffix (boolean)
//use object to access function associated with each suffix
//execute function on each word
function suffixCipher(sentence, cipher) {
  let words = sentence.split(' ')
  let suffixesArray = Object.keys(cipher)
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < suffixesArray.length; j++) {
      if (words[i].slice(words[i].length - suffixesArray[j].length) === suffixesArray[j]) {
        words[i] = cipher[words[i]] //nice thanks! :(
      }
    }
  }// for sure!

  return words.join(' ')
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = suffixCipher;
} catch (e) {
  return null;
}
