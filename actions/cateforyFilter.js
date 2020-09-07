

export default function categoryFilter(array, catObj){
    let trueObj = {};


    for(let key in catObj){
        if(catObj[key]=== true){
            trueObj[key]=true;
        }
    }

    const filterKeys = Object.keys(trueObj);

    return array.filter(item=>{
        if(filterKeys.includes(item.code.category_name_s[0]) || filterKeys.includes(item.code.category_name_s[0])) {
            return item;
        } 
        })
    }
