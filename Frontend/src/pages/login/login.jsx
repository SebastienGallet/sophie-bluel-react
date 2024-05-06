function Login() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Se connecter</button>
            </form>
        </div>
    )
}

export default Login