import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setdata] = useState("");
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`
      );
      console.log(response);
      setdata(response.data);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <img style={{width:"100%",height:'600px'}} src={data.Poster} alt="" />
      <div className="m-auto" style={{fontSize:'50px',fontWeight:'bold',color:'white',backgroundColor:'#0B60B0',textAlign:'center'}}>{data.Title}</div>
      <div className="m-auto" style={{fontSize:'40px',fontWeight:'bold',textAlign:'center',color:'#0B60B0'}}>{data.Actors}</div>
      
    </div>
  );
};

export default Detail;
