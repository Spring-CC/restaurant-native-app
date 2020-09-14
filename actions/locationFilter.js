
import data from "../data/TokyoStations.json";

export default function locationFilter(array, location){

if(location=== null || location === ''){
    return array;
}

let japLocation = data.filter(item => item.EnglishName===location)

const result = array.filter(item => item.code.areaname_s.includes(japLocation.JapanName))

return result;

 }
