//Implementation of String in CPP
#include <iostream>
using namespace std;
int main(){
    string check;
    getline(cin,check);
    int n = check.size();
    cout<<n<<endl;
    cout<<check;
    return 0;
}