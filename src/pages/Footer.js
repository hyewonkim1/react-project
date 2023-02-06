import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer_section'>

          <footer className="footer_box">

            <div className="footer">
              <div className="footer_logo">
                <a href="#!">SKULLPIG</a>
              </div>

           <div className="footer_text">

             <div className="footer01_top">
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
            <div className="footer02">

              <div className="community">
                <p className="footername">COMMUNITY</p>
                <p>공지사항</p>
                <p>포토리뷰</p>
                <p>문의하기</p>
              </div>
              <div className="bank">
                <p className="footername">BANK INFO</p>
                <p>기업 027-137479-01-020</p>
                <p>예금주:(주)제이스버디</p>
              </div>
              <div className="call_center">
                <p className="footername">CALL CENTER</p>
                <p>070-7733-4698</p>
                <p>평일:10:00 ~ 17:00</p>
                <p>점심:12:30 ~ 13:30</p>
                <p>(토/일/공휴일 휴무)</p>
              </div>

            </div>

              <div className="sns_box">

                <div className="sns">
                  <div className="sns01">
                    <a href="https://www.facebook.com/skullpig.official/?ref=hl" rel='noreferrer' target='_blank'><img src={process.env.PUBLIC_URL+'/images/sns01.jpg'} alt='facebook'/></a>
                  </div>
                  <div className="sns02">
                    <a href="https://www.instagram.com/skullpig_official/" rel='noreferrer' target='_blank'><img src={process.env.PUBLIC_URL+'/images/sns02.jpg'} alt='instagram'/></a>
                  </div>
                  <div className="sns03">
                    <a href="https://blog.naver.com/minjifashion" rel='noreferrer' target='_blank'><img src={process.env.PUBLIC_URL+'/images/sns03.jpg'} alt='blog'/></a>
                  </div>
                  <div className="sns04">
                    <a href="https://www.youtube.com/channel/UC8w_miDSXIGNiEP1eCJxZPQ" rel='noreferrer' target='_blank'><img src={process.env.PUBLIC_URL+'/images/sns04.jpg'} alt='youtube'/></a>
                  </div>
                  <div className="sns05">
                    <a href="https://pf.kakao.com/_xefSmxd" rel='noreferrer' target='_blank'><img src={process.env.PUBLIC_URL+'/images/sns05.jpg'} alt='kakaotalk'/></a>
                  </div>

                </div>

               </div>
            </div>
          </footer>
        </div>
    )
}