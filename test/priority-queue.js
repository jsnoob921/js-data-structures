'use strict';

const assert = require('node:assert');
const PriorityQueue = require('../lib/priority-queue');

describe('#priorityQueue', function () {
	before(function arrangePriorityQueue () {
		const self = this;
		const pq = new PriorityQueue();
        
		pq.enqueue('JavaScript', 1);
		pq.enqueue('Node', 2);
		pq.enqueue('Cloud', 3);
		pq.enqueue('React', 2);

		self.priorityQueue = pq;
	});

	it('should be able to tell us its size', function () {
		const { priorityQueue } = this;

		const actual = priorityQueue.size();
		const expected = 4;

		assert.deepStrictEqual(actual, expected);
	});

	it('should be able to tell us its first element', function () {
		const { priorityQueue } = this;

		const actual = priorityQueue.front().element;
		const expected = 'JavaScript';

		assert.deepStrictEqual(actual, expected);
	});

	it('should be able to tell us its last element', function () {
		const { priorityQueue } = this;

		const actual = priorityQueue.rear().element;
		const expected = 'Cloud';

		assert.deepStrictEqual(actual, expected);
	});

	it('should be able to dequeue an element', function () {
		const { priorityQueue } = this;

		const actual = priorityQueue.dequeue();
		const expected = 'JavaScript';

		assert.deepStrictEqual(actual, expected);
		assert.deepStrictEqual(priorityQueue.size(), 3);
	});

	it('should be able to return a string with its elements', function () {
		const { priorityQueue } = this;

		const actual = priorityQueue.print();
		const expected = 'Node, React, Cloud';

		assert.deepStrictEqual(actual, expected);
	});

	it('should be able to return friendly messages when there are no elements', function () {
		const pq = new PriorityQueue();

		const expected = 'No elements in Queue';
		const m1 = pq.front();
		const m2 = pq.rear();
		const m3 = pq.dequeue();

		assert.deepStrictEqual(m1, expected);
		assert.deepStrictEqual(m2, expected);
		assert.deepStrictEqual(m3, expected);
	});
});