import React from 'react';
import { Grid } from '@material-ui/core';
import './reportelevator.css'
// import CheckIcon from '@material-ui/icons/Check';


import escalator from '../assets/image/eskalator.jpg'


import tandatangan from '../assets/image/tandatangancustomer.png'

import checklist from '../assets/image/chechlistblack.png'

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

export default  class Popupsertifikatv2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataOtis : []  ,

            equipmenttype : 1 ,
                
            primaryjobtype : 1 ,

            data : {

                buildingname : "Plaja Tunj" ,
                contraknomor :"7N70484",
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
                },

                Techniciannote : "hasil cek OK" ,

                Customernote : "Techniciannote",

               






            },




            listmaintenancepoint :
            [
                "Machine PIT Cleanliness-Visual-Upper/Lower-2",
                "Machine and Gear Condition-Function & Visual-Upper-4",
                "Magnetic Brake and Auxiliary Brake-Function & Visual-Upper-4",
                "Drive Chain and Sprocket-Function & Visual-Upper-6",
                "Anti Reversal Device-Function & Visual-Upper-4",
                "Broken Drive Chain Device-Function & Visual-Upper-4",
                "Over Speed Device-Function & Visual-Upper-4",
                "Controller and Panel Switch Condition-Function & Visual-Upper-4",
                "Comb Safety Device-Function & Visual-Upper/Lower-6",
                "Auto Oiling-Function & Visual-Upper-E",
                "Start and Stop Switch (Upper & Lower Landing)-Function & Visual-Upper/Lower-E",
                "Newels Condition (Upper & Lower)-Function & Visual-Upper/Lower-6",
                "Broken Handrall Safety Device (All Position)-Function & Visual-Upper/Lower-E",
                "Truss Condition-Function & Visual-Upper/Lower-12",
                "Tension Carriage-Function & Visual-Lower-6",
                "Handrail Condition (Right & Left)-Visual-Machine Section-6",
                "Handrail Drive Tension (Right & Left)-Function & Visual-Machine Section-6",
                "Handrail Drive Operation (Right & Left)-Function & Visual-Machine Section-6",
                "Skit Panel Guard Operation (Right & Left)-Function & Visual-Machine Section-3",
                "Balustrade (Right & Left)-Visual-Machine Section-E",
                "Step and Step Roller Condition-Visual-Machine Section-6",
                "Step Chain Condition-Function & Visual-Machine Section-6",
                "Step Overload Device-Function & Visual-Machine Section-6",
                "Side Glass-Visual-Machine Section-E",
                "Drip Oil (Oil No. 39)-A Drop per 2.5 sec-K-E",
                "Step Chain (Oil No. 39)-Lubricate All Chain Step-J-4",
                "Main Chain on Machine Pulley (Oil No. 39)-Lubricate All Shaft Connection-L-4",
                "Brake Pin Hand (Oil No. 39)-Lubricate All Shaft Connection-H-4",
                "Emergency Brake Shoe Guide (Oil No. 39)-Lubricate All Shaft Connection-G-6",
                "Main Bearing Shaft (Grease No. 12)-Function & Visual-F-E",
                "Tension Carriage Guide (Grease No. 12)-Surface-E-E",
                "Step Axel Bushing (Grease No. 12)-Grease Shaft as Necessary-D-E",
                "Machine Gear Oil (as per Oil Condition)-2 yrs / 20000 hrs-M-24"
            ],

            namemonth :
            [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
            ],
            dataarsir:
            [
             [false,true,false,true,false,true,false,true,false,true,false,true],
             [true,false,false,false,true,false,false,false,true,false,false,false],
             [true,false,false,false,true,false,false,false,true,false,false,false],
             [true,false,false,false,false,false,true,false,false,false,false,false],
             [false,true,false,false,false,true,false,false,false,true,false,false],
             [false,true,false,false,false,true,false,false,false,true,false,false],
             [false,false,true,false,false,false,true,false,false,false,true,false],
             [false,false,true,false,false,false,true,false,false,false,true,false],
             [true,false,false,false,false,false,true,false,false,false,false,false],
             [true,true,true,true,true,true,true,true,true,true,true,true],
             [true,true,true,true,true,true,true,true,true,true,true,true],
             [true,false,false,false,false,false,true,false,false,false,false,false],
             [true,true,true,true,true,true,true,true,true,true,true,true],
             [false,false,false,false,false,true,false,false,false,false,false,false],
             [false,false,false,false,true,false,false,false,false,false,true,false],
             [false,true,false,false,false,false,false,true,false,false,false,false],
             [false,true,false,false,false,false,false,true,false,false,false,false],
             [false,false,true,false,false,false,false,true,false,false,false,false],
             [false,false,true,false,false,true,false,false,true,false,false,true],
             [true,true,true,true,true,true,true,true,true,true,true,true],
             [false,false,true,false,false,false,false,true,false,false,false,false],
             [false,false,false,true,false,false,false,false,false,true,false,false],
             [false,false,false,true,false,false,false,false,false,true,false,false],
             [true,true,true,true,true,true,true,true,true,true,true,true],
             [true,true,true,true,true,true,true,true,true,true,true,true],
             [true,false,false,false,true,false,false,false,true,false,false,false],
             [true,false,false,false,true,false,false,false,true,false,false,false],
             [false,true,false,false,false,true,false,false,false,true,false,false],
             [false,true,false,false,false,false,false,true,false,false,false,false],
             [true,true,true,true,true,true,true,true,true,true,true,true],
             [true,true,true,true,true,true,true,true,true,true,true,true],
             [true,true,true,true,true,true,true,true,true,true,true,true],
             [false,false,false,false,false,false,false,false,false,false,false,false,],
            ]



          
           
          };

          this.downloadsertifikat = this.downloadsertifikat.bind(this)


      }

      downloadsertifikat(){

        window.scrollTo(0, 0)
                    const input = document.getElementById('divToPrint');
                    html2canvas(input)
                    .then((canvas) => {
                        const imgData = canvas.toDataURL('image/png');
                        const pdf = new jsPDF({
                        
                            orientation: "landscape",
                            unit: "px",
                            format: [1310,840]
                        });
                        var width = pdf.internal.pageSize.getWidth();
                        var height = pdf.internal.pageSize.getHeight();
                        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                        
                        pdf.save(('Report_'+this.props.data.SRnumber+'_'+this.props.data.buildingname+'_'+this.props.data.contraknomor+'.pdf'));

                        window.location.reload();

                    })

}

      componentDidMount() {

        if(this.props.pilihan === 1){
            window.scrollTo(0, 0)
            this.downloadsertifikat()
        }
      }


      
      
  

    render() {

       
        return (
            
            <React.Fragment>
                    <div className='popuploginreport' 
                    
                    onClick = {this.props.detailReportPopup}
                    >
          <div className='popup_innerloginreport'>
          <div  id="divToPrint"   style={{padding:"15px"}} >
                            <Grid container justify="center" style={{backgroundColor:"#eaeaea",height:"975px",paddingTop:"" }}>

                                 <Grid container direction="column"  style={{ height:"975px",width:"1550px",backgroundColor:"#ffffff"}}>
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
                                                                       {this.props.data.buildingname}
                                                                           </div> 
                                                                    </Grid>

                                                                </Grid>
                                                                <Grid container direction="row" style={{borderTop:"0.5px solid #000000"}}> 
                                                                    <Grid container  alignItems="center" className="ptcitasotiselevator" style={{backgroundColor:"",width:"45%",borderRight:"0.5px solid #000000",paddingLeft:"3px"}}>
                                                                        CONTRACT NO :
                                                                    </Grid>

                                                                    <Grid container direction ="column" style={{backgroundColor:"",width:"55%"}}>
                                                                        <div className="cibistowerjalansimatupang" style={{padding:"10px"}}>
                                                                             { this.props.data.contraknomor} 
                                                                           </div>
                                                                            
                                                                            

                                                                    </Grid>

                                                                   

                                                                </Grid>
                                                                <Grid container direction="row" style={{borderTop:"0.5px solid #000000"}}> 
                                                                    <Grid container  alignItems="center" className="ptcitasotiselevator" style={{backgroundColor:"",width:"45%",borderRight:"0.5px solid #000000",paddingLeft:"3px",height:"42px"}}>
                                                                        CONTRACT TYPE :
                                                                    </Grid>

                                                                    <Grid container alignItems="center" style={{backgroundColor:"",width:"55%",border:"",paddingLeft:"5px"}} >
                                                                       <div className="ptcitasotiselevator" >
                                                                      {this.props.data.contraktype}
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

                                                                        this.props.equipmenttype === 1 ?
                                                                        <div className="kotakmanagementfinancialkontent">

                                                                       <img  src={checklist}alt="formatgambar" style={{backgroundColor:"",width:"",height:"",marginTop:""}} /> 

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

                                                                        this.props.equipmenttype === 2 ?
                                                                        <div className="kotakmanagementfinancialkontent">

                                                                          <img  src={checklist}alt="formatgambar" style={{backgroundColor:"",width:"",height:"",marginTop:""}} /> 

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

                                                                        this.props.primaryjobtype === 1 ?
                                                                        <div className="kotakmanagementfinancialkontent">

                                                                          <img  src={checklist}alt="formatgambar" style={{backgroundColor:"",width:"",height:"",marginTop:""}} /> 

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

                                                                        this.props.primaryjobtype === 2 ?
                                                                        <div className="kotakmanagementfinancialkontent">

                                                              <img  src={checklist}alt="formatgambar" style={{backgroundColor:"",width:"",height:"",marginTop:""}} /> 
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
                                                    <Grid container direction="row" style={{minHeight:"162px",backgroundColor:""}}>

                                                        <Grid container direction="column" style={{width:"33.6%",backgroundColor:"",borderRight:"1px solid #000000"}}>
                                                            <Grid container alignItems="center" className="primaryjobtypedate" style={{borderBottom:"1px solid #000000"}} >
                                                                DATE : {this.props.data.datenow}
                                                            </Grid>

                                                            <Grid container alignItems="center" className="primaryjobtypedate" style={{borderBottom:"1px solid #000000"}} >
                                                                START :  {this.props.data.datestart}
                                                            </Grid>
                                                            <Grid container alignItems="center" className="primaryjobtypedate" >
                                                                FINISH :  {this.props.data.dateend}
                                                            </Grid>

                                                        </Grid>

                                                        <Grid container direction="column" style={{width:"66.4%",backgroundColor:"",borderRight:"",padding:"5px"}}>

                                                            <div className="primaryjobtypedate">
                                                                Additional Measurement (as necessary) :
                                                            </div>
                                                            <div className="primaryjobtypedate" style={{backgroundColor:"",height:"67%"}}>
                                                                {this.props.data.additionaleasurement}
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
                                                                   {this.props.data.SRnumber}
                                                                </div>
                                                    </Grid>

                                                    

                                                </Grid>
                                                 <Grid container direction="row" style={{height:"20%"}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Technician
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <div className="primaryjobtypedatesr"> 
                                                                {this.props.data.Technician[0].name}
                                                                </div>
                                                    </Grid>

                                                    

                                                </Grid>

                                                 {/* <Grid container direction="row" style={{height:"20%",borderBottom:""}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Signature
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <img  src={tandatangan} alt="formatgambar" style={{backgroundColor:"",width:"175px",height:"51px",marginTop:""}} /> 
                                                    </Grid>

                                                    

                                                </Grid> */}
                                                 <Grid container direction="row" style={{height:"20%",borderBottom:"1px solid #000000"}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Date
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <div className="primaryjobtypedatesr"> 
                                                                {this.props.data.Technician[0].date}
                                                                </div>
                                                    </Grid>

                                                    

                                                </Grid>

                                                                                                 <Grid container direction="row" style={{height:"20%"}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Supervisor
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <div className="primaryjobtypedatesr"> 
                                                                {this.props.data.Technician[1].name}
                                                                </div>
                                                    </Grid>

                                                    

                                                </Grid>

                                                 {/* <Grid container direction="row" style={{height:"20%",borderBottom:""}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Signature
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <img  src={tandatangan} alt="formatgambar" style={{backgroundColor:"",width:"175px",height:"51px",marginTop:""}} /> 
                                                    </Grid>

                                                    

                                                </Grid> */}
                                                 <Grid container direction="row" style={{height:"20%",borderBottom:""}}  >

                                                    <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"35%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                    Date
                                                    </Grid>

                                                    <Grid container alignItems="center" style={{width:"65%",backgroundColor:""}}>
                                                                <div className="primaryjobtypedatesr">
                                                                    :
                                                                </div>
                                                                <div className="primaryjobtypedatesr"> 
                                                                {this.props.data.Technician[1].date}
                                                                </div>
                                                    </Grid>

                                                    

                                                </Grid>
                                                 
                                                 
                                                
                                                
                                            </Grid>


                                        </Grid>
                                        <Grid container direction="row">
                                              <Grid container direction="column" style={{width:"80%",backgroundColor:"",height:"",borderBottom:""}}>
                                                  
                                        
                                            <Grid container direction="row" style={{backgroundColor:"",height:"48px",borderBottom:"1px solid #000000"}}>
                                                        <Grid container justify="center" alignItems="center" style={{width:"10%",backgroundColor:"",height:"48px",borderRight:"1px solid #000000",borderLeft:"1px solid #000000"}}>
                                                            <div className="ptcitasotiselevator">
                                                                LOCATION
                                                            </div>

                                                        </Grid>
                                                        <Grid container direction="row" style={{width:"90%",backgroundColor:"",borderRight:"",borderLeft:""}} >
                                                            <Grid container justify="center" alignItems="center"  style={{width:"28%",backgroundColor:"",height:"48px",borderRight:"1px solid #000000"}}>
                                                                    <div className="ptcitasotiselevator">
                                                                            MAINTENANCE POINT
                                                                        </div>
                                                            </Grid>

                                                        <Grid container justify="center" alignItems="center"  style={{width:"18.5%",backgroundColor:"",height:"48px",borderRight:"1px solid #000000"}}>
                                                                    <div className="ptcitasotiselevator">
                                                                        STANDART
                                                                    </div>
                                                            </Grid>

                                                    <Grid container direction="column" style={{width:"47.4%",backgroundColor:"",height:"48px"}}>

                                                        <Grid container justify="center" alignItems="center"  style={{height:"16px",backgroundColor:"",borderBottom:"1px solid #000000",borderRight:"1px solid #000000"}}>
                                                                <div className="ptcitasotiselevator" style={{fontSize:"10px"}}>
                                                                MAINTENANCE SERVICES VISITING SCHEDULE
                                                                    </div>
                                                        </Grid>

                                                        <Grid container direction="row" style={{height:"32px",backgroundColor:"",borderBottom:"1px solid #000000"}}>
                                                            {
                                                                this.state.namemonth.map((data,i)=>
                                                                <div key={i} className="ptcitasotiselevator" style={{width:(100/12) + "%",backgroundColor:"",borderRight:"1px solid #000000",lineHeight:"1.8",textTransform:"uppercase"}}>
                                                                {data}
                                                                    </div>
                                                                )
                                                            }
       

                                                        </Grid>





                                                    </Grid>
                                                     <Grid container  justify="center" alignItems="center" style={{width:"6.1%",backgroundColor:"",height:"48px"}}>

                                                     <div className="ptcitasotiselevator">
                                                                FREQ
                                                            </div>

                                                    </Grid>
                                                    </Grid>
                                                
                                                    </Grid>

                                                   
                                                   

                                                                  

                                                                                {
                                                                                    this.state.listmaintenancepoint.map((data,i) => 
                                                                                    <Grid key={i} container direction="row" style={{backgroundColor:"",height:"",borderBottom:""}}>

                                                                                      <Grid container justify="center" alignItems="center" style={{width:"10%",backgroundColor:"",height:"16px",borderRight:"1px solid #000000",borderLeft:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                                                        <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                            {this.state.listmaintenancepoint[i].split("-")[2]}
                                                                                        </div>

                                                                                        </Grid>

                                                                                        <Grid container direction="row" style={{width:"90%",backgroundColor:"",borderRight:"",borderLeft:""}} >

                                                                                             <Grid container  alignItems="center"  style={{width:"28%",backgroundColor:"",borderRight:"1px solid #000000",paddingLeft:"3px",borderBottom:"1px solid #000000"}}>
                                                                                                    <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                    {this.state.listmaintenancepoint[i].split("-")[0]}
                                                                                                        </div>
                                                                                                    </Grid>
                                                                                             <Grid container justify="center" alignItems="center"  style={{width:"18.5%",backgroundColor:"",borderRight:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                                                                    <div className="ptcitasotiselevator" style={{fontSize:"12px",fontWeight:"500"}}>
                                                                                                    {this.state.listmaintenancepoint[i].split("-")[1]}
                                                                                                    </div>
                                                                                              </Grid>

                                                                                              <Grid container direction="row" style={{width:"47.4%",backgroundColor:"",borderBottom:"1px solid #000000",borderRight:""}}>


                                                                                                    {
                                                                                                        this.state.namemonth.map((datakecil,j)=>
                                                                                                         <div key={j} className="ptcitasotiselevator" style={{width:(100/12) + "%",backgroundColor: !((this.state.dataarsir[i][j]) && ( j === this.props.pickmonth)) ? "" :"#b0b0b0",borderRight:"1px solid #000000"}}>

                                                                                                             {
                                                                                                                    !((this.state.dataarsir[i][j]) && ( j === this.props.pickmonth)) ? 
                                                                                                                    null
                                                                                                                    :
                                                                                                                    this.props.datapick[i] ? 
                                                                                                                    <img  src={checklist}alt="formatgambar" style={{backgroundColor:"",width:"15px",height:"",marginTop:"",margin:"auto"}} /> 
                                                                                                                    :
                                                                                                                    null


                                                                                                             }
                                                                                                            
                                                                                                          </div>
                                                                                                        )
                                                                                                    }

                                                                                                    

                                                                                                </Grid>
                                                                                                <Grid container  justify="center" alignItems="center" style={{width:"6.1%",backgroundColor:"",height:"16px",borderBottom:"1px solid #000000"}}>

                                                                                                    <div className="ptcitasotiselevator">
                                                                                                    {this.state.listmaintenancepoint[i].split("-")[3]}
                                                                                                            </div>

                                                                                                    </Grid>

                                                                                            </Grid>
                                                                                            </Grid>
                                                                                    
                                                                                    )
                                                                                }
                                                                   

                                                                   


   


                                                       
                                                        <Grid container direction="row" style={{backgroundColor:"",height:"",borderBottom:"1px solid #000000"}}>
                                                                <Grid container direction="column" style={{backgroundColor:"",minHeight:"125px",borderBottom:"",width:"52.7%",borderRight:"1px solid #000000",borderLeft:"1px solid #000000"}}  >
                                                                    <Grid container className="ptcitasotiselevator" >
                                                                        TECHNICIAN NOTE :
                                                                    </Grid>
                                                                    <div className="primaryjobtypedate" style={{fontWeight:"normal"}}>
                                                                    {this.props.data.Techniciannote}
                                                                    </div>

                                                                </Grid>
                                                                <Grid container direction="column" style={{backgroundColor:"",minHeight:"",borderBottom:"",width:"47.3%"}}  >
                                                                    <Grid container className="ptcitasotiselevator" >
                                                                        CUSTOMER NOTE :
                                                                    </Grid>
                                                                    <div className="primaryjobtypedate"  style={{fontWeight:"normal"}}>
                                                                    {this.props.data.Customernote} 
                                                                    </div>

                                                                </Grid>
                                                        </Grid>


                                              </Grid>

                                               <Grid container direction="column" style={{width:"20%",backgroundColor:"",height:"",borderRight:"1px solid #000000",borderLeft:"1px solid #000000",borderBottom:"1px solid #000000"}}>
                                                   <Grid direction="column" container alignItems="center" justify="center" style={{height:'calc(100% - 195px)',backgroundColor:"",borderBottom:"1px solid #000000"}} >
                                                    {/* <div>
                                                        {this.props.data.Datatambahan.text}
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
                                                                            <img  src={tandatangan} alt="formatgambar" style={{backgroundColor:"",width:"",height:"100px",marginTop:""}} /> 

                                                                                    
                                                                            </Grid>

                                                                           
                                                                        </Grid>

                                                                        <Grid container direction="row" style={{height:"10%",borderBottom:"1px solid #000000"}}  >

                                                                                        <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"20%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                                                        Name :
                                                                                        </Grid>

                                                                                        <Grid container alignItems="center" style={{width:"80%",backgroundColor:""}}>
                                                                                                    
                                                                                                    <div className="primaryjobtypedatesr"> 
                                                                                                    {this.props.data.customer.name}
                                                                                                    </div>
                                                                                        </Grid>

                                                                    

                                                                             </Grid>

                                                                              <Grid container direction="row" style={{height:"10%",borderBottom:""}}  >

                                                                                            <Grid container alignItems="center" className="primaryjobtypedatesr" style={{width:"20%",backgroundColor:"",paddingLeft:"5px"}}>
                                                                                                            Date :
                                                                                            </Grid>

                                                                                            <Grid container alignItems="center" style={{width:"80%",backgroundColor:""}}>
                                                                                                       
                                                                                                        <div className="primaryjobtypedatesr"> 
                                                                                                            {this.props.data.customer.date}
                                                                                                        </div>
                                                                                            </Grid>

                                                    

                                                                                  </Grid>



                                                   </Grid>

                                              </Grid>
                                        </Grid>
                                       


                                
                                


                                </Grid>

                            </Grid>
                            </div>
                            </div>
        </div>
            </React.Fragment>
        );
    }
}








