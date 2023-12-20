const Contact = () => {
    return ( 
        <>
      <section id="contact" className="body2 header1">
        <h2>Contact Us</h2>
        <p>Feel free to get in touch with us for any questions or inquiries. We would be more than happy to assist you!</p>
        <form action="">
            <label for="name" align="left">Name:</label>
            <input type="text" id="name" name="name" required placeholder="Required"></input>
            
            <label for="email"align="left">Email:</label>
            <input type="email" id="email" name="email" placeholder="Required" required pattern="@"></input>

            <label for="phone"align="left">Mobile Number:</label>
            <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}"></input>
            
            <label for="message" align="left">Message:</label>
            <textarea id="message" name="message" rows="4" required placeholder="Write your message here"></textarea>
            
            <button type="submit" style={{marginBottom:"35px"}}>Send</button>
        </form>
    </section>

    
        <p>&copy; 2023 Nyaay Sahaayak Services</p>
    
        </>
     );
}
export default Contact;