// import LinkedListComp from "./LinkedListComp";

class Node {
    constructor(subject, amount) {
        this.subject = subject;
        this.amount = amount;
        this.forwardNode = null;
        this.prevNode = null;
    }
}

class LinkedList {
    constructor(subject, amount) {
        this.x = new Node(subject, amount, null, null);
        this.current = this.x;
    }

    add(subject, amount) {
        let y = this.x;
        while (y.forwardNode != null) {
            y = y.forwardNode
        }
        y.forwardNode = new Node(subject, amount);
        y.forwardNode.prevNode = y;
        return (y);
    } 

    show() {
        let y = this.x;
        let z = `<p>Subject: ${y.subject} | Amount: ${y.amount}`;
        while (y.forwardNode) {
            z += `<p>Subject: ${y.forwardNode.subject} | Amount: ${y.forwardNode.amount}\n`;
            y = y.forwardNode;
        }
        return (z);
    }
    
    getFirst() {
        let y = this.x;
        this.current = y;
        let z = `Subject: ${y.subject} | Amount: ${y.amount}`;
        return (z);
    }

    getNext() {
        if (this.current.forwardNode) {
            this.current = this.current.forwardNode;
            let y = `Subject: ${this.current.subject} | Amount: ${this.current.amount}`;
            return (y);
        } else {
            return (`Subject: ${this.current.subject} | Amount: ${this.current.amount}: is the last node`);
        }
          
    }

    getPrev() {
        if (this.current.prevNode) {
            this.current = this.current.prevNode;
            let y = `Subject: ${this.current.subject} | Amount: ${this.current.amount}`;
            return (y);
        } else {
            return (`Subject: ${this.current.subject} | Amount: ${this.current.amount}: is the last node`);
        }
    }

    getLast() {
        while (this.current.forwardNode) {
            this.current = this.current.forwardNode;
        }
        let y = `Subject: ${this.current.subject} | Amount: ${this.current.amount}`;
            return (y);
    }

    insertNode(subject, amount) {
        let temp_forwardNode = this.current.forwardNode;
        let newNode = new Node (subject, amount);
        this.current.forwardNode = newNode;
        newNode.prevNode = this.current;
        this.current = newNode;
        newNode.forwardNode = temp_forwardNode;
        temp_forwardNode.prevNode = newNode;
        newNode = `${this.current.subject} ${this.current.amount}`
        return (newNode);
    }

    deleteNode() {
        let temp_forwardNode = this.current.forwardNode;
        this.current = this.current.prevNode;
        this.current.forwardNode = temp_forwardNode;
        temp_forwardNode.prevNode = this.current;
    }
}

export default { LinkedList };