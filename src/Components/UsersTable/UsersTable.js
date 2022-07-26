import { UserRow } from "../UserRow/UserRow";
import "./UsersTable.css";

export const UsersTable = ({ users }) => {
  return (
    <>
      <h2 className="table__header">Users</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="table__head">All Users</th>
          </tr>
          <tr className="table__row">
            <th scope="col">User details</th>
            <th scope="col">Company Name</th>
            <th scope="col">Email</th>
            <th scope="col">Distance</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};
