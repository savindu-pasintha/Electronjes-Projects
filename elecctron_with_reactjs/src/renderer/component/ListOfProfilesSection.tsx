import React, { useEffect, useState } from 'react'

export default function ListOfProfilesSection(propss:any) {
    const [data, setData] = useState(propss.data);
    const filteredData = propss.data;

    const style = {
        root: {
            margin: 0, padding: 0
        },
        card: {
            width: '144px', height: "140px",
            padding: '2px 0px', margin: '0px'
        }
    }

    const Card = (props:any) => {
        return (
            <div className="col" style={style.card}>
                <a 
                    //href={`user/${id}/name=${user?.name?.title + ". " + user?.name?.first + " " + user?.name?.last}&email=${user?.email}&address=${''}&phone=${user?.cell}`}
                   onClick={()=>{propss.open(`${props.user?.name?.title + ". " + props.user?.name?.first + " " + props.user?.name?.last}`, `${props.user?.cell}`, `${props.user?.location?.country}`, `${props.user?.picture?.large}`, `${props.user?.email}`);}}
                    >
                    <img src={props.user?.picture?.large} alt={props.user?.name?.title?.first} style={style.card} loading="lazy" />
                </a>
            </div>
        );
    }

    useEffect(() => {
       console.log(propss.data)
    }, []);

    return (
        <div className="">
            <div className="row">
                {
                    filteredData ?
                        filteredData.map((item:string, ind:number) => (item ? < Card user={item} key={ind} id={ind} /> : ""))
                        : ""
                }
            </div>
        </div >
    )
}