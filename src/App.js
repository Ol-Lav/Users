import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsers } from "./api";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { User } from "./Components/User/User";
import { UsersTable } from "./Components/UsersTable/UsersTable";
import { PageNotFound } from "./Components/PageNotFound/PageNotFound";
import { Navigation } from "./Components/Navigation/Navigation";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const usersData = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    usersData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/users" element={<UsersTable users={users} />} />
          <Route path="/users/:id" element={<User users={users} />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
