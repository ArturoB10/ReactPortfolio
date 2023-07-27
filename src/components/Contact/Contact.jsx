import "./Contact.css"

const Contact = ()=>
<div className = "Contact">

    <label>Contact</label>

    <input id = "Name" type="text" />
    
    <label htmlFor= "Email">Email</label>

    <input id = "Email" type="text" />

    <label htmlFor="Message">Message</label>

    <textarea name="Message" id="Message" cols="30" rows="10"></textarea>

    <button>  Submit  </button>

</div>

export default Contact;