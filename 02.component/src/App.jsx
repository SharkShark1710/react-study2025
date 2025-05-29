import './App.css'
import Count from './components/Count'
import MemberInfo from './components/MemberInfo'
import Menubox from './components/Menubox'

function App() {

  /*
    1. Component(컴포넌트)
      - UI를 표현하는 최소 단위
      - 컴포넌트를 만들 때 파일명은 반드시 대문자로 정의

    2. props(프로퍼티)
      - 리액트는 상위에서 하위로 데이터를 전달하는 방식(단방향)
      - 값을 전달하는 방식은 객체 ({key:value})로 전달
        ex) <Menubox menuNm={"아메리카노"} price={2500}/>
          -> {"menuNm":"아메리카노", "price" : 2500} 형태로 생성한 후 하위 컴포넌트로 전달
      - 상위 컴포넌트로부터 전달받은 값을 담고 있는 객체 
  */

  return (
    <>
      {/* <div>
        <h1>블루베리스무디</h1>
        <p>5800</p>
      </div> */}
      {/* <div>
        <h1>망고요거트스무디</h1>
        <p>5800</p>
      </div>
      <div>
        <h1>자바프라푸치노</h1>
        <p>5500</p>
      </div> */}

{/* 
      <Menubox menuNm={"블루베리스무디"} price={5800}/>
      <Menubox menuNm={"망고요거트스무디"} price={5800}/>
      <Menubox menuNm={"자바프라푸치노"} price={5500}/> */}

      {/* 실습) 야구팀 대표 투수 정보 출력해보기 */}
      {/* <div id='container'>
        <MemberInfo teamNm={"KIA 타이거즈"} name={"강병우"}/>
      <MemberInfo teamNm={"SSG 랜더스"} name={"김광현"}/>
      <MemberInfo teamNm={"두산 베어스"} name={"곽빈"}/>
      <MemberInfo teamNm={"한화 이글스"} name={"류현진"}/>
      </div> */}

      <Count/>
      

    </>
  )
}

export default App
