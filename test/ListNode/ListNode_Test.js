describe('Node', function(){

	it('can be instantiated with defaults.', function(){
		var node = Hawk.gen('Node');

		expect(node).toBeDefined();
		expect(node.id).toBeNull();
		expect(node.data).toBeNull();
		expect(node.next).toBeNull();
		expect(node.prev).toBeNull();		
	});

	it('Node.setId: can set id.', function(){
		var node = Hawk.gen('Node');
		
		node.setId(25);
		expect(node.id).toBe(25);
		node.setId(100);
		expect(node.id).toBe(100);

		expect(function(){node.setId('hello')}).toThrow(new Hawk.NumberTypeError());
		expect(function(){node.setId({})}).toThrow(new Hawk.NumberTypeError());
		expect(function(){node.setId([])}).toThrow(new Hawk.NumberTypeError());
		expect(function(){node.setId(null)}).toThrow(new Hawk.NumberTypeError());
		expect(function(){node.setId(undefined)}).toThrow(new Hawk.NumberTypeError());
	});

	it('Node.getId: can get id.', function(){
		var node = Hawk.gen('Node');

		node.setId(100);
		expect(node.getId()).toBe(100);

		node.setId(500);
		expect(node.getId()).toBe(500);
	});

	it('Node.setData: can set data.', function(){
		var node = Hawk.gen('Node');

		node.setData({val:10});
		expect(node.data.val).toBe(10);

		node.setData({val:200});
		expect(node.data.val).toBe(200);
	});

	it('Node.getData: can get data.', function(){
		var node = Hawk.gen('Node');

		node.setData({val:10});
		expect(node.getData().val).toBe(10);

		node.setData({val:200});
		expect(node.getData().val).toBe(200);
	});

});