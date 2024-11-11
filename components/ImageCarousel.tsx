// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, Image, Pressable } from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
// import ImageViewing from 'react-native-image-viewing';

// const { width: screenWidth } = Dimensions.get('window');

// // Define the type for images
// type ImageItem = {
//   uri: string;
// };

// // Mock data for images
// const images: ImageItem[] = [
//   { uri: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/09israel-gaza-airstrikes-scene-01-qfgw-superJumbo.jpg?alt=media&token=568d2e2a-61cb-4db0-9664-0ab47e9980c1' },
//   { uri: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/09israel-gaza-airstrikes-scene-01-qfgw-superJumbo.jpg?alt=media&token=568d2e2a-61cb-4db0-9664-0ab47e9980c1' },
//   { uri: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/09israel-gaza-airstrikes-scene-01-qfgw-superJumbo.jpg?alt=media&token=568d2e2a-61cb-4db0-9664-0ab47e9980c1' },
//   { uri: 'https://firebasestorage.googleapis.com/v0/b/analitical-website.appspot.com/o/09israel-gaza-airstrikes-scene-01-qfgw-superJumbo.jpg?alt=media&token=568d2e2a-61cb-4db0-9664-0ab47e9980c1' },

// ];

// export default function ImageCarousel() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isViewerVisible, setIsViewerVisible] = useState(false);

//   // Render individual images in the carousel
//   const renderItem = ({ item, index }: { item: ImageItem; index: number }) => (
//     <Pressable onPress={() => setIsViewerVisible(true)}>
//       <View style={styles.imageContainer}>
//         <Image source={{ uri: item.uri }} style={styles.image} />
//       </View>
//     </Pressable>
//   );

//   return (
//     <View style={styles.carouselContainer}>
//       <Carousel
//         data={images}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.9}
//         onSnapToItem={(index) => setActiveSlide(index)}
//         loop={true}
//       />
//       <Pagination
//         dotsLength={images.length}
//         activeDotIndex={activeSlide}
//         containerStyle={styles.paginationContainer}
//         dotStyle={styles.activeDot}
//         inactiveDotStyle={styles.inactiveDot}
//         inactiveDotOpacity={0.4}
//         inactiveDotScale={0.6}
//       />
//       {/* Full-screen image viewer */}
//       <ImageViewing
//         images={images}
//         imageIndex={activeSlide}
//         visible={isViewerVisible}
//         onRequestClose={() => setIsViewerVisible(false)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   carouselContainer: {
//     marginTop: 20,
//     borderRadius: 20,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   imageContainer: {
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     borderRadius: 20,
//   },
//   paginationContainer: {
//     position: 'absolute',
//     bottom: -10,
//     alignSelf: 'center',
//   },
//   activeDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 2,
//     backgroundColor: '#FFFFFF',
//   },
//   inactiveDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 2,
//     backgroundColor: '#CCCCCC',
//   },
// });
