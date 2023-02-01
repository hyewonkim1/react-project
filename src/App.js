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
      <Navbar className='lnb'>
        <Container>
          <Navbar.Brand style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>Skullpig</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={
          <Container>
            <div>
              <Carousel fade>
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
              <img src={process.env.PUBLIC_URL+'/images/banner_01.jpg'} alt="" />
              <img src={process.env.PUBLIC_URL+'/images/banner_02.jpg'} alt="" />
            </div>
            <h4 className='best_title'>Best 상품</h4>
            <Row> {
              bests.map((best,i)=>{
                return (
                  <Col className='best_box'>
                  <Link to={`/detail/${i}`}>
                  <img src={best.image} alt="" style={{width:304, height:450}} />
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
           
            <h4 className='new_title'>신상품</h4>
            <Row> {
              newDatas.map((newData,i) => {
                return (
                  <Col className='new_box'>
                  <Link to={`/DetailsNew/${i}`}>
                  <img src={newData.image} alt="" style={{width:304}} />
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
