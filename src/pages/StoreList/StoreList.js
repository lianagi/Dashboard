import "./storeList.css"
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { storeRows } from "../../DummyData"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function StoreList() {
    const [data, setData] = useState(storeRows);

    const[stores, setStores] = useState([]) 

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const getStoresData = async () => {
        try {
          const res = await axios.get(`https://api-find-talyer.herokuapp.com/api/store`);
        setStores(res.data);
          console.log(res.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
    useEffect(() => {
        getStoresData()

    }, [])
    console.log(typeof(stores))

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: '_id', headerName: 'Account ID', width: 200 },
        { field: 'dateOfRegistration', headerName: 'Date of Registration', width: 200 },
        { field: 'accountType', headerName: 'Account Type', width: 200 },
        { field: 'firstname', headerName: 'First Name', width: 200 },
        { field: 'lastname', headerName: 'Last Name', width: 200 },
        { field: 'middlename', headerName: 'middlename', width: 200 },
        { field: 'gender', headerName: 'Gender', width: 200 },
        { field: 'age', headerName: 'Age', width: 200 },
        { field: 'storeName', headerName: 'Store Name', width: 200 },
        { field: 'storeAddress', headerName: 'Store Address', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'password', headerName: 'Password', width: 200 },
        { field: 'contactNo', headerName: 'ContactNo', width: 200 },
        { field: 'otpUsed', headerName: 'OTP', width: 200 },
        { field: 'isValidated', headerName: 'Validated', width: 200 },
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'profileURL', headerName: 'Profile', width: 150, renderCell: (params) =>{
            return(
                <div className="storeListItem">
                     <img className="storeListImg" src={params.row.profileURL} alt=""/>
                </div>
            )
        } },
        { field: 'coverPhotoURL', headerName: 'Cover Photo', width: 150, renderCell: (params) =>{
            return(
                <div className="storeListItem">
                     <img className="storeListImg" src={params.row.coverPhotoURL} alt=""/>
                </div>
            )
        } },
        { field: 'latitude', headerName: 'Latitude', width: 200 },
        { field: 'longitude', headerName: 'Longitude', width: 200 },
        { field: 'rating', headerName: 'Rating', width: 200 },
        { field: 'fullyVerified', headerName: 'Fully Verified', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) =>{
                return(
                    <>
                    <Link to={"/store/" + params .row.id}>
                    <button className="storeListEdit">Edit</button>
                    </Link>
                    <DeleteIcon className="storeListDelete" onClick={()=>handleDelete(params.row.id)} />
                    </>
                )
            }
        },
      ];
      

    return (
        <div className="storeList">
        <DataGrid
        rows={stores}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
