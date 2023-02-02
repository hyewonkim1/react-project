import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "./store";
import {Link} from 'react-router-dom';

export default function DetailsNew(props) {
  const {newData}=props
  const{id} = useParams()
  const [count,setCount]=useState(0)
  const dispatch=useDispatch()

  return (
    
    <div className="d_new_box">

      <div className="wrap">
        <div className="d_new_img">
          <img src={newData[id].image} alt="img"/>
          <div className='d_top_box'>
            <p>{newData[id].color}</p>
          </div>
        </div>
        <div className="d_new_txt">
          <h2 style={{fontWeight:'bold'}}>{newData[id].title}</h2>
          <div className="d_price_box">
          <p>{newData[id].saleprice}원</p>
          <p>{newData[id].price}원</p>
        </div>
    <p>사이즈 : {
      <select>
        <option style={{textAlign:'center'}}>--- 필수선택 ---</option>
        <option>{newData[id].size.size01}</option>
        <option>{newData[id].size.size02}</option>
        <option>{newData[id].size.size03}</option>
        <option>{newData[id].size.size04}</option>
      </select>
      }</p>
      <span>수량 : {count}개</span>
      <button className="d_btn" onClick={()=>setCount(count+1)}>+</button>
      <button className="d_btn" onClick={()=>setCount(count-1)}>-</button>
      <p style={{fontSize:24, fontWeight:'bold'}}>총 금액 : {newData[id].saleprice*count}원({count}개)</p>
      <button className="btn" onClick={()=>{
      dispatch(addItem({id:newData[id].id, title:newData[id].title, price:newData[id].saleprice, count:1})) 
    }}>장바구니</button>
    </div>
    </div>

    <h5 className="d_bar_title">회원 혜택 안내</h5>
    <div className="d_bar_box">
      <div className="d_bar01">
      <img src={process.env.PUBLIC_URL+'/images/bar01_01_.jpg'} alt="신규 회원 적립금" />
      </div>
      <div className="d_bar02"> 
      <img src={process.env.PUBLIC_URL+'/images/bar01_02_.jpg'} alt="등급별 할인" />
      </div>
      <div className="d_bar03">
      <img src={process.env.PUBLIC_URL+'/images/bar01_03_.jpg'} alt="리뷰 적립금" />
      </div>
      <div className="d_bar04">
      <img src={process.env.PUBLIC_URL+'/images/bar01_04_.jpg'} alt="무료배송" />
      </div>
    </div>
    <div className="d_bar_img_box">
      <img src={process.env.PUBLIC_URL+'/images/bar_img02.jpg'} alt="bar" />
    </div>
    <div className="detail_box">
      <img src={newData[id].detailimg.detailimg01} alt="detail img" />
      <img src={newData[id].detailimg.detailimg02} alt="detail img" />
      <img src={newData[id].detailimg.detailimg03} alt="detail img" />
      <img src={newData[id].detailimg.detailimg04} alt="detail img" />
      <img src={newData[id].detailimg.detailimg05} alt="detail img" />
      <img src={process.env.PUBLIC_URL+'/images/cs.jpg'} alt="cs img" />
    </div>

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
    </div>
  )
    }
