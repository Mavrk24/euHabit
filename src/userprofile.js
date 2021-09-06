import {React, useState} from 'react';
import { Component } from 'react';
import { useHistory } from 'react-router-dom';
import './userprofile.css';
import rosa11 from './rosa11.png';
import LgeuHabit from './LgeuHabit.png';
import Navbar from './navbar';

export default class Profile extends Component{
    
    state = {
        user_data: {ii: 'aa'},
        demographic: {test: '2'},
    }
    
    componentDidMount = () => {
        this.renderProfile();
    }

    renderProfile(){
        fetch('http://localhost:8080/api/users/get_Profile', {
            method: 'GET',
            headers: {
                token: localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then(res => this.setState(
                { 
                    user_data: res,
                    demographic: JSON.parse(res.demographic)
                }
                ))
            .catch((err) => console.error(err))  
        
    }
            
    handleClick = e => {
        
        localStorage.clear();
        e.preventDefault();
        this.props.history.push('/');
        window.location.reload();
      
    }

    
    render() {
        return(
            <div>  
                <Navbar /> 
 
 {/* Profile */}
                
                <h1 id="profile">  Profile </h1> 

                <div class="d-flex flex-column content">
                    <div>
                    <img src={rosa11} id="imgprofile" alt="Profile picture" />
                    </div>
                    <div class="d-flex flex-column">
                        <div class="d-flex justify-content-center">
                            <p id="heading"> Username: </p>
                            <p>{this.state.user_data.username}</p> {/* ข้อมูลที่จะดึง */}
                        </div>
                        <div class="d-flex justify-content-center">
                            <p id="heading"> E-mail: </p>
                            <p> {this.state.user_data.email} </p>   {/* ข้อมูลที่จะดึง */} 
                        </div>
                        <div class="d-flex justify-content-center">
                            <p><b> Demographic data </b> </p>   
                        </div>
                        <div class="alignment">
                            <div class="d-flex">
                                <p id="heading"> อายุ: </p>
                                <p> {this.state.demographic.age} </p>    {/* ข้อมูลที่จะดึง */}
                            </div>      
                            <div class="d-flex">
                                <p id="heading"> เพศกำเนิด: </p>
                                <p> {this.state.demographic.sex} </p>    {/* ข้อมูลที่จะดึง */}
                            </div>  
                            <div class="d-flex">
                                <p id="heading"> อาชีพ: </p>
                                <p> {this.state.demographic.job} </p>    {/* ข้อมูลที่จะดึง */}
                            </div> 
                            <div class="d-flex">
                                <p id="heading"> คณะที่กำลังศึกษา: </p>
                                <p> {this.state.demographic.faculty} </p>    {/* ข้อมูลที่จะดึง */}
                            </div> 
                            <div class="d-flex">
                                <p id="heading"> ชั้นปี: </p>
                                <p> {this.state.demographic.year} </p>    {/* ข้อมูลที่จะดึง */}
                            </div>       
                        </div>
                        <div class="d-flex justify-content-center">
                            <p><b> Screening Results </b> </p>  
                        </div>
                        <div class="alignment">
                            <div class="d-flex">
                                <p id="heading"> Workplace condition: </p>
                                <p> 16 </p>    {/* ข้อมูลที่จะดึง */}
                            </div>      
                            <div class="d-flex">
                                <p id="heading"> Neck Disability Index (NDI): </p>
                                <p> 40 </p> {/* ข้อมูลที่จะดึง */}    
                            </div>       
                        </div>
                        
                    </div>
        </div> {/* end Profile */}
        
    </div>
         
    ) 
    }
}

