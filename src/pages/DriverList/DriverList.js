import "./driverList.css"
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { driverRows } from "../../DummyData"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function DriverList() {

    const[data, setData] = useState(driverRows);
    
    const[drivers, setDrivers] = useState([]) 


    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const getDriverData = async () => {
        try {
          const res = await axios.get(`https://api-find-talyer.herokuapp.com/api/driver`);
        setDrivers(res.data);
          console.log(res.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
    useEffect(() => {
        getDriverData()

    }, [])
    console.log(typeof(drivers))
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: '_id', headerName: 'AccountID', width: 200 },
        { field: 'firstname', headerName: 'Driver', width: 150, renderCell: (params) =>{
            return(
                <div className="driverListUser">
                     <img className="driverListImg" src={params.row.profileURL} alt=""/>
                     {params.row.firstname}
                </div>
            )
        } },
        { field: 'middlename', headerName: 'Middle Name', width: 200 },
        { field: 'lastname', headerName: 'Last Name', width: 200 },
        { field: 'gender', headerName: 'Gender', width: 200 },
        { field: 'age', headerName: 'Age', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'password', headerName: 'Password', width: 200 },
        {
          field: 'isValidated',
          headerName: 'Validated',
          width: 200,
        },
        {
            field: 'contactNo',
            headerName: 'Contact #',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) =>{
                return(
                    <>
                    <Link to={"/driver/" + params .row.id}>
                    <button className="driverListEdit">Edit</button>
                    </Link>
                    <DeleteIcon className="driverListDelete" onClick={()=>handleDelete(params.row.id)} />
                    </>
                )
            }
        },
        

      ];
      
    
    return (
        <div className="driverList">
              <DataGrid
        rows={drivers}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
