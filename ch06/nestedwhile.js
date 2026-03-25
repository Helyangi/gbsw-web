// 2중 for문을 사용해 2 ~ 9단 구구단을 출력하세요.
let dan = 2;
let num = 1;
while (dan <= 9)
{
    num = 1;
    while(num <= 9)
    {
        console.log(`${dan} * ${num} = ${dan * num}`);
        num++;
    }
    dan++;
    console.log();
}
// 레이어 사용
dan = 2;
num = 1;
gugudan:while (dan <= 9)
{
    num = 1;
    while(num <= 9)
    {
        if (dan == 6)
        {
            break gugudan;
        }
        console.log(`${dan} * ${num} = ${dan * num}`);
        num++;
    }
    dan++;
    console.log();
}