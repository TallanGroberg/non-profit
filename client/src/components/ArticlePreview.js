import React from 'react'
import '../css/article-preview.css'

function ArticlePreview() {
    return (
        <div className='article-preview'>
            <div className='article-info'>
                <p className='title'>This is a simple title. his is a simple title. his is a simple title.</p>
                <p className='author'>Author Name</p>
                <p className='date'>May 01, 2020</p>
                <p className='subtitle'>Heave to gaff Spanish Main man-of-war. Bilge rat topgallant galleon main sheet. Pressgang parley hornswaggle chandler.</p>
            </div>

            <div className='article-image'></div>
        </div>
    )
}


export default ArticlePreview