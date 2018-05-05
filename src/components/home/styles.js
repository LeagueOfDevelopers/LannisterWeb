import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    snippet: {
        marginHorizontal: 12,
        marginBottom: 12,
        backgroundColor: '#eee',
        padding: 12,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    snippetButton: {
        padding: 12,
        backgroundColor: '#333',
    },

    snippetButtonTitle: {
        color: 'white',
    },
});

