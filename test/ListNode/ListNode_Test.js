describe('Node', function(){

	it('can be instantiated with defaults.', function(){
		var node = new ListNode();

		expect(node).toBeDefined();
		expect(node._id).toBeNull();
		expect(node._data).toBeNull();
		expect(node.next).toBeNull();
		expect(node.prev).toBeNull();
	});

	it('can set id.', function(){
		var node = new ListNode();

		node.id(25);
		expect(node.id()).toBe(25);

		node.id(100);
		expect(node.id()).toBe(100);

		expect(function(){
			node.id('hello')
		}).toThrow(new Error('Id must be an integer.'));

		expect(function(){
			node.id({})
		}).toThrow(new Error('Id must be an integer.'));

		expect(function(){
			node.id([])
		}).toThrow(new Error('Id must be an integer.'));
	});

	it('can get id.', function(){
		var node = new ListNode();

		node.id(100);
		expect(node.id()).toBe(100);

		node.id(500);
		expect(node.id()).toBe(500);
	});

	it('can set data.', function(){
		var node = new ListNode();

		node.data({val:10});
		expect(node.data().val).toBe(10);

		node.data({val:200});
		expect(node.data().val).toBe(200);
	});

	it('can get data.', function(){
		var node = new ListNode();

		node.data({val:10});
		expect(node.data().val).toBe(10);

		node.data({val:200});
		expect(node.data().val).toBe(200);
	});

	it('can return has next', function() {
		var node = new ListNode();

		expect(node.hasNext()).toBe(false);

		node.next = new ListNode();
		expect(node.hasNext()).toBe(false);

		node.next = new ListNode(1);
		expect(node.hasNext()).toBe(true);
	});

	it('can return has prev', function() {
		var node = new ListNode();

		expect(node.hasPrev()).toBe(false);

		node.prev = new ListNode();
		expect(node.hasPrev()).toBe(false);

		node.prev = new ListNode(1);
		expect(node.hasPrev()).toBe(true);
	});
});
