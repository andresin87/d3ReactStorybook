/**
 * Created by alucas on 14/11/16.
 */
import React, { Component } from 'react';

import { Editor } from 'react-draft-wysiwyg';
require('react-draft-wysiwyg/dist/react-draft-wysiwyg.css');

class Wysiwyg extends Component {
    render() {
        return (
            <div className="container">
                <h1>Draft</h1>
                <Editor/>
            </div>
        );
    }
}
export default Wysiwyg;