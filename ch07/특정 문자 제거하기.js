function solution(my_string, letter) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++)
    {
        if (my_string[i] != letter)
        {
            answer += my_string[i]
        }
    }
    // answer = my_string.replaceAll(letter, '') 이거 한 줄로 가능
    return answer;
}