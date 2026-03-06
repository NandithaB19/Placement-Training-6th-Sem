#include <iostream>
using namespace std;
int main(){
    int num, i, mask;
    cin>>num>>i;
    mask = 1<<i;
    cout<<"After flipping i th bit : "<<(num^mask);
    return 0;
}
