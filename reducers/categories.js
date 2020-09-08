const categories = {
"居酒屋": false, // izakaya 
"日本料理": false, // japanese
"寿司": false, //sushi
"鍋": false, //nabe
"焼肉":false, // yakiniku
"焼き鳥":false, //yakitori
"焼肉・ホルモン":false, //yakiniku offal
"お好み焼き":false, //onomiyaki
"うどん":false, //udon
"中華":false, //chinese
"イタリアン・フレンチ":false, //italy french
"フレンチ":false, // french
"ラーメン":false, //ramen
"カレー":false, // curry
"カフェ":false,　// cafe
"メキシコ料理":false, // mexican
"とんかつ（トンカツ）":false, // tonkatsu
"定食・食事処":false, //set menu
"ワイン":false, // wine
"しゃぶしゃぶ":false, // shabushabu
"ステーキ":false, //steak
"ハンバーグ":false, //hamberger
"洋食屋":false, // western restaurant 
"火鍋":false, // hot pot
"バー":false, // bar
"そば":false, //soba
}

const categoryReducer = (state = categories, action) => {
    switch (action.type) {
        case "CATEGORY":
            return {...state, categories: action.payload}
        default:
            return state;
    }
}

export default categoryReducer;