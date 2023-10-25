import { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState(0);
  const [userTip, setUserTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  return (
    <div className="container col-md-8 col-lg-6 mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary-subtle fw-semibold text-primary-emphasis">
          Average Tip Calculator
        </div>
        <div className="card-body">
          <Result bill={bill} userTip={userTip} friendTip={friendTip} />
          <Form bill={bill} userTip={userTip} friendTip={friendTip} />
        </div>
      </div>
    </div>
  );
}

function Result({ bill, userTip, friendTip }) {
  return <h4 className="card-title">Enter the bill to calculate the tip</h4>;
}

function Form({ bill, userTip, friendTip }) {
  return (
    <form>
      <Bill bill={bill} />
      <Tip tip={userTip} />
      <Tip tip={friendTip} />
    </form>
  );
}

function Bill({ bill }) {
  return (
    <div className="mb-3">
      <label htmlFor="bill" className="form-label">
        How much was the bill?
      </label>
      <input type="number" className="form-control" id="bill" />
    </div>
  );
}

function Tip({ tip }) {
  return (
    <div className="mb-3">
      <label htmlFor="user-tip" className="form-label">
        How did you like the service
      </label>
      <select className="form-select" name="user-tip" id="user-tip">
        <option defaultValue={null}>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}
