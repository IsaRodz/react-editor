import React, { useState } from 'react'

import ReactHtmlParser from 'react-html-parser'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor() {

    const [content, setContent] = useState('')
    const [article, setArticle] = useState('')


    const handleChange = (e, editor) => {
        setContent(editor.getData())
    }

    return (
        <div style={{
            width: '80%',
            margin: 'auto'
        }}>

            <h1>New post...</h1>
            <CKEditor
                editor={ClassicEditor}
                data="Type in here your post content..."
                onChange={handleChange}
            />
            <button
                onClick={() => setArticle(content)}
            >Save content</button>
            <div>{ReactHtmlParser(article)}</div>
        </div>)
}

export default Editor