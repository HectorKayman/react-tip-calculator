import { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState(0);
  const [userTip, setUserTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleReset() {
    setBill(0);
    setUserTip(0);
    setFriendTip(0);
  }

  return (
    <div className="container col-md-8 col-lg-6 mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary-subtle fw-semibold text-primary-emphasis">
          Average Tip Calculator
        </div>
        <div className="card-body">
          <Result bill={bill} userTip={userTip} friendTip={friendTip} />
          <Form
            bill={bill}
            userTip={userTip}
            friendTip={friendTip}
            onSetBill={setBill}
            onSetUserTip={setUserTip}
            onSetFriendTip={setFriendTip}
          />
          <Reset onReset={handleReset} />
        </div>
      </div>
    </div>
  );
}

function Result({ bill, userTip, friendTip }) {
  if (bill === 0 || isNaN(bill))
    return <h4 className="card-title">Enter the bill to calculate the tip</h4>;

  const avgTipPercent = (userTip + friendTip) / 2;
  const avgTip = (bill * avgTipPercent) / 100;
  const finalAmount = bill + avgTip;

  return (
    <h4 className="card-title">
      You pay ${finalAmount} (${bill} + ${avgTip} tip)
    </h4>
  );
}

function Form({
  bill,
  userTip,
  friendTip,
  onSetBill,
  onSetUserTip,
  onSetFriendTip,
}) {
  return (
    <form>
      <Bill bill={bill} onSetBill={onSetBill} />
      <Tip tip={userTip} onSetTip={onSetUserTip}>
        How did <em>you</em> like the service?
      </Tip>
      <Tip tip={friendTip} onSetTip={onSetFriendTip}>
        How did your <em>friend</em> like the service?
      </Tip>
    </form>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div className="mb-3">
      <label htmlFor="bill" className="form-label">
        How much was the bill?
      </label>
      <input
        type="number"
        className="form-control"
        id="bill"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ tip, onSetTip, children }) {
  return (
    <div className="mb-3">
      <label htmlFor="user-tip" className="form-label">
        {children}
      </label>
      <select
        className="form-select"
        name="user-tip"
        id="user-tip"
        value={tip}
        onChange={(e) => onSetTip(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was pretty good (10%)</option>
        <option value="15">It was really good (15%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <button className="btn btn-primary px-4 rounded-pill" onClick={onReset}>
      Reset
    </button>
  );
}
