# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rainskyriver/lotide`

**Require it:**

`const _ = require('@rainskyriver/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first index of an array.
* `tail(array)`: returns the array, without the head of the array.
* `middle(array)`: returns the middle index of an array, if the array is even it returns the two middle indexi.
* `countLetters(string)`: returns an object and counts how many of each letter were in the string.
* `countOnly(array, string)`: returns an object and only counts the string that was passed.
* `findKey(array, function)`: returns a key from an object.
* `findKeyByValue(array, value)`: returns a string that is equal to the key of the value that is passed.
* `flatten(array)`: returns an flattened array, when given a nested array as a parameter.
* `letterPositions(string)`: returns an object with each individual letter and the indexes where the letter appears.
* `map(array, function)`: returns an array that has the callback called on each element of the array.
* `takeUntil(array, function)`: returns an array's elements until the callback function returns true.
* `without(array, array)`: returns an array that has the paramater's elements removed.