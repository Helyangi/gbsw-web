function solution(numbers) {
    let maxNum = 0
    let maxNum2 = 0
    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] > maxNum)
        {
            maxNum2 = maxNum
            maxNum = numbers[i]
        }
        else if (numbers[i] > maxNum2)
        {
            maxNum2 = numbers[i]
        }
    }
    // numbers.sort((a, b) => {b - a})
    // return numbers[0] * numbers[1]
    var answer = maxNum * maxNum2;
    return answer;
}