import { LoadMoreButton } from './Button.styled'
import propTypes from 'prop-types';

export const Button = ({onClick}) => {
    return <LoadMoreButton type="button" onClick={onClick}>
        Load more
    </LoadMoreButton>

};

Button.propTypes = {
    onClick: propTypes.func.isRequired
};