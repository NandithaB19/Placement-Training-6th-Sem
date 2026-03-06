#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;

    Node() {
        val = 0;
    }

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};

class Solution {
public:
    unordered_map<Node*, Node*> mp;

    Node* cloneGraph(Node* node) {
        if (!node) return NULL;

        // If already cloned, return it
        if (mp.find(node) != mp.end())
            return mp[node];

        // Create clone
        Node* clone = new Node(node->val);
        mp[node] = clone;

        // Clone neighbors
        for (Node* neighbor : node->neighbors) {
            clone->neighbors.push_back(cloneGraph(neighbor));
        }

        return clone;
    }
};

// Helper function to print graph (DFS print)
void printGraph(Node* node, unordered_map<Node*, bool>& visited) {
    if (!node || visited[node]) return;

    visited[node] = true;
    cout << "Node " << node->val << " neighbors: ";

    for (Node* neighbor : node->neighbors) {
        cout << neighbor->val << " ";
    }
    cout << endl;

    for (Node* neighbor : node->neighbors) {
        printGraph(neighbor, visited);
    }
}

int main() {
    // Creating a simple graph manually
    Node* node1 = new Node(1);
    Node* node2 = new Node(2);
    Node* node3 = new Node(3);
    Node* node4 = new Node(4);

    node1->neighbors = {node2, node4};
    node2->neighbors = {node1, node3};
    node3->neighbors = {node2, node4};
    node4->neighbors = {node1, node3};

    Solution sol;
    Node* clonedGraph = sol.cloneGraph(node1);

    cout << "Original Graph:" << endl;
    unordered_map<Node*, bool> visited1;
    printGraph(node1, visited1);

    cout << "\nCloned Graph:" << endl;
    unordered_map<Node*, bool> visited2;
    printGraph(clonedGraph, visited2);

    return 0;
}