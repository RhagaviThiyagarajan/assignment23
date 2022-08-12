
import "./App.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
const datas = [
  {
    title: "FREE",
    rate: "$0/month",
    user: "Single User",
    storage: "5GB Storage",
    size: "Unlimited Public Projects",
    access: "Community Access",
    private: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    reports: "Monthly Status Reports",
  },
  {
    title: "PLUS",
    rate: "$9/month",
    user: "5 Users",
    storage: "50GB Storage",
    size: "Unlimited Public Projects",
    access: "Community Access",
    private: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    reports: "Monthly Status Reports",
  },
  {
    title: "PRO",
    rate: "$49/month",
    user: "Unlimited Users",
    storage: "150GB Storage",
    size: "Unlimited Public Projects",
    access: "Community Access",
    private: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "UnlimitedFree Subdomain",
    reports: "Monthly Status Reports",
  },
];

export function App() {
  return (
    <div>
      <div className="mapping">
        {datas.map((datas,index) => (
          <Users  datas={datas} key={index} />
        ))}
      </div>
    </div>
  );
}

export function Users({ datas }) {
  return (
   
      <CardGroup className="datas">
     
     <Card>
     <Card.Body className="title-body">
     <Card.Title className="title"></Card.Title>
     
          <Card.Text className="users-title">{datas.title}</Card.Text>
          <Card.Text className="users-price">{datas.rate}</Card.Text>
        </Card.Body>
        

        <Card.Footer className="users-contents">
          <div className="users-user">{datas.user}</div>
          <div className="users-storage">{datas.storage}</div>
          <div className="users-access">{datas.access}</div>
        
        <Form.Control  type="text"
        placeholder=   {datas.private}
        aria-label="Disabled input example"className="users-private" >
       
        </Form.Control>
     
      
          
            <Form.Control type="text"
        placeholder=  {datas.support}
        aria-label="Disabled input example"  className="users-support">
          
        </Form.Control>


        <Form.Control  type="text"
       placeholder=    {datas.private}
        aria-label="Disabled input example" className="users-subdomain" >

       </Form.Control>
     
        
           <Form.Control 
           type="text"
           placeholder=       {datas.reports}
           aria-label="Disabled input example"  className="users-reports">
    
      </Form.Control>
      <Button className="end-button" color="primary">BUTTON</Button>
      </Card.Footer> 


      
      
</Card>
 
   



    </CardGroup>
        


  );
}
export default App;
