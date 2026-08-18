// import Login from "./login/login"

import Login from "../components/login/login"

const GetStarted = ({onLoginSuccess}) => {
    return (
        <div >
            <Login onLoginSuccess={onLoginSuccess} />
        </div>
    )
}

export default GetStarted
