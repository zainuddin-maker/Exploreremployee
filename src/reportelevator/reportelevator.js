import React from 'react';
import { Grid } from '@material-ui/core';
import './reportelevator.css'
import CheckIcon from '@material-ui/icons/Check';

import tandatangan from '../assets/images/xyz/signtandatangan.svg'
import escalator from '../assets/images/xyz/eskalator.jpg'

import axios from 'axios';

export default  class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataOtis : []  ,

            data : {

                buildingname : "Plaja Tunj" ,
                contraknomor : 
                    
                {
                    "a" :"7N70484",
                    "b" :"7N70485"

                },
                contraktype : "OG",
                datenow : "24-07-2019",
                datestart : "23-07-2019",
                dateend :"23-07-2019",

                additionaleasurement : "data dummy addditoonalmeasurement",

                equipmenttype : 1 ,
                
                primaryjobtype : 1 ,

                SRnumber : "019155" ,

                Technician : [

                    {"name":"Muhammad Chosin" ,"signature":"signtandatangan.svg","date":"11/07/19" },
                    {"name":"Muhammad Chosin" ,"signature":"signtandatangan.svg","date":"11/07/19" }
                ],

                Datatambahan : {
                    "text": "ESC Naik",
                    "gambar" : "eskalator.JPG"
                },

                customer :{

                    "signature":"signtandatangan.svg",
                    "name" :"Bahari",
                    "date" :"11/07/19"
                }





            }

          
           
          };

    


      }

      componentDidMount() {


        const token = 'cnl2ckJGTzk0RXZtVnY4MURXQzc6WA'

        axios.get('https://ikonsultanassist.freshdesk.com/api/v2/tickets', {
            headers: {
                'Authorization': `Basic cnl2ckJGTzk0RXZtVnY4MURXQzc6WA` 
            }
            })
        .then(res => {
            console.log(res.data);
            this.setState({ dataOtis : res.data  })
        })
        .catch(error => {
            console.log("logout error", error);
            
        });
  


      }


      
      
  

    render() {

        const Datastorage = "../assets/images/xyz/" ;
        
       console.log(window.location.origin + '/frontend/public/logo192.png')
        return (
            
            <React.Fragment>
                            <Grid container justify="center" style={{backgroundColor:"#eaeaea",height:"",paddingTop:"20px" }}>

                                 <Grid container direction="row"  style={{ height:"",width:"1550px",backgroundColor:"#ffffff"}}>
                                        

                                {this.state.dataOtis.map((data ,i)=> 
                                
                                <Grid container direction="column" style={{width:"387.5px",height:"500px",backgroundColor:"",border:"1px solid #000000",borderRadius:"5px",padding:"10px"}} >
                                    <div>
                                    requester_id: {data.requester_id}
                                    </div>
                                    <div>
                                    source: {data.source}
                                    </div>
                                    
                                    <div>
                                    status: {data.status}
                                    </div>
                                    <div>
                                    subject: {data.subject}
                                    </div>
                                    <div>
                                    type:  {data.type}
                                    </div>
                                    <div>
                                    updated_at: {data.updated_at}
                                    </div>

                                    

                                </Grid>

                                
                                
                                
                                
                                
                                )}

                                
                                


                                </Grid>

                            </Grid>
                            {/* <Grid>
                                <div>
                                    type : ,erhenfhdfdlkjfglngflkngnfjkgjkfhskjgfjngm,fngmfngfdnkgdsfdfdfsgdsgs
                                </div>
                            </Grid> */}
                                
            </React.Fragment>
        );
    }
}








