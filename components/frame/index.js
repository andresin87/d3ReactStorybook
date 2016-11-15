/**
 * Created by alucas on 14/11/16.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var validateURL = require('react-proptypes-url-validator');
require('./index.css');

class Frame extends Component {

    componentDidMount() {
        this.renderFrameContents();
    }
    renderFrameContents() {
        var doc = this.content.contentDocument;
        if(doc.readyState === 'complete') {
            // React.renderComponent(this.props.children, doc.body);
        } else {
            // This will be continiously called until the iFrame is ready to render into
            setTimeout(this.renderFrameContents, 0);
        }
    }

    componentDidUpdate() {
        console.log('frame!');
        console.log(this.content);
        console.log(this.content.contentDocument)
    }

    render() {
        console.log(this.props.hiddenMargins);
        return (
            <div className="container">
                <h1>Frame</h1>
                <div
                    className="iframeWrapper"
                    style={ (() => {
                        if(this.props.scrolling === 'hidden') {
                            return {
                                height: this.props.height,
                                width: this.props.width,
                                overflow: 'hidden',
                            };
                        }
                    })()}
                >
                    <iframe
                        className={`component ${this.props.className}`}
                        src={this.props.src ? this.props.src : ''}
                        width={(() => this.props.scrolling === 'hidden' ? this.props.width + this.props.hiddenMargins[0] : this.props.width)()}
                        height={(() => this.props.scrolling === 'hidden' ? this.props.height + this.props.hiddenMargins[1] : this.props.height)()}
                        seamless={this.props.seamless}
                        scrolling={ (() => {
                                if (typeof this.props.scrolling === 'bool') {
                                    return this.props.scrolling ? 'yes' : 'no';
                                }else if (this.props.scrolling === 'hidden') {
                                    return 'yes';
                                } else {
                                    return this.props.scrolling;
                                }
                            })()
                        }
                        ref={(self) => { this.content = self; }}
                    />
                </div>
            </div>
        );
    }
}

Frame.propTypes = {
    src: validateURL,
    width: React.PropTypes.oneOfType([
        React.PropTypes.float,
        React.PropTypes.string
    ]),
    height: React.PropTypes.oneOfType([
        React.PropTypes.float,
        React.PropTypes.string
    ]),
    className: React.PropTypes.string,
    scrolling: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf(['yes', 'no', 'auto', 'hidden']),
    ]), // http://www.w3schools.com/TAgs/att_iframe_scrolling.asp
    seamless: React.PropTypes.bool, // http://www.w3schools.com/TAgs/att_iframe_seamless.asp
    hiddenMargins : React.PropTypes.shape({
        height: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired,
    }),
};
export default Frame;