import React from 'react';
import { Grid } from '@material-ui/core';
import './reportelevator.css'
import CheckIcon from '@material-ui/icons/Check';

import tandatangan from '../assets/images/xyz/signtandatangan.svg'
import escalator from '../assets/images/xyz/eskalator.jpg'

import axios from 'axios';

export default  class Displayreport extends React.Component {

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




      }


      
      
  

    render() {

       
        return (
            
            <React.Fragment>
                
                            <Grid container justify="center" style={{backgroundColor:"#eaeaea",height:"1500px",paddingTop:"20px" }}>

                                 <Grid container direction="column"  style={{ height:"1100px",width:"1550px",backgroundColor:"#ffffff"}}>
                                        <Grid container direction="row">

                                            <Grid container direction="column" style={{width:"22%" ,backgroundColor:"",height:"",padding:"",border:"1px solid #000000"}}>

                                                            <Grid container direction="row" justify="space-between" style={{paddingTop:"5px",paddingLeft:"3px"}}  >
                                                                    <div className="logootisblack" style={{width:"40%",paddingTop:"2px",paddingBottom:"2px"}}>
                                                                    OTIS

                                                                    </div>
                                                                    <Grid container direction="row" justify="center" style={{width:"30%",backgroundColor:""}} >
                                                                        <div className="circlenumberone"  >
                                                                            1

                                                                        </div>

                                                                        <div className="inservicereport">
                                                                            in service
                                                                        </div>

                                                                    </Grid>
                                                                
                                                                </Grid>
                                                                <Grid container style={{padding:"3px"}}>
                                                                    <div className="ptcitasotiselevator" >
                                                                    PT. CITAS OTIS ELEVATOR
                                                                    </div>
                                                                    
                                                                </Grid>

                                                                <div className="cibistowerjalansimatupang" style={{paddingLeft:"3px"}}>
                                                                    CIBIS TOWER 9 , Lt. 3
                                                                </div>

                                                                <div className="cibistowerjalansimatupang" style={{paddingLeft:"3px"}}>
                                                                    Jalan TB Simatupang no. 2 Cilandak Timur, 
                                                                </div>

                                                                <div className="cibistowerjalansimatupang"style={{paddingLeft:"3px"}}>
                                                                    Pasar Minggu , Jakarta Selatan 12560
                                                                </div>

                                                                <Grid container style={{paddingLeft:"3px"}}>
                                                                    <div className="cibistowerjalansimatupang">
                                                                    Phone 

                                                                    </div>
                                                                    <div className="cibistowerjalansimatupang">
                                                                    :(62-21) 8086 6666, (62-21) 2278 0701

                                                                    </div>
                                                                        
                                                                </Grid>

                                                                <Grid container direction="row" style={{paddingLeft:"3px"}}>
                                                                    <div className="cibistowerjalansimatupang">
                                                                    Fax

                                                                    </div>
                                                                    <div className="cibistowerjalansimatupang">
                                                                    : (62-21) 2278 0773

                                                                    </div>
                                                                        
                                                                </Grid>

                                                                <Grid container direction="row" style={{borderTop:"0.5px solid #000000"}} > 
                                                                    <Grid container  alignItems="center" className="ptcitasotiselevator" style={{backgroundColor:"",width:"45%",borderRight:"0.5px solid #000000",paddingLeft:"3px",paddingTop:"3px",paddingBottom:"3px"}}>
                                                                        BUILDING NAME :
                                                                    </Grid>

                                                                    <Grid container alignItems="center"  style={{backgroundColor:"",width:"55%",border:"",paddingLeft:"5px"}} >
                                                                       <div className="ptcitasotiselevator">
                                                                       {this.state.data.buildingname}
                                                                           </div> 
                                                                    </Grid>

                                                                </Grid>
                                                                <Grid container direction="row" style={{borderTop:"0.5px solid #000000"}}> 
                                                                    <Grid container  alignItems="center" className="ptcitasotiselevator" style={{backgroundColor:"",width:"45%",borderRight:"0.5px solid #000000",paddingLeft:"3px"}}>
                                                                        CONTRACT NO :
                                                                    </Grid>

                                                                    <Grid container direction ="column" style={{backgroundColor:"",width:"55%"}}>
                                                                        <div className="cibistowerjalansimatupang" style={{padding:"5px",borderBottom:"0.5px solid #000000"}}>
                                                                            a. { this.state.data.contraknomor.a} 
                                                                           </div>
                                                                            <div className="cibistowerjalansimatupang" style={{padding:"5px"}}>
                                                                            b.{ this.state.data.contraknomor.b} 
                                                                            </div >
                                                                            

                                                                    </Grid>

                                                                   

                                                                </Grid>
                                                                <Grid container direction="row" style={{borderTop:"0.5px solid #000000"}}> 
                                                                    <Grid container  alignItems="center" className="ptcitasotiselevator" style={{backgroundColor:"",width:"45%",borderRight:"0.5px solid #000000",paddingLeft:"3px",height:"47px"}}>
                                                                        CONTRACT TYPE :
                                                                    </Grid>

                                                                    <Grid container alignItems="center" style={{backgroundColor:"",width:"55%",border:"",paddingLeft:"5px"}} >
                                                                       <div className="ptcitasotiselevator" >
                                                                      {this.state.data.contraktype}
                                                                           </div>
                                                                    </Grid>

                                                                </Grid>

                                               

                                                

                                            </Grid>

                                            <Grid container direction="column" style={{width:"58%" ,backgroundColor:"",height:"",borderTop:"1px solid #000000",borderBottom:"1px solid #000000"}}>

                                                
                                                    <div className="servicereportjudul" style={{backgroundColor:"",borderBottom:" 0.5px solid #000000"}}>
                                                        SERVICE REPORT
                                                    </div>

                                                    <Grid container direction="row"  style={{padding:"3px",borderBottom:"1px solid #000000"}}>

                                                        <Grid container alignItems="center" justify="flex-end" className="equipmenttypejudul" style={{backgroundColor:"",width:"42%"}}>
                                                                    EQUIPMENT TYPE :
                                                        </Grid>
                                                        <Grid container direction="row" style={{width:"58%",paddingLeft:"25px"}}>

                                                                <Grid container direction="row" alignItems="center" style={{width:"150px",backgroundColor:"",marginRight:"20px"}}>
                                                                    {

                                                                        this.state.data.equipmenttype === 1 ?
                                                                        <div className="kotakmanagementfinancialkontent">

                                                                        <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"18px"}}/>

                                                                        </div>
                                                                        :

                                                                        <div className="kotakmanagementfinancialkontent">

                                                                        

                                                                        </div>

                                                                    }
                                                                      
                                                                        <div  className="equipmenttypejudul" style={{marginLeft:"5px"}}>
                                                                            ESCALATOR
                                                                        </div>

                                                                </Grid>

                                                                <Grid container direction="row" alignItems="center" style={{width:"160px",backgroundColor:"",marginRight:""}}>
                                                                     {

                                                                        this.state.data.equipmenttype === 2 ?
                                                                        <div className="kotakmanagementfinancialkontent">

                                                                        <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"18px"}}/>

                                                                        </div>
                                                                        :

                                                                        <div className="kotakmanagementfinancialkontent">

                                                                        

                                                                        </div>

                                                                    }
                                                                            <div className="equipmenttypejudul" style={{marginLeft:"5px"}}>
                                                                                TRAVOLATOR
                                                                            </div>

                                                                </Grid>

                                                        </Grid>

                                                    </Grid>

                                                    <Grid container direction="row"  style={{padding:"3px",borderBottom:"1px solid #000000"}}>

                                                        <Grid container alignItems="center" justify="flex-end" className="primaryjobtype" style={{backgroundColor:"",width:"42%"}}>
                                                                    Primary Job type :
                                                        </Grid>
                                                        <Grid container direction="row" style={{width:"58%",paddingLeft:"25px"}}>

                                                                <Grid container direction="row" alignItems="center" style={{width:"180px",backgroundColor:"",marginRight:"20px"}}>
                                                                    {

                                                                        this.state.data.primaryjobtype === 1 ?
                                                                        <div className="kotakmanagementfinancialkontent">

                                                                        <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"18px"}}/>

                                                                        </div>
                                                                        :
                                                                        <div className="kotakmanagementfinancialkontent">

                                                                       

                                                                        </div>
                                                                    }
                                                                      
                                                                        <div  className="primaryjobtype" style={{marginLeft:"10px"}}>
                                                                            Routine Maintenance
                                                                        </div>

                                                                </Grid>

                                                                <Grid container direction="row" alignItems="center" style={{width:"160px",backgroundColor:"",marginRight:""}}>
                                                                    {

                                                                        this.state.data.primaryjobtype === 2 ?
                                                                        <div className="kotakmanagementfinancialkontent">

                                                                        <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"18px"}}/>

                                                                        </div>
                                                                        :
                                                                        <div className="kotakmanagementfinancialkontent">

                                                                       

                                                                        </div>
                                                                    }
                                                                            <div className="primaryjobtype" style={{marginLeft:"10px"}}>
                                                                                Stand by
                                                                            </div>

                                                                </Grid>
                                                   
                                                               
                                                            

                                                        </Grid>
                                                        



                                                        

                                                    </Grid>
                                                    <Grid container direction="row" style={{minHeight:"158px",backgroundColor:""}}>

                                                        <Grid container direction="column" style={{width:"32.75%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                            <Grid container alignItems="center" className="primaryjobtypedate" style={{borderBottom:"1px solid #000000"}} >
                                                                DATE : {this.state.data.datenow}
                                                            </Grid>

                                                            <Grid container alignItems="center" className="primaryjobtypedate" style={{borderBottom:"1px solid #000000"}} >
                                                                START :  {this.state.data.datestart}
                                                            </Grid>
                                                            <Grid container alignItems="center" className="primaryjobtypedate" >
                                                                FINISH :  {this.state.data.dateend}
                                                            </Grid>

                                                        </Grid>

                                                        <Grid container direction="column" style={{width:"67.25%",backgroundColor:"",borderRight:"",padding:"5px"}}>

                                                            <div className="primaryjobtypedate">
                                                                Additional Measurement (as necessary) :
                                                            </div>
                                                            <div className="primaryjobtypedate" style={{backgroundColor:"",height:"67%"}}>
                                                                {this.state.data.additionaleasurement}
                                                            </div>

                                                        </Grid>
                                                        

                                                    </Grid>

                                                    

                                               
                                                
                                            </Grid>

                                            <Grid container direction="column" style={{width:"20%" ,backgroundColor:"",height:"",border:"1px solid #000000"}}>

                                                <Grid container direction="row" style={{height:"20%",borderBottom:"1px solid #000000"}} >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    SR No
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <div className="numbersrnoreport">
                                                                   {this.state.data.SRnumber}
                                                                </div>
                                                    </Grid>

                                                    

                                                </Grid>
                                                 <Grid container direction="row" style={{height:"10%"}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Technician
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <div className="primaryjobtypedatesr"> 
                                                                    Muhammad Chosin
                                                                </div>
                                                    </Grid>

                                                    

                                                </Grid>

                                                 <Grid container direction="row" style={{height:"20%",borderBottom:""}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Signature
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <img  src={tandatangan} alt="formatgambar" style={{backgroundColor:"",width:"175px",height:"51px",marginTop:""}} /> 
                                                    </Grid>

                                                    

                                                </Grid>
                                                 <Grid container direction="row" style={{height:"10%",borderBottom:"1px solid #000000"}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Date
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <div className="primaryjobtypedatesr"> 
                                                                    11/07/19
                                                                </div>
                                                    </Grid>

                                                    

                                                </Grid>

                                                                                                 <Grid container direction="row" style={{height:"10%"}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Technician
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <div className="primaryjobtypedatesr"> 
                                                                    Muhammad Chosin
                                                                </div>
                                                    </Grid>

                                                    

                                                </Grid>

                                                 <Grid container direction="row" style={{height:"20%",borderBottom:""}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Signature
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <img  src={tandatangan} alt="formatgambar" style={{backgroundColor:"",width:"175px",height:"51px",marginTop:""}} /> 
                                                    </Grid>

                                                    

                                                </Grid>
                                                 <Grid container direction="row" style={{height:"10%",borderBottom:""}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Date
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <div className="primaryjobtypedatesr"> 
                                                                    11/07/19
                                                                </div>
                                                    </Grid>

                                                    

                                                </Grid>
                                                 
                                                 
                                                
                                                
                                            </Grid>


                                        </Grid>
                                        <Grid container direction="row">
                                              <Grid container direction="column" style={{width:"80%",backgroundColor:"",height:"",borderBottom:""}}>
                                                  
                                        
                                                        <Grid container direction="row" style={{backgroundColor:"",height:"48px",borderBottom:"1px solid #000000"}}>
                                                  <Grid container justify="center" alignItems="center" style={{width:"8.25%",backgroundColor:"",height:"48px",borderRight:"1px solid #000000",borderLeft:"1px solid #000000"}}>
                                                      <div className="ptcitasotiselevator">
                                                          LOCATION
                                                      </div>

                                                  </Grid>
                                                   <Grid container justify="center" alignItems="center"  style={{width:"25%",backgroundColor:"",height:"48px",borderRight:"1px solid #000000"}}>
                                                        <div className="ptcitasotiselevator">
                                                                MAINTENANCE POINT
                                                            </div>
                                                  </Grid>

                                                  <Grid container justify="center" alignItems="center"  style={{width:"18%",backgroundColor:"",height:"48px",borderRight:"1px solid #000000"}}>
                                                             <div className="ptcitasotiselevator">
                                                                STANDART
                                                            </div>
                                                    </Grid>

                                                    <Grid container direction="column" style={{width:"43.2%",backgroundColor:"",height:"48px",borderRight:"1px solid #000000"}}>

                                                        <Grid container justify="center" alignItems="center"  style={{height:"16px",backgroundColor:"",borderBottom:"1px solid #000000"}}>
                                                                <div className="ptcitasotiselevator" style={{fontSize:"10px"}}>
                                                                MAINTENANCE SERVICES VISITING SCHEDULE
                                                                    </div>
                                                        </Grid>

                                                        <Grid container direction="row" style={{height:"16px",backgroundColor:"",borderBottom:"1px solid #000000"}}>
                                                                <div className="ptcitasotiselevator" style={{width:"6.7%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                JAN
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"8.5%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                FEB
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"8.5%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                MAR
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"8.5%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                APR
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"8.5%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                MEY
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"8.5%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                               JUN
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"8.5%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                JUL
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"8.5%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                AUG
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"8.5%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                SEP
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"8.5%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                OKT
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"8.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                NOV
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"8.4%",backgroundColor:""}}>
                                                                DES
                                                                    </div>

                                                        </Grid>

                                                        <Grid container direction="row" style={{height:"16px",backgroundColor:"",borderBottom:"1px solid #000000"}}>
                                                                <div className="ptcitasotiselevator" style={{width:"3.35%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                a
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"3.35%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                b
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                a
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                b
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                a
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                              b
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                a
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                b
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                a
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                b
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                               a
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                              b
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                a
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                b
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                a
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                              b
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                a
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                b
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                a
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                              b
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.25%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                a
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                b
                                                                    </div>
                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                a
                                                                    </div>
                                                                    
                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:""}}>
                                                                b
                                                                    </div>

                                                        </Grid>





                                                    </Grid>
                                                     <Grid container  justify="center" alignItems="center" style={{width:"5.55%",backgroundColor:"",height:"48px"}}>

                                                     <div className="ptcitasotiselevator">
                                                                FREQ
                                                            </div>

                                                    </Grid>
                                                    </Grid>

                                                   
                                                    <Grid container direction="row" style={{backgroundColor:"",height:"",borderBottom:""}}>

                                                                    <Grid container justify="center" alignItems="center" style={{width:"8.25%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",borderLeft:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                                    <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                        Upper/Lower
                                                                    </div>

                                                                    </Grid>

                                                                    <Grid container direction="row" style={{width:"91.75%",backgroundColor:"",height:"16px",borderRight:"",borderLeft:""}} >

                                                                                <Grid container  alignItems="center"  style={{width:"27.2%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",paddingLeft:"3px",borderBottom:"1px solid #000000"}}>
                                                                                        <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                Machine PIT Clealiness
                                                                                            </div>
                                                                                </Grid>

                                                                                <Grid container justify="center" alignItems="center"  style={{width:"19.7%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                                                            <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                VISUAL
                                                                                            </div>
                                                                                    </Grid>


                                                                                    <Grid container direction="row" style={{width:"47%",height:"16px",backgroundColor:"",borderBottom:"1px solid #000000",borderRight:""}}>
                                                                                                <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.6%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>

                                                                                        </Grid>
                                                                                         <Grid container  justify="center" alignItems="center" style={{width:"6.1%",backgroundColor:"",height:"16px",borderBottom:"1px solid #000000"}}>

                                                                                            <div className="ptcitasotiselevator">
                                                                                                        2
                                                                                                    </div>

                                                                                            </Grid>




                                                                    </Grid>

                                                                    <Grid container justify="center" alignItems="center" style={{width:"8.25%",backgroundColor:"",height:"96px",borderRight:"1px solid #000000",borderLeft:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                                    <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                        Upper
                                                                    </div>

                                                                    </Grid>

                                                                    <Grid container direction="row" style={{width:"91.75%",backgroundColor:"",height:"16px",borderRight:"",borderLeft:""}} >

                                                                                <Grid container  alignItems="center"  style={{width:"27.2%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",paddingLeft:"3px",borderBottom:"1px solid #000000"}}>
                                                                                        <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                Machine and Gear Condition
                                                                                            </div>
                                                                                </Grid>

                                                                                <Grid container justify="center" alignItems="center"  style={{width:"19.7%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                                                            <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                FUNCTION & VISUAL
                                                                                            </div>
                                                                                    </Grid>


                                                                                    <Grid container direction="row" style={{width:"47%",height:"16px",backgroundColor:"",borderBottom:"1px solid #000000",borderRight:""}}>
                                                                                                   
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                 
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                   
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                               
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.6%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                           
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                         
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>

                                                                                        </Grid>
                                                                                         <Grid container  justify="center" alignItems="center" style={{width:"6.1%",backgroundColor:"",height:"16px",borderBottom:"1px solid #000000"}}>

                                                                                            <div className="ptcitasotiselevator">
                                                                                                        4
                                                                                                    </div>

                                                                                            </Grid>

                                                                                            <Grid container  alignItems="center"  style={{width:"27.2%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",paddingLeft:"3px",borderBottom:"1px solid #000000"}}>
                                                                                        <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                Machine Brake and Auxiliary Brake
                                                                                            </div>
                                                                                </Grid>

                                                                                <Grid container justify="center" alignItems="center"  style={{width:"19.7%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                                                            <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                FUNCTION & VISUAL
                                                                                            </div>
                                                                                    </Grid>


                                                                                    <Grid container direction="row" style={{width:"47%",height:"16px",backgroundColor:"",borderBottom:"1px solid #000000",borderRight:""}}>
                                                                                                   
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                 
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                 
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                 
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                        
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                 
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.6%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                             
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                             
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                         
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                   
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>

                                                                                        </Grid>
                                                                                         <Grid container  justify="center" alignItems="center" style={{width:"6.1%",backgroundColor:"",height:"16px",borderBottom:"1px solid #000000"}}>

                                                                                            <div className="ptcitasotiselevator">
                                                                                                        4
                                                                                                    </div>

                                                                                            </Grid>

                                                                                            <Grid container  alignItems="center"  style={{width:"27.2%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",paddingLeft:"3px",borderBottom:"1px solid #000000"}}>
                                                                                        <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                Drive chain and Sprocket
                                                                                            </div>
                                                                                </Grid>

                                                                                <Grid container justify="center" alignItems="center"  style={{width:"19.7%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                                                            <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                FUNCTION & VISUAL
                                                                                            </div>
                                                                                    </Grid>


                                                                                    <Grid container direction="row" style={{width:"47%",height:"16px",backgroundColor:"",borderBottom:"1px solid #000000",borderRight:""}}>
                                                                                          
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                   
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                            
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                            
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                             
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                               
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"#b0b0b0",height:"15px",borderRight:"1px solid #000000"}}>
                                                                                                    <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"15px"}}/>
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"#b0b0b0",height:"15px",borderRight:"1px solid #000000"}}>
                                                                                                    <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"15px"}}/>
                                                                                                    </div>
                                                                                                 
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.6%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                              
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                               
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                     
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>

                                                                                        </Grid>
                                                                                         <Grid container  justify="center" alignItems="center" style={{width:"6.1%",backgroundColor:"",height:"16px",borderBottom:"1px solid #000000"}}>

                                                                                            <div className="ptcitasotiselevator">
                                                                                                        4
                                                                                                    </div>

                                                                                            </Grid>

                                                                                            <Grid container  alignItems="center"  style={{width:"27.2%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",paddingLeft:"3px",borderBottom:"1px solid #000000"}}>
                                                                                        <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                Anti Reversal Device
                                                                                            </div>
                                                                                </Grid>

                                                                                <Grid container justify="center" alignItems="center"  style={{width:"19.7%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                                                            <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                FUNCTION & VISUAL
                                                                                            </div>
                                                                                    </Grid>


                                                                                    <Grid container direction="row" style={{width:"47%",height:"16px",backgroundColor:"",borderBottom:"1px solid #000000",borderRight:""}}>
                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"#b0b0b0",height:"14px",borderRight:"1px solid #000000"}}>
                                                                                                    <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"15px"}}/>
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"#b0b0b0",height:"14px",borderRight:"1px solid #000000"}}>
                                                                                                    <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"15px"}}/>
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.6%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                     
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>

                                                                                        </Grid>
                                                                                         <Grid container  justify="center" alignItems="center" style={{width:"6.1%",backgroundColor:"",height:"16px",borderBottom:"1px solid #000000"}}>

                                                                                            <div className="ptcitasotiselevator">
                                                                                                        4
                                                                                                    </div>

                                                                                            </Grid>

                                                                                            <Grid container  alignItems="center"  style={{width:"27.2%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",paddingLeft:"3px",borderBottom:"1px solid #000000"}}>
                                                                                        <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                               Broken Drive Chain Device
                                                                                            </div>
                                                                                </Grid>

                                                                                <Grid container justify="center" alignItems="center"  style={{width:"19.7%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                                                            <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                FUNCTION & VISUAL
                                                                                            </div>
                                                                                    </Grid>


                                                                                    <Grid container direction="row" style={{width:"47%",height:"16px",backgroundColor:"",borderBottom:"1px solid #000000",borderRight:""}}>
                                                                                                   
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                              
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                     
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                              
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                               
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"#b0b0b0",height:"15px",borderRight:"1px solid #000000"}}>
                                                                                                    <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"15px"}}/>
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"#b0b0b0",height:"15px",borderRight:"1px solid #000000"}}>
                                                                                                    <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"15px"}}/>
                                                                                                    </div>
                                                                                                   
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.6%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                   
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                     
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>

                                                                                        </Grid>
                                                                                         <Grid container  justify="center" alignItems="center" style={{width:"6.1%",backgroundColor:"",height:"16px",borderBottom:"1px solid #000000"}}>

                                                                                            <div className="ptcitasotiselevator">
                                                                                                        4
                                                                                                    </div>

                                                                                            </Grid>
                                                                                            <Grid container  alignItems="center"  style={{width:"27.2%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",paddingLeft:"3px",borderBottom:"1px solid #000000"}}>
                                                                                        <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                               Over Speed Device
                                                                                            </div>
                                                                                </Grid>

                                                                                <Grid container justify="center" alignItems="center"  style={{width:"19.7%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                                                            <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                FUNCTION & VISUAL
                                                                                            </div>
                                                                                    </Grid>


                                                                                    <Grid container direction="row" style={{width:"47%",height:"16px",backgroundColor:"",borderBottom:"1px solid #000000",borderRight:""}}>
                                                                                               
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"3.4%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                 
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                     
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.4%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                 
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                 
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                    <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"15px"}}/>
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"#b0b0b0",borderRight:"1px solid #000000"}}>
                                                                                                    <CheckIcon  style={{color:"#000000" ,fontWeight: 600,fontSize:"15px"}}/>
                                                                                                    </div>
                                                                                                 
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.6%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                   
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.3%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                            
                                                                                                    </div>
                                                                                                  
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                     
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.2%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>
                                                                                                    
                                                                                                    <div className="ptcitasotiselevator" style={{width:"4.1%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                                                                
                                                                                                    </div>

                                                                                        </Grid>
                                                                                         <Grid container  justify="center" alignItems="center" style={{width:"6.1%",backgroundColor:"",height:"16px",borderBottom:"1px solid #000000"}}>

                                                                                            <div className="ptcitasotiselevator">
                                                                                                        4
                                                                                                    </div>

                                                                                            </Grid>


                                                                                





                                                                    </Grid>


                                                 
                                                        </Grid>
                                                        <Grid container direction="row" style={{backgroundColor:"",height:"",borderBottom:"1px solid #000000"}}>
                                                                <Grid container direction="column" style={{backgroundColor:"",minHeight:"150px",borderBottom:"",width:"52.7%",borderRight:"1px solid #000000",borderLeft:"1px solid #000000"}}  >
                                                                    <Grid container className="ptcitasotiselevator" >
                                                                        TECHNICIAN NOTE :
                                                                    </Grid>
                                                                    <div className="primaryjobtypedate" style={{fontWeight:"normal"}}>
                                                                   
                                                                    </div>

                                                                </Grid>
                                                                <Grid container direction="column" style={{backgroundColor:"",minHeight:"150px",borderBottom:"",width:"47.3%"}}  >
                                                                    <Grid container className="ptcitasotiselevator" >
                                                                        CUSTOMER NOTE :
                                                                    </Grid>
                                                                    <div className="primaryjobtypedate"  style={{fontWeight:"normal"}}>
                                                                   
                                                                    </div>

                                                                </Grid>
                                                        </Grid>


                                              </Grid>

                                               <Grid container direction="column" style={{width:"20%",backgroundColor:"",height:"",borderRight:"1px solid #000000",borderLeft:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                   <Grid direction="column" container alignItems="center" justify="center" style={{height:'calc(100% - 195px)',backgroundColor:"",borderBottom:"1px solid #000000"}} >
                                                    {/* <div>
                                                        {this.state.data.Datatambahan.text}
                                                    </div> */}
                                                   <img  src={escalator}alt="formatgambar" style={{backgroundColor:"",width:"175px",height:"91px",marginTop:""}} /> 
                                                   </Grid>
                                                   <Grid container direction="column" style={{height:"195px",backgroundColor:""}} >

                                                                        <Grid container direction="column"  style={{height:"80%",borderBottom:""}} >

                                                                            <Grid container justify="center" style={{height:"20%"}} >
                                                                                <div className="primaryjobtypedatesr">
                                                                                Customer Signature
                                                                                </div>
                                                                                    
                                                                            </Grid>
                                                                            <Grid container justify="center" alignItems="center" style={{height:"80%"}} >
                                                                            <img  src={require('../assets/images/xyz/'+ this.state.data.customer.signature)} alt="formatgambar" style={{backgroundColor:"",width:"175px",height:"51px",marginTop:""}} /> 

                                                                                    
                                                                            </Grid>

                                                                           
                                                                        </Grid>

                                                                        <Grid container direction="row" style={{height:"10%",borderBottom:"1px solid #000000"}}  >

                                                                                        <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"20%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                                                        Name :
                                                                                        </Grid>

                                                                                        <Grid container alignItems="center" style={{width:"80%",backgroundColor:""}}>
                                                                                                    
                                                                                                    <div className="primaryjobtypedatesr"> 
                                                                                                    {this.state.data.customer.name}
                                                                                                    </div>
                                                                                        </Grid>

                                                                    

                                                                             </Grid>

                                                                              <Grid container direction="row" style={{height:"10%",borderBottom:""}}  >

                                                                                            <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"20%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                                                            Date :
                                                                                            </Grid>

                                                                                            <Grid container alignItems="center" style={{width:"80%",backgroundColor:""}}>
                                                                                                       
                                                                                                        <div className="primaryjobtypedatesr"> 
                                                                                                            {this.state.data.customer.date}
                                                                                                        </div>
                                                                                            </Grid>

                                                    

                                                                                  </Grid>



                                                   </Grid>

                                              </Grid>
                                        </Grid>
                                       


                                
                                


                                </Grid>

                            </Grid>
                          
                                
            </React.Fragment>
        );
    }
}








