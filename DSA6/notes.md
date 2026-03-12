# Trees
## Traversal
- BFS
- DFS
  - Preorder - n l r
  - Inorder - l n r
  - Postorder - l r n

## Greedy algorithm 
Technique where we make the local optimal choice hoping that it leads to globally optimal solution
- don't consider previous steps
- don't worry about future consquences
- Activity selection , knapsack, Jump game, huffman
- maximize or minimize
- no of coins

## Priority queue (heap)
- Max heap(default) -> priority_queue<int> pq; or priority_queue<int,vector<int>,less<int>> pq;
- Min heap -> priority_queue<int,vector<int>,greater<int>> pq;
- kth largest, kth smallest , all k largest, all k smallest. (for kth largest and all k largest use min heap (opposite))
### Functions of Priority queue 
- pq.push()
- pq.pop()
- pq.top()
- pq.size()
- pq.empty()

