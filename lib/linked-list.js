'use strict';

class Node {
	constructor (element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor () {
		this.head = null;
		this.size = 0;
	}

	//  Adds an element at the end of list
	add (element) {
		const node = new Node(element);
		let current;

		//  If list is Empty add the element and make it head
		if (this.head == null) {
			this.head = node;
		}
		else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}
		this.size++;
	}

	//  Insert element at the position index of the list
	insertAt (element, index) {
		if (index < 0 || index > this.size) {
			throw new Error('Invalid index');
		}
		else {
			const node = new Node(element);
			let curr, prev;
 
			curr = this.head;
 
			//  Add the element to the first index
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			}
			else {
				curr = this.head;
				let it = 0;
 
				// iterate over the list to find
				// the position to insert
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}
 
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}
	
	//  Removes an element from the  specified location
	removeFrom (index) {
		if (index < 0 || index >= this.size) {
			throw new Error('Invalid index');
		}
		else {
			let curr, prev, it = 0;
			curr = this.head;
			prev = curr;
 
			if (index === 0) {
				this.head = curr.next;
			}
			else {
				//  Iterate over the list to the position to remove an element
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}
 
				prev.next = curr.next;
			}

			this.size--;
			return curr.element;
		}
	}
	
	//  Removes a given element from the list
	removeElement (element) {
		let current = this.head;
		let prev = null;

		//  Iterate over the list
		while (current != null) {
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				}
				else {
					prev.next = current.next;
				}
				
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return -1;
	}

	/*
    *   HELPER METHODS
    */

	//  Finds the index of element
	indexOf (element) {
		let count = 0;
		let current = this.head;
 
		while (current != null) {
			if (current.element === element) {
				return count;
			}
			count++;
			current = current.next;
		}
 
		return -1; //   Not found
	}

	//  Checks the list for empty
	isEmpty () {
		return this.size === 0;
	}

	//  Gives the size of the list
	listSize () {
		return this.size;
	}

	//  Prints the list items
	printList () {
		let curr = this.head;
		const items = [];
		while (curr) {
			items.push(curr.element);
			curr = curr.next;
		}
		return items.join(',');
	}
}

module.exports = LinkedList;