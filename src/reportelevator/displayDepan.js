import React from 'react';
import { Grid } from '@material-ui/core';
import './displaydepan.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Dropdownnew from "react-dropdown";
import axios from 'axios';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Popupreport1and2 from './popupseritikatv2'
import Popupreport3 from './popupdisplayreport'
import Popupreportlain from './popupsertifikatv3'
import Maskbackground from '../assets/image/Maskbackground.png'

import Orangduduk from '../assets/image/orangduduk.png'


export default  class Displaydepan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataOtis : [],
            dataOtisfilter : [],

            // dropdown
            dropdownOpenaction :[],

            //popup
            popOpen : false ,
            popOpennow : 0 ,
            datapopOpen : {},
            datapopup :{},
            datalist :{},

            datapick :[],
            pickmonth :"",

            //
            countinside : 0 ,
            ///nocontrack
            kategoriNoContract : [{value: "0", label: "All Contract" }],
            numbercontract : [],
            contractnow : 0,
            contractstring : "All Contract",
            //reporttype
            reporttypenow : 0 ,
            reporttypestring : "All Report Type",

            kategorireporttype :  [
                { value: "0", label: 'All Report Type'},
                     { value: "1", label: 'Routine Maintenance'},
                     { value: "2", label: 'Call Back' },
                     { value: "3", label: 'Spare Part Replacement' }
                     
                ],

                //dataPopup

                equipmenttype :["Escalator" ,"Travolator"],
                primaryjobtype :["Routine" ,"Stand By"],
                numberprimaryjobtype : 0 ,
                numberequipmenttype : 0 ,
                pilihan :0 ,

                //building name

                buildingname : [],
                kategoribuildingname :[{value: "0", label: "All Building" }],
                buildingnow : 0 ,
                buildingstring :"All Building",

                //Month

                kategorimonth :  [
                    { value: "0", label: 'All Month'},
                         { value: "1", label: 'January'},
                         { value: "2", label: 'February' },
                         { value: "3", label: 'March' },
                         { value: "4", label: 'April'},
                         { value: "5", label: 'May' },
                         { value: "6", label: 'June' },
                         { value: "7", label: 'July'},
                         { value: "8", label: 'August' },
                         { value: "9", label: 'September' },
                         { value: "10", label: 'October'},
                         { value: "11", label: 'November' },
                         { value: "12", label: 'December' },
                    ],

                monthnow: 0 ,

                //year 

                yearnow : "" ,

                //kategoriapproval

                kategoriapproval:[
                    { value: "0", label: 'All Approval'},
                    { value: "1", label: 'Open'},
                    { value: "2", label: 'Pending'},
                    { value: "3", label: 'Resolved' },
                    { value: "4", label: 'Closed' },
                    { value: "5", label: 'Waiting on Customer'},
                    { value: "6", label: 'Waiting Approval' },
                    { value: "7", label: 'In Process' },
                ],
                approvalnow : 3,

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

                    /// mode tampilin

                modetampilan : 
                [
                    { value: "0", label: 'OTIS'},
                    { value: "1", label: 'Propose 1'},
                    { value: "2", label: 'Propose 2'},
                   

                ],
                nomodetampilan : 0 ,

                

            }

            this.toggleNewaction = this.toggleNewaction.bind(this)
            this.handleChangecompany = this.handleChangecompany.bind(this)
            this.refreshOTIS = this.refreshOTIS.bind(this)
            this.detailReportPopup = this.detailReportPopup.bind(this)
            this.handleChangecontract = this.handleChangecontract.bind(this)
            this.handleChangebuilding = this.handleChangebuilding.bind(this)
            this.handleChangemonth = this.handleChangemonth.bind(this)
            this.handleChangeapproval = this.handleChangeapproval.bind(this)
            this.handleChangemodetampilan = this.handleChangemodetampilan.bind(this)
      }

      handleChangemodetampilan(selectedOptionmodetampilan){
        this.setState({ nomodetampilan : parseInt(selectedOptionmodetampilan.value)})

       

      }

      handleChangeapproval(selectedOptionapproval){

        // this.setState({ approvalnow : parseInt(selectedOptionapproval.value)})
//  this.setState({ approvalnow : 3 })
        console.log(parseInt(selectedOptionapproval.value))
        
        // this.refreshOTIS(this.state.reporttypestring , this.state.contractstring , this.state.buildingstring ,this.state.monthnow,this.state.yearnow, (parseInt(selectedOptionapproval.value)+1))
        

      }

      handleChangemonth(selectedOptionmonth){

        this.setState({ monthnow : parseInt(selectedOptionmonth.value)})
        
        console.log(parseInt(selectedOptionmonth.value))

        this.refreshOTIS(this.state.reporttypestring , this.state.contractstring , this.state.buildingstring ,parseInt(selectedOptionmonth.value),this.state.yearnow,(this.state.approvalnow + 1))
      }

      handleChangebuilding(selectedOptionbuidling){

        this.setState({ buildingnow : parseInt(selectedOptionbuidling.value)})
        
        console.log(selectedOptionbuidling.label)
        this.setState({buildingstring: selectedOptionbuidling.label })

        this.refreshOTIS(this.state.reporttypestring , this.state.contractstring , selectedOptionbuidling.label,this.state.monthnow,this.state.yearnow,(this.state.approvalnow + 1))
      }

      handleChangecontract(selectedOptioncontract){

        this.setState({ contractnow : parseInt(selectedOptioncontract.value)})
        
        console.log(selectedOptioncontract.label)
        this.setState({contractstring: selectedOptioncontract.label })

        this.refreshOTIS(this.state.reporttypestring , selectedOptioncontract.label , this.state.buildingstring,this.state.monthnow,this.state.yearnow,(this.state.approvalnow + 1))

      }

      handleChangecompany(selectedOptionreporttype){

        this.setState({ reporttypenow : parseInt(selectedOptionreporttype.value)})
        
        console.log(selectedOptionreporttype.label)
        this.setState({reporttypestring : selectedOptionreporttype.label })

        this.refreshOTIS(selectedOptionreporttype.label, this.state.contractstring, this.state.buildingstring,this.state.monthnow,this.state.yearnow,(this.state.approvalnow + 1))

     
      }



      detailReportPopup(value,pilihan){



        this.setState({popOpen : !(this.state.popOpen)})
        this.setState({popOpennow : value})
        this.setState({datapopOpen : this.state.dataOtis[value]})
        this.setState({numberprimaryjobtype : 0})
        this.setState({numberequipmenttype : 0})
        this.setState({pilihan : pilihan})

        this.state.primaryjobtype.forEach((data,i)=> {

            if( (this.state.dataOtisfilter[value].custom_fields.cf_report_type).split(" - ")[1] === data){

                    this.setState({numberprimaryjobtype : i+1})
                    
            }
        })

        this.state.equipmenttype.forEach((data,i)=> {

            if(this.state.dataOtisfilter[value].custom_fields.cf_equipment_type === data){

                    this.setState({numberequipmenttype : i+1})
                    
            }
        })

        // Math.floor(100000 + Math.random() * 900000).toString(10) 

       const data = {

            buildingname : this.state.dataOtisfilter[value].custom_fields.cf_building_name293555 ,
            contraknomor : this.state.dataOtisfilter[value].custom_fields.cf_contract_no,
            contraktype : (this.state.dataOtisfilter[value].custom_fields.cf_unit_no538980),
            datenow : dateforcalender(Date()),
            datestart : dateforcalender(this.state.dataOtisfilter[value].custom_fields.cf_fsm_appointment_start_time),
            dateend :dateforcalender(this.state.dataOtisfilter[value].custom_fields.cf_fsm_appointment_end_time),

            additionaleasurement :  this.state.dataOtisfilter[value].custom_fields.cf_additional_measurement,

            equipmenttype : 1 ,
            
            primaryjobtype : 1 ,

            SRnumber :this.state.dataOtisfilter[value].id,

            Technician : [

                {"name":"John Legend" ,"signature":"signtandatangan.svg","date": dateforcalender(this.state.dataOtisfilter[value].custom_fields.cf_fsm_appointment_start_time) },
                {"name":"Novita Novita" ,"signature":"signtandatangan.svg","date": dateforcalender(this.state.dataOtisfilter[value].custom_fields.cf_fsm_appointment_start_time) }
            ],

            Datatambahan : {
                "text": "ESC Naik",
                "gambar" : "eskalator.JPG"
            },

            customer :{

                "signature":"signtandatangan.svg",
                "name" :this.state.dataOtisfilter[value].custom_fields.cf_fsm_contact_name,
                "date" :dateforcalender(this.state.dataOtisfilter[value].custom_fields.cf_fsm_appointment_end_time)
            },

            Techniciannote :this.state.dataOtisfilter[value].custom_fields.cf_technician_notes ,

            Customernote : this.state.dataOtisfilter[value].custom_fields.cf_customer_notes
        }
        const datalist ={

            location : this.state.dataOtisfilter[value].custom_fields.cf_location,
            maintenancepoint : this.state.dataOtisfilter[value].custom_fields.cf_maintenance_point,
            standart :this.state.dataOtisfilter[value].custom_fields.cf_standard
        }
         console.log(datalist)
        this.setState({datapopup : data})
        this.setState({datalist :datalist})

        const datapick = [
            false,
            false,
            false,
            false,
            false,
            false,
            this.state.dataOtisfilter[value].custom_fields.cf_over_speed_device238098,
            this.state.dataOtisfilter[value].custom_fields.cf_controller_and_panel_switch_condition,
            false,
            this.state.dataOtisfilter[value].custom_fields.cf_auto_oilingfunction_visualupper,
            false,
            false,
            this.state.dataOtisfilter[value].custom_fields.cf_broken_handrall_safety_device_all_positionfunction_visualupperlower,
            false,
            this.state.dataOtisfilter[value].custom_fields.cf_tension_carriagefunction_visuallower,
            false,
            false,
            false,
            false,
            this.state.dataOtisfilter[value].custom_fields.cf_balustrade_right_leftvisualmachine_section,
            false,
            false,
            false,
            this.state.dataOtisfilter[value].custom_fields.cf_side_glassvisualmachine_section,
            this.state.dataOtisfilter[value].custom_fields.cf_drip_oil_oil_no_39a_drop_per_25_seck,
            false,
            false,
            false,
            false,
            this.state.dataOtisfilter[value].custom_fields.cf_main_bearing_shaft_grease_no_12function_visualf,
            false,
            false,
            false,
        ]

        // console.log(datapick)
        this.setState({datapick : datapick})

        this.state.namemonth.forEach((data,i)=> 
        {

            if(this.state.dataOtisfilter[value].custom_fields.cf_month729299 === data){

                this.setState({pickmonth : i})

            }
        }

        )
       



      }

      refreshOTIS(reporttypestring,contractstring,buildingstring,monthnow ,yearnow,approvalnow ){
        console.log(approvalnow)
        console.log(yearnow)
        console.log(monthnow)
        console.log(buildingstring)
        console.log(reporttypestring)
        console.log(contractstring)
        axios.get('https://ikonsultanassist.freshdesk.com/api/v2/tickets?per_page=100&page=1',{
            headers: {
              'Authorization': "Bearer cnI2ckJGTzk0RXZtVnY4MURXQzc6WA"
            }
          } )
        .then(res => {
           
            // console.log(res.data);
            this.setState({ dataOtis : res.data  })
            this.setState({dropdownOpenaction: []})
            this.setState({dataOtisfilter: []})
            this.setState({countinside : 0})


            res.data.forEach((data,i)=> 
            {
                const dropdownOpenaction = this.state.dropdownOpenaction
                dropdownOpenaction[i] = false
                this.setState({dropdownOpenaction: dropdownOpenaction})

                if( (data.custom_fields.cf_report_type == null)|| (data.custom_fields.cf_contract_no== null )
                
                
                ) {

                } else {

                   const monthcompare = (new Date(data.custom_fields.cf_fsm_appointment_start_time).getMonth() + 1) 
                   const yearcompare = (new Date(data.custom_fields.cf_fsm_appointment_start_time).getFullYear() )
                //    console.log(yearcompare)
                    
                     if(reporttypestring === "All Report Type"){

                        

                        if(contractstring === "All Contract") {

                            
                                if (buildingstring === "All Building"){

                                    if(monthnow === 0 ){

                                        if(yearnow === ""){

                                                if(approvalnow ===1 ){

                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                    dataOtisfilter[this.state.countinside] = data
                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                } else {

                                                    if( approvalnow === data.status){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                    }



                                                }

                                                

                                        } else {

                                            if (parseInt(yearnow) === yearcompare ){

                                                if(approvalnow ===1 ){

                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                    dataOtisfilter[this.state.countinside] = data
                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                } else {

                                                    if( approvalnow === data.status){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                    }



                                                }
                                            }
                                        }

                                       
                                    }else {

                                        if(monthnow === monthcompare ){
                                            if(yearnow === ""){
                                                if(approvalnow ===1 ){

                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                    dataOtisfilter[this.state.countinside] = data
                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                } else {

                                                    if( approvalnow === data.status){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                    }



                                                }

                                        } else {

                                            if (parseInt(yearnow) === yearcompare ){

                                                if(approvalnow ===1 ){

                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                    dataOtisfilter[this.state.countinside] = data
                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                } else {

                                                    if( approvalnow === data.status){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                    }



                                                }
                                            }
                                        }

                                        }
                                        
                                    }

                                  
                                }else{

                                    if(data.custom_fields.cf_building_name293555 === buildingstring){

                                        if(monthnow === 0){

                                            if(yearnow === ""){
                                                if(approvalnow ===1 ){

                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                    dataOtisfilter[this.state.countinside] = data
                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                } else {

                                                    if( approvalnow === data.status){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                    }



                                                }
                                        } else {

                                            if (parseInt(yearnow) === yearcompare ){

                                                if(approvalnow ===1 ){

                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                    dataOtisfilter[this.state.countinside] = data
                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                } else {

                                                    if( approvalnow === data.status){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                    }



                                                }
                                            }
                                        }
                                        }else {
    
                                            if(monthnow === monthcompare ){
                                                if(yearnow === ""){
                                                    if(approvalnow ===1 ){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                    } else {
    
                                                        if( approvalnow === data.status){
    
                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                        }
    
    
    
                                                    }
    
                                            } else {
    
                                                if (parseInt(yearnow) === yearcompare ){
    
                                                    if(approvalnow ===1 ){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                    } else {
    
                                                        if( approvalnow === data.status){
    
                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                        }
    
    
    
                                                    }
                                                }
                                            }
    
                                            }
                                            
                                        }
    
                                    }
    

                                }

                            } else 
                            {

                                if((data.custom_fields.cf_contract_no) === contractstring){

                                    if (buildingstring === "All Building"){

                                        if(monthnow === 0 ){

                                            if(yearnow === ""){
                                                if(approvalnow ===1 ){

                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                    dataOtisfilter[this.state.countinside] = data
                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                } else {

                                                    if( approvalnow === data.status){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                    }



                                                }

                                        } else {

                                            if (parseInt(yearnow) === yearcompare ){

                                                if(approvalnow ===1 ){

                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                    dataOtisfilter[this.state.countinside] = data
                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                } else {

                                                    if( approvalnow === data.status){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })

                                                    }



                                                }
                                            }
                                        }
                                        }else {
    
                                            if(monthnow === monthcompare ){
                                                if(yearnow === ""){
                                                    if(approvalnow ===1 ){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                    } else {
    
                                                        if( approvalnow === data.status){
    
                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                        }
    
    
    
                                                    }
                                            } else {
    
                                                if (parseInt(yearnow) === yearcompare ){
    
                                                    if(approvalnow ===1 ){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                    } else {
    
                                                        if( approvalnow === data.status){
    
                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                        }
    
    
    
                                                    }
                                                }
                                            }
    
                                            }
                                            
                                        }
    
                                    }else{
    
                                        if(data.custom_fields.cf_building_name293555 === buildingstring){
    
                                            if(monthnow === 0 ){

                                                            if(yearnow === ""){
                                                                if(approvalnow ===1 ){

                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                } else {
                
                                                                    if( approvalnow === data.status){
                
                                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                                        dataOtisfilter[this.state.countinside] = data
                                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                    }
                
                
                
                                                                }
                
                                                        } else {
                
                                                            if (parseInt(yearnow) === yearcompare ){
                
                                                                if(approvalnow ===1 ){

                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                } else {
                
                                                                    if( approvalnow === data.status){
                
                                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                                        dataOtisfilter[this.state.countinside] = data
                                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                    }
                
                
                
                                                                }
                                                            }
                                                        }
                                            }else {
        
                                                if(monthnow === monthcompare ){
                                                    if(yearnow === ""){
                                                        if(approvalnow ===1 ){

                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                        } else {
        
                                                            if( approvalnow === data.status){
        
                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                            }
        
        
        
                                                        }
        
                                                        } else {
                
                                                            if (parseInt(yearnow) === yearcompare ){
                
                                                                if(approvalnow ===1 ){

                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                } else {
                
                                                                    if( approvalnow === data.status){
                
                                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                                        dataOtisfilter[this.state.countinside] = data
                                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                    }
                
                
                
                                                                }
                                                            }
                                                        }
        
                                                }
                                                
                                            }
        
                                        }
        
    
                                    }




                                  
                                }


                            }


                     }else {

                        //  console.log(monthcompare)
                            if(contractstring === "All Contract") {

                                

                                     if((data.custom_fields.cf_report_type).split(" - ")[0] === reporttypestring ){

                                        if (buildingstring === "All Building"){

                                            if(monthnow === 0 ){

                                                if(yearnow === ""){
                                                    if(approvalnow ===1 ){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                    } else {
    
                                                        if( approvalnow === data.status){
    
                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                        }
    
    
    
                                                    }
    
                                                    } else {
            
                                                        if (parseInt(yearnow) === yearcompare ){
            
                                                            if(approvalnow ===1 ){

                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                            } else {
            
                                                                if( approvalnow === data.status){
            
                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                                }
            
            
            
                                                            }
                                                        }
                                                    }
                                            }else {
        
                                                if(monthnow === monthcompare ){
                                                    if(yearnow === ""){
                                                        if(approvalnow ===1 ){

                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                        } else {
        
                                                            if( approvalnow === data.status){
        
                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                            }
        
        
        
                                                        }
        
                                                    } else {
            
                                                        if (parseInt(yearnow) === yearcompare ){
            
                                                            if(approvalnow ===1 ){

                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                            } else {
            
                                                                if( approvalnow === data.status){
            
                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                                }
            
            
            
                                                            }
                                                        }
                                                    }
        
                                                }
                                                
                                            }
                                        }else{
        
                                            if(data.custom_fields.cf_building_name293555 === buildingstring){
        
                                                if(monthnow === 0 ){

                                                    if(yearnow === ""){
                                                        if(approvalnow ===1 ){

                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                        } else {
        
                                                            if( approvalnow === data.status){
        
                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                            }
        
        
        
                                                        }
        
                                                        } else {
                
                                                            if (parseInt(yearnow) === yearcompare ){
                
                                                                if(approvalnow ===1 ){

                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                } else {
                
                                                                    if( approvalnow === data.status){
                
                                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                                        dataOtisfilter[this.state.countinside] = data
                                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                    }
                
                
                
                                                                }
                                                            }
                                                        }
                                                }else {
            
                                                    if(monthnow === monthcompare ){
                                                        if(yearnow === ""){
                                                            if(approvalnow ===1 ){

                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                            } else {
            
                                                                if( approvalnow === data.status){
            
                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                                }
            
            
            
                                                            }
            
                                                        } else {
                
                                                            if (parseInt(yearnow) === yearcompare ){
                
                                                                if(approvalnow ===1 ){

                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                } else {
                
                                                                    if( approvalnow === data.status){
                
                                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                                        dataOtisfilter[this.state.countinside] = data
                                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                    }
                
                
                
                                                                }
                                                            }
                                                        }
            
                                                    }
                                                    
                                                }
                                            }
            
        
                                        }
                                     }


                            } 
                            else 
                            {

                                if((data.custom_fields.cf_report_type).split(" - ")[0] === reporttypestring ){

                                    if((data.custom_fields.cf_contract_no)=== contractstring){

                                        if (buildingstring === "All Building"){

                                            if(monthnow === 0 ){

                                                if(yearnow === ""){
                                                    if(approvalnow ===1 ){

                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                        dataOtisfilter[this.state.countinside] = data
                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                    } else {
    
                                                        if( approvalnow === data.status){
    
                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
    
                                                        }
    
    
    
                                                    }
    
                                                } else {
        
                                                    if (parseInt(yearnow) === yearcompare ){
        
                                                        if(approvalnow ===1 ){

                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                        } else {
        
                                                            if( approvalnow === data.status){
        
                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                            }
        
        
        
                                                        }
                                                    }
                                                }
                                            }else {
        
                                                if(monthnow === monthcompare ){
                                                    if(yearnow === ""){
                                                        if(approvalnow ===1 ){

                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                        } else {
        
                                                            if( approvalnow === data.status){
        
                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                            }
        
        
        
                                                        }
        
                                                    } else {
            
                                                        if (parseInt(yearnow) === yearcompare ){
            
                                                            if(approvalnow ===1 ){

                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                            } else {
            
                                                                if( approvalnow === data.status){
            
                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                                }
            
            
            
                                                            }
                                                        }
                                                    }
        
                                                }
                                                
                                            }
                                        }else{
        
                                            if(data.custom_fields.cf_building_name293555 === buildingstring){
        
                                                if(monthnow === 0 ){

                                                    if(yearnow === ""){
                                                        if(approvalnow ===1 ){

                                                            const dataOtisfilter = this.state.dataOtisfilter 
                                                            dataOtisfilter[this.state.countinside] = data
                                                            this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                        } else {
        
                                                            if( approvalnow === data.status){
        
                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
        
                                                            }
        
        
        
                                                        }
        
                                                    } else {
            
                                                        if (parseInt(yearnow) === yearcompare ){
            
                                                            if(approvalnow ===1 ){

                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                            } else {
            
                                                                if( approvalnow === data.status){
            
                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                                }
            
            
            
                                                            }
                                                        }
                                                    }
                                                }else {
            
                                                    if(monthnow === monthcompare ){
                                                        if(yearnow === ""){
                                                            if(approvalnow ===1 ){

                                                                const dataOtisfilter = this.state.dataOtisfilter 
                                                                dataOtisfilter[this.state.countinside] = data
                                                                this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                            } else {
            
                                                                if( approvalnow === data.status){
            
                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
            
                                                                }
            
            
            
                                                            }
                
                                                        } else {
                
                                                            if (parseInt(yearnow) === yearcompare ){
                
                                                                if(approvalnow ===1 ){

                                                                    const dataOtisfilter = this.state.dataOtisfilter 
                                                                    dataOtisfilter[this.state.countinside] = data
                                                                    this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                } else {
                
                                                                    if( approvalnow === data.status){
                
                                                                        const dataOtisfilter = this.state.dataOtisfilter 
                                                                        dataOtisfilter[this.state.countinside] = data
                                                                        this.setState({  dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })
                
                                                                    }
                
                
                
                                                                }
                                                            }
                                                        }
            
                                                    }
                                                    
                                                }
                                            }
            
        
                                        }
                                    }
                                    

                                 }
                                        // (data.custom_fields.cf_contract_no).substring(0,8)

                            }

                     }

                   


 

                 }

                        }

                        
                        )
                 
        })
        .catch(error => {
            console.log("logout error", error);
            
        });

      }

    
      toggleNewaction(value){

        const booleandrop = this.state.dropdownOpenaction
       booleandrop[value] = !(this.state.dropdownOpenaction[value])

       this.setState({dropdownOpenaction : booleandrop})

      }

      componentDidMount() {





        
  
    //   axios.get('https://ikonsultanassist.freshdesk.com/api/v2/search/tickets?query="status:3"&page=1' )
        axios.get('https://ikonsultanassist.freshdesk.com/api/v2/tickets?per_page=100&page=1',{
            headers: {
              'Authorization': "Bearer cnI2ckJGTzk0RXZtVnY4MURXQzc6WA"
            }
          } )
        .then(res => {
           
            //  console.log(res.data);
            this.setState({ dataOtis : res.data  })

            res.data.forEach((data,i)=> 
            {
                const dropdownOpenaction = this.state.dropdownOpenaction
                dropdownOpenaction[i] = false
                this.setState({dropdownOpenaction: dropdownOpenaction})

                if ( (data.custom_fields.cf_report_type == null)|| (data.custom_fields.cf_contract_no == null ) ) {

                } else {

                    // dihapus jika perlu filter
                    if(data.status === 4){

                        const dataOtisfilter = this.state.dataOtisfilter 
                   dataOtisfilter[this.state.countinside] = data

                  

                   const numbercontract = this.state.numbercontract

                   numbercontract[this.state.countinside ] = (data.custom_fields.cf_contract_no)

                   const buildingname = this.state.buildingname

                   buildingname[this.state.countinside] = data.custom_fields.cf_building_name293555

                    // console.log(data.custom_fields.cf_building_name571096)

                   this.setState({buildingname: buildingname, numbercontract : numbercontract , dataOtisfilter : dataOtisfilter ,countinside : this.state.countinside + 1 })



                    }

                   
                   

                 }


             
                        }

                     

                        
                        )

                        
                        //  console.log("numbercontract")
                        //  console.log(this.state.buildingname);
                        //  console.log((this.state.buildingname).filter(onlyUnique));

                         this.state.buildingname.filter(onlyUnique).forEach((data,i)=>
                            {
                                const kategoribuildingname = this.state.kategoribuildingname
                
                                kategoribuildingname[i+1] = { value: (i+1).toString(10), label: data }
                                this.setState({kategoribuildingname : kategoribuildingname})
                
                            })
                    // console.log((this.state.numbercontract).filter(onlyUnique));
                    this.state.numbercontract.filter(onlyUnique).forEach((data,i)=>
                    {
                        const kategoriNoContract = this.state.kategoriNoContract
        
                        kategoriNoContract[i+1] = { value: (i+1).toString(10), label: data }
                        this.setState({kategoriNoContract : kategoriNoContract})
        
                    })

                    


        })
        .catch(error => {
            console.log("logout error", error);
            
        });

      

        // this.detailReportPopup(0)
  

  


      }


      
      
  

    render() {

         //// Filte Type
        
           

            
            const selectedOptionreporttype = this.state.kategorireporttype[this.state.reporttypenow];

            const selectedOptioncontract = this.state.kategoriNoContract[this.state.contractnow];

            const selectedOptionbuidling = this.state.kategoribuildingname[this.state.buildingnow];

            const selectedOptionmonth = this.state.kategorimonth[this.state.monthnow];

            const selectedOptionapproval = this.state.kategoriapproval[this.state.approvalnow];

            const selectedOptionmodetampilan = this.state.modetampilan[this.state.nomodetampilan];

            // console.log(this.state.kategoribuildingname)
            //  console.log(this.state.dataOtis)
            // console.log(this.state.dataOtisfilter)
            
            // console.log(this.state.dropdownOpenaction)
            // var dat = "coba - owo"
            // console.log(dat.split(" - "))
     
        return (
            
            <React.Fragment>
                 <Grid  container direction="row" item lg={12} style={{ }}>
                            <Grid container  direction="column" item md={2} style={{ backgroundColor:"#003655",paddingTop:"75px",paddingLeft:"15px",paddingRight:"15px",minHeight:"1000px"}} >

                                <Grid container justify="center" style={{marginBottom:"40px"}}>
                                    <div className="otislogobesar">
                                        OTIS
                                    </div>
                                </Grid>

                                <Grid container style={{padding:"20px",backgroundColor:"rgba(255, 255, 255, 0.2)",marginBottom:"10px"}}>

                                    <div className="msrroutinelift">
                                         MSR Report
                                    </div>

                                </Grid>

                                   {/* <Grid container style={{padding:"20px",backgroundColor:"",marginBottom:"10px"}}>

                                    <div className="MSRRoutineEscalator">
                                    MSR Routine Escalator
                                    </div>

                                </Grid>

                                <Grid container style={{padding:"20px",backgroundColor:"",marginBottom:"10px"}}>

                                    <div className="MSRRoutineEscalator">
                                    SR Call Back
                                    </div>

                                </Grid> */}
                            </Grid>

                            <Grid container item lg={10} direction="column" style={{ backgroundColor:"",paddingLeft:"50px",paddingRight:"50px",minHeight:"100%",paddingBottom:"30px"}}>
                                
                                <Grid container alignItems="center" justify="flex-end" style={{backgroundColor:"",height:"60px"}} >
                                    <Grid container alignItems="center" justify="space-between" direction="row" style={{width:"200px",height:"50px",backgroundColor:""}}>
                                        <div style={{width:"30px",height:"30px",backgroundColor:"#FFD749",borderRadius:"50%"}}>
                                        </div>
                                        <div className="steviewonderwoman">
                                        Stevie Wonder
                                        </div>

                                        <ArrowDropDownIcon/>

                                    </Grid>

                                </Grid>

                                <Grid container direction="row" justify="space-between" style={{height:"300px",border:"2px solid rgba(95, 149, 188, 0.5)",borderRadius:"28px",paddingTop:"45px",paddingLeft:"45px",paddingRight:"45px",backgroundImage: `url(${Maskbackground})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

                                    <Grid container direction="column" style={{background:"",width:'calc(100% - 250px)'}}>
                                            <div className="digitalMSRReport">
                                            Digital MSR Report
                                            </div>
                                            <div className="yourvisionourvision">
                                            Your vision, our passion. We’re dedicated to reinventing the way <br></br> you move
                                            </div>
                                    </Grid>
                                    <img  src={Orangduduk} alt="formatgambar" style={{backgroundColor:"",width:"250px",height:"",marginTop:""}} /> 


                                   
                                    

                                </Grid >

                                <Grid container alignItems="center" justify="space-between" style={{height:"80px",backgroundColor:""}}>

                                    <div className="filterdropdownlist">
                                        Filter
                                    </div>
                                    
                                    <ArrowDropDownIcon style={{fontSize:"50px",backgroundColor:""}}/>
                                </Grid>

                                <Grid container direction="row" justify="space-between" style={{backgroundColor:"",height:"100px"}}>
                                        <Grid container direction="column"  style={{marginRight: "",width:"30%"}}>
                                            <div className="reporttypeselected">
                                                Report Type
                                            </div>
                                            <Dropdownnew
                                                    className="dropdownlistcompanyname"
                                                    options={this.state.kategorireporttype}
                                                    onChange={this.handleChangecompany}
                                                    value={selectedOptionreporttype}
                                                    placeholder="Company Name"
                                                    
                                                    
                                                />

                                        </Grid>

                                        <Grid container direction="column"  style={{marginRight: "",width:"30%"}}>
                                                <div className="reporttypeselected">
                                                        Contract Number
                                                    </div>
                                                    <Dropdownnew
                                                            className="dropdownlistcompanyname"
                                                            options={this.state.kategoriNoContract}
                                                            onChange={this.handleChangecontract}
                                                            value={selectedOptioncontract}
                                                            placeholder="Contract Number"
                                                            
                                                        />

                                        </Grid>

                                        <Grid container direction="column"   style={{marginRight: "",width:"30%"}}>

                                        <div className="reporttypeselected">
                                               Building Name
                                            </div>
                                            <Dropdownnew
                                                    className="dropdownlistcompanyname"
                                                    options={this.state.kategoribuildingname}
                                                    onChange={this.handleChangebuilding}
                                                    value={selectedOptionbuidling}
                                                    placeholder="Building Name"
                                                    
                                                />
                                          

                                        </Grid>
                                </Grid>

                                <Grid container direction="row" justify="space-between" style={{backgroundColor:""}}>
                                        <Grid container direction="row" justify="space-between"  style={{marginRight: "",width:"30%"}}>

                                            <Grid container style={{width:"40%" ,height :""}}>
                                            <div className="reporttypeselected">
                                               Month
                                            </div>

                                                 <Dropdownnew
                                                    className="dropdownlistcompanyname"
                                                    options={this.state.kategorimonth}
                                                    onChange={this.handleChangemonth}
                                                    value={selectedOptionmonth}
                                                    placeholder="Month Name"/>

                                            </Grid>

                                            <Grid container style={{width:"40%", height:"70px"}}>
                                            <div className="reporttypeselected">
                                               Year
                                            </div>

                                            <input  
                                                  type="number"
                                                  name="confirmyear" 
                                                  placeholder="what year?" 
                                                  className="kotakinputprofile"
                                                  value={this.state.phonenumber}
                                                  onChange={e => {
                                                    this.setState({ yearnow : e.target.value });
                                                    this.refreshOTIS(this.state.reporttypestring, this.state.contractstring, this.state.buildingstring,this.state.monthnow,e.target.value,(this.state.approvalnow + 1))

                                                    }}
                                                    style={{height:"50px"}}
                                                    /> 

                                            </Grid>
                                            

                                        </Grid>

                                        <Grid container direction="column"  style={{marginRight: "",width:"30%",opacity:"0.5"}}>
                                           <div className="reporttypeselected">
                                                        Status Approval
                                                    </div>
                                                    <Dropdownnew
                                                            className="dropdownlistcompanyname"
                                                            options={this.state.kategoriapproval}
                                                            onChange={this.handleChangeapproval}
                                                            value={selectedOptionapproval}
                                                            placeholder="Status Apporval"
                                                            // style={{opacity:"0.5"}}
                                                            disabled={this.state.approvalnow === 3}
                                                            
                                                        />
                                        </Grid>

                                        <Grid container direction="column"   style={{marginRight: "",width:"30%"}}>

                                      
                                               

                                                          <div className="reporttypeselected">
                                               Report Template
                                            </div>
                                            <Dropdownnew
                                                    className="dropdownlistcompanyname"
                                                    options={this.state.modetampilan}
                                                    onChange={this.handleChangemodetampilan}
                                                    value={selectedOptionmodetampilan}
                                                    placeholder="Building Name"
                                                    
                                                />

                                          

                                        </Grid>
                                </Grid>

                                 <Grid container alignItems="center"  style={{height:"80px",backgroundColor:""}}>

                                    <div className="filterdropdownlist">
                                        Result
                                    </div>
                                    
                                    
                                </Grid>

                                 <Grid container direction="row" style={{width: "" , backgroundColor:"",height:"70px",paddingLeft:"15px",border:"1px solid rgba(95, 149, 188, 0.5)"}}> 

                                                <Grid container alignItems="center" style={{width:"20%",backgroundColor:""}}>
                                                    <div className="companynamedisplaydepan">
                                                   Report Type
                                                    </div>
                                                </Grid>

                                                <Grid container alignItems="center" style={{width:"23%",backgroundColor:""}}>
                                                <div className="companynamedisplaydepan">
                                                Building name
                                                    </div>
                                                    
                                                </Grid>

                                                <Grid container alignItems="center"  style={{width:"20%" ,backgroundColor:""}}>
                                                <div className="companynamedisplaydepan">
                                                    {/* Location */}
                                                    </div>
                                                </Grid>

                                                <Grid container alignItems="center"  style={{width:"15%" ,backgroundColor:""}}>
                                                <div className="companynamedisplaydepan">
                                                    Contract no
                                                    </div>
                                                </Grid>

                                                <Grid container alignItems="center"  style={{width:"15%" ,backgroundColor:""}}>
                                                <div className="companynamedisplaydepan">
                                                    Unit no
                                                    </div>
                                                </Grid>

                                                <Grid container alignItems="center" justify="center"  style={{width:"7%" ,backgroundColor:""}}>
                                                <div className="companynamedisplaydepan">
                                                    Action
                                                    </div>
                                                </Grid>


                                            
                                              

                                        </Grid>

                                        {
                                            this.state.dataOtisfilter.map((data,i)=> <Grid key={i} container direction="row" style={{width: "" , backgroundColor:"",height:"70px",paddingLeft:"15px",border:"1px solid rgba(95, 149, 188, 0.5)"}}> 

                                                <Grid container alignItems="center" style={{width:"20%",backgroundColor:""}}>
                                                {
                                                        data.custom_fields.cf_report_type == null ?
                                                        <div className="companynamedisplaydepanbawah">
                                                                 -- 
                                                        </div>
                                                    :
                                                        <div className="companynamedisplaydepanbawah">
                                                        {(data.custom_fields.cf_report_type).split(" - ")[0]}  
                                                        </div>

                                                    }
                                                   
                                                </Grid>

                                                <Grid container alignItems="center" style={{width:"23%",backgroundColor:""}}>
                                                  {
                                                      data.custom_fields.cf_building_name293555 == null ?
                                                      <div className="companynamedisplaydepanbawah">
                                                      --
                                                          </div>
                                                          :
                                                          <div className="companynamedisplaydepanbawah">
                                                                 {data.custom_fields.cf_building_name293555}
                                                        </div>
                                                  }
                                                    
                                                   
                                               
                                                    
                                                </Grid>

                                                <Grid container alignItems="center"  style={{width:"20%" ,backgroundColor:""}}>

                                                    {/* {
                                                        data.custom_fields.cf_location == null ?
                                                        <div className="companynamedisplaydepanbawah">
                                                                 -- 
                                                        </div>
                                                    :
                                                        <div className="companynamedisplaydepanbawah">
                                                        {data.custom_fields.cf_location}  
                                                        </div>

                                                    } */}
                                                
                                                </Grid>

                                                <Grid container alignItems="center"  style={{width:"15%" ,backgroundColor:""}}>
                                                    {
                                                        data.custom_fields.cf_contract_no == null ?
                                                        <div className="companynamedisplaydepanbawah">
                                                       --
                                                            </div>
                                                            :
                                                            <div className="companynamedisplaydepanbawah">
                                                            {(data.custom_fields.cf_contract_no)}  
                                                                </div>
                                                    }
                                               
                                                </Grid>

                                                <Grid container alignItems="center"  style={{width:"15%" ,backgroundColor:""}}>
                                                    
                                                {
                                                        data.custom_fields.cf_unit_no538980 == null ?
                                                        <div className="companynamedisplaydepanbawah">
                                                       --
                                                            </div>
                                                            :
                                                            <div className="companynamedisplaydepanbawah">
                                                            {(data.custom_fields.cf_unit_no538980)}  
                                                                </div>
                                                    }
                                                </Grid>

                                                <Grid container alignItems="center" justify="center"   style={{width:"7%" ,backgroundColor:""}}>

                                                            <Dropdown 
                                                            direction="left"  
                                                            isOpen={this.state.dropdownOpenaction[i]}  toggle={() => { this.toggleNewaction(i) }} >
                                                                        <DropdownToggle 
                                                                        
                                                                        style={{backgroundColor:"#ffffff",padding:"0px" }}
                                                                        
                                                                        >
                                                                        
                                                                        <div
                                                                         className="buttonlistexport"
                                                                         
                                                                         >
                                                                        <MoreHorizIcon style={{padding:"0px",backgroundColor:"",color:"#2D9CDB"}}/>
                                                                        </div>
                                                                        
                                                                         
                                                                    
                                                                        </DropdownToggle>
                                                                        <DropdownMenu   > 
                                                                    
                                                                        <DropdownItem>
                                                                        <div
                                                                        // onClick={() => this.editMaterikuis(data.idActivityList)} 
                                                                        className="otherblackbre" onClick={()=>{ this.detailReportPopup(i ,0 )}} >
                                                                            Detail
                                                                            </div>
                                                                        </DropdownItem>

                                                                        <DropdownItem>
                                                                        <div 
                                                                        // onClick={() => this.deleteMaterikuis(data.idActivityList)} 
                                                                        className="otherblackbrered" onClick={()=>{ this.detailReportPopup(i ,1 )}}>
                                                                        Export to PDF
                                                                            </div>
                                                                            </DropdownItem>
                                                                        
                                                                            {/* <DropdownItem>
                                                                        <div 
                                                                        // onClick={() => this.deleteMaterikuis(data.idActivityList)} 
                                                                        className="otherblackbrered">
                                                                        Export to Excel
                                                                            </div>
                                                                            </DropdownItem> */}
                                                                        
                                                                        </DropdownMenu>
                                                            </Dropdown>
                                                    
                                               
                                                </Grid>


                                            
                                              

                                        </Grid>
                                        
                                                
                                            )
                                        }

                                         

                            </Grid>
                 </Grid>

                 { 
                 
                 !(this.state.popOpen) ? 
                    null
                : this.state.nomodetampilan === 0 ?
                <Popupreport3  detailReportPopup ={()=>{ this.detailReportPopup(this.state.popOpennow)}} data = {this.state.datapopup} primaryjobtype ={this.state.numberprimaryjobtype } equipmenttype ={this.state.numberequipmenttype} datalist={this.state.datalist} datapick={this.state.datapick} pickmonth={this.state.pickmonth} pilihan={this.state.pilihan}  />
                : this.state.nomodetampilan === 1?

                <Popupreport1and2  detailReportPopup ={()=>{ this.detailReportPopup(this.state.popOpennow)}} data = {this.state.datapopup} primaryjobtype ={this.state.numberprimaryjobtype } equipmenttype ={this.state.numberequipmenttype} datalist={this.state.datalist} datapick={this.state.datapick} pickmonth={this.state.pickmonth} pilihan={this.state.pilihan}  />
                
                : this.state.nomodetampilan === 2 ?
                <Popupreportlain  detailReportPopup ={()=>{ this.detailReportPopup(this.state.popOpennow)}} data = {this.state.datapopup} primaryjobtype ={this.state.numberprimaryjobtype } equipmenttype ={this.state.numberequipmenttype} datalist={this.state.datalist} datapick={this.state.datapick} pickmonth={this.state.pickmonth} pilihan={this.state.pilihan} />
                : 
                null
                }
                            
            </React.Fragment>
        );


    }
}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }


  function dateforcalender (date) {


  let  now = new Date(date);
   let year =  now.getFullYear();
  let  month =  (now.getMonth() + 1); 
  let  day =  now.getDate()
  
  if (day.length === 1) { day = "0" + day  }

  let  hour = "" + now.getHours(); if (hour.length === 1) { hour = "0" + hour; }
  let  minute = "" + now.getMinutes(); if (minute.length === 1) { minute = "0" + minute; }
  
 
  
   let second = "" + now.getSeconds(); if (second.length === 1) { second = "0" + second; }
   if (year > 0 ) 
   {
    return  day + "-"+ month  + "-" + year ;
   } 
   else
   {
     return null
   }
    
  
  }







