import './App.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import data from './pages/bestData';
import {Container, Nav, Navbar, Row, Col, Carousel} from 'react-bootstrap';
import { useState } from 'react';
import About from './pages/About';
import DetailsNew from './pages/DetailsNew';
import './pages/page.css';
import newData from './pages/newData';
import Details from './pages/Details';
import Cart from './pages/Cart';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItem } from './pages/store';




function App() {

  const navigate = useNavigate()
  const [bests] = useState(data)
  const [newDatas] = useState(newData)
  const dispatch = useDispatch()


  const Button = styled.button `
    display: inline-block;
    width: 50%;
    height: 50px;
    background-color: white;
    border: 1px solid #ccc;
    box-sizing: border-box;


    &:hover {
      background-color: #131140;
      color: white;
      font-weight: bold;
    }
  `


  return (
    <div className="App">
      <Navbar className='lnb' style={{height:100,backgroundColor:'rgb(48, 51, 51)'}}>
        <Container>
          <Navbar.Brand style={{cursor:'pointer',color:'white', fontSize:28, fontWeight:'bold'}} onClick={()=>{navigate('/')}}>Skullpig</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/about')}} style={{color:'white', fontSize:24, fontWeight:'bold'}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}} style={{color:'white', fontSize:24, fontWeight:'bold'}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={
          <Container>
            <div>
              <Carousel fade style={{marginTop:10}}>
                <Carousel.Item>
                  <img className="d-block w-100" src={process.env.PUBLIC_URL+'/images/visual_main_01.jpg'} style={{width:1296}} alt="First slide"/>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={process.env.PUBLIC_URL+'/images/visual_main_02.jpg'} style={{width:1296}} alt="Second slide"/>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={process.env.PUBLIC_URL+'/images/visual_main_03.jpg'} style={{width:1296}} alt="Third slide"/>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={process.env.PUBLIC_URL+'/images/visual_main_04.jpg'} style={{width:1296}} alt="Fourth slide"/>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className='banner_box' style={{width:1296}}>
              <img src={process.env.PUBLIC_URL+'/images/banner_01.jpg'} alt="banner01" />
              <img src={process.env.PUBLIC_URL+'/images/banner_02.jpg'} alt="banner02" />
            </div>
            <h3 className='best_title'>Best 상품</h3>
            <Row> {
              bests.map((best,i)=>{
                return (
                  <Col className='best_box'>
                  <Link to={`/detail/${i}`}>
                  <img src={best.image} alt="img" style={{width:304, height:450}} />
                  <div className='top_box'>
                    <p></p>
                    <p>{best.review}</p>
                  </div>
                  <p className='title'>{best.title}</p>
                  <div className='price_box'>
                    <p>{best.saleprice}원</p>
                    <p>{best.price}원</p>
                  </div>
                  <div className='desc_box'>
                    <p>{best.desctitle}</p>
                    <p>{best.desc}</p>
                  </div>
                </Link>
                <div className='btn_box'>
                    <Button>찜하기</Button>
                    <Button onClick={()=>{
                      dispatch(addItem({id:best.id, title:best.title, price:best.saleprice,count:1}))
                    }}>장바구니</Button>
                </div>
              </Col>
                )
              })
              }
            </Row>
           
            <h3 className='new_title'>신상품</h3>
            <Row> {
              newDatas.map((newData,i) => {
                return (
                  <Col className='new_box'>
                  <Link to={`/DetailsNew/${i}`}>
                  <img src={newData.image} alt="img" style={{width:304}} />
                  <div className='top_box'>
                    <p>{newData.color}</p>
                    <p>{newData.review}</p>
                  </div>
                  <p className='title'>{newData.title}</p>
                  <div className='price_box'>
                    <p>{newData.saleprice}원</p>
                    <p>{newData.price}원</p>
                  </div>
                  <div className='desc_box'>
                    <p>{newData.desctitle}</p>
                    <p>{newData.desc}</p>
                    </div>
                </Link>
                <div className='btn_box'>
                    <Button>찜하기</Button>
                    <Button onClick={()=>{
                      dispatch(addItem({id:newData.id, title:newData.title, price:newData.saleprice, count:1}))
                    }}>장바구니</Button>
                  </div>
              </Col>
                )
              })
              }
            </Row>

  <footer class="footer_box">
  <div class="footer">
    <div class="footer_logo">
      <a href="#!">SKULLPIG</a>
    </div>

    <div class="footer_text">
      <div class="footer01_top">
        <p><a href="#!"><Link to='/about'>회사안내</Link></a></p>
        <p><a href="#!">이용약관</a></p>
        <p><a href="#!">개인정보처리방침</a></p>
        <p><a href="#!">쇼핑몰이용안내</a></p>
        <p><a href="#!">고객센터</a></p>
        <p><a href="#!">배송조회</a></p>
        </div>
        <div className='footer01_bottom'> 
      <p>교환/반품 주소지 : 서울특별시 광진구 강변역로2 광진우체국 소포실 제이스버디앞</p>
      <p>(주)제이스 버디 대표이사:조준호 사업자등록번호 847-88-00218<a href="#!" class="gray">(사업자정보확인)</a></p>
      <p>통신판매업신고번호:제2015-서울성동-0844호 KCP에스크로 구매안전 서비스<a href="#!" class="gray">(서비스가입사실확인)</a></p>
      <p>사업장 주소:04782 서울특별시 광진구 강변역로2 광진우체국 소포실 제이스버디앞</p>
      <p>개인정보취급관리자:이민지(minji@jaysbuddy.com</p>
      <p>Copyright @ 2015 스컬피그 all right reserved.</p>
    </div>

</div>
<div class="footer02">
  <div class="community">
    <p class="footername">COMMUNITY</p>
    <p>공지사항</p>
    <p>포토리뷰</p>
    <p>문의하기</p>
  </div>
  <div class="bank">
    <p class="footername">BANK INFO</p>
    <p>기업 027-137479-01-020</p>
    <p>예금주:(주)제이스버디</p>
  </div>
  <div class="call_center">
    <p class="footername">CALL CENTER</p>
    <p>070-7733-4698</p>
    <p>평일:10:00 ~ 17:00</p>
    <p>점심:12:30 ~ 13:30</p>
    <p>(토/일/공휴일 휴무)</p>
  </div>
</div>

<div class="sns_box">
  <div class="sns">
    <div class="sns01">
      <a href="https://www.facebook.com/skullpig.official/?ref=hl" rel='noreferrer' target='_blank'><img src={process.env.PUBLIC_URL+'/images/sns01.jpg'} alt='facebook'/></a>
    </div>
    <div class="sns02">
      <a href="https://www.instagram.com/skullpig_official/" rel='noreferrer' target='_blank'><img src={process.env.PUBLIC_URL+'/images/sns02.jpg'} alt='instagram'/></a>
    </div>
    <div class="sns03">
      <a href="https://blog.naver.com/minjifashion" rel='noreferrer' target='_blank'><img src={process.env.PUBLIC_URL+'/images/sns03.jpg'} alt='blog'/></a>
    </div>
    <div class="sns04">
      <a href="https://www.youtube.com/channel/UC8w_miDSXIGNiEP1eCJxZPQ" rel='noreferrer' target='_blank'><img src={process.env.PUBLIC_URL+'/images/sns04.jpg'} alt='youtube'/></a>
    </div>
    <div class="sns05">
      <a href="https://pf.kakao.com/_xefSmxd" rel='noreferrer' target='_blank'><img src={process.env.PUBLIC_URL+'/images/sns05.jpg'} alt='kakaotalk'/></a>
    </div>
  </div>
</div>

</div>

</footer>




          </Container>
          
        }></Route>
        <Route path='about' element={<About />}>
          <Route path='info' element={<div>Information</div>} />
          <Route path='loca' element={<div>Location</div>} />
        </Route>

        <Route path='detail/:id' element={<Details bests={bests} />} />
        <Route path='DetailsNew/:id' element={<DetailsNew newData={newData} />} /> 
       
        <Route path='cart' element={<Cart />}/>
        
      </Routes>

    </div>
  );
}

export default App;
