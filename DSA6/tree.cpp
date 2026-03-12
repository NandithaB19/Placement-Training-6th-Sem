#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct Node
{
    int val;
    Node* left;
    Node* right;

    Node(int data)
    {
        val = data;
        left = NULL;
        right = NULL;
    }
};

Node* createNode(int data)
{
    return new Node(data);
}

void addEdge(Node *parent, Node *child, char pos)
{
    if (pos == 'L')
        parent->left = child;
    else if (pos == 'R')
        parent->right = child;
}

void preorderTraversal(Node *root, vector<int> &ans)
{
    if (root == NULL) return;

    ans.push_back(root->val);
    preorderTraversal(root->left, ans);
    preorderTraversal(root->right, ans);
}

void inorderTraversal(Node *root, vector<int> &ans)
{
    if (root == NULL) return;

    inorderTraversal(root->left, ans);
    ans.push_back(root->val);
    inorderTraversal(root->right, ans);
}

void postorderTraversal(Node *root, vector<int> &ans)
{
    if (root == NULL) return;

    postorderTraversal(root->left, ans);
    postorderTraversal(root->right, ans);
    ans.push_back(root->val);
}

vector<int> levelOrder(Node* root)
{
    vector<int> ans;
    if (root == NULL) return ans;

    queue<Node*> q;
    q.push(root);

    while (!q.empty())
    {
        Node* x = q.front();
        q.pop();

        ans.push_back(x->val);

        if (x->left) q.push(x->left);
        if (x->right) q.push(x->right);
    }

    return ans;
}

void printArray(vector<int> a)
{
    for (int i = 0; i < a.size(); i++)
        cout << a[i] << " ";

    cout << endl;
}

int main()
{
    Node *root = createNode(0);
    Node *n1 = createNode(1);
    Node *n2 = createNode(2);
    Node *n3 = createNode(3);
    Node *n4 = createNode(4);
    Node *n5 = createNode(5);
    Node *n6 = createNode(6);

    addEdge(root, n1, 'L');
    addEdge(root, n2, 'R');
    addEdge(n1, n3, 'L');
    addEdge(n2, n4, 'L');
    addEdge(n2, n5, 'R');
    addEdge(n3, n6, 'R');

    vector<int> ans1, ans2, ans3;

    cout << "Preorder Traversal is ";
    preorderTraversal(root, ans1);
    printArray(ans1);

    cout << "Inorder Traversal is ";
    inorderTraversal(root, ans2);
    printArray(ans2);

    cout << "Postorder Traversal is ";
    postorderTraversal(root, ans3);
    printArray(ans3);

    cout << "Level order Traversal is ";
    vector<int> ans = levelOrder(root);
    printArray(ans);

    return 0;
}