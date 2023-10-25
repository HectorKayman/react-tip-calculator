export default function App() {
  return (
    <div className="container col-md-8 col-lg-6 mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary-subtle fw-semibold text-primary-emphasis">
          Average Tip Calculator
        </div>
        <div className="card-body">
          <h4 className="card-title">Enter the bill to calculate the tip</h4>
          <Form />
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="bill" className="form-label">
          How much was the bill?
        </label>
        <input type="number" className="form-control" id="bill" />
      </div>
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
      <div className="mb-3">
        <label htmlFor="friend-tip" className="form-label">
          How did your friend like the service
        </label>
        <select className="form-select" name="friend-tip" id="friend-tip">
          <option defaultValue={null}>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </form>
  );
}
