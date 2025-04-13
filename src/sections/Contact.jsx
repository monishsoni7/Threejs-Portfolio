import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
const handleChange = ({target:{name,value}}) => {
    setForm({...form, [name]:value});
}
    // service_wz9fymj
    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
       await emailjs.send('service_crhvq7h','template_w5s86u8',{
            from_name: form.name,
            to_name: 'Monish',
            from_email: form.email,
            to_email: 'work.monish86@gmail.com',
            message:form.message,
        },'39LFP3iGTpaMBoM4y')
        setLoading(false);
        // alert('your message has been sent.');
        toast.success('Your message has been sent');
        setForm({
            name: '',
            email: '',
            message: '',
        
        })
    }catch (error) {
setLoading(false);
alert('Something went wrong.');
    }



    }

    return (
        <>
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
   
<section className="c-space my-20 relative">
  <div className="container mx-auto">
    {/* Terminal Image Background */}
    <div className="absolute inset-0 z-0">
      <img 
        src='/assets/terminal.png' 
        alt="contact background" 
        className="w-full h-full object-contain "
      />
    </div>

    {/* Contact Form Content */}
    <div className="relative z-10 w-full max-w-xl mx-auto pb-10 ">
      <div className='contact-container pt-16'>
        <h3 className="head-text mt-6">Contact Me</h3>
        <p className="text-lg text-gray-400 mt-3"> 
          Let's connect! Whether you have a project in mind or just want to say hello, 
          I'll do my best to get back to you promptly.
        </p>

        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className='mt-12 flex flex-col space-y-7'
        >
          {/* Keep all your form fields the same */}
          {/* ... existing form fields ... */}
          <label className="space-y-3">
            <span className="field-label">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="Monish Soni"
            />
          </label>

          {/* Email Input */}
          <label className="space-y-3">
            <span className="field-label">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="work.monish@gmail.com"
            />
          </label>

          {/* Message Textarea */}
          <label className="space-y-3">
            <span className="field-label">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="field-input"
              placeholder="Hi, I'd like to discuss a potential project..."
            />
          </label>

          {/* Submit Button */}
          <button 
            className="field-btn group" 
            type="submit" 
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
            <img 
              src="/assets/arrow-up.png" 
              alt="arrow-up" 
              className="field-btn_arrow group-hover:translate-y-[-3px] transition-transform" 
            />
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

 </>
    )
}
export default Contact
