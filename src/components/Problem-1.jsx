import React, { useState } from 'react';

const Problem1 = () => {
  const [show, setShow] = useState('all');
  const [tasks, setTasks] = useState([]); 
  const [nameInput, setNameInput] = useState('')
  const [statusInput, setStatusInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
 
     const newTask = { name: nameInput, status: statusInput };
   
     setTasks([...tasks, newTask]);

      setNameInput('');
    setStatusInput('');

     
  };

  const handleClick = (val) => {
    setShow(val);
  };

  // Filter and sort tasks based on the selected status
  const filteredTasks = tasks.filter((task) => {
    if (show === 'all') return true;
    return task.status === show;
  });

  // Sort tasks: Active first, Completed next, and others after Completed
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    const statusOrder = { active: 1, completed: 2, pending: 3, archive: 4 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={(e)=> setNameInput(e.target.value)}
                value={nameInput}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                onChange={(e)=> setStatusInput(e.target.value)}
                value={statusInput}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === 'all' && 'active'}`}
                type="button"
                onClick={() => handleClick('all')}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === 'active' && 'active'}`}
                type="button"
                onClick={() => handleClick('active')}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === 'completed' && 'active'}`}
                type="button"
                onClick={() => handleClick('completed')}
              >
                Completed
              </button>
            </li>
          </ul>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
