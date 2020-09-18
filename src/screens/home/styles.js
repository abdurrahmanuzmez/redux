import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchInput: {
        alignSelf: 'center',
    },
    line: {
        width: 10000,
        height: 1,

        marginTop: 15,
        marginBottom: 5,

        backgroundColor: colors.gray,
    },
    fabButton: {
        position: 'absolute',
        bottom: 36,
        end: 36,
    },
});

export const playerObjectStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    playerName: {
        flex: 1,
        marginStart: 12,

        color: colors.text_color,
    },
    playerFlag: {
        width: 32,
        height: 20,

        borderRadius: 4,
    },
});
