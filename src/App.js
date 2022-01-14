import React, {useEffect} from 'react';
// import {useSelector} from "react-redux"
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
   axios.get(`https://public-api.solscan.io/token/list?sortBy=volume&direction=desc&limit=10&offset=0`).then(res=> {
     console.log("Get list of tokens. MaxLimit 50 records per request");
     console.log(res);
   })
   axios.get(`https://public-api.solscan.io/token/meta?tokenAddress=A9AF5BGdCTANdKS7ywBEKYqjP8S9xkhs29KhZbrjwMWy`).then(res=> {
     console.log("Get Meta Data");
     console.log(res);
   })
   axios.get(`https://public-api.solscan.io/account/tokens?account=9K8aN7YxWu9gDVQC5StXpRqAcxq2MD5Tff2yCTv9zSve`).then(res=> {
     console.log("Get Meta Data");
     console.log(res);
   })
  }, [])

 
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
