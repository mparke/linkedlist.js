var ListNode = (function(){

	function ListNode(id, data, next, prev){
		this.id = id || null;
   		this.data = data || null;
    	this.next = next || null;
    	this.prev = prev || null;
	}

	ListNode.prototype = {

	    setId: function (id) {
	        if(typeof id === 'number'){
	            this.id = id;
	        }else{
	            throw 'Id must be an integer.';
	        }
	    },

	    getId: function () {
	        return this.id;
	    },

	    setData: function (data) {
	        this.data = data;
	    },

	    getData: function () {
	        return this.data;
	    }
	};

	return ListNode;

})();