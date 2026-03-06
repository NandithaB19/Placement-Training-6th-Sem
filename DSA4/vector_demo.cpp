#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector <int> v;
    int n,data;
    cout<<"Enter the number of elements: ";
    cin>>n;
    for (int i=0;i<n;i++){
        cin>>data;
        v.push_back(data);
    }
    v.pop_back();
    cout<<"After deleting the element the size is: "<<v.size()<<endl;
    cout<<"Elements in the vector: \n";
    for(int x:v){
        cout<<x<<" ";
    }
    return 0;;
}