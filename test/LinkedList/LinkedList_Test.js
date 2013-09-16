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

	it('insertBefore: can insert a node before another node.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();

		list.insertBefore(list.end, {val:10});

		expect(list.start.next.id()).toBe(0);
		expect(list.start.next.data().val).toBe(10);
		expect(list.end.prev.id()).toBe(0);
		expect(list.end.prev.data().val).toBe(10);

		list.insertBefore(list.start.next, {val:20});

		expect(list.start.next.id()).toBe(1);
		expect(list.start.next.data().val).toBe(20);

		expect(list.start.next.next.id()).toBe(0);
		expect(list.start.next.next.data().val).toBe(10);

		expect(list.end.prev.id()).toBe(0);
		expect(list.end.prev.data().val).toBe(10);

		expect(list.end.prev.prev.id()).toBe(1);
		expect(list.end.prev.prev.data().val).toBe(20);

	});

	it('addLast: can add to the end of the list.', function(){
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

	it('add: can add a data object to the list.', function(){
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

	it('getFirst: can get and return the first node.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();

		expect(list.getFirst()).toBeNull();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.getFirst().data().val).toBe(10);
	});

	it('getLast: can get and return the last node.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();

		expect(list.getLast()).toBeNull();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.getLast().data().val).toBe(30);
	});

	it('size: can get and return the size of the list.', function(){
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

	it('getFromFirst: can get a node at an index, starting the search from the first node.', function(){
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

	it('get: can get a node at an index, optimizing for first and last indices.', function(){
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

	it('remove: can remove a node from the list.', function(){
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

	it('removeFirst: can remove the first node from the list.', function(){
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

	it('removeLast: can remove the last node from the list.', function(){
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

	it('removeAll: can remove all nodes from the list.', function(){
		var list = new LinkedList();
		expect(list).toBeDefined();
		expect(list.size()).toBe(0);

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		expect(list.size()).toEqual(3);

		list.removeAll();

		expect(list.size()).toEqual(0);
		expect(list._numNodes).toEqual(0);
		expect(list._idCounter).toEqual(0);
	});

	it('each: can iterate the list with each', function() {
		var list = new LinkedList();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		var spy = jasmine.createSpy();

		list.each(spy);

		expect(spy).toHaveBeenCalled();
		expect(spy.callCount).toEqual(3);
	});

	it('find: can find a node in the list using iterator', function() {
		var list = new LinkedList();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		var spy = jasmine.createSpy();
		var found = list.find(spy);

		expect(spy).toHaveBeenCalled();
		expect(spy.callCount).toEqual(3);
		expect(found).toBe(null);

		found = list.find(function(node) {
			return node.data().val === 10;
		});
		expect(found).toBeDefined();
		expect(found.id()).toEqual(0);
		expect(found.data().val).toEqual(10);

		found = list.find(function(node) {
			return node.data().val === 20;
		});
		expect(found).toBeDefined();
		expect(found.id()).toEqual(1);
		expect(found.data().val).toEqual(20);

		found = list.find(function(node) {
			return node.data().val === 30;
		});
		expect(found).toBeDefined();
		expect(found.id()).toEqual(2);
		expect(found.data().val).toEqual(30);
	});

	it('map: can map nodes to an array that pass an iterator test', function() {
		var list = new LinkedList();

		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		var spy = jasmine.createSpy();
		var results = list.map(spy);

		expect(spy).toHaveBeenCalled();
		expect(spy.callCount).toEqual(3)
		expect(results).toBeDefined();
		expect(results.length).toEqual(0);

		results = list.map(function(node) {
			return node.data().val === 10;
		});
		expect(results).toBeDefined();
		expect(results.length).toEqual(1);
		expect(results[0].data().val).toEqual(10)

		results = list.map(function(node) {
			return node.data().val === 20;
		});
		expect(results).toBeDefined();
		expect(results.length).toEqual(1);
		expect(results[0].data().val).toEqual(20)

		results = list.map(function(node) {
			return node.data().val === 30;
		});
		expect(results).toBeDefined();
		expect(results.length).toEqual(1);
		expect(results[0].data().val).toEqual(30)

		results = list.map(function(node) {
			return node;
		});
		expect(results).toBeDefined();
		expect(results.length).toEqual(3);
		expect(results[0].data().val).toEqual(10);
		expect(results[1].data().val).toEqual(20);
		expect(results[2].data().val).toEqual(30);
	});

	it('push: supports push, an alias for addLast', function() {
		var list = new LinkedList();

		spyOn(list, 'addLast').andCallThrough();

		list.push({val:10});
		expect(list.addLast).toHaveBeenCalledWith({val:10});
		list.push({val:20});
		expect(list.addLast).toHaveBeenCalledWith({val:20});
		list.push({val:30});
		expect(list.addLast).toHaveBeenCalledWith({val:30});

		expect(list.size()).toEqual(3);
	});

	it('unshift: supports unshift, an alias for insertBefore the first node', function() {
		var list = new LinkedList();

		spyOn(list, 'insertBefore').andCallThrough();

		list.unshift({val:10});
		expect(list.insertBefore).toHaveBeenCalledWith(list.end, {val:10});
		expect(list.start.next).toBeDefined();
		expect(list.start.next.data().val).toEqual(10);
		expect(list.size()).toEqual(1);

		list.unshift({val:20});
		expect(list.start.next).toBeDefined();
		expect(list.start.next.data().val).toEqual(20);
		expect(list.size()).toEqual(2);

		list.unshift({val:30});
		expect(list.start.next).toBeDefined();
		expect(list.start.next.data().val).toEqual(30);
		expect(list.size()).toEqual(3);
	});

	it('pop: supports pop, an alias for removeLast', function() {
		var list = new LinkedList();
		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		spyOn(list, 'removeLast').andCallThrough();

		list.pop();
		expect(list.removeLast).toHaveBeenCalled();
		expect(list.removeLast.callCount).toEqual(1);
		expect(list.size()).toEqual(2);
		expect(list.end.prev.data().val).toEqual(20);

		list.pop();
		expect(list.removeLast).toHaveBeenCalled();
		expect(list.removeLast.callCount).toEqual(2);
		expect(list.size()).toEqual(1);
		expect(list.end.prev.data().val).toEqual(10);

		list.pop();
		expect(list.removeLast).toHaveBeenCalled();
		expect(list.removeLast.callCount).toEqual(3);
		expect(list.size()).toEqual(0);
	});

	it('shift: supports shift, an alias for removeFirst', function() {
		var list = new LinkedList();
		list.add({val:10});
		list.add({val:20});
		list.add({val:30});

		spyOn(list, 'removeFirst').andCallThrough();

		list.shift();
		expect(list.removeFirst).toHaveBeenCalled();
		expect(list.removeFirst.callCount).toEqual(1);
		expect(list.size()).toEqual(2);
		expect(list.start.next.data().val).toEqual(20);

		list.shift();
		expect(list.removeFirst).toHaveBeenCalled();
		expect(list.removeFirst.callCount).toEqual(2);
		expect(list.size()).toEqual(1);
		expect(list.start.next.data().val).toEqual(30);

		list.shift();
		expect(list.removeFirst).toHaveBeenCalled();
		expect(list.removeFirst.callCount).toEqual(3);
		expect(list.size()).toEqual(0);
	});
});
