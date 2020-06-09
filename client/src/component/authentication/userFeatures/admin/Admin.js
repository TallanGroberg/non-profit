import React, {useState, useEffect, useContext} from 'react';
import { authContext } from '../../../providers/AuthProvider';
import {articleContext} from '../../../providers/ArticleProvider'
import axios from "axios";
import AllArticles from '../../../displayingArticles/AllArticles.js'
import OneArticle from '../../../displayingArticles/OneArticle';
import ReportArticle from '../../../displayingArticles/usersOptions/ReportArticle';
import Content from '../../../displayingArticles/Content'
const Admin = () => {
  const [abuseReports, setAbuseReports] = useState([])
  const {user, setError, error } = useContext(authContext)
  const {setArticles, articles,setArticle, article } = useContext(articleContext)

  console.log(abuseReports)

  console.log()
  
  useEffect( () => {
    axios.get('article/report')
    .then(res => {
      setAbuseReports(res.data)
        const articles = res.data.map(article => {
          return article.article
        })
        const article = res.data.map(article => {
          return article.article
        })

        setArticle(article)
      
      setArticles(articles)
    })
    .catch(err => {
      setError(err.message)
    })
  }, [])

  const dismissReport = (_id) => {
    axios.delete('/article/report/' + _id)
    .then( res => {
      alert('article dismissed')
      const filteredReports = abuseReports.filter(report => {
        return report._id !== _id
      })
      setAbuseReports(filteredReports)
    })
  }
  const deleteArticle = (_id, report_id) => {
    axios.delete('/article/' + _id)
    .then(res => {
      axios.delete('/article/report/' + report_id)
      .then(res => {
        const filteredReports = abuseReports.filter(report => {
          return report._id !== report_id
        })
        setAbuseReports(filteredReports)
        alert('article was deleted from the site')
      })
    })
    .catch(err => {
      alert('an error happened contact site administrator')
    })
  }

  return (
    <div data-testid="admin">
      {abuseReports.length > 0 && abuseReports.map(report => {
        
        return <>

                  <h1>{report.article.title}</h1>
                    <h2>{report.article.description}</h2>
                      <p>{report.article.displayDate}</p>
                        <img src={report.article.displayImage} />
                          <Content content={report.article} />
                            <button onClick={() => dismissReport(report._id)}>dismiss article</button>
                            <button onClick={() => deleteArticle(report.article._id, report._id)} >remove content</button> 
              </>
      })} 
    </div>
  );
};



export default Admin;