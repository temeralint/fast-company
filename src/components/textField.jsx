import PropTypes from 'prop-types';

const TextField = ({labelText, type, value, name, onChange, error}) => {
    return (
        <div>
            <label htmlFor={name}>{labelText}</label>
            <input 
                type={type} 
                id={name}
                value={value} 
                name={name}
                onChange={e => onChange(e)}
            />
            {error ? <p>{error}</p> : null}
        </div>
    )
}

TextField.defaultProps = {
    type: 'text'
}

TextField.propTypes = {
    labelText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

export default TextField;