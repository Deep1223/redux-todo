import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from './features/todoSlice';

const ListData = ({ searchtext, setSelectedData, handleopenaddmodal }) => {
    const data = useSelector(state => state.todo.todoData);
    const dispatch = useDispatch();

    // Filter data based on the search text
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchtext.toLowerCase()) ||
        item.email.toLowerCase().includes(searchtext.toLowerCase())
    );

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr className="thead-dark">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contactNo}</td>
                                <td>
                                    <button 
                                        type="button" 
                                        className="btn btn-primary" 
                                        onClick={() => handleopenaddmodal(item)}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleDelete(item.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No results found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListData;
