import React, {useState, useEffect, useContext} from 'react';
import { authContext } from '../../../providers/AuthProvider';
import axios from "axios";
import AllArticles from '../../../displayingArticles/AllArticles.js'

const Admin = () => {
  const [abuseReports, setAbuseReports] = useState([])
  const {user, } = useContext(authContext)

  console.log(abuseReports)
  
  useEffect( () => {
    axios.get('/report')
    .then(res => {
      setAbuseReports(res.data)
    })
  }, [])

  return (
    <div data-testid="admin">
      {abuseReports.length > 0 && <AllArticles abuseReports={abuseReports} />}
    </div>
  );
};



export default Admin;