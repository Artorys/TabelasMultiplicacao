function multiplyTable(n)
{
    let tableMultiply = []
    for(let i = 1; i <= n;i++)
    {
        tableMultiply[i] = []
        for(let j = 1; j <=n;j++)
        {
            tableMultiply[i][j] = j * i

        }
    }
    return tableMultiply
}
console.table(multiplyTable(10))
