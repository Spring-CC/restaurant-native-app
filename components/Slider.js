// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ScrollView} from 'react-native';
// import MultiSlider from '@ptomasroos/react-native-multi-slider'

// export default function Slider() {

//     const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
//     const multiSliderValuesChange = (values) => setMultiSliderValue(values)
//     return (
//         <ScrollView >
//          <MultiSlider
//           values={[multiSliderValue[0], multiSliderValue[1]]}
//           sliderLength={280}
//           onValuesChange={multiSliderValuesChange}
//           min={0}
//           max={100}
//           allowOverlap={false}
//           minMarkerOverlapDistance={10}
//          />
//        </ScrollView>
//        );
// }