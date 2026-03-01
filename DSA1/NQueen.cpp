#include <iostream>
using namespace std;
#define N 12
bool isSafe(int board[N][N], int row, int col)
{
    for (int i = row - 1; i >= 0; i--)
        if (board[i][col])
            return false;

    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
        if (board[i][j])
            return false;
    for (int i = row - 1, j = col - 1; i >= 0 && j < N; i--, j++)
        if (board[i][j])
            return false;
    return true;
}
void print(int board[N][N])
{
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            if (board[i][j] == 1)
                cout << "Q ";
            else
                cout << ". ";
        }
        cout << endl;
    }
}

bool solveNqueen(int board[N][N], int row)
{
    if (row >= N)
        return true;
    for (int j = 0; j < N; j++)
    {
        if (isSafe(board, row, j))
        {
            board[row][j] = 1;
            if (solveNqueen(board, row + 1))
                return true;
            board[row][j] = 0;
        }
    }
    return false;
}
int main()
{
    int board[N][N] = {0};
    if (solveNqueen(board, 0) == false)
        cout << "No solution!";
    else
        print(board);
}