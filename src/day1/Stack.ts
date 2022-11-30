interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
}

class Stack<T> implements IStack<T> {
    public length: number = 0;
    private head?: SNode<T>;

    push(item: T): void {
        this.length++;
        this.head = new SNode(item, this.head);
    }

    pop(): T | undefined {
        if (!this.head) {
            return;
        }
        this.length--;
        const result = this.head.value;
        this.head = this.head.next;
        return result;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

class SNode<T> {
    constructor(public value: T, public next?: SNode<T>) {}
}
















type SNode2<T> = {
    value: T,
    next?: SNode2<T>,
}

class Stack2<T> implements IStack<T> {
    constructor(public length: number = 0, private head?: SNode2<T>) {}

    push(item: T): void {
        this.length++;
        const node: SNode2<T> = {
            value: item,
            next: this.head,
        }
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        const val = this.head?.value;
        this.head = this.head?.next;
        return val;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

export default Stack2;
// key is to remember that the .next points in the opposite direction for stack than for queue.
