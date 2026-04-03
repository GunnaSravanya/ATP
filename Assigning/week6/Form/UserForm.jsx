import { useState } from "react";
import { useForm } from "react-hook-form";

function UserForm() {
  const [users, setUsers] = useState([]);

  const { register, handleSubmit, reset } = useForm();

  // form submit
  const onSubmit = (data) => {
    setUsers([...users, data]); // add user
    reset(); // clear form
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl mb-5">User Form</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <input
          type="text"
          placeholder="Enter Name"
          {...register("name")}
          className="border p-2 m-2"
        />

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
          className="border p-2 m-2"
        />
        <input
          type="number"
          placeholder="Enter mobile no"
          {...register("mobileno")}
          className="border p-2 m-2"
        />

        <button className="bg-blue-500 text-white p-2 rounded">Add User</button>
      </form>

      {/* Display Users */}
      <h2 className="mt-5 text-xl">Users List</h2>
      <table className="border m-auto border-collapse gap-3">
        <thead>
          <tr>
            <th className="border p-3">Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Mobile no</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td className="border p-3">{user.name}</td>
              <td className="border p-3">{user.email}</td>
              <td className="border p-3">{user.mobileno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserForm;
