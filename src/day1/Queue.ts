type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

export default class Queue<T> {
    public length: number = 0;
    private head: QNode<T> | undefined;
    private tail: QNode<T> | undefined;

    enqueue(item: T): void {
        const prevTail = this.tail;
        this.tail = {
            value: item,
        };
        if (prevTail) {
            prevTail.next = this.tail;
        }
        if (!this.head) {
            this.head = this.tail;
        }
        this.length++;
    }

    deque(): T | undefined {
        if (this.head) {
            this.length--;
        }
        const val = this.head?.value;
        this.head = this.head?.next;
        return val;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

}
