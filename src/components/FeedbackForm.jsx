import { useState } from "react"

const FeedbackForm = () => {

    // when dealing with multiple form inputs, consider using an object instead of separate state variables
    const [formData, setFormData] = useState({
        name: "",
        topic: "",
        rating: 3,
        message: ""
    })

    // keep track of submitted data that we want to display
    // don't need default values, we don't want to display anything until submit, use null, which is't an object and is falsey
    const [feedbackData, setFeedbackData] = useState(null)

    // event gets passed into all eventListeners by default
    const handleChange = (event) => {

        // console.log(event)
        // to figure out which property to update, we can use the "name" of each input to 
        // to access the name property, use event.target.name
        // console.log(event.target.name)

        // destructure the event to get name and value
        const {name, value} = event.target

        // property we're trying to update: event.target.name
        // event.target.value
        const updatedFormData = {

            // copy over existing formData into our new object
            ...formData,
            
            // bracket notation [] evalueates what we pass into the brackets and allows us to use it as a key, which we need here because we need a one-word value for the property
            // [event.target.name]: event.target.value
            [name]: value
        }

        setFormData(updatedFormData)
    }

    const handleSubmit = (event) => {
        // prevent refreshing
        event.preventDefault()

        // alert(`Name: ${formData.name} - Topic: ${formData.topic} - Rating: ${formData.rating} - Message: ${formData.message}`)

        // set our feedback data equal to our formData when we submit
        setFeedbackData(formData)
    }

    return (
        <>
            <h2>-Website Feedback-</h2>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label>Name: </label>
                    <input 
                        // when using a form stat object, make sure every imput has a UNIQUE name property that MATCHES the key we want to modify in our formData object: name="keyName"
                        // this allows us to use a single handleChange function instead of one for each input
                        name="name"
                        // to link our input to the proper object property, set the value equal to the respective object property: value={formData.property}
                        value={formData.name} 
                        onChange={handleChange}/>
                </div>

                {/* Dropdown */}
                <div>
                    <label>Topic:</label>
                    <select 
                        name="topic" 
                        value={formData.topic} 
                        onChange={handleChange}>
                            <option>Choose a Topic</option>
                            <option value="ui">UI</option>
                            <option value="performance">Performance</option>
                            <option value="content">Content</option>
                            <option value="other">Other</option>
                    </select>
                </div>

                {/* Rating */}
                <div>
                    <label>Rating: </label>
                    <input 
                        name="rating"
                        type="number" 
                        min={1} 
                        max={5} 
                        value={formData.rating} 
                        onChange={handleChange}/>
                </div>

                {/* Message Section */}
                <div>
                    <label>Message: </label>
                    {/* textarea in a div for appearance sake */}
                    <div>
                        <textarea 
                            name="message"
                            style={{ width: "400px", resize: "none" }} 
                            rows={16} 
                            value={formData.message} 
                            onChange={handleChange}/>
                    </div>
                </div>
                <button>Submit</button>
            </form>
            {/* only shows when we have an object for feedbackData */}
            {feedbackData && (
                <>
                <h3>Name: {feedbackData.name}</h3>
                <p> Topic: {feedbackData.topic}</p>
                <p>Rating: {feedbackData.rating}</p>
                <p>Message: {feedbackData.message}</p>
                </>
            )}
        </>
    )
}

export default FeedbackForm