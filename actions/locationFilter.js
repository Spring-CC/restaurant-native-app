
import data from "../data/TokyoStations.json";

export default function locationFilter(array, location){

let japLocation = data.filter(item => item.EnglishName===location)

const result = array.filter(item => item.code.category_name_l[0].includes(japLocation.JapanName)
|| item.code.category_name_l[1].includes(japLocation.JapanName) )

return result;

 }
