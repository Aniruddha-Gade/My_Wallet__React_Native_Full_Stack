import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleProp, StyleSheet, View } from 'react-native';

interface ImageComponentProps {
    imageStyle?: StyleProp<ImageStyle>;
    resizeMode?: 'cover'
    | 'contain'
    | 'stretch'
    | 'repeat'
    | 'center';
    source?: ImageSourcePropType;
    LoaderContent?: React.ReactNode;
    ErrorContent?: React.ReactNode;
}

function ImageComponent(props: ImageComponentProps) {

    const {
        imageStyle = {},
        resizeMode = 'cover',
        LoaderContent,
        ErrorContent,
        source
    } = props;

    const [loader, setLoader] = React.useState(false);
    const [error, setError] = React.useState(false);

    return (
        <View style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
            {
                loader &&
                <View style={style.loaderView}>
                    {LoaderContent && <LoaderContent />}
                    {/* <Text style={style.loaderText}>{LABEL.LOADING}</Text>
          <ActivityIndicator size="small" color={Color.primary} /> */}
                </View>
            }

            {
                error &&
                <View style={style.loaderView}>
                    {ErrorContent && <ErrorContent />}
                    {/* <Text style={[style.loaderText, { marginRight: 0, color: Color.red }]}>{LABEL.IMAGE_ERROR}</Text> */}
                </View>
            }

            <Image
                source={source}
                style={{ height: '100%', width: '100%', ...imageStyle }}
                resizeMode={resizeMode}
                onLoadStart={() => setLoader(true)}
                onLoad={() => setLoader(false)}
                onError={() => {
                    setError(true);
                    setLoader(false);
                }}
                onLoadEnd={() => setLoader(false)}
            />
        </View>
    );
};

export default ImageComponent;

const style = StyleSheet.create({
    loaderView: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Color.thin_light_grey,
        flexDirection: 'row',
    },
});