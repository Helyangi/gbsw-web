const snacks = ["치즈 토스트", "딸기 에이드", "초코 쿠키"]
const getRandomNumber = function(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.getElementById("btn_event").onclick = function()
{
    const num = getRandomNumber(0, snacks.length - 1);
    document.getElementById("event_result").textContent
    = `오늘의 간식은 ${snacks[num]}입니다!`;
}
const renderSnack = function (snack)
{
    const li = document.createElement("li");
    li.textContent = snack
    document.getElementById("menu_list").appendChild(li)
};
const addSnack = function (snack)
{
    if (snack)
    {
        snacks.push(snack);
        return true;
    }
    return false;
}
for (let i = 0; i < snacks.length; i++)
{
    renderSnack(snacks[i]);
}
document.getElementById("btn_add").onclick = function()
{
    const snack = document.getElementById("input_snack").value;
    // 1.현재 input에 입력된 값을 가져온다.
    // 2. 값이 비었는지 검사한다.
    // 2-1. 비었다면 안내 후 종료
    // 2-2. 비어있지 않다면, 배열에 추가
    // 3. 목록에 랜더림
    if (addSnack(snack))
    {
        renderSnack(snack);
    }
    else
    {
        alert("간식 이름을 입력해주세요.");
    }
}