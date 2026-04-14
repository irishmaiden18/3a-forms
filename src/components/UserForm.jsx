import { useState } from "react"

const UserForm = () => {

    /*
        form input state
        - set up your input element and your state and link them together via the value: <input value={state} />
        - then, set up an onChange to keep track of changes made to the input element. the onChange should utilize event.target.value (value that is currently in the input field) onChange((event) => handleInputFunction(event.target.value))
        - utilize your setState function to modify the state to equal the value of event.target.value, thus making it so our input and our state have the same value: setStateFunction(event.target.value)

    */

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    // a state specifically for keeping track of the data we are displaying
    // const [userDisplay, setUserDisplay] = useState("--none--")
    // const [emailDisplay, setEmailDisplay] = useState("--none--")

    const [userDisplay, setUserDisplay] = useState({
        username: "--none--", 
        email: "--none--"})

    const handleUserInput = (usernameInput) => {
        
        // console.log(usernameInput)
        // console.log(username)
        setUsername(usernameInput)
    }

    const handleSubmit = (event) => {

        // prevents the page from refreshing on submit
        // ALWAYS use this!
        event.preventDefault()

        //alert(`Username: ${username}`)

        // setUserDisplay(username)
        // setEmailDisplay(email)

        // userDisplay object
        // setUserDisplay({username: username, email: email})
        
        // for objects, if the property name matches the variable name (like { username: username, email: email }), you can use the following shorthand:
        setUserDisplay({username, email})

        // clear the input state variable
        setUsername("")
        setEmail("")
    }

  return (
    <>
        <h2>User Form</h2>
        <h3>CurrentUser: {userDisplay.username}</h3>
        <h3>Email: {userDisplay.email}</h3>

        <form onSubmit={handleSubmit}>

            <div>
                <label>Username: </label>
                {/* event.target.value for our onChange keeps track of what we are typing in the input element */}
                <input 
                    value={username} 
                    onChange={(event) => handleUserInput(event.target.value)}/>
            </div>

            <div>
                <label>Email: </label>
                <input 
                    type="email"
                    value={email}
                    // only need separate handler function for additional logic/steps. if those aren't needed, the setStateFunction for the current input should be all you need 
                    onChange={(event) => setEmail(event.target.value)}/>
            </div>

            <button>Submit</button>
        </form>
    </>
  )
}

export default UserForm