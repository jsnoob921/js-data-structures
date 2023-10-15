'use strict';

const assert = require('node:assert');
const Stack = require('../lib/stack');

describe('#Stack', function () {
	before(function arrangeStack () {
		const self = this;
		const s = new Stack();
        
		s.push('JavaScript');
		s.push('Node');
		s.push('React');

		self.stack = s;
	});

	it('should be able to tell us its size', function () {
		const { stack } = this;

		const actual = stack.size();
		const expected = 3;

		assert.deepStrictEqual(actual, expected);
	});

	it('should be able to tell us its last element', function () {
		const { stack } = this;

		const actual = stack.peek();
		const expected = 'React';

		assert.deepStrictEqual(actual, expected);
	});

	it('should be able to pop its last element', function () {
		const { stack } = this;

		const actual = stack.pop();
		const expected = 'React';

		assert.deepStrictEqual(actual, expected);
		assert.deepStrictEqual(stack.size(), 2);
	});

	it('should be able to return a string with its elements', function () {
		const { stack } = this;

		const actual = stack.print();
		const expected = 'JavaScript, Node';

		assert.deepStrictEqual(actual, expected);
	});
});