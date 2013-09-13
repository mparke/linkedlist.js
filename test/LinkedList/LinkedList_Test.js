describe('LinkedList', function(){

	it('can be instantiated with defaults.', function(){

		var list = new LinkedList();

		expect(list).toBeDefined();
		expect(list.start.id()).toBeNull();
		expect(list.end.id()).toBeNull();
		expect(list.start.prev).toBeNull();
		expect(list.end.next).toBeNull();
		expect(list._idCounter).toBe(0);
		expect(list._numNodes).toBe(0);
	});

	it('LinkedList.insertBefore: can insert a node before another node.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();

		var firstNode = new ListNode(1, {val:10});

		list.insertBefore(list.end, firstNode);

		expect(list.start.next.id()).toBe(1);
		expect(list.start.next.data().val).toBe(10);
		expect(list.end.prev.id()).toBe(1);
		expect(list.end.prev.data().val).toBe(10);

		var secondNode = new ListNode(2, {val:20});

		list.insertBefore(firstNode, secondNode);

		expect(list.start.next.id()).toBe(2);
		expect(list.start.next.data().val).toBe(20);

		expect(list.start.next.next.id()).toBe(1);
		expect(list.start.next.next.data().val).toBe(10);

		expect(list.end.prev.id()).toBe(1);
		expect(list.end.prev.data().val).toBe(10);

		expect(list.end.prev.prev.id()).toBe(2);
		expect(list.end.prev.prev.data().val).toBe(20);

	});

	it('LinkedList.addLast: can add to the end of the list.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();

		list.addLast({val:10});
		list.addLast({val:20});
		list.addLast({val:30});

		expect(list.start.next.data().val).toBe(10);
		expect(list.start.next.next.data().val).toBe(20);
		expect(list.start.next.next.next.data().val).toBe(30);
		expect(list.end.prev.data().val).toBe(30);
		expect(list.end.prev.prev.data().val).toBe(20);
		expect(list.end.prev.prev.prev.data().val).toBe(10);

	});

	it('LinkedList.add: can add a data object to the list.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.start.next.data().val).toBe(10);
		expect(list.start.next.next.data().val).toBe(20);
		expect(list.start.next.next.next.data().val).toBe(30);
		expect(list.end.prev.data().val).toBe(30);
		expect(list.end.prev.prev.data().val).toBe(20);
		expect(list.end.prev.prev.prev.data().val).toBe(10);
	});

	it('LinkedList.getFirst: can get and return the first node.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();

		expect(list.getFirst()).toBeNull();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.getFirst().data().val).toBe(10);
	});

	it('LinkedList.getLast: can get and return the last node.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();

		expect(list.getLast()).toBeNull();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.getLast().data().val).toBe(30);
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
		expect(list.getFromFirst(0).data().val).toBe(10);

		expect(list.getFromFirst(8)).toBeDefined();
		expect(list.getFromFirst(8).data().val).toBe(90);

		expect(list.getFromFirst(5)).toBeDefined();
		expect(list.getFromFirst(5).data().val).toBe(60);

		expect(list.getFromFirst(2)).toBeDefined();
		expect(list.getFromFirst(2).data().val).toBe(30);

		expect(function(){list.getFromFirst(100);}).toThrow('Index out of bounds.');
		expect(function(){list.getFromFirst(-100);}).toThrow('Index out of bounds.');
	});

	it('LinkedList.get: can get a node at an index, optimizing for first and last indices.', function(){
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

		expect(list.get(0)).toBeDefined();
		expect(list.get(0).data().val).toBe(10);

		expect(list.get(8)).toBeDefined();
		expect(list.get(8).data().val).toBe(90);

		expect(list.get(5)).toBeDefined();
		expect(list.get(5).data().val).toBe(60);

		expect(list.get(2)).toBeDefined();
		expect(list.get(2).data().val).toBe(30);

		expect(function(){list.get(100);}).toThrow('Index out of bounds.');
		expect(function(){list.get(-100);}).toThrow('Index out of bounds.');
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
		expect(firstNode.data().val).toBe(10);
		expect(list.size()).toBe(2);

		var secondNode = list.remove(list.getFirst());
		expect(secondNode).toBeDefined();
		expect(secondNode.data().val).toBe(20);
		expect(list.size()).toBe(1);

		var thirdNode = list.remove(list.getLast());
		expect(thirdNode).toBeDefined();
		expect(thirdNode.data().val).toBe(30);
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
		expect(firstNode.data().val).toBe(10);
		expect(list.size()).toBe(2);

		var secondNode = list.removeFirst();
		expect(secondNode).toBeDefined();
		expect(secondNode.data().val).toBe(20);
		expect(list.size()).toBe(1);

		var thirdNode = list.removeFirst();
		expect(thirdNode).toBeDefined();
		expect(thirdNode.data().val).toBe(30);
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
		expect(firstNode.data().val).toBe(30);
		expect(list.size()).toBe(2);

		var secondNode = list.removeLast();
		expect(secondNode).toBeDefined();
		expect(secondNode.data().val).toBe(20);
		expect(list.size()).toBe(1);

		var thirdNode = list.removeLast();
		expect(thirdNode).toBeDefined();
		expect(thirdNode.data().val).toBe(10);
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

	it('LinkedList.each: can iterate the list with each', function() {
		var list = new LinkedList();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		var spy = jasmine.createSpy();

		list.each(spy);

		expect(spy).toHaveBeenCalled();
		expect(spy.callCount).toEqual(3);
	});

});
