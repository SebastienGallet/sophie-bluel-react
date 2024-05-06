function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <p>Vous avez un projet ? Discutons-en !</p>
            <form>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    );
}

export default Contact;