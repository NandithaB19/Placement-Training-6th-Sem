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

    # Delete node
    def delete(self, key):
        temp = self.head

        while temp:
            if temp.data == key:

                if temp.prev is None:
                    self.head = temp.next
                    if self.head:
                        self.head.prev = None
                else:
                    temp.prev.next = temp.next
                    if temp.next:
                        temp.next.prev = temp.prev
                return

            temp = temp.next

        print("Value not found!")

    def display(self):
        temp = self.head

        if temp is None:
            print("List is empty")
            return

        while temp:
            print(temp.data, end=" <-> ")
            temp = temp.next
        print("None")


dll = DoublyLinkedList()

while True:
    print("\n1.Insert at Beginning")
    print("2.Insert at End")
    print("3.Delete")
    print("4.Display")
    print("5.Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        data = int(input("Enter value: "))
        dll.insert_begin(data)

    elif choice == 2:
        data = int(input("Enter value: "))
        dll.insert_end(data)

    elif choice == 3:
        data = int(input("Enter value to delete: "))
        dll.delete(data)

    elif choice == 4:
        dll.display()

    elif choice == 5:
        break

    else:
        print("Invalid choice!")
