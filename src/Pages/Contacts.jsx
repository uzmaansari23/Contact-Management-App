
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Popup from "../Components/Popup"
import { removeContact } from "../Redux/action"

const Contacts = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [singleContact, setSingleContact] = useState({})
    let data = undefined
    const AllContacts = useSelector((store) => store.contacts)
    const dispatch = useDispatch()
    // console.log(AllContacts)

    const togglePopup = (contact) => {

        setSingleContact(contact)

        setIsOpen(!isOpen)


    }
    useEffect(() => {

    }, [dispatch, AllContacts.length])
    return (
        <div className="justify-center pt-16 text-gray-50   p-4  w-full ">
            <div className="m-4">
                <button className="rounded-full bg-blue-400 p-3 mt-4 text-2xl font-serif italic">
                    <Link to="/contact_form">
                        Create Contact
                    </Link>
                </button>

            </div>
            {AllContacts.length == 0 && <div className=" m-auto w-fit p-4 align-middle text-black justify-center">

            <svg xmlns="http://www.w3.org/2000/svg" className="m-auto w-fit p-4 align-middle justify-center" x="0px" y="0px" width="300" height="300" viewBox="0 0 100 100">
      <path fill="#6b96d6" d="m38.32,33.93l42.14,30.83c5,3.68,6.07,10.71,2.39,15.71-3.68,5-10.71,6.07-15.71,2.39-.92-.68-1.74-1.52-2.39-2.39l-30.83-42.14c-1.03-1.4-.73-3.36.67-4.39,1.13-.83,2.65-.79,3.72,0Z"></path>
      <circle cx="38.98" cy="38.98" r="24.02" fill="#c9dcf4"></circle>
      <path fill="#6b96d6" d="m38.98,64.99c-6.66,0-13.33-2.54-18.4-7.61-10.15-10.15-10.15-26.65,0-36.8,10.14-10.15,26.65-10.15,36.8,0,10.15,10.15,10.15,26.65,0,36.8-5.07,5.07-11.74,7.61-18.4,7.61Zm0-48.02c-5.64,0-11.28,2.15-15.57,6.44-8.59,8.59-8.59,22.56,0,31.14,8.59,8.58,22.56,8.59,31.14,0,8.59-8.59,8.59-22.56,0-31.14-4.29-4.29-9.93-6.44-15.57-6.44Z"></path>
      <circle cx="29.74" cy="36.11" r="5.78" fill="#fff"></circle>
      <circle cx="29.74" cy="36.11" r="2.31" fill="#4a254b"></circle>
      <circle cx="48.22" cy="36.11" r="5.78" fill="#fff"></circle>
      <circle cx="48.22" cy="36.11" r="2.31" fill="#4a254b"></circle>
      <path fill="#4a254b" d="m34.99,43.04c-.36,0-.63.33-.57.68.34,2.21,2.25,3.91,4.56,3.91s4.22-1.69,4.56-3.91c.06-.36-.21-.68-.57-.68h-7.98Z"></path>
      <path fill="#4a254b" d="m54,61.23c-.16,0-.32-.08-.41-.22-.16-.23-.1-.54.13-.7,1.28-.88,2.48-1.88,3.59-2.99,1.92-1.92,3.52-4.12,4.73-6.53.12-.25.43-.34.67-.22.25.12.35.42.22.67-1.26,2.5-2.92,4.79-4.92,6.79-1.15,1.15-2.4,2.19-3.73,3.11-.09.06-.19.09-.28.09Z"></path>
      <path fill="#4a254b" d="m51,63.01c-.18,0-.36-.1-.45-.27-.12-.25-.03-.55.22-.67,1.02-.51,2.01-1.1,2.94-1.74.23-.16.54-.1.7.13.16.23.1.54-.13.7-.98.67-2,1.28-3.06,1.81-.07.04-.15.05-.22.05Z"></path>
    </svg>
                <h1 className="text-3xl font-serif italic">No Contact Found <br /> Please add contact from <br/>Create Contact Button</h1>
            </div>}
            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {
                    AllContacts.map((el) => {
                        return <div key={el.id} className="bg-blue-100 rounded-lg shadow-md m-4 p-4 text-black">
                            <div onClick={() => togglePopup(el)} className="w-3/4 m-auto  ">
                                <img className="w-full rounded-full" src="https://cdn-icons-png.freepik.com/512/9187/9187604.png" alt="" />
                                <div className="p-4">
                                    {isOpen &&
                                        <Popup close={() => togglePopup(data)} el={singleContact} />

                                    }
                                </div>    <div className="text-left">
                                    <p>First Name : {el.first_name}</p>
                                    <p>Last Name  : {el.last_name}</p>
                                    {/* <p>Mobile   : {el.mob}</p> */}
                                    <p>Status     : {el.status == "active" ? "Active" : "Inactive"}</p>
                                </div>

                            </div>

                            <div className="flex justify-between my-2">
                                <Link to={`edit/${el.id}`}>
                                    <button className="rounded p-2 bg-green-600 text-black">

                                        Edit
                                    </button>
                                </Link>

                                <button onClick={() => dispatch(removeContact(el.id))} className="rounded p-2 bg-red-600 text-white">Delete</button>
                            </div>
                        </div>
                    })
                }


            </div>

        </div>
    )
}

export default Contacts
