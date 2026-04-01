const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("시작 숫자, 끝 숫자 입력하세요. ",function(str) {
    let arr = str.split(",")
    let end_num = arr[1];
    var answer = [];
    for (let start_num = parseInt(arr[0]); start_num <= end_num; start_num++)
    {
        console.log("test")
        answer.push(start_num)
    }
    console.log(answer)
    rl.close()
    return answer
})