class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class CircularLinkedList:
    def __init__(self):
        self.head = None

    def display(self):
        if self.head is None:
            print("List is empty")
            return
        
        temp = self.head
        while True:
            print(temp.data, end=" -> ")
            temp = temp.next
            if temp == self.head:
                break
        print("(head)")

    def insert_begin(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            new_node.next = self.head
            return

        temp = self.head
        while temp.next != self.head:
            temp = temp.next

        new_node.next = self.head
        temp.next = new_node
        self.head = new_node

    # Insert at end
    def insert_end(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            new_node.next = self.head
            return

        temp = self.head
        while temp.next != self.head:
            temp = temp.next

        temp.next = new_node
        new_node.next = self.head

    def delete_begin(self):
        if self.head is None:
            print("List is empty")
            return

        if self.head.next == self.head:
            self.head = None
            return

        temp = self.head
        while temp.next != self.head:
            temp = temp.next

        temp.next = self.head.next
        self.head = self.head.next

    def delete_end(self):
        if self.head is None:
            print("List is empty")
            return

        if self.head.next == self.head:
            self.head = None
            return

        prev = None
        temp = self.head

        while temp.next != self.head:
            prev = temp
            temp = temp.next

        prev.next = self.head

    def delete_position(self, pos):
        if self.head is None:
            print("List is empty")
            return

        if pos == 1:
            self.delete_begin()
            return

        temp = self.head
        count = 1

        while count < pos - 1 and temp.next != self.head:
            temp = temp.next
            count += 1

        if temp.next == self.head:
            print("Position out of range")
            return

        temp.next = temp.next.next


cll = CircularLinkedList()

cll.insert_begin(10)
cll.insert_begin(5)
cll.insert_end(20)
cll.insert_end(30)

print("Circular Linked List:")
cll.display()

cll.delete_begin()
print("After deleting from beginning:")
cll.display()

cll.delete_end()
print("After deleting from end:")
cll.display()

cll.delete_position(2)
print("After deleting position 2:")
cll.display()

cll.delete_position(1)
print("After deleting finally")
cll.display()