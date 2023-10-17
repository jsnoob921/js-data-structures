'use strict';

//  Defined to store element and its priority
class QElement {
	constructor (element, priority) {
		this.element = element;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor () {
		this.items = [];
	}

	//  Function to add an element to the queue according to its priority. 
	enqueue (element, priority) {
		const qElement = new QElement(element, priority);
		let added = false;

		for (let i = 0; i < this.items.length; i++) {
			if (priority < this.items[i].priority) {
				this.items.splice(i, 0, qElement);
				added = true;
				break;
			}
		}
		if (!added) {
			this.items.push(qElement);
		}
	}

	//  Removes an element from the priority queue,
	dequeue () {
		if (this.isEmpty()) {
			return 'No elements in Queue';
		}
		return this.items.shift().element;
	}

	//  It returns the front element of the Priority queue without removing it
	front () {

		if (this.isEmpty()) {
			return 'No elements in Queue';
		}
		return this.items[0];
	}

	//   It returns the last element of the Priority queue 
	rear ()
	{
		if (this.isEmpty()) {
			return 'No elements in Queue';
		}
		return this.items[this.items.length - 1];
	}

	// Check if the Priority queue is empty
	isEmpty () {
		return this.items.length === 0;
	}

	// Return the size of the Priority queue
	size () {
		return this.items.length;
	}

	//  Returns a string in which all the element of the queue concatenated.
	print () {
		return this.items.map(it => it.element).join(', ');
	}
}

module.exports = PriorityQueue;