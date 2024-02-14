import "./styles/Contact.css"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from "react";
import useIntersection from "./hook/useIntersection";
import ContactOk from "./components/ContactOk";
import Swal from "sweetalert2";

const Contact = () => {
  useIntersection
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [active, setActive] = useState(false)
    const inputNull = { name: "", phone: "", email: "", company: "" };
    const [ elementRef, isIntersecting ] = useIntersection({ threshold: 0.4, });

    useForm
    const sendEmail = data => {
        setActive(true)
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/valencuellar1612@gmail.com', {
            name: `Nuevo mensaje de ${data.name}`,
            message: `${data.name}, de la empresa ${data.company} desea ponerse en contacto contigo. L@ puedes contactar este correo ${data.email} o a su numero telefónico ${data.phone}.`
        })
            .then(res => {
                reset(inputNull)
                setActive(false)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Email sent success',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => {
                console.error(error),
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error while sending your email.',
                    showConfirmButton: false,
                    timer: 1500
                  })  
            });
    }
    return (
      <div className='container__cont'>
        <ContactOk />
        <div className="contacto">
          <h2 className="contacto__title">Send me a message</h2>
            <div ref={elementRef} className={ isIntersecting ? "formulario show" : "formulario hidden" } >
                <form onSubmit={handleSubmit(sendEmail)}
                className='form_container'>
                    <i className={ active ? 'sending email bx bx-mail-send bx-fade-right bx-lg' : 'email bx bx-mail-send bx-lg'}></i>
                    <div className="names_container">
                        <div className="input_container">
                            <label className="label" htmlFor="name">Name and Lastname:</label>
                            <input type="text" id='name' placeholder="Your complete name"  {...register('name')} required />
                        </div>
                    </div>
                    <div className="input_container">
                        <label className="label" htmlFor="email">Email:</label>
                        <input type="email" id='email' placeholder="Your e-mail"{...register('email')} required />
                    </div>
                    <div className="input_container">
                        <label className="label" htmlFor="phone">Cellphone: </label>
                        <input type="text" id='phone' placeholder="Example: +57123456789" {...register('phone')} required />
                    </div>
                    <div className="input_container">
                        <label className="label" htmlFor="company">Company: </label>
                        <input type="text" id='company' placeholder="Company, institution" {...register('company')} required />
                    </div>
                    <button className='submit_btn'>
                        Send
                    </button>
                </form>
            </div>
        </div>
      </div>
    );
};

export default Contact;