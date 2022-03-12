import propTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled'

export const Button = ({onClick}) => {
    return <LoadMoreButton type="button" onClick={onClick}>
        Load more
    </LoadMoreButton>
};

Button.propTypes = {
    onClick: propTypes.func.isRequired
};