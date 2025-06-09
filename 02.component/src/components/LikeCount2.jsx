import React, { useState } from 'react'

const LikeCount2 = () => {
    const [num, setNum] = useState(0)

    const tumbup = () => {
        setNum (num + 1)
    }

    const tumbdown = () => {
        if (num >= 1) {
            setNum (num - 1)
        }
    }
  return (
    // <div 
    // style={{
    //     display: 'inline-block', 
    //     padding: 50, 
    //     textAlign:"center"
    // }}
    // id='container'>
    //     <img src={"src/assets/img/felex.gif"} alt={"용보기"} />
    //     <p style={{fontSize: 40}}>좋아요 {num}</p>
    //     <button 
    //     style={{
    //         fontSize: 40, 
    //         padding: 10, 
    //         borderRadius:8, 
    //         width:100
    //     }}
    //     onClick={tumbup}>💖</button>
    //     <button 
    //     style={{
    //         fontSize: 40, 
    //         padding: 10, 
    //         borderRadius:8, 
    //         width:100
    //     }}
    //     onClick={tumbdown}>💔</button>
    // </div>

    <div id='container'
        style={{
            display: 'inline-block',
            textAlign: 'center'  
        }}>
        <p>
            <img 
                style={{width : 180}}
                src='src/assets/img/felex.gif'
                alt='펠릭스'/>
        </p>
        <p>좋아요 {num}</p>
        <p>
            {/* onClick속성에 함수 실행문을 넣을 때 {() => 함수명} 형태로 정의해야 한다. */}
            <button onClick={()=>setNum(num+1)}>💖</button>
            <button onClick={()=>setNum(num-1)}>💔</button>
        </p>
    </div>
  )
}

export default LikeCount2