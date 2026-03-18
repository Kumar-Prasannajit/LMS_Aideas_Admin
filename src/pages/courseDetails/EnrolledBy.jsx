import "./EnrolledBy.css"

function EnrolledBy() {

  const users = Array(7).fill({
    name: "yashwanth",
    email: "maraganiyash@gmail.com"
  })

  return (
    <div className="enrolled">
      <table className="user-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Unenroll</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td className={i === 0 ? "link" : ""}>{user.name}</td>
              <td className={i === 0 ? "link" : ""}>{user.email}</td>
              <td className="delete">✖</td>
            </tr>
          ))}
        </tbody>

      </table>

      
      <div className="pagination">
        <button>{"<"}</button>
        {[1,2,3,4,5,6].map(n => <button key={n}>{n}</button>)}
        <button>{">"}</button>
      </div>

      
      <div className="email-section">

        <label>Email*</label>
        <p className="helper">
          Enter emails of learners to enroll in this course (comma separated)
        </p>

        <textarea
          placeholder="learner1@example.com, learner2@example.com"
        />

        <div className="done-wrapper">
          <button className="btn-primary">DONE</button>
        </div>

      </div>

    </div>
  )
}

export default EnrolledBy