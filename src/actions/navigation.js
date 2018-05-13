import {NavigationActions} from 'react-navigation';

export const navigate = ({
    route,
    // key,
    // action,
    // params = {},
}) => dispatch => {
    dispatch(NavigationActions.navigate({
        routeName: route.key,
    }));
};
