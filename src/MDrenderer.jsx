import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'
import md from './Test.md';
import 'github-markdown-css'
 
class MDrenderer extends React.PureComponent {
  state = {
    markdown: ''
  }
 
  componentWillMount() {
    fetch(md)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }
 
  render() {
    const { markdown } = this.state;
 
    return (
      <ReactMarkdown 
      children={markdown}
      className='markdown-body' 
      escapeHtml={false}
      remarkPlugins={[gfm]} 
       />
    );
  }
}
 
export default MDrenderer;