'use strict';

const assert = require('node:assert');
const Queue = require('../lib/queue');

describe('#Queue', function () {
	before(function arrangeQueue () {
		const self = this;
		const q = new Queue();
        
		q.enqueue('JavaScript');
		q.enqueue('Node');
		q.enqueue('React');

		self.queue = q;
	});

	it('should be able to tell us its size', function () {
		const { queue } = this;

		const actual = queue.size();
		const expected = 3;

		assert.deepStrictEqual(actual, expected);
	});

	it('should be able to tell us its last element', function () {
		const { queue } = this;

		const actual = queue.peek();
		const expected = 'React';

		assert.deepStrictEqual(actual, expected);
	});

	it('should be able to dequeue an element', function () {
		const { queue } = this;

		const actual = queue.dequeue();
		const expected = 'JavaScript';

		assert.deepStrictEqual(actual, expected);
		assert.deepStrictEqual(queue.size(), 2);
	});

	it('should be able to return a string with its elements', function () {
		const { queue } = this;

		const actual = queue.print();
		const expected = 'Node, React';

		assert.deepStrictEqual(actual, expected);
	});

	it('should be able to clear the queue', function () {
		const { queue } = this;

		queue.clear();
		assert.ok(queue.isEmpty());
	});
});