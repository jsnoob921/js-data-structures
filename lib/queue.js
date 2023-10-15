'use strict';

class Queue {
	constructor () {
		this.queue = [];
	}

	//  Function to add elements at end of the queue.
	enqueue (element) {
		return this.queue.push(element);
	}

	//  Function to remove an element from the front of the queue.
	dequeue () {
		if (this.queue.length > 0) {
			return this.queue.shift();
		}
	}

	//  Function to get the front element without removing it.
	peek () {
		return this.queue[this.queue.length - 1];
	}

	//  Function to get the number of elements contained in the queue.
	size () {
		return this.queue.length;
	}

	//  Function to check if the queue has elements or not.
	isEmpty () {
		return this.queue.length === 0;
	}

	// Function to empty the queue.
	clear () {
		this.queue = [];
	}

	//  Returns a string in which all the element of the queue concatenated.
	print () {
		return this.queue.join(', ');
	}
}

module.exports = Queue;