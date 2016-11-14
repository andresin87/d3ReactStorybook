/**
 * Created by alucas on 14/11/16.
 */
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Wysiwyg from './';

storiesOf('Wysiwyg', module)
    .add('single', () => (
        <div className="container">
            <Wysiwyg/>
        </div>
    ));