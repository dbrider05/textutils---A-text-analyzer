import React,{useState} from 'react';
// import PropTypes from 'prop-types';


export default function TextForm(props) {
    const [text,setText] = useState('');
    
    const handleUpClick = () => {
        //console.log('Uppercase was clicked'+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to Uppercase", 'success');
    }
    
    const handleLowClick = () => {
        //console.log('Lowercase was clicked'+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to Lowercase", 'success');
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text", 'success');
    }

    const handleOnChange = (event) => {
        //console.log('On change');
        setText(event.target.value);
    }
    const handleCopyClick = ()=>{
        var copyText = document.getElementById("myText");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied Text to Clipboard", 'success');
    }

    const handleExtraSpaces = () => {
        setText(text.replace(/\s+/g, ' ').trim());
        props.showAlert("Removed Extra Spaces", 'success');
    }

    return (
        <>
        <div className = "container my-3">
            <h1 className='mb-4'>{props.heading}</h1>
            <div>
                <div className="mb-3" >
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}  value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').filter(()=>{return text.length !== 0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>

    )
}
