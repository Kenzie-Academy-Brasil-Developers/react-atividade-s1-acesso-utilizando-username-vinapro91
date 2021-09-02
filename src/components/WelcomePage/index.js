const WelcomePage = ({ user, setIsLoggedIn }) => {

    function HandleLogout () {
        setIsLoggedIn(false)
    }
    return (
        <>
        <span>Bem vindo(a), {user}</span>
        <button onClick={HandleLogout}>Logout</button>
        </>
    )

}
export default WelcomePage