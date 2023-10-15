'use strict';

class Stack {
	constructor () {
		this.stack = [];
	}

	//  Adds a new value to the stack, placing it at the bottom of the stack.
	push (element) {
		this.stack.push(element);
		return this.stack;
	}

	//  Returns the last value entered on the stack, popping it from the stack.
	pop () {
		return this.stack.pop();
	}

	//  Returns the last value entered into the stack, without popping it from the stack.
	peek () {
		return this.stack[this.stack.length - 1];
	}

	//  Returns the number of elements contained in the stack.
	size () {
		return this.stack.length;
	}

	//  Returns a string in which all the element of an stack is concatenated. 
	print () {
		return this.stack.join(', ');
	}
}

module.exports = Stack;
