import React, { useState } from 'react'

/*
    실습) 숫자 맞추기
    1. 버튼을 클릭했을 때, 랜덤한 숫자 생성하기 (1~3)
        - parseInt(Math.random() + 3) + 1

    2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기
        - 정답 -> "정답입니다~!"
        - 오답 -> "땡!"
        * 누른 버튼의 값 가져오는 방법 -> event객체.target
*/

const BattleNumber = () => {
    const [userNum, setUserNum] = useState();
    const [sysNum, setSysNum] = useState();
    const [result, setResult] = useState();

    const hadleClick = (e) => {
        const random = parseInt(Math.random() * 3) + 1
        const user_num = e.target.innerText
        setUserNum(user_num)
        setSysNum(random)

        if (user_num == random) {
            setResult("정답입니다~!")
        } else {
            setResult("땡!")
        }
    }

    return (
        <div>
            <p>
                <button onClick={hadleClick}>1</button>
                <button onClick={hadleClick}>2</button>
                <button onClick={hadleClick}>3</button>
            </p>
            <p>내가 입력한 숫자 : {userNum}</p>
            <p>랜덤한 숫자 : {sysNum}</p>
            <p>{result}</p>
        </div>
    )
}

export default BattleNumber