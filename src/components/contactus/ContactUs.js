import React from 'react';

class ContactUs extends React.Component {
   constructor(props){
    super(props);
    this.state = {
        user :{
            username :"",
            phonenumber : "",
            email : ""
        }
    }
   }
   updateInput = (event) => {
    this.setState({
        user :{
            ...this.state.user,
            [event.target.name] : event.target.value
        }
    })

   }
   submitLogin = (Event) => {
    Event.preventDefault(); 
    console.log(this.state.user);
   };

render () {
    return (
        <React.Fragment>
            <section className='mt-5 design'>
                <div className=" bg-primary p-5 ">
                    <div className="row">
                        <div className="col">
                            <h1 className='color1 pl-5'>Let’s make  </h1>
                            <h1 className='color1 pl-5'>your project  a lasting success</h1>
                            <p className='color pl-5'>Avenga - your competitive advantage</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </section>
            <div className='pt-3'>
            <div className='pl-5 pt-5 '>
            <h1 className='color2'>Start a conversation</h1>
            <div>
            <p className=' para pl-3 '>We’d like to hear from you. Use the contact form below and we’ll get back to you shortly.</p>
            </div>
            </div>
            </div>
            <hr></hr>
            
         
         <section className='m-5 '>
         <div className=' d-flex flex-column justify-content-center'>
            <div className="container marg">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card ">
                            <div className="card-header bg-primary text-white ">
                                <p className="h4">Contact </p>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.submitLogin}>
                                    <div className="form-group">
                                        <input
                                        name="username"
                                        value={this.state.user.username}
                                        onChange={this.updateInput}
                                        type="text" className='form-control' placeholder='Username'/>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        name="password"
                                        value={this.state.user.password}
                                        onChange={this.updateInput}
                                        type="phonenumber" className='form-control' placeholder='Phonenumber'/>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        name="email"
                                        value={this.state.user.email}
                                        onChange={this.updateInput}
                                        type="email" className='form-control' placeholder='email'/>
                                    </div>

                                    <div className='d-flex flex-row justify-content-center'>
                                        <input type="submit" value="Submit" className='btn btn-primary btn-sm'/>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                    <div>
                    <div className='landing-page3 ml-5'>
                <div className='pl-5'>
                    </div></div>
                    </div> </div>
                </div>
            </div>
            </section> 
            <hr></hr>

            <div className="container ">
                <div className="row">
                    <div className="col">
                        <h1 className='con'>Overview</h1>
                    </div>
                    <div className="col">
                        <h1 className='con'> Data and AI</h1>
                    </div>
                    <div className="col">
                        <h1 className='con'> Global</h1>
                    </div>
                    <div className="col">
                        <h1 className='con'>Follow Us</h1>
                    </div>
                    </div>
               </div>
               
       
          
        </React.Fragment>
    )
}
}
export default ContactUs;