import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "./store";

export default function Details(props) {
  const {bests}=props
  const{id}=useParams()
  const[count,setCount]=useState(0)
  const dispatch=useDispatch()

    return (
      <div className="d_best_box">
          <h2>Detail Page</h2>
          <img src={bests[id].image} alt="" />
          <div className='d_top_box'>
            <p>{bests[id].colorbox}</p>
            <p>{bests[id].review}</p>
          </div>
          <h4>{bests[id].title}</h4>
          <div className="d_price_box">
            <p>{bests[id].saleprice}원</p>
            <p>{bests[id].price}원</p>
          </div>
          <p>색상 : {
            <select name="" id="">
              <option value="" style={{textAlign:'center'}}>--- 필수선택 ---</option>
              <option value="">{bests[id].color.color01}</option>
              <option value="">{bests[id].color.color02}</option>
              <option value="">{bests[id].color.color03}</option>
              <option value="">{bests[id].color.color04}</option>
              <option value="">{bests[id].color.color05}</option>
              <option value="">{bests[id].color.color06}</option>
              <option value="">{bests[id].color.color07}</option>
              <option value="">{bests[id].color.color08}</option>
              <option value="">{bests[id].color.color09}</option>
              <option value="">{bests[id].color.color10}</option>
              <option value="">{bests[id].color.color11}</option>
              <option value="">{bests[id].color.color12}</option>
              <option value="">{bests[id].color.color13}</option>
            </select>
            }</p>
          <p>사이즈 : {
            <select>
              <option style={{ textAlign:'center'}} >--- 필수선택 ---</option>
              <option>{bests[id].size.size01}</option>
              <option>{bests[id].size.size02}</option>
              <option>{bests[id].size.size03}</option>
              <option>{bests[id].size.size04}</option>
              <option>{bests[id].size.size05}</option>
              <option>{bests[id].size.size06}</option>
            </select>
            }</p>
          <span>수량 : {count}개</span>
          <button className="d_btn" onClick={()=>setCount(count+1)}>+</button>
          <button className="d_btn" onClick={()=>setCount(count-1)}>-</button>
          <p style={{fontSize:24, fontWeight:'bold'}}>총 금액 : {bests[id].saleprice*count}원({count}개)</p>
          <button className="btn" onClick={()=>{
            dispatch(addItem({id:bests[id].id, title:bests[id].title, price:bests[id].saleprice, count:1}))
          }}>장바구니</button>
          <hr />
          <h5 className="d_bar_title">회원 혜택 안내</h5>
          <div className="d_bar_box">
            <div className="d_bar01">
              <img src={process.env.PUBLIC_URL+'/images/bar01_01.jpg'} alt="" />
            </div>
            <div className="d_bar02">
              <img src={process.env.PUBLIC_URL+'/images/bar01_02.jpg'} alt="" />
            </div>
            <div className="d_bar03">
              <img src={process.env.PUBLIC_URL+'/images/bar01_03.jpg'} alt="" />
            </div>
            <div className="d_bar04">
              <img src={process.env.PUBLIC_URL+'/images/bar01_04_.jpg'} alt="" />
            </div>
            </div>
            <div className="d_bar_img_box">
             <img src={process.env.PUBLIC_URL+'/images/bar_img02.jpg'} alt="" />
          </div>
          <div className="detail_box">
            <img src={bests[id].detailimg.detailimg01} alt="" />
            <img src={bests[id].detailimg.detailimg02} alt="" />
            <img src={bests[id].detailimg.detailimg03} alt="" />
            <img src={bests[id].detailimg.detailimg04} alt="" />
            <img src={bests[id].detailimg.detailimg05} alt="" />
            <img src={bests[id].detailimg.detailimg06} alt="" />
            <img src={bests[id].detailimg.detailimg07} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/cs.jpg'} alt="" />
          </div>
        </div>
          

    )
    
    }






  