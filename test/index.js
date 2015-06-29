var test = require('tape');
var MetaSetter = require('../index.js');

// Test Meta Setter
test('Test Meta Setter', function (t) {
	t.true(typeof MetaSetter === Object, 'MetaSetter is of type Object.');
	t.true(Object.keys(MetaSetter).length === 1, 'Only title value is on object before we extend.');

	MetaSetter.extend({
		'title': 'Some Title',
		'og:title': 'Some Open Graph Title'
	});

	t.true(MetaSetter.defaults.title === 'Some Title', 'Meta Setter Default title has been updated through .extend()');
	t.true(Object.keys(MetaSetter) === 2, 'Two keys now exists after .extend()');

  t.end();
});
