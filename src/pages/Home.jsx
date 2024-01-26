import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

import moment from 'moment';
const Home = () => {
    const [tasks, setTasks] = useState([])
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const MySwal = withReactContent(Swal)



    useEffect(() => {
        const getAllTasks = async () => {
            const { data } = await axios.get('http://localhost:5000/')
            setTasks(data.data)
        }
        getAllTasks()
    }, [])


    const postTask = async (e) => {
        e.preventDefault()
        console.log(status);
        const { data } = await axios.post('http://localhost:5000/create', {
            name,
            status
        })
        MySwal.fire({
            title: 'Task Created',
            icon: "success"
        })
        setName('')
        setStatus('')
    }

    useEffect(() => {
        postTask()
    }, [])


    const deleteTask = async (id, name) => {
        console.log(id);
        const { data } = await axios.delete(`http://localhost:5000/${id}`)
        MySwal.fire({
            title: `${name} is Deleted`,
            icon: "success"
        })
    }
    useEffect(() => {
        deleteTask()
    }, [])

    const setToComplete = async (id, name) => {
        const newFormData = {
            // name: name,
            status: true
        }
        try {
            await axios.put(`http://localhost:5000/update/${id}`, newFormData)
            MySwal.fire({
                title: `${name} Task Completed`,
                icon: "success"
            })

        } catch (error) {
            MySwal.fire({
                title: error.message,
                icon: "error",

            })
        }
    }




    const handleReload = () => {
        window.location.reload()
    }

    return (
        <div className='flex flex-col justify-center items-center py-10 px-10'>
            <button className='mb-10 bg-lime-400 text-gray-900 p-4 rounded-full place-self-end' onClick={handleReload}>
                <TfiReload />
            </button>
            <table className='border-separate border-spacing-2 border border-slate-400'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-3 text-center'>Task Name</th>
                        <th className='border border-slate-300 p-3 text-center'>Created At</th>
                        <th className='border border-slate-300 p-3 text-center'>Status</th>
                        <th className='border border-slate-300 p-3 text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(({ _id, name, createdAt, status }) => (
                            <tr key={_id} className='space-y-2 py-5'>
                                <td className='border border-slate-300 p-3 text-center'>{name}</td>
                                <td className='border border-slate-300 p-3 text-center'>{moment(createdAt).format('ll')}</td>
                                <td className={`border border-slate-300 p-3 text-center text-white font-medium py-1 px-2 cursor-pointer ${status === 'true' ? 'bg-green-700  cursor-not-allowed' : 'bg-red-700'}`}
                                    onClick={() => setToComplete(_id, name)}> <button className={`${status === 'true' ? 'cursor-not-allowed' : 'cursor-pointer'}`}>{status === 'true' ? 'Completed' : 'Not Complete'}</button></td>
                                <td title='delete' className='border border-slate-300 p-3 text-center'>
                                    <button className='hover:text-red-600 transition-all' onClick={() => deleteTask(_id, name)}><MdDelete /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className='flex justify-center items-center mt-10 border p-10'>
                <form onSubmit={postTask}>
                    <div className='flex flex-col justify-center'>
                        <label htmlFor="">Task Name</label>
                        <input type="text" placeholder='Put Task Name' className='border p-1 rounded-md' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <label htmlFor="">Status</label>
                        <select name="" id="" defaultValue='false' value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">Select status</option>
                            <option value="true">Completed</option>
                            <option value="false">Not Complete</option>
                        </select>
                        {/* <input type="text" placeholder='Put Status' className='border p-1 rounded-md' /> */}
                    </div>
                    <button className='py-1 px-3 bg-amber-400 mt-3 rounded-md'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Home;