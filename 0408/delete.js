function solution(arr, delete_list) {
    var answer = [];
    for (let i = 0; i < arr.length; i++)
    {
        let flag = true; // arr[i] 번째 원소가 생존했는지?
        for (let j = 0; j < delete_list.length; j++)
        {
            if (arr[i] === delete_list[j])
            {
                flag = false;
            }
        }
        if (flag)
        {
            answer.push(arr[i])
        }
    }
    return answer;
}