import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import About from './routes/page/About'
import Home from './routes/page/Home'
import ProductList from './routes/page/ProductList'
import ProductDetail from './routes/page/ProductDetail'
import ProductDetail2 from './routes/page/ProductDetail2'
import MyPage from './routes/page/Mypage'
import { useState } from 'react'
import Login from './routes/page/Login'

function App() {

  const [authenticate, setAuthenticate] = useState(false);

  const PrivateRoute = () => {
    return authenticate === true ? <MyPage/> : <Navigate to={"/Login"}/>; 
    //false부분에서 Login컴포넌트가 아니라 Navigate를 사용해 Login페이지로 넘어가는 이유?
    // 보여지는 주소는 mypage인데 login ui가 보이는것은 이상해서
  }

  return (

    //Routes역할
    // - 사용자가 요청한 URL 중 일치하는 컴포넌트를 렌더링해주는 컴포넌트
    // Route역할
    // - path에 정의된 요청이 들어왔을 때, element에 정의된 컴포넌트를 렌더링 하는 역할

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/prdList' element={<ProductList/>}/>

      {/* 
      [페이지 이동 시 데이터를 전달하는 방식 2가지]
      useParame()
      - 요청 URL경로에서 동적 세그먼트(/path/:key)를 가져오는 방식
        ex) /product/1 -> {pro_no:1} 반환
      - 활용 : 블로그 포스트ID, 회원 ID, 상품 ID 등
      
      useSearchParams()
      - 요청 URL 경로에서 쿼리스트링(?key=value)를 가져오는 방식
        ex) /product?pro_no=1 -> query.get("pro_no") 로 값 추출
      - 활용 : 검색어, 정렬, 필터 등
    */}
      <Route path='/prdDetail/:pro_no' element={<ProductDetail/>}/>
      <Route path='/prdDetail2' element={<ProductDetail2/>}/>
      
      {/* <Route path='/mypage' element={<MyPage/>}/> */}
      <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path='/mypage' element={<PrivateRoute/>}/>
    </Routes>
  )
}

export default App
