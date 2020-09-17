
import data from "../data/TokyoStations.json";

export default function locationFilter(array, location){

let japLocation = data.filter(item => item.EnglishName===location.name)

const result = array.filter(item => item.access.station.includes(japLocation[0].JapanName) )

return result;

 }
