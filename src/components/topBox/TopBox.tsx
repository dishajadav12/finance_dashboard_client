import "./topBox.scss"
import { useState } from "react";
import {topDealUsers} from "../../data.ts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../add_transaction/Add_transaction.tsx";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "credited or debited",
    type: "string",
    headerName: "Transaction Type",
    width: 200,
  },
  {
    field: "eg. Housing, entertainment etc",
    headerName: "Category",
    width: 200,
    type: "string",
  },
  {
    field: "DD/MM/YYYY",
    headerName: "date",
    width: 150,
    type: "string",
  },
];

const TopBox = () => {
  const [open, setOpen] = useState(false);

  return (

    <div className="topBox">
      <div className="trans_title">
      <h3>Transaction History
      </h3>
      <span className="add-transaction">
          <FontAwesomeIcon style={{height:"30px"}} icon={faPlus} onClick={() => setOpen(true)}></FontAwesomeIcon>
        </span>
        </div>
      <div>
          {open && <Add slug="Transaction" columns={columns} setOpen={setOpen} />}
      </div>

      <div className="list">
        {topDealUsers.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">{user.amount} rs.</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox