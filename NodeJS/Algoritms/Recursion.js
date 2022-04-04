function Node(value) {
    this.value = value
    this.next = null;
}

var root = new Node(1);
root.next = new Node(2);
root.next.next = new Node(3);
root.next.next.next = new Node(4);


traverse(root);

function traverse(node) {
    if(node != null) {
        console.log(node.value);
        traverse(node.next);
    }
}
