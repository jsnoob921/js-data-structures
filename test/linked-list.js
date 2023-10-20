'use strict';

const assert = require('node:assert');
const LinkedList = require('../lib/linked-list');

describe('#LinkedList', function () {
	before(function arrangePriorityQueue () {
		const self = this;
		const linkedList = new LinkedList();

		linkedList.add(10);
		linkedList.add(20);
		linkedList.add(30);
		linkedList.add(40);
		linkedList.add(50);

		self.linkedList = linkedList;
	});

	it('should be able to print the elements of the list', function () {
		const { linkedList } = this;

		const expected = '10,20,30,40,50';
		const actual = linkedList.printList();
		assert.deepStrictEqual(actual, expected);
	});

	it('should be able to tell us the size of the list', function () {
		const { linkedList } = this;

		const expected = 5;
		const actual = linkedList.listSize();

		assert.deepStrictEqual(actual, expected);
	});

	it('should be able to check if the list is empty or not', function () {
		const { linkedList } = this;

		const actual = linkedList.isEmpty();

		assert.ok(!actual);
	});

	context('#indexOf(index)', function () {
		it('should be able to tell us the index of an element', function () {
			const { linkedList } = this;
    
			const actual = linkedList.indexOf(40);
			const expected = 3;
            
			assert.deepStrictEqual(actual, expected);
		});
    
		it('should be able to return a flag when the element does not exists', function () {
			const { linkedList } = this;
    
			const indexOf = linkedList.indexOf(100);
			const expected = -1;
            
			assert.deepStrictEqual(indexOf, expected);
		});
	});

	context('#insertAt(element, index)', function () {
		it('should be able to insert an element as a new head', function () {
			const { linkedList } = this;
    
			linkedList.insertAt(5, 0);
			const expected = '5,10,20,30,40,50';
			const actual = linkedList.printList();
    
			assert.deepStrictEqual(actual, expected);
		});

		it('should be able to insert an element at a given position', function () {
			const { linkedList } = this;
    
			linkedList.insertAt(80, 2);
			const expected = '5,10,80,20,30,40,50';
			const actual = linkedList.printList();
    
			assert.deepStrictEqual(actual, expected);
		});
    
		it('should thrown an error when the given index is not valid', function () {
			const { linkedList } = this;
    
			try {
				linkedList.insertAt(1, 100);
			}
			catch (err) {
				assert.ok(err);
				return;
			}
    
			throw new Error('unexpected code branch');
		});
        
	});

	context('#removeFrom(index)', function () {
		it('should be able to set a new head when the given index is 0', function () {
			const { linkedList } = this;
    
			const element = linkedList.removeFrom(0);
			const expected = '10,80,20,30,40,50';
			const actual = linkedList.printList();
    
			assert.deepStrictEqual(actual, expected);
			assert.deepStrictEqual(element, 5);
		});

		it('should be able to remove the element from a given index', function () {
			const { linkedList } = this;
    
			const element = linkedList.removeFrom(3);
			const expected = '10,80,20,40,50';
			const actual = linkedList.printList();
    
			assert.deepStrictEqual(actual, expected);
			assert.deepStrictEqual(element, 30);
		});

		it('should thrown an error when the given index is not valid', function () {
			const { linkedList } = this;
    
			try {
				linkedList.removeFrom(100);
			}
			catch (err) {
				assert.ok(err);
				return;
			}
    
			throw new Error('unexpected code branch');
		});
	});

	context('#removeElement(element)', function () {
		it('should be able to set a new head when the given element is the head', function () {
			const { linkedList } = this;
    
			const element = linkedList.removeElement(10);
			const expected = '80,20,40,50';
			const actual = linkedList.printList();
    
			assert.deepStrictEqual(actual, expected);
			assert.deepStrictEqual(element, 10);
		});

		it('should be able to remove elements', function () {
			const { linkedList } = this;

			const element = linkedList.removeElement(50);
			const expected = '80,20,40';
			const actual = linkedList.printList();

			assert.deepStrictEqual(actual, expected);
			assert.deepStrictEqual(element, 50);
		});

		it('should be able to return a flag when the element does not exists', function () {
			const { linkedList } = this;
    
			const actual = linkedList.removeElement(100);
			const expected = -1;
            
			assert.deepStrictEqual(actual, expected);
		});
	});
});