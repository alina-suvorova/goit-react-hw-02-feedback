import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    
    return (
        <div>
            {Object.keys(options).map((option)=>
                <Button variant="contained" type="button" name={option} key={option} onClick={onLeaveFeedback} style={{marginRight: "10px"}}>{option}</Button>
            )}
        </div>
    );
}

export default FeedbackOptions;

FeedbackOptions.propType = {
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),),
  }