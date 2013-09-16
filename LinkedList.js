var LinkedList = (function() {

  function LinkedList() {
    //initialize end buffer nodes
    this.start = new ListNode();
    this.end = new ListNode();

    //initialize node pointers
    this.start.next = this.end;
    this.start.prev = null;

    this.end.prev = this.start;
    this.end.next = null;

    //initialize counters
    this._idCounter = 0;
    this._numNodes = 0;
  }

  LinkedList.prototype = {

    /**
    *   Inserts a node before another node in the linked list
    *   @param {Node} toInsertBefore
    *   @param {Node} node
    */
    insertBefore: function (toInsertBefore, data) {
      var newNode = new ListNode(this._idCounter, data);

      newNode.next = toInsertBefore;
      newNode.prev = toInsertBefore.prev;

      toInsertBefore.prev.next = newNode;
      toInsertBefore.prev = newNode;

      ++this._idCounter;
      ++this._numNodes;
    },

    /**
    *   Adds data wrapped in a Node object to the end of the linked list
    *   @param {object} data
    */
    addLast: function (data) {
      this.insertBefore(this.end, data);
    },

    /**
    *   Alias for addLast
    *   @param {object} data
    */
    add: function (data) {
      this.addLast(data);
    },

    /**
    *   Gets and returns the first node in the linked list or null
    *   @return {Node/null}
    */
    getFirst: function () {
      if (this._numNodes === 0) {
        return null;
      } else {
        return this.start.next;
      }
    },

    /**
    *   Gets and returns the last node in the linked list or null
    *   @return {Node/null}
    */
    getLast: function () {
      if (this._numNodes === 0) {
        return null;
      } else {
        return this.end.prev;
      }
    },

    /**
    *   Gets and returns the size of the linked list
    *   @return {number}
    */
    size: function () {
      return this._numNodes;
    },

    /**
    *   (Internal) Gets and returns the node at the specified index starting from the first in the linked list
    *   Use getAt instead of this function
    *   @param {number} index
    */
    getFromFirst: function (index) {
      var count = 0,
        temp = this.start.next;

      if(index >= 0) {
        while (count < index && temp !== null) {
          temp = temp.next;
          ++count;
        }
      } else {
        temp = null;
      }

      if(temp === null) {
        throw 'Index out of bounds.';
      }

      return temp;
    },

    /**
    *   Gets and returns the Node at the specified index in the linked list
    *   @param {number} index
    */
    get: function (index) {
      var count = 0,
        temp = null;

      if (index === 0) {
        temp = this.getFirst();
      } else if (index === this._numNodes - 1) {
        temp = this.getLast();
      } else {
        temp = this.getFromFirst(index);
      }

      return temp;
    },

    /**
    *   Removes and returns node from the linked list by rearranging pointers
    *   @param {Node} node
    *   @return {Node}
    */
    remove: function (node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;

      --this._numNodes;

      return node;
    },

    /**
    *   Removes and returns the first node in the linked list if it exists, otherwise returns null
    *   @return {Node/null}
    */
    removeFirst: function () {
      var temp = null;

      if (this._numNodes > 0) {
        temp = this.remove(this.start.next);
      }

      return temp;
    },

    /**
    *   Removes and returns the last node in the linked list if it exists, otherwise returns null
    *   @return {Node/null}
    */
    removeLast: function () {
      var temp = null;

      if (this._numNodes > 0) {
        temp = this.remove(this.end.prev);
      }

      return temp;
    },

    /**
    *   Removes all nodes from the list
    */
    removeAll: function() {
      this.start.next = this.end;
      this.end.prev = this.start;
      this._numNodes = 0;
      this._idCounter = 0;
    },

    /**
    *		Iterates the list calling the given fn for each node
    *		@param {function} fn
    */
    each: function(iterator) {
      var temp = this.start;

      while(temp.hasNext()) {
        temp = temp.next;
        iterator(temp);
      }
    },

    find: function(iterator) {
      var temp = this.start,
        found = false,
        result = null;

      while(temp.hasNext() && !found) {
        temp = temp.next;
        if(iterator(temp)) {
          result = temp;
          found = true;
        }
      }

      return result;
    },

    map: function(iterator) {
      var temp = this.start,
        results = [];

      while(temp.hasNext()) {
        temp = temp.next;
        if(iterator(temp)) {
          results.push(temp);
        }
      }

      return results;
    },

    /**
    *		Alias for addLast
    *		@param {object} data
    */
    push: function(data) {
      this.addLast(data);
    },

    /**
    *		Performs insertBefore on the first node
    *		@param {object} data
    */
    unshift: function(data) {
      if(this._numNodes > 0) {
        this.insertBefore(this.start.next, data);
      }else {
        this.insertBefore(this.end, data);
      }
    },

    /**
    *		Alias for removeLast
    */
    pop: function() {
      return this.removeLast();
    },

    /**
    *		Alias for removeFirst()
    */
    shift: function() {
      return this.removeFirst();
    }
  };

  return LinkedList;

})();
