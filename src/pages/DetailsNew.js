import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "./store";

export default function DetailsNew(props) {
  const {newData}=props
  const{id} = useParams()
  const [count,setCount]=useState(0)
  const dispatch=useDispatch()

  return (
    
    <div className="d_new_box">

      <div className="wrap">
        <div className="d_new_img">
          <img src={newData[id].image} alt=""  style={{width:304,height:450}}/>
          <div className='d_top_box'>
            <p>{newData[id].color}</p>
            <p>{newData[id].review}</p>
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
      <img src={process.env.PUBLIC_URL+'/images/bar01_01_.jpg'} alt="" />
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
      <img src={newData[id].detailimg.detailimg01} alt="" />
      <img src={newData[id].detailimg.detailimg02} alt="" />
      <img src={newData[id].detailimg.detailimg03} alt="" />
      <img src={newData[id].detailimg.detailimg04} alt="" />
      <img src={newData[id].detailimg.detailimg05} alt="" />
      <img src={process.env.PUBLIC_URL+'/images/cs.jpg'} alt="" />
    </div>
    </div>
  )
    }
