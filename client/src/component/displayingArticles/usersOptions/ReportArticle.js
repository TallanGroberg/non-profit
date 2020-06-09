import React, {useState, useEffect, useContext} from 'react';
import { articleContext } from '../../providers/ArticleProvider';
import Axios from 'axios';
import { authContext } from '../../providers/AuthProvider';

const ReportArticle = () => {
  const [reported, setReported] = useState(false)
  const [status, setStatus] = useState('')
  const{article} = useContext(articleContext)
  const {user, token} = useContext(authContext)

  console.log(status)
  const reportAbuse = () => {
    setStatus('report sent')
    Axios.post('/article/report', {article: article._id,
                            user: article.user._id, 
                              reportedBy: user._id})
    .then(res => {
      setReported(true)
      if(res.status === 204) {
        setStatus('already reported')
      } else {
      }

    })
    .catch( err => {
            console.error(err)
    })
  }

  return (
    <div>
      {token !== '' ? 
      <button onClick={reported ? null : reportAbuse} id="report-content">{reported ? 'report sent' : "Report as inappropriate"}</button>
      : 
        null
    }
    </div>
  );
};

export default ReportArticle;