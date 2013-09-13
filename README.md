### LinkedList

A JavaScript Linked List implementation.

##### ListNode(id, data)
- id(id)      get or set the id
- data(data)  get or set the data
- hasNext()   get whether or not node.next exists
- hasPrev()   get whether or not node.prev exists

##### LinkedList()
- addLast(data)                       (internal) create a ListNode with data and add it to the end of the list
- insertBefore(toInsertBefore, node)  (internal) insert a ListNode before the given node
- getFromFirst(index)                 (internal) get the ListNode at index by searching from the start
- getFirst()                          return the first ListNode or null
- getLast()                           return the last ListNode or null
- get(index)                          return the ListNode at the given index or throw Index Out Of Bounds
- insert(index, data)                 create a ListNode with data, and insert it at index, shifting the list
- size()                              return the size of the list
- remove(node)                        remove and return the ListNode from the list
- removeFirst()                       remove and return the first ListNode from the list
- removeLast()                        return and return the last ListNode from the list
- removeAll()                         remove all nodes from the list
- each(fn)                            iterate the list with fn, and call fn passing ListNode as a param for each
- add(data)                           alias for addLast
- push(data)                          alias for addLast
- unshift(data)                       create a ListNode with data and insertBefore the first node in the list
- pop()                               alias for removeLast
- shift()                             alias for removeFirst
