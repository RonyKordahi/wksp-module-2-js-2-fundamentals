# 2.1.7 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()`
- `.join()`

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo);
//output = new array in order of arrayOne arrayTwo

```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.

```js
// Example
const lexicon = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

let sentence = lexicon.join(" ");//dictates what character to add between the words, replaces the comma in the array
//output is "The large shaggy dog barked at the silence"

```

---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()`, `.slice()`
includes(): verifies if a specific string is inside an array
slice(): returns the selected elements in an array, as a new array object. Requires a start index (included) and end index (excluded) --> [1, 3] reads as [1, 3[
2. `.indexOf()`, `.push()` 
indexOf(): returns the index in the array of the string searched 
push():  adds new items to the end of an array and returns the length of the array
3. `.pop()`, `.sort()`
pop(): removes the last element of the array and returns that element
sort(): sorts an array alphabetically and returns the sorted array
4. `.shift()`, `.unshift()`
shift(): removes the first item of an array and returns that element
unshift(): add new items to the start of an array and returns new length
5. `.reverse()`, `.lastIndexOf()`
reverse(): reverses the order of the array
lastIndexOf(): searches for the position of an element but starts at the end of the array, returns proper index
6. `.splice()`, `.toString()`
splice(): adds/removes items from an array, returns the removed elements. Requires a start index (included) and end index (excluded) --> [1, 3] reads as [1, 3[
toString(): returns the value of the array into a single string and separates the elements with a comma. The concat() function is better.

- Split into teams of 2.
- Take given methods
    - find an explanation/definition, then write your own.
    - create two examples of each method in use. Be creative. 😛

---

[Next lecture: Functions](../lecture-8-functions)