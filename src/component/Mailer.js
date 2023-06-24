// npm i emailjs-com
import emailjs from 'emailjs-com'
import React from 'react'

const Mailer = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_cyocdq9','template_gt6okfl',e.target,'US2X83RKTExNMEDbu').then(res=>{
            console.log(res);
            console.log(e.target);
            alert(
                "Subscribed Successfully! check your email"
            )
        }).catch(err=>console.log(err));

    }
       
  return (
    // <form className="form-inline" onSubmit={sendEmail}>
    //     <div className="input-group">
    //     <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
    //     <div className="input-group-append">
    //         <button type="submit" className="btn btn-dark">Subscribe</button>
    //     </div>
    //     </div>
    // </form>
    <form className="form-inline" onSubmit={sendEmail}>
    <div className="input-group">
      <input type="email" name="email" className="form-control" placeholder="Subscribe here" required />
      <div className="input-group-append">
        <button type="submit" className="btn btn-dark" style={{ backgroundColor: 'maroon', color: 'white' }}>
          {/* <i className="fa fa-paper-plane" aria-hidden="true"></i> */}
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </form>
  
  

  )
}

export default Mailer