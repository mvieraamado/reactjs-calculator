import './clearButton.css';

const ClearButton = (props)=> {
    return (
        <button className='clearButton' onClick={()=> props.handleClear()}>
            {props.children}
        </button>
    )
}

export default ClearButton;