import React from "react";
import Source from 'components/general/Source'

const Content = () => {
  return (
    <div className='container'>
      <h4>Flexbox Sticky Footer and React</h4>
      <p>So I had to determine what in React would act as the
        <strong>equivalent</strong> of the <code>&lt;body&gt;&lt;/body&gt;</code>
        tag and the proceeding &lt;div&gt;&lt;/div&gt; tag.
      </p>
      <p>Forget about the  <code>&lt;body&gt;&lt;/body&gt;</code> tag!
        It's the <code>&lt;div className="App"&gt;&lt;/div&gt;</code>
        which is React's <code>&lt;body&gt;&lt;/body&gt;</code> tag.
        <br />
        Then, I added a new <code>&lt;div className="Site-content"&gt;&lt;/div&gt;</code>
        below that.
        <br />
        Notice how the <code>&lt;Footer /&gt;</code> component has been
        <strong> isolated</strong> from the rest of the App's structure.
      </p>
      <samp>
        This text is meant to be treated as sample output from a computer program.
      </samp>
      <hr/>
      <Source link="https://dev.to/letsbsocial1/flexbox-sticky-footer-and-react-e1h" />
    </div>
  )
}
export default Content;