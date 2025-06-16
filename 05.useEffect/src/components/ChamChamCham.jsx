import React, { useEffect, useState } from 'react'

/* 
    실습) 참참참 게임
    1. 사용자는 공격, 컴퓨터는 수비 역할입니다.
    2. '좌', '정면', '우' 중 하나를 클릭했을 때, 사용자와 컴퓨터의 선택을 비교합니다.
     - 같은 선택일 경우 : 사용자의 승리!
     - 다른 선택일 경우 : 컴퓨터의 승리!
    3. 승리에 대한 결과를 화면에 출력합니다.

    * '좌', '정면', '우' 값은 배열로 만들어서 활용할것!
    * 사용자, 컴퓨터, 결과값 총 3개의 state 생성할 것!
*/

const ChamChamCham = () => {

    const [user, setUser] = useState("");
    const [com, setCom] = useState("");
    const [result, setResult] = useState("");

    

    // const btnClick = (e) => {
    //     const select = ['좌', '정면', '우'] 
    //     const user_select = e.target.innerText;
    //     const com_select = select[parseInt(Math.random() * 3)]
    //     setUser(user_select)
    //     setCom(com_select)


    //     if(user_select == com_select) {
    //         setResult("승")
    //     } else {
    //         setResult("패")
    //     }
    // }    

    // useEffect(() => {
        
    //     // if(result !== "") {
    //     //   const res = document.getElementById('res');
    //     //     res.style.display = 'block'  
    //     // }
        
        
    // }, [result])

    const handleClick = (e) => {

        let choices = ['좌', '정면', '우'];
        let userChoice = e.target.innerText;
        let comChoice = choices[parseInt(Math.random()*choices.length)];

        setUser(userChoice);
        setCom(comChoice);
    }   

    useEffect(()=> {
        if(user === '' || com === '')return;
        // if(user===com) {
        //     setResult("사용자의 승리!")
        // }else{
        //     setResult("컴퓨터의 승리...")
        // }

        user === com ? setResult("사용자의 승리!") : setResult("컴퓨터의 승리...")
    }, [user, com])

  return (
    <div>
        <h1>참참참 게임</h1>
        <h2>나의 선택 : {user}</h2>
        <h2>컴퓨터의 선택 : {com}</h2>
        {/* <h2 id='res' style={{display:'none'}}>게임 결과 : {result}</h2> */}
        {result ===""? (<h1></h1>) : <h2>게임 결과 : {result}</h2>}

        {/* ""(공백)은 false로 인식하기 때문에 오른쪽의 태그를 출력하지 않는다.
            result state에 값이 초기화되면 true로 인식하면서 결과값을 출력한다. */}
        {result && <h2>게임 결과 : {result}</h2>}


        {/* <button onClick={btnClick}>좌</button>
        <button onClick={btnClick}>정면</button>
        <button onClick={btnClick}>우</button> */}
        <button onClick={handleClick}>좌</button>
        <button onClick={handleClick}>정면</button>
        <button onClick={handleClick}>우</button>

    </div>
  )
}

export default ChamChamCham

// 처음엔 스타일 요소를 건들여서 보였다 안보였다 하게 했는데
// 조건 렌더링이 더 괜찮아 보이는 방법인것 같다.