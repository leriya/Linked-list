// Import stylesheets
import './style.css';

class LinkedList {
  constructor() {
    this.head = null;
    this.lenght = 0;    
  }
  
  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.lenght++;
    return this;
  }

  removeFromHead() {
    if (this.lenght === 0) {
      return console.log('List is empty');
    }
    
    const value = this.head.value;
    this.head = this.head.next;
    this.lenght--;
    console.log(value, 'was removed');    
    return this;
  }

  findValue(value) {
    let result = '';
    if (this.lenght !== 0) {       
      let Node = this.head;
      
      while (Node) {
        if (Node.value === value) {        
          result = value + ' exists in ';
          console.log(result , Node);
          return Node;
        }
        Node = Node.next;        
      }
      if (result == '') result = value + ' is not found';  
      return console.log(result);
    }
    else return console.log('list is empty');
  }

  removeItem(value) {
    if (this.lenght!==0) {
      if (this.head.value === value) {
        this.removeFromHead(value);
        return this;
      }
      else {
        let prevNode = this.head;
        let currNode = this.head.next;

        while (currNode) {
          if (currNode.value === value) 
          break;

          prevNode = currNode;
          currNode = currNode.next;
        }
        prevNode.next = currNode.next;
        
        console.log(value, 'was removed');
        return this;
      }
    }
    else return console.log('list is empty');
  }
  
}

//What if I don't want to initilize the list with the first item through the constructor? Can you spot the mistake?
//const list = new LinkedList();
const list = new LinkedList();

for(let i = 0; i < 20; i++){
  list.addToHead(`item ${i}`);
}
console.log(list);


list.removeItem(`item 1`);
list.removeItem(`item 4`);
list.removeItem(`item 19`);
list.removeItem(`item 18`);
list.removeItem(`item 17`);
list.removeItem(`item 3`);
console.log(list);

