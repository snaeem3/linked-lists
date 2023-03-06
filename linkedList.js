const Node = (value, nextNode = null) => {
    return {value, nextNode};
}

const linkedList = (() => {
    const head = Node(null, null);

    const tail = () => {
        if (head.nextNode === null) {
            return head.nextNode;
        } else {
            let tempNode = head;
            while (tempNode.nextNode !== null) {
                tempNode = tempNode.nextNode;
            }
            return tempNode;
        }
    }

    // Add node to end of list
    const append = (value) => {
        if (head.nextNode === null) {
            prepend(value);
        } else {
            let tempNode = head;
            while (tempNode.nextNode!== null) {
                tempNode = tempNode.nextNode;
            }
            tempNode.nextNode = Node(value, null);
        }
    }
    
    // Add node to beginning of list
    const prepend = (value) => {
        head.nextNode = Node(value, head.nextNode);
    }

    // Return the total number of nodes in the list
    const size = () => {
        let count = 0;
        if (head.nextNode === null) {
            return count;
        } else {
            let tempNode = head;
            while (tempNode.nextNode!== null) {
                tempNode = tempNode.nextNode;
                count += 1;
            }
        }
        return count;
    }

    // Returns the node at the given index
    const at = (index) => {
        let currentIndex = 0;
        let currentIndexNode = head.nextNode;

        while (currentIndexNode!== null && currentIndex!== index) {
            currentIndexNode = currentIndexNode.nextNode;
            currentIndex += 1;
        }

        return currentIndexNode;
    }

    // Removes the last element from the list
    const pop = () => {
        if (head.nextNode === null) {
            return;
        }

        let tempNode = head;
        while (tempNode.nextNode.nextNode !== null) {
            tempNode = tempNode.nextNode;
        }

        tempNode.nextNode = null;
    }

    // Returns true if the passed in value is in the list and otherwise returns false
    const contains = (val) => {
        if (head.nextNode === null) {
            return false;
        }

        let tempNode = head;
        while (tempNode !== null) {
            if (tempNode.value === val) {
                return true
            }
            tempNode = tempNode.nextNode;
        }
        return false;
    }

    // Returns the index of the node containing value, or null if not found
    const find = (val) => {
        if (head.nextNode === null) {
            return null;
        }

        let tempNode = head.nextNode;
        let index = 0;
        while (tempNode!== null) {
            if (tempNode.value === val) {
                return index;
            }
            tempNode = tempNode.nextNode;
            index += 1;
        }
        return null;
    }

    // Returns LinkedList object as a string 
    const toString = () => {
        if (head.nextNode === null) {
            return 'null';
        }

        let stringList = '';
        let tempNode = head.nextNode;
        while (tempNode!== null) {
            stringList = stringList.concat('( ',tempNode.value, ' ) -> ');
            tempNode = tempNode.nextNode;
        }

        return stringList.concat('null');
    }

    // Inserts a new node with the provided value at the given index
    const insertAt = (value, index) => {
        let currentIndex = 0;
        let currentIndexNode = head.nextNode;
        let prevNode = head;

        while (currentIndexNode!== null && currentIndex!== index) {
            prevNode = currentIndexNode;
            currentIndexNode = currentIndexNode.nextNode;
            currentIndex += 1;
        }
        if (currentIndex === index) {
            prevNode.nextNode = Node(value, currentIndexNode);
        }
    }

    // Removes node at a given index
    const removeAt = (index) => {
        let currentIndex = 0;
        let currentIndexNode = head.nextNode;
        let prevNode = head;

        while (currentIndexNode!== null && currentIndex!== index) {
            prevNode = currentIndexNode;
            currentIndexNode = currentIndexNode.nextNode;
            currentIndex += 1;
        }
        if (currentIndex === index) {
            prevNode.nextNode = currentIndexNode.nextNode;
        }
    }

    return {
        head,
        tail,
        append,
        prepend,
        size,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    }
})();


// Test cases
linkedList.append('B');
linkedList.prepend('A');
linkedList.append('C');
console.log(linkedList.head.value);
console.log(linkedList.head.nextNode.value);
console.log(linkedList.head.nextNode.nextNode.value);
console.log(linkedList.head.nextNode.nextNode.nextNode.value);

console.log(linkedList.toString());

console.log(`List size: ${linkedList.size()}`);

console.log(`Tail node: ${linkedList.tail().value}`);

console.log(`Node at index 1: ${linkedList.at(1).value}`);

linkedList.pop();

console.log(`Tail node: ${linkedList.tail().value}`);

console.log(`Contains 'B'?: ${linkedList.contains('B')}`);
console.log(`Contains 'C'?: ${linkedList.contains('C')}`);

console.log(`Index of 'B': ${linkedList.find('B')}`);
console.log(`Index of 'C': ${linkedList.find('C')}`);

console.log(linkedList.toString());

linkedList.insertAt('Z', 1);

console.log(linkedList.toString());

linkedList.removeAt(0);

console.log(linkedList.toString());