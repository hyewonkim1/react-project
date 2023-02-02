import { Outlet } from "react-router-dom";


export default function About() {
  return (
    <>
      <h3 className="about_title">회사 소개</h3>
      <img className="about_img" src={process.env.PUBLIC_URL+'/images/company_.jpg'} alt="" />
      <Outlet></Outlet>
    </>
  )
}
