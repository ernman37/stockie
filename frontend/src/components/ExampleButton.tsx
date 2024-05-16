import React, { useState } from 'react';
import { APIResponse, makeRequest } from '../requests/request';


type ExampleResponse = {
  message: string;
}

function ExampleButton(){
  const [data, setData] = useState<string>("test");

  const handleRequest = async () => {
    const response = await makeRequest<ExampleResponse>("");
    if(response === null){
      return;
    }
    console.log(response.data.message);
    setData(response.data.message);
  };

  return(
    <div>
      <p>
        {data}
      </p>
      <button
        onClick={handleRequest}
      >
        Example Request
      </button>
    </div>
  );
}

export default ExampleButton;