export default class SinglyLinkedList<T> {
    public length: number = 0;
    private first: LinkedNode<T> | undefined;

    constructor() {}

    prepend(item: T): void {
        const node: LinkedNode<T> = new LinkedNode(item);
        const firstNode = this.first;
        if (!firstNode) {
            this.first = node;
        } else {
            node.setNext(firstNode);
            this.first = node;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (!this.first) {
            if (idx === 0) {
                this.first = new LinkedNode(item);
            } else {
                // otherwise, we are trying to insert after first but no first exists.
                return;
            }
        } else {
            if (idx === 0) {
                const nextNode = this.first;
                this.first = new LinkedNode(item);
                this.first.setNext(nextNode);
            } else {
                let prevNode: LinkedNode<T> = this.first;
                for (let i = 1; i < idx; i++) {
                    let nextNode = prevNode.getNext();
                    if (isNode(nextNode)) {
                         prevNode = nextNode;
                     } else {
                        // the idx doesn't go as high as specified.
                        return;
                     }
                }
                const afterNode = prevNode.getNext();
                const currentNode = new LinkedNode(item);
                if (isNode(afterNode)) {
                    currentNode.setNext(afterNode);
                }
                prevNode.setNext(currentNode);
            }
            this.length++;
        }
    }

    append(item: T): void {
        const node = new LinkedNode(item);
        const lastNode = this.getLastNode();
        if (lastNode) {
            lastNode.setNext(node);
        } else {
            this.first = node;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        if (!isNode(this.first)) {
            return;
        }

        let prevNode = this.first;
        let currentNode = prevNode.getNext();
        if (prevNode.getValue() === item) {
            this.first = currentNode;
            this.length--;
            return prevNode.getValue();
        }

        if (!currentNode) {
            return;
        }
        
        do {
            if (currentNode.getValue() === item) {
                prevNode.setNext(currentNode.getNext());
                this.length--;
                return currentNode.getValue();
            }

            prevNode = currentNode;
            currentNode = currentNode.getNext();
        } while (currentNode)
        return undefined;
    }

    get(idx: number): T | undefined {
        const currentNode = this.findByIndex(idx);
        if (currentNode) {
            return currentNode.getValue();
        }
        return;
    }

    removeAt(idx: number): T | undefined {
        let result: T | undefined;
        if (idx === 0) {
            if (this.first) {
                result = this.first.getValue();
                this.first = this.first.getNext();
                this.length--;
            }
            return result;
        }

        const prevNode = this.findByIndex(idx - 1);
        const currentNode = prevNode?.getNext();
        if (prevNode && currentNode) {
            const nextNode = currentNode.getNext();
            prevNode.setNext(nextNode);
            this.length--;
            result = currentNode.getValue();
        }
        return result;
    }

    private findByIndex(idx: number): LinkedNode<T> | undefined {
        let currentNode = this.first;
        if (!this.first) {
            return undefined;
        }

        for (let i = 0; i < idx; i++) {
            currentNode = currentNode?.getNext();

            if (!currentNode) {
                return undefined;
            }
        }

        return currentNode;
    }

    private getLastNode(): LinkedNode<T> | undefined {
        if (!this.first) {
            return undefined;
        }

        let node = this.first;
        
        do {
            let nextNode = node.getNext();
            if (nextNode) {
                node = nextNode;
            } else {
                break;
            }
        } while (true);

        return node;
    }
}

class LinkedNode<T> {
    constructor(private value: T, private next?: LinkedNode<T> | undefined) {}

    public getValue(): T {
        return this.value;
    }

    public setValue(value: T) {
        this.value = value;
    }

    getNext() {
        if (this.next) {
            return this.next as LinkedNode<T>;
        } else {
            return this.next;
        }
    }

    setNext(node: LinkedNode<T> | undefined) {
        this.next = node;
    }
}

function hasNext<T>(linkedNode: LinkedNode<T> | undefined): linkedNode is LinkedNode<T> {
    return !!linkedNode?.getNext();
}
 function isNode<T>(linkedNode: LinkedNode<T> | undefined): linkedNode is LinkedNode<T> {
    return linkedNode instanceof LinkedNode;
 }