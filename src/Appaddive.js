import React from 'react';
import { Grid } from '@material-ui/core';
import './appaddive.css';
import axios from 'axios';

export default  class Displayreport extends React.Component {

    constructor(props) {
        super (props);
        this.state = {

          nameofemployee :"",
          jobemployee :"",
          datasubordinates : [],
          datanondirectsubordinates : [],
          close : true ,
          count  :0 ,
          nothing : false,

          employeeparent :[],

          allemploye :[
            "John Hartman",
            "Samad Pitt",
            "Amaya Knight",
            "Leanna Hogg",
            "Aila Hodgson",
            "Vincent Todd",
            "Faye Oneill",
            "Lynn Haigh",
            "Nylah Riddle"
          ]


      }
      this.Submitname = this.Submitname.bind(this)
    }

    Submitname(){
      this.setState( { datasubordinates : []})
      this.setState( { employeeparent :[] })
      this.setState( {datanondirectsubordinates : []})
      this.setState({count : 0})

      axios.get('http://api.additivasia.io/api/v1/assignment/employees/'+ this.state.nameofemployee
      )
              .then(res => {
                this.setState({ nothing : false  })

                this.setState({close : false})

                 if (res.data[0]=== "employee"){

                    this.setState({datasubordinates : [] ,close : false})
                    this.setState({employeeparent : [this.state.nameofemployee] })
                    this.setState({jobemployee : res.data[0]})
                  }else {
                    this.setState({datasubordinates : res.data[1]["direct-subordinates"] ,close : false })
                    this.setState({employeeparent : res.data[1]["direct-subordinates"].concat(this.state.nameofemployee) })
                    this.setState({jobemployee : res.data[0]})

                  }
                  


                  this.state.allemploye.forEach((allemploye)=>{
                    axios.get('http://api.additivasia.io/api/v1/assignment/employees/'+ allemploye
                    )
                    .then(res => {
                 
                      this.setState({count : 0})
                     
                      if(allemploye !== this.state.nameofemployee){

                        this.state.employeeparent.forEach((employeeparent)=>{

                          if(allemploye !== employeeparent){

                            this.setState({count : this.state.count + 1})
                           
                            if (this.state.count === this.state.employeeparent.length ){

                            this.setState({datanondirectsubordinates : this.state.datanondirectsubordinates.concat(allemploye)})
                            this.setState({count : 0})
                            }
                            

                          }

                      })



                      }

                        if (res.data[0] ==="employee"){
                          this.setState({count : 0})
                          this.state.employeeparent.forEach((employeeparent)=>{

                              if(allemploye !== employeeparent){

                                this.setState({count : this.state.count + 1})
                               
                                if (this.state.count === this.state.employeeparent.length ){

                                this.setState({datanondirectsubordinates : this.state.datanondirectsubordinates.concat(allemploye)})
                                this.setState({count : 0})
                                }
                                

                              }

                          })
                      }else {

                        res.data[1]["direct-subordinates"].forEach((directsubordinates)=>{
                          this.setState({count : 0})
                                  this.state.employeeparent.forEach((employeeparent)=>{

                                    if(directsubordinates !== employeeparent){

                                      this.setState({count : this.state.count + 1})
                                      
                                      if (this.state.count === this.state.employeeparent.length  ){
                                        
                                      this.setState({datanondirectsubordinates : this.state.datanondirectsubordinates.concat(directsubordinates)})
                                      this.setState({count : 0})
                                      }
                                      

                                    }

                                })

                                
                        })
                          

                      }


                      
                 
                    


                    })
                    .catch(error => {
                      // console.log("error", error);
                      
                    });


                  })





              })
              .catch(error => {
                  // console.log("error", error);

                  this.setState({ nothing : true  })

                  this.setState({close : true})
                  
              });

              this.setState({count : 0})
    }

      componentDidMount() {




      }


      
      
  

    render() {

    //  console.log(this.state.datanondirectsubordinates.filter(onlyUnique))
       


       
        return (
            
            <React.Fragment>

              <Grid >
                    <Grid container justify="center" alignItems="center" style={{height:"50px",backgroundColor:""}}>
                      <div className="employeeexplorer" style={{color:"#1d8ede"}}>
                         Employee Explorer
                      </div>
                     
                    </Grid>
                    <Grid container justify="center" alignItems="center" style={{height:"50px"}}>

                        <Grid container direction="row" style={{width:"400px",backgroundColor:""}}>

                            <input  
                                                  type="text"
                                                  name="confirmyear" 
                                                  placeholder="Employee Name?" 
                                                  className="kotakinputprofileemploye"
                                                  value={this.state.nameofemployee}
                                                  onChange={e => {
                                                    this.setState({ nameofemployee : e.target.value ,close : true ,nothing: false});

                                                    }}
                                                    style={{height:"50px"}}
                                                    /> 

                            <div onClick={this.Submitname} className="buttonlistemployee" style={{color:"#ffffff",backgroundColor:"#1d8ede"}}>
                                  Search
                            </div>

                        </Grid>


                              {
                                this.state.nothing ?
                                <Grid container justify="center" alignItems="center" style={{height:"",backgroundColor:""}}>

                                <Grid container direction="row" style={{width:"400px",backgroundColor:""}}>

                                { this.state.nameofemployee ==="" ?
                                        <div className="employeeexplorer" style={{fontWeight:"500",fontSize:"9px",color: "#de1d1d" }}>
                                        !!! Write the employee's name first
                                        </div>
                                        :
                                        <div className="employeeexplorer" style={{fontWeight:"500",fontSize:"9px",color: "#de1d1d" }}>
                                        !!! The name of those amployee are not available  in this company
                                        </div>

                                }
                               

                                  </Grid>
                                

                              </Grid>
                                :
                                null

                              }
                        
                        {
                           this.state.close || this.state.nameofemployee ==="" ?

                          null
                          :
                          <>
                        <Grid container justify="center" alignItems="center" style={{height:"",backgroundColor:""}}>

                             <Grid container direction="row" style={{width:"400px",backgroundColor:""}}>

                             
                              <div className="employeeexplorer" style={{fontWeight:"500",fontSize:"15px" ,color:"#1d8ede"}}>
                              Subordinates of {this.state.jobemployee} {this.state.nameofemployee} :
                              </div>

                               

                             

                               </Grid>
                             
                     
                          </Grid>
                             <Grid container justify="center" alignItems="center" style={{height:"",backgroundColor:""}}>

                               {   this.state.datasubordinates.length === 0?
                                 <Grid container direction="column" style={{width:"400px",backgroundColor:""}}>
                                <div className="employeeexplorer" style={{fontWeight:"400",fontSize:"13px"}}>
                                     -
                                 </div>
                                 </Grid>
                                 :
                                 
                                 <Grid container direction="column" style={{width:"400px",backgroundColor:""}}>
   
                                 {
                                                                    this.state.datasubordinates.map((data,i)=>
                                                                    <div key={i} className="employeeexplorer" style={{fontWeight:"400",fontSize:"13px"}}>
                                                                    {data}
                                                                     </div>
                                                                    )
                                                                }
       
                                   </Grid>


                                } 
                        
   
                          </Grid>
                                         <Grid container justify="center" alignItems="center" style={{height:"20px",backgroundColor:""}}>

                             <Grid container direction="row" style={{width:"400px",backgroundColor:""}}>

                             <div className="employeeexplorer" style={{fontWeight:"500",fontSize:"15px",color:"#1d8ede"}}>
                               Nondirect Subordinates of {this.state.jobemployee} {this.state.nameofemployee} :
                              </div>

                               </Grid>

                               <Grid container justify="center" alignItems="center" style={{height:"",backgroundColor:""}}>
                             <Grid container direction="column" style={{width:"400px",backgroundColor:""}}>
   
                             {
                                                                this.state.datanondirectsubordinates.filter(onlyUnique).map((data,i)=>
                                                                <div key={i} className="employeeexplorer" style={{fontWeight:"400",fontSize:"13px"}}>
                                                                {data}
                                                                 </div>
                                                                )
                                                            }
   
                               </Grid>
   
                          </Grid>


                             
                     
                          </Grid>
                          </>
                          }

                  
                     
                                     

                     
                    </Grid>
              </Grid>
 
                          
                                
            </React.Fragment>
        );
    }
}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}




  








