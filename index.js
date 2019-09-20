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
          if (currNode.value === value) {
            prevNode.next = currNode.next;
            this.lenght--; 
            console.log(value, 'was removed');
            return this;
          }          
          prevNode = currNode;
          currNode = currNode.next;
        }
        console.log(value, 'is not found');
      }
    }
    else return console.log('list is empty');
  }

  printList() {
    let result = '';
    if (this.lenght !== 0) {       
      let Node = this.head;      
      while (Node) {
        for(var key in Node.value) {
        result += key + ':' + Node.value[key] + ' ';
        }        
        Node = Node.next;        
      }
      console.log(result);
      return result;
    }
    else return console.log('list is empty');
  }  
}

const list2 = new LinkedList();


for(let i = 0; i < 20; i++){
  list2.addToHead({
    name: `Developer ${i}`,
    age: 22,
    skills: [
      'C#', 'JavaScript', 'DDD'
    ]
  })
}
console.log(list2);
list2.printList();