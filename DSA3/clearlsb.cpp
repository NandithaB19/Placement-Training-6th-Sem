#include <iostream>
using namespace std;

int main(){
    int num,i,mask;
    cin>>num>>i;
    mask = -1<<(i+1);
    cout<<"After setting to 0: "<<(num&mask);
    return 0;
}