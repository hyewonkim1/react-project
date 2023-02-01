
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {deleteItem, subCount, addCount} from './store'

export default function Cart() {

  const state = useSelector((state)=>{return state})
  const dispatch = useDispatch()


  return(
    <div>
      <h4 className='cart_title'>{state.user}님의 장바구니</h4>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>순번</th>
          <th>상품명</th>
          <th>가격</th>
          <th>개수</th>
          <th>합계</th>
          <th>증감</th>
        </tr>
      </thead>
      <tbody>
        {
          state.cart.map((item,i)=>{
            return (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{state.cart[i].title}</td>
              <td>{state.cart[i].price}원</td>
              <td>{state.cart[i].count}개</td>
              <td>{state.cart[i].count*state.cart[i].price}원</td>
              <td>
                <button style={{width:30}} onClick={()=>{
                  dispatch(addCount(state.cart[i].id))
                }}>+</button>
                <button style={{width:30}} onClick={()=>{
                  dispatch(subCount(state.cart[i].id))
                }}>-</button>
                <button onClick={()=>{
                  dispatch(deleteItem(state.cart[i].id))
                }}>삭제</button>
              </td>
            </tr>
            )
          })
        }
      </tbody>
    </Table>
    <hr />
    <button className='btn'>주문하기</button>

    </div>
  )
}