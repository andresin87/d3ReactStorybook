/**
 * Created by alucas on 14/11/16.
 */
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Frame from './';

storiesOf('Frame', module)
    .add('single', () => (
        <div className="container">
            <Frame
                src={`http://www.as.com`}
                className="story"
                seamless
                scrolling={'hidden'}
                width={800}
                height={900}
                hiddenMargins={[15,0]}
            />
        </div>
    ));