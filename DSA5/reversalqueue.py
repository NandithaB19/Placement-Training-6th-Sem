from collections import deque

def reverse_queue(q):
    stack = []

    while q:
        stack.append(q.popleft())

    while stack:
        q.append(stack.pop())

    return q

q = deque([1, 2, 3, 4])
reverse_queue(q)

print(q)