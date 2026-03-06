#include <iostream>
#include <string>
using namespace std;

int minimumNumber(int n, string password) {
    bool hasDigit = false;
    bool hasLower = false;
    bool hasUpper = false;
    bool hasSpecial = false;

    string special = "!@#$%^&*()-+";

    for (char c : password) {
        if (isdigit(c))
            hasDigit = true;
        else if (islower(c))
            hasLower = true;
        else if (isupper(c))
            hasUpper = true;
        else if (special.find(c) != string::npos)
            hasSpecial = true;
    }

    int missingTypes = 0;
    if (!hasDigit) missingTypes++;
    if (!hasLower) missingTypes++;
    if (!hasUpper) missingTypes++;
    if (!hasSpecial) missingTypes++;

    return max(missingTypes, 6 - n);
}

int main() {
    int n;
    string password;

    cin >> n;
    cin >> password;

    cout << minimumNumber(n, password) << endl;

    return 0;
}