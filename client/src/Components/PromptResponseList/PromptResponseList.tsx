import React, { useEffect, useRef} from 'react';
import ReactMarkdown from 'react-markdown';


import './PromptResponseList.css';



const PromptResponseList = ({ responseList }) => {
  const responseListRef = useRef(null);
  console.log(responseList)

  // useEffect(() => {
  //   hljs.highlightAll();
  // })

  // useEffect(() => {
  //   hljs.highlightAll();
  // }, [responseList]);

  return (
    <div className="prompt-response-list" ref={responseListRef}>
      {responseList.map((responseData) => (
        <div className={"response-container " + (responseData.selfFlag ? 'my-question' : 'chatgpt-response')} key={responseData.id}>
          {/* <img className="avatar-image" src={responseData.selfFlag ? "" : ""} alt="avatar"/> */}
          <div className={(responseData.error ? 'error-response ' : '') + "prompt-content"} id={responseData.id}>
            { responseData.image &&
                <img src={responseData.image} className="ai-image" alt="generated ai"/>
            }
            { responseData.response &&
              <ReactMarkdown
                children={responseData.response ?? ''}
                components={{
                  code({className, children}) {
                    return(
                      <code className={className}>
                        {children}
                      </code>
                    )
                  }
                }}
              />
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromptResponseList;
