import React from 'react'
import './ProfileSection.css'
export default function ProfileSection(props:any) {
  return (
    <div className='profileSection'>
      <div className='row text-center'>
        <div className='pt-5'>
          <a href="/" style={{background:'none'}}>
          <img
            className='profile_image '
            onClick={()=>{props.close();}}
            src={props.user?.image_url} alt={props.user?.name} 
            />
          </a>
        </div>
      </div>
      <div className='row text-center'>
        <div className='pt-5'><h1 className='user_name'>{props.user?.name}</h1></div>
      </div>
      <div className='row d-flex'>
        <div className='d-flex justify-content-center'>
          <div className='p-3'><h1 className='profile_email'><span className='icon'><i className="bi bi-envelope-open"></i></span>{props.user?.email}</h1></div>
          <div className='p-3'><h1 className='profile_email'><span className='icon'><i className="bi bi-geo-alt"></i></span>{props.user?.address}</h1></div>
          <div className='p-3'><h1 className='profile_email'><span className='icon'><i className="bi bi-telephone"></i></span>{props.user?.cell}</h1></div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  )
}