class Node:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def insert_begin(self, data):
        new_node = Node(data)

        if self.head is not None:
            self.head.prev = new_node
            new_node.next = self.head

        self.head = new_node

    def insert_end(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            return

        temp = self.head
        while temp.next:
            temp = temp.next

        temp.next = new_node
        new_node.prev = temp

    def delete(self, key):
        temp = self.head

        while temp:
            if temp.data == key:

                if temp.prev:
                    temp.prev.next = temp.next
                else:
                    self.head = temp.next

                if temp.next:
                    temp.next.prev = temp.prev

                return
            temp = temp.next

        print("Value not found")

    def display_forward(self):
        temp = self.head
        while temp:
            print(temp.data, end=" <-> ")
            temp = temp.next
        print("None")

    def display_backward(self):
        temp = self.head

        if temp is None:
            return

        while temp.next:
            temp = temp.next

        while temp:
            print(temp.data, end=" <-> ")
            temp = temp.prev
        print("None")

dll = DoublyLinkedList()

dll.insert_begin(10)
dll.insert_begin(5)
dll.insert_end(20)
dll.insert_end(30)

print("Forward:")
dll.display_forward()

print("Backward:")
dll.display_backward()

dll.delete(20)

print("After deletion:")
dll.display_forward()