import { Link } from "react-router-dom"

const EmployeeCard = ({ employee }) => {
  const { id, name, company, company_logo, designation } = employee

  return (
    <div className="col-md-4">
      <div
        className="card rounded-4 border-primary border-opacity-50 mb-3 mx-auto"
        style={{ maxWidth: "540px", height: "226px" }}
      >
        <div className="row g-2 my-auto">
          <div className="col-5 my-auto">
            <img
              src={
                company_logo
                  ? company_logo
                  : "https://via.placeholder.com/120.png"
              }
              className="img-fluid rounded mx-4"
              alt="logo"
            />
          </div>
          <div className="col-7">
            <div className="card-body ms-2">
              <h5 className="card-title">{name ? name : "name"}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {company ? company : "company"}
              </h6>
              <h6 className="card-subtitle mb-2 text-primary">
                {designation ? designation : "designation"}
              </h6>
              <Link to={`/employee/${id}`} className="btn btn-info btn-sm">
                view more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard
