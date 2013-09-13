var ListNode = (function(){

	function ListNode(id, data){
		this._id = id || null;
 		this._data = data || null;
  	this.next = null;
  	this.prev = null;
	}

	ListNode.prototype = {

		id: function(id) {
			if(id) {
				if(typeof id === 'number') {
            this._id = id;
        }else {
            throw new Error('Id must be an integer.');
        }
			}else {
				return this._id;
			}
		},

		data: function(data) {
			if(data) {
				this._data = data;
			}else {
				return this._data;
			}
		},

    hasNext: function() {
      if(this.next !== null) {
        return this.next.id() !== null;
      }

      return false;
    },

    hasPrev: function() {
      if(this.prev !== null) {
        return this.prev.id() !== null;
      }

      return false;
    }
	};

	return ListNode;

})();
