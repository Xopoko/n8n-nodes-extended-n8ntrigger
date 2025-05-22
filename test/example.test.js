const { test } = require('node:test');
const assert = require('node:assert');
const { N8nTrigger } = require('../dist/nodes/Example/N8nTrigger/N8nTrigger.node.js');

test('description name is correct', () => {
  const node = new N8nTrigger();
  assert.strictEqual(node.description.name, 'n8nTrigger');
});
