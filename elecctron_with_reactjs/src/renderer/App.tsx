import { useEffect, useState } from 'react';
import axios from 'axios';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import ListOfProfilesSection from './component/ListOfProfilesSection';
import ProfileSection from './component/ProfileSection';


const customHookForTheFetchData  = (URL:string)=>{
 const [data,setData] = useState(null);
  useEffect(()=>{
    axios.get(URL, {})
    .then((res) => {
        if (res) {
            if (res?.data) {
                if (res.data.results) {
                    setData(res.data.results);
                }
            }
        }
    }).catch((err) => { console.log(err); });

  }, [URL]);
  return data;
}

const Hello = () => {
  const [open,setOpen] = useState(false);
  const [userData, setUserData] = useState({ name: "", address: "", image_url: "", cell: '', email: "" });
  const fetchData = customHookForTheFetchData("https://randomuser.me/api?results=100")
  const mhandleClickUser = (user_name:any, user_mobile:any, user_address:any, user_avatar:any, user_email:any) => { 
    console.log("open")
    setOpen(true)
    setUserData({ name: user_name, cell: user_mobile, address: user_address, image_url: user_avatar, email: user_email }); 
  }
  const close = ()=>{
    console.log("close")
    setOpen(true);
  }
 useEffect(()=>{
    //console.log(fetchData)
  },[open])
  return (
    <div>
      {open ? 
         <ProfileSection user={userData} close={()=>{close();}}/>
        :""}

      { open == false ?
       <ListOfProfilesSection 
        data={fetchData} 
        open={(user_name:any, user_mobile:any, user_address:any, user_avatar:any, user_email:any)=> { mhandleClickUser(user_name, user_mobile, user_address, user_avatar, user_email);}} 
      /> : ""
      }
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/profile" element={<ProfileSection/>} />
      </Routes>
    </Router>
  );
}

/**
 <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          
        </a>
 */