class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, item):
        self.queue.append(item)
        print(item, "inserted into queue")

    def dequeue(self):
        if len(self.queue) == 0:
            print("Queue is empty")
        else:
            removed = self.queue.pop(0)
            print(removed, "removed from queue")

    def display(self):
        print("Queue:", self.queue)

q = Queue()

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

q.display()

q.dequeue()
q.display()