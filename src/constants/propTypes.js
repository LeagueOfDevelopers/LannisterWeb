import PropTypes from 'prop-types';

export const screen = PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
});

