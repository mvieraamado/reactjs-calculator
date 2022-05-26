import './button.css';

const Button = (props)=> {
    const isOperator = value => {
        // eslint-disable-next-line
        return isNaN(value) && (value != '.') && (value != '=');
    }

    return (
        <div className={`buttonContainer ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
            {props.children}
        </div>
    )
}

export default Button;