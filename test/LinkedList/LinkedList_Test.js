describe('LinkedList', function(){

	it('can be instantiated with defaults.', function(){
		var list = new LinkedList();

		expect(list).toBeDefined();
		expect(list.start.getId()).toBeNull();
		expect(list.end.getId()).toBeNull();
		expect(list.start.prev).toBeNull();
		expect(list.end.next).toBeNull();
		expect(list.idCounter).toBe(0);
		expect(list.numNodes).toBe(0);
	});

	it('LinkedList.insertBefore: can insert a node before another node.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();

		var firstNode = new ListNode(1, {val:10});

		list.insertBefore(list.end, firstNode);

		expect(list.start.next.getId()).toBe(1);
		expect(list.start.next.getData().val).toBe(10);
		expect(list.end.prev.getId()).toBe(1);
		expect(list.end.prev.getData().val).toBe(10);

		var secondNode = new ListNode(2, {val:20});

		list.insertBefore(firstNode, secondNode);

		expect(list.start.next.getId()).toBe(2);
		expect(list.start.next.getData().val).toBe(20);

		expect(list.start.next.next.getId()).toBe(1);
		expect(list.start.next.next.getData().val).toBe(10);

		expect(list.end.prev.getId()).toBe(1);
		expect(list.end.prev.getData().val).toBe(10);
	
		expect(list.end.prev.prev.getId()).toBe(2);
		expect(list.end.prev.prev.getData().val).toBe(20);
	
	});

	it('LinkedList.addLast: can add to the end of the list.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();
		
		list.addLast({val:10});
		list.addLast({val:20});
		list.addLast({val:30});

		expect(list.start.next.getData().val).toBe(10);
		expect(list.start.next.next.getData().val).toBe(20);
		expect(list.start.next.next.next.getData().val).toBe(30);
		expect(list.end.prev.getData().val).toBe(30);
		expect(list.end.prev.prev.getData().val).toBe(20);
		expect(list.end.prev.prev.prev.getData().val).toBe(10);

	});

	it('LinkedList.add: can add a data object to the list.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.start.next.getData().val).toBe(10);
		expect(list.start.next.next.getData().val).toBe(20);
		expect(list.start.next.next.next.getData().val).toBe(30);
		expect(list.end.prev.getData().val).toBe(30);
		expect(list.end.prev.prev.getData().val).toBe(20);
		expect(list.end.prev.prev.prev.getData().val).toBe(10);
	});

	it('LinkedList.getFirst: can get and return the first node.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();

		expect(list.getFirst()).toBeNull();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.getFirst().getData().val).toBe(10);
	});

	it('LinkedList.getLast: can get and return the last node.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();
		
		expect(list.getLast()).toBeNull();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.getLast().getData().val).toBe(30);
	});

	it('LinkedList.size: can get and return the size of the list.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();
		expect(list.size()).toBe(0);

		list.add({val:10});
		expect(list.size()).toBe(1);
		list.add({val:20});
		expect(list.size()).toBe(2);
		list.add({val:30});
		expect(list.size()).toBe(3);
	});

	it('LinkedList.getFromFirst: can get a node at an index, starting the search from the first node.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();
		expect(list.size()).toBe(0);

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});
		list.add({val:40});
		list.add({val:50});
		list.add({val:60});
		list.add({val:70});
		list.add({val:80});
		list.add({val:90});

		expect(list.getFromFirst(0)).toBeDefined();
		expect(list.getFromFirst(0).getData().val).toBe(10);

		expect(list.getFromFirst(8)).toBeDefined();
		expect(list.getFromFirst(8).getData().val).toBe(90);

		expect(list.getFromFirst(5)).toBeDefined();
		expect(list.getFromFirst(5).getData().val).toBe(60);

		expect(list.getFromFirst(2)).toBeDefined();
		expect(list.getFromFirst(2).getData().val).toBe(30);

		expect(function(){list.getFromFirst(100);}).toThrow('Index out of bounds.');
		expect(function(){list.getFromFirst(-100);}).toThrow('Index out of bounds.');
	});

	it('LinkedList.getAt: can get a node at an index, optimizing for first and last indices.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();
		expect(list.size()).toBe(0);

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});
		list.add({val:40});
		list.add({val:50});
		list.add({val:60});
		list.add({val:70});
		list.add({val:80});
		list.add({val:90});

		expect(list.getAt(0)).toBeDefined();
		expect(list.getAt(0).getData().val).toBe(10);

		expect(list.getAt(8)).toBeDefined();
		expect(list.getAt(8).getData().val).toBe(90);

		expect(list.getAt(5)).toBeDefined();
		expect(list.getAt(5).getData().val).toBe(60);

		expect(list.getAt(2)).toBeDefined();
		expect(list.getAt(2).getData().val).toBe(30);

		expect(function(){list.getAt(100);}).toThrow('Index out of bounds.');
		expect(function(){list.getAt(-100);}).toThrow('Index out of bounds.');
	});

	it('LinkedList.remove: can remove a node from the list.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();
		expect(list.size()).toBe(0);

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.size()).toBe(3);

		var firstNode = list.remove(list.getFirst());
		expect(firstNode).toBeDefined();
		expect(firstNode.getData().val).toBe(10);
		expect(list.size()).toBe(2);

		var secondNode = list.remove(list.getFirst());
		expect(secondNode).toBeDefined();
		expect(secondNode.getData().val).toBe(20);
		expect(list.size()).toBe(1);

		var thirdNode = list.remove(list.getLast());
		expect(thirdNode).toBeDefined();
		expect(thirdNode.getData().val).toBe(30);
		expect(list.size()).toBe(0);
	});

	it('LinkedList.removeFirst: can remove the first node from the list.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();
		expect(list.size()).toBe(0);

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.size()).toBe(3);

		var firstNode = list.removeFirst();
		expect(firstNode).toBeDefined();
		expect(firstNode.getData().val).toBe(10);
		expect(list.size()).toBe(2);

		var secondNode = list.removeFirst();
		expect(secondNode).toBeDefined();
		expect(secondNode.getData().val).toBe(20);
		expect(list.size()).toBe(1);

		var thirdNode = list.removeFirst();
		expect(thirdNode).toBeDefined();
		expect(thirdNode.getData().val).toBe(30);
		expect(list.size()).toBe(0);
	});

	it('LinkedList.removeLast: can remove the last node from the list.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();
		expect(list.size()).toBe(0);

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.size()).toBe(3);

		var firstNode = list.removeLast();
		expect(firstNode).toBeDefined();
		expect(firstNode.getData().val).toBe(30);
		expect(list.size()).toBe(2);

		var secondNode = list.removeLast();
		expect(secondNode).toBeDefined();
		expect(secondNode.getData().val).toBe(20);
		expect(list.size()).toBe(1);
	
		var thirdNode = list.removeLast();
		expect(thirdNode).toBeDefined();
		expect(thirdNode.getData().val).toBe(10);
		expect(list.size()).toBe(0);
	});

	it('LinkedList.removeAll: can remove all nodes from the list.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();
		expect(list.size()).toBe(0);

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.size()).toBe(3);

		list.removeAll();

		expect(list.size()).toBe(0);
	});

});