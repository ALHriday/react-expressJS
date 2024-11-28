import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import User from "./User";
// import { data } from "react-router-dom";

const AddUsers = () => {

    // const data = useLoaderData();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
        .then(data => setUsers(data))
    },[])


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        // console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {               
                if (data.insertedId) {
                    alert('User Added Successfully');
                    const newUser = [...users, data];
                    setUsers(newUser);
                    form.reset();
                }
            });
    }
    return (
        <div>
            <h1 className="text-center text-4xl font-bold py-6">Add User</h1>
            <div className="bg-teal-200 p-4 w-[300px] mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="text" name="name" id="" />
                    <input type="email" name="email" id="" />
                    <input className="btn" type="submit" value="Add-User" />
                </form>
            </div>

            <div className="border-2 p-4">
                {users.map((user, idx) => <User key={idx} user={user}></User>)}
            </div>

        </div>
    );
};

export default AddUsers;