import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from '../Redux/action';


function EditContact() {


    const { id } = useParams()
    console.log(id)

    const dispatch = useDispatch()

    const AllContact = useSelector((store) => store.contacts)



    const [form, setForm] = useState({})

    const handleChange = (e) => {
     
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }




    function handleSave() {



        dispatch(editContact({ id, ...form }))

    }

    useEffect(() => {

        AllContact.filter((el) => el.id == id && setForm(el))

    }, [])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 font-serif italic">
      <div className="card w-1/2 mx-auto my-4 pt-6 shadow-lg rounded-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-4 ">Edit Contact</h2>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="first-name">
              First Name
            </label>
            <input
              className="form-control w-full border border-gray-400 p-2 rounded-md"
              id="first-name"
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="last-name">
              Last Name
            </label>
            <input
              className="form-control w-full border border-gray-400 p-2 rounded-md"
              id="last-name"
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="last-name">
              Mobile Number
            </label>
            <input
              className="form-control w-full border border-gray-400 p-2 rounded-md"
              id="last-name"
              type="number"
              name="mob"
              value={form.mob}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="status">
              Status
            </label>
            <select
              className="form-control w-full border border-gray-400 p-2 rounded-md"
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value={'active'}>Active</option>
              <option value={'inactive'}>Inactive</option>
            </select>
          </div>
          <button
            className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-serif italic"
            onClick={handleSave}
          >
            Save Contact
          </button>
        </div>
      </div>
    </div>
    );
}


export default EditContact