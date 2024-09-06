import React from 'react';
import NoteIcon from '../utils/icons/NoteIcon';
import AddIcon from '../utils/icons/AddIcon';

const Todo = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-16 md:w-32 lg:w-[400px] m-auto shadow-sm rounded-lg border border-[#ececec]'>

                {/* Heading */}
                <div className='flex p-5 gap-3 items-center'>
                    <span>
                        <NoteIcon />
                    </span>
                    <h1 className='font-bold text-3xl'>Note App</h1>
                </div>

                {/* Input and button field */}
                <div className='flex px-5 gap-3 items-center w-100'>
                    <input type="text" className='border p-2 border-[#ececec] h-9 w-3/4 rounded-lg shadow-sm' placeholder='New Note....' />
                    <button className='rounded-md p-1.5 bg-[#904107] flex items-center gap-1 m-1'>
                        <span>
                            <AddIcon />
                        </span>
                        <h2 className='text-white font-semibold'>Add</h2></button>
                </div>

                {/* Todo List */}
                <div className='px-2 m-4'>
                    <h1 className='font-bold text-lg border-[#ececee] border-b-2'>Notes</h1>
                    <div className='h-[290px] overflow-y-auto'>
                        <p className='py-3 border-[#ececee] border-b-2'>List</p>
                        <p className='py-3 border-[#ececee] border-b-2'>List</p>
                        <p className='py-3 border-[#ececee] border-b-2'>List</p>
                        <p className='py-3 border-[#ececee] border-b-2'>List</p>
                        <p className='py-3 border-[#ececee] border-b-2'>List</p>
                        <p className='py-3 border-[#ececee] border-b-2'>List</p>
                        <p className='py-3 border-[#ececee] border-b-2'>List</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;

