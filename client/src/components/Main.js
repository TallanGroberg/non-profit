import React from 'react'
import ArticlePreview from './ArticlePreview'
import '../css/main.css'

function Main() {
    return (
        <div className='main-container'>
            <p className='category-name'>Category</p>
            <ArticlePreview />
            <hr />
            <ArticlePreview />
            <hr />
            <ArticlePreview />
            <hr />
        </div>
    )
}


export default Main