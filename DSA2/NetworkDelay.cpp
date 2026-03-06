#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

int networkDelayTime(vector<vector<int>>& times, int n, int k) {
    // Adjacency list
    vector<vector<pair<int,int>>> adj(n + 1);

    for (auto& edge : times) {
        int u = edge[0];
        int v = edge[1];
        int w = edge[2];
        adj[u].push_back({v, w});
    }

    // Min heap (distance, node)
    priority_queue<pair<int,int>, 
                   vector<pair<int,int>>, 
                   greater<pair<int,int>>> pq;

    vector<int> dist(n + 1, INT_MAX);

    dist[k] = 0;
    pq.push({0, k});

    while (!pq.empty()) {
        auto [time, node] = pq.top();
        pq.pop();

        for (auto& [neighbor, weight] : adj[node]) {
            if (dist[neighbor] > time + weight) {
                dist[neighbor] = time + weight;
                pq.push({dist[neighbor], neighbor});
            }
        }
    }

    int maxTime = 0;

    for (int i = 1; i <= n; i++) {
        if (dist[i] == INT_MAX)
            return -1;
        maxTime = max(maxTime, dist[i]);
    }

    return maxTime;
}

int main() {
    vector<vector<int>> times = {
        {2,1,1},
        {2,3,1},
        {3,4,1}
    };

    int n = 4;
    int k = 2;

    cout << "Network Delay Time: "
         << networkDelayTime(times, n, k)
         << endl;

    return 0;
}