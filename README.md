### LinkedList

A JavaScript Implementation of a Doubly Linked List.

##### ListNode(id, data)
- id(id)      get or set the id
- data(data)  get or set the data
- hasNext()   get whether or not node.next exists
- hasPrev()   get whether or not node.prev exists

##### LinkedList()
- insertBefore(toInsertBefore, data)  create a ListNode with data and insert it before the given node
- addLast(data)                       (internal) create a ListNode with data and add it to the end of the list
- add(data)                           alias for addLast
- getFirst()                          return the first ListNode or null
- getLast()                           return the last ListNode or null
- size()                              return the size of the list
- getFromFirst(index)                 (internal) get the ListNode at index by searching from the start
- get(index)                          return the ListNode at the given index or throw Index Out Of Bounds
- remove(node)                        remove and return the ListNode from the list
- removeFirst()                       remove and return the first ListNode from the list
- removeLast()                        return and return the last ListNode from the list
- removeAll()                         remove all nodes from the list
- each(iterator)                      iterate the list with iterator and call fn passing ListNode as a param for each
- find(iterator)                      iterate the list with iterator, stop and return the node passed to iterator when the iterator returns truthy, otherwise return null
- map(iterator)                       iterate the list with iterator, and push into an array all nodes that when passed to the iterator return truthy, then return the resulting array
- push(data)                          alias for addLast
- unshift(data)                       create a ListNode with data and insertBefore the first node in the list
- pop()                               alias for removeLast
- shift()                             alias for removeFirst
