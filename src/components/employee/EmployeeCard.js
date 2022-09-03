import { Link } from "react-router-dom"

const EmployeeCard = ({ employee }) => {
  const { id, name, company, company_logo, designation } = employee

  return (
    <div className="col-md-4 card mb-3 my-0 py-0" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-4 my-auto">
          <img
            src={company_logo ? company_logo : ""}
            className="img-fluid rounded ms-2"
            alt="logo"
          />
        </div>
        <div className="col-8">
          <div className="card-body ms-2">
            <h5 className="card-title">{name ? name : ""}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {company ? company : ""}
            </h6>
            <h6 className="card-subtitle mb-2 text-primary">
              {designation ? designation : ""}
            </h6>
            <Link to className="btn btn-info btn-sm" id={id}>
              view more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard
