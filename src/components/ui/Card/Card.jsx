import "./Card.css"

function Card({title, children, action}){

  return(

    <div className="dashboard-card">

      <div className="card-header">

        <h3>{title}</h3>

        {action && <span className="card-action">{action}</span>}

      </div>

      <div className="card-body">

        {children}

      </div>

    </div>

  )

}

export default Card