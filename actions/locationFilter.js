
import data from "../data/TokyoStations.json";

export default function locationFilter(array, location){

let japLocation = data.filter(item => item.EnglishName===location)

const result = array.filter(item => item.access.station.includes(japLocation.JapanName) )

return result;

 }
