import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// eslint-disable-next-line react/prop-types
const Edit = ({ currentId }) => {
    const [updateName, setUpdateName] = useState('')
    const [updateDesc, setUpdateDesc] = useState('')
    const [updateDueTask, setUpdateDueTask] = useState('')
    const MySwal = withReactContent(Swal)

    // UPDATE/edit a task
    const updateTask = async () => {

        const newFormData = {
            name: updateName,
            desc: updateDesc,
            dueTask: updateDueTask
        }
        console.log(newFormData);
        try {
            await axios.patch(`https://chaintech-be.vercel.app/update/${currentId}`, newFormData)
            MySwal.fire({
                title: `Updated successfully`,
                icon: "success"
            }).then(function () {
                window.location.reload()
            })

        } catch (error) {
            MySwal.fire({
                title: error.message,
                icon: "error",
            })
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        updateTask()
    }
    return (
        <div>
            <form
                onSubmit={handleUpdate}
            >
                <table className='mt-5'>
                    <tbody>
                        <tr>
                            <td className='border border-slate-300 p-3 text-center'>
                                <input type="text" placeholder='Name' className='border-none outline-none focus:border-gray-200'
                                    value={updateName}
                                    onChange={(e) => setUpdateName(e.target.value)}
                                />
                            </td>
                            <td className='border border-slate-300 p-3 text-center'>
                                <input type="text" placeholder='Description' className='border-none outline-none focus:border-gray-200'
                                    value={updateDesc}
                                    onChange={(e) => setUpdateDesc(e.target.value)}
                                />
                            </td>
                            <td className='border border-slate-300 p-3 text-center'>
                                <input type="date" placeholder='Due Date' className='border-none outline-none focus:border-gray-200'
                                    value={updateDueTask}
                                    onChange={(e) => setUpdateDueTask(e.target.value)}
                                />
                            </td>
                            <td className='border border-slate-300 p-3 text-center'>
                                <button type='submit' className='bg-yellow-300 py-1 px-2 rounded-md'>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Edit;