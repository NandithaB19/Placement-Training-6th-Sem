#include <iostream>
using namespace std;
int main(){
    int num;
    cin>>num;
    if (num>0 && (num&(num-1))==0){
        cout<<"True"<<endl;
    }  else{
            cout<<"False";
        }
    return 0;
}