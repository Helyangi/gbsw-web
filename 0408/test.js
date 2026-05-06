function draw(number)
{
    for (let i = 1; i <= number; i++) // 현재 줄 번호 담당
    {
        let star = "";
        for (let j = 1; j <= i; j++)
        {
            star += "*";
        }
        console.log(star)
    }
}
draw(5)