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
  const avgTipPercent = (userTip + friendTip) / 2;
  const avgTip = (bill * avgTipPercent) / 100;
  const finalAmount = bill + avgTip;

  return (
    <h4 className="card-title">
      {bill === 0
        ? 'Enter the bill to calculate the tip'
        : `You pay ${finalAmount} (${bill} + ${avgTip} tip)`}
    </h4>
  );
}

function Form({ bill, userTip, friendTip }) {
  return (
    <form>
      <Bill bill={bill} />
      <Tip tip={userTip}>
        How did <em>you</em> like the service?
      </Tip>
      <Tip tip={friendTip}>
        How did your <em>friend</em> like the service?
      </Tip>
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

function Tip({ tip, children }) {
  return (
    <div className="mb-3">
      <label htmlFor="user-tip" className="form-label">
        {children}
      </label>
      <select className="form-select" name="user-tip" id="user-tip">
        <option defaultValue={null}>Open this select menu</option>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was pretty good (10%)</option>
        <option value="15">It was really good (15%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}
