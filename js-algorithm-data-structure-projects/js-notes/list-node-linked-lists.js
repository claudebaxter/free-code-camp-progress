/*
A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list.

Each element (commonly called nodes) contains two items: the data stored and a link to the next node. The data can be any valid data type. You can see this illustrated in the diagram below:

Head
\/
[6][-]-->[10][-]-->[12]-]-->[3][-]--> null

Image of a linked list
The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference.

In JavaScript, a linked list looks like this: */

const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }
};

/* 
Advantage: nodes can easily be removed or added from a linked list without reorganizing the entire data structure. 

Disadvantages: 
1) search operations are slow in linked lists (unlike arrays, random access of data elements is not allowed, nodes are accessed sequentially starting from thef irst node).

2) It uses more memory than arrays because of the storage pointers.

Types of Linked Lists:
1) Singly Linked Lists: each node contains only one pointer to the next node. (like example above)

2) Doubly Linked Lists: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.

3) Circular Linked Lists: a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.

Implementing a List Node in Javascript
A node contains two items: the data and the pointer to the next node(s). We can implement a list node in javascript as follows:
*/

class ListNode {
	constructor(data) {
		this.data = data
		this.next = null
	}
}