const palette = {
    blue: '#082550',
    highlightBlue:'#496083',
    orange: '#FF991D',
    white: '#FFFFFF',
    grey: '#595959',
    inactiveGrey: '#ABAEB0',
    successful:'#25D366',
    failed:'#F02D2D',
    black:'#0000',
    white:'#FFFFF'
}

export const theme = {
    colors: {
        grey: palette.grey,
        inactiveGrey: palette.inactiveGrey,
        background: palette.white,
        foreground: palette.blue,
        primary: palette.blue,
        orange: palette.orange,
        success: palette.successful,
        danger: palette.danger,
        failure: palette.danger,
        highlightBlue: palette.highlightBlue
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        header: {
            fontfamily: 'Nunito',
            fontSize: 36,
            fontWeight: 'bold',
        },
        body: {
            fontFamily: 'Merriweather',
            fontSize: 16,
        },
    }
};

export const darkTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        background: palette.black,
        foreground: palette.white,
    }
}