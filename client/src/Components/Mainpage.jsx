import {useState} from 'react';
import axios from "axios";
import PromptInput from "../Components/PromptInput/PromptInput";
import './main.css';
// import {ResponseInterface} from "../PromptResponseList/response-interface";
import PromptResponseList from "../Components/PromptResponseList/PromptResponseList";


const Mainpage = () => {

  const [responseList, setResponseList] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [promptToRetry, setPromptToRetry] = useState(null);
  const [uniqueIdToRetry, setUniqueIdToRetry] = useState(null);
  const [modelValue, setModelValue] = useState('gpt-3.5-turbo');
  const [isLoading, setIsLoading] = useState(false);
 
   let loadInterval;
  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  }

  const htmlToText = () => {
    const temp = document.createElement('div');
    temp.innerHTML =prompt;
    return temp.textContent;
  }

  const delay = (ms) => {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  const addLoader = (uid) => {
    const element = document.getElementById(uid);
    element.textContent = ''

    // @ts-ignore
   loadInterval= setInterval(() => {
      // Update the text content of the loading indicator
      element.textContent += '.';

      // If the loading indicator has reached three dots, reset it
      if (element.textContent === '....') {
        element.textContent = '';
      }
    }, 300);
  }


  const addResponse = (selfFlag, response) => {
    const uid = generateUniqueId()
    setResponseList(prevResponses => [
      ...prevResponses,
      {
        id: uid,
        response,
        selfFlag
      },
    ]);
    return uid;
  }

  const updateResponse = (uid, updatedObject) => {
    setResponseList(prevResponses => {
      const updatedList = [...prevResponses]
      const index = prevResponses.findIndex((response) => response.id === uid);
      if (index > -1) {
        updatedList[index] = {
          ...updatedList[index],
          ...updatedObject
        }
      }
      return updatedList;
    });
  }

  const regenerateResponse = async () => {
    await getGPTResult(promptToRetry, uniqueIdToRetry);
  }

    let uniqueId;
  const getGPTResult = async (_promptToRetry , _uniqueIdToRetry ) => {
    // Get the prompt input
    const _prompt = _promptToRetry ?? htmlToText(prompt);

    // If a response is already being generated or the prompt is empty, return
    if (isLoading || !_prompt) {
      return;
    }

    // setIsLoading(true);

    // Clear the prompt input
    setPrompt('');


    if (_uniqueIdToRetry) {
      uniqueId = _uniqueIdToRetry;
    } else {
      // Add the self prompt to the response list
      addResponse(true, _prompt);
      uniqueId = addResponse(false);
      await delay(50);
      addLoader(uniqueId);
    }

    try {
      // Send a POST request to the API with the prompt in the request body
       const response = await axios.post('http://localhost:8080/get-prompt-result', {
        prompt:prompt,
      });

        
     
        updateResponse(uniqueId, {
          response: response.data.message.content

        });
   

      setPromptToRetry(null);
      setUniqueIdToRetry(null);
    } catch (err) {
      setPromptToRetry(_prompt);
      setUniqueIdToRetry(uniqueId);
      updateResponse(uniqueId, {
    
        response: `Error: ${err.message}`,
        error: true
      });
    } finally {
    
      clearInterval(loadInterval);
      setIsLoading(false);
    }
  }

  

  return (
    <div className="App">
      <div id="response-list">
        <PromptResponseList responseList={responseList} key="response-list"/>
      </div>
      
      <div id="input-container">
        <PromptInput
          prompt={prompt}
          onSubmit={() => getGPTResult()}
          key="prompt-input"
          updatePrompt={(prompt) => setPrompt(prompt)}
        />
        <button id="submit-button" className={isLoading ? 'loading' : ''} onClick={ getGPTResult}></button>
      </div>
    </div>
  );
}

export default Mainpage;
