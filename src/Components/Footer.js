import React from 'react'
import left from "../assest/left.png"
import right from "../assest/right.png"

export default function Footer() {


    function handleSubmit(e) {
        e.preventDefault();
        alert('You clicked submit.');
      }


  return (
    <footer className='page-footer grey lighten-0'>
        <div className="row">
            <h3 className='center title orange-text'>
                Himark
            </h3>
            <h6 className='font center black-text'><b>Feel free to contact us for any enquires</b></h6>
            <h6 className='font center black-text'>
                <b>Drop your Information</b>
            </h6>

            <div className='col l4 s12'>
                <img className='responsive-img' src={left} alt='bg'/>
            </div>


            <div className="col m4 s12">
                <form className="card" onSubmit={handleSubmit}>
                    <div className="card-content">
                        <div className="input-field one">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate"/>
                            <label for="icon_prefix">First Name</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" type="tel" className="validate"/>
                            <label for="icon_telephone">Telephone</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">mail</i>
                            <input id="icon_email" type="tel" className="validate"/>
                            <label for="icon_email">Email</label>
                        </div>

                        <div className="row">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                        </button>
                        
                        </div>
                            
                    </div>
                 </form>                 
            </div>

                <div className='col m4 s12'>
                        <img className='responsive-img' src={right} alt='bg'/>
            </div>

            </div>
            

            <div className='footer-copyright brown darken-4'>
                        <div className='container'>
                            @ <b className='font'>2022 Himark</b>
                            <a className='grey-text text-lighten-4 right' href='#!'></a>
                            <b>_GROUP18</b>
                        </div>

            </div>
                       
        </footer>
  )
}
