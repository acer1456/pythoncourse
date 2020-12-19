(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wei/Desktop/python/pythonCourse/src/main.ts */"zUnb");


/***/ }),

/***/ "6uvU":
/*!****************************!*\
  !*** ./src/app/courses.ts ***!
  \****************************/
/*! exports provided: courses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courses", function() { return courses; });
const courses = [
    {
        id: 0,
        group: 0,
        name: '安裝與介紹',
        content: '（環境與建立）',
        videourl: 'https://www.youtube.com/embed/yPhKSeVTwX0',
        text: '各位同學大家好首先歡迎大家修習這門課。 我們要在一學期之內，教會大家，從完全不懂程式，到可以利用python 程式語言進行文字探勘。這不是一件容易的工作，每週都有一個小作業，學期未有分組專業報告，根據過去經驗，平均每週要花十個小時以上，方能跟上進度。先問一下，是否有同學要加選？要加選同學，等一下下課十分鐘時處理。接著，介紹課程網站 piazza。大家是否有收到我寄給你們的邀請信，如果有的話，請自行註冊、登錄。就可以進來這個網站。我們上課所有的資料、學習包、錄影、討論、作業繳交，都在這個網站上進行。如果沒有收到邀請信的同學，同樣下課十分鐘時來我這邊處理。',
        pgd: '',
        pgdex: '',
    },
    {
        id: 1,
        group: 1,
        name: '變數創建與編修',
        content: '（基礎）',
        text: '學寫python 程式，首先要瞭解變數的意義。X=2, Y=3, Z=X+Y=5，X,Y,Z 都是變數。指定一個數字(常數) 給變數，變數與變數間就可以運算，例如上例中的加減乘除。Python 使用的變數有不同的類型，數字變數只是其中之一，其他的類型，例如字串(string)、清單(list)、有序清單(tuple)、集合(set)、序列(array)、字典(dictionary)、關聯表(DataFrame)等均是，不同的變數型態有不同的格式。當然，變數的型態還不只這些，本週及後面幾週，我們要把這些搞清楚，包括：如何產生新的變數，如何指定變數的值，以及變數與變數間的轉換與計算。',
        videourl: ['https://www.youtube.com/embed/u3WNJEw8pXU', 'https://www.youtube.com/embed/OuLRi0JoDw8', 'https://www.youtube.com/embed/_DgRSAr8jVw'],
        pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Ffc17b993ae02d1a577ee254f50163c060d194a5a61608e697ade47f3f216ca89%2F2_Py_python_basic.ipynb',
        pgdex: '',
    },
    {
        id: 2,
        group: 1,
        name: '程式基本邏輯',
        content: '（基礎）',
        text: 'Python 程式語言簡單易學，功能完整，幾乎無所不能。所謂的「程式」就是將一連串的「指令」串聯起來，電腦依你的設定逐步執行。學習程式可先從前人的程式範例開始，嘗試瞭解程式其邏輯，再修改成為自己要的，不斷試誤。每個單元，我們都會提供「學習包」，亦即範例程式，旁邊會有中文註解，請從學習包開始，每個 cells 依序執行(Shift-Enter)。有任何問題記得 google 上網查詢。鍵入python, 指令名稱，或程式出現的錯誤警告訊息，google 蒐尋，你會有意想不到的發現。本週課程重點是流程控制，設定一些條件，請電腦重覆執行，百次、千次。',
        videourl: ['https://www.youtube.com/embed/aXeA_RROAPM', 'https://www.youtube.com/embed/3gigrQhmibc', 'https://www.youtube.com/embed/QXpE-uvkBdU'],
        pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk100cb7xx26e%2F2_Py_program.ipynb',
        pgdex: '',
    },
    {
        id: 3,
        group: 2,
        name: '檔案與讀寫',
        content: '（共用模組）',
        text: 'Python 產生的資料可以儲存至硬碟，同時，也可以從硬碟叫進檔案。一般均以txt檔(文字檔)或csv, xlsx, xls 檔(關聯表)儲存之。dataframe 可儲存或讀取 xlsx, xls, csv 檔。pickle 用壓縮檔方式存檔，可儲存 list, dictionary。存檔與讀檔，很重要，大家必須熟悉。',
        videourl: ['https://www.youtube.com/embed/Pn5TLtSWB7g', 'https://www.youtube.com/embed/km-XgBgEBms'],
        pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk1u16s6u1wwx%2F6_Py_read_write.ipynb',
        pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk1ue88m05l7e%2Fpresident.rar',
    },
    {
        id: 4,
        group: 2,
        name: 'Numpy運算邏輯',
        content: '（共用模組）',
        text: 'Numpy 是處理 Array的常用模組。安裝 Anaconda 後就會自動安裝 numpy, 不需另行安裝。Array 即一串數字，可有多層級，適合矩陣運算，Numpy 提供方便的建置工具，亦可由List 轉換為 array。Numpy 有各種針對Array的數學計算功能，補強 python list 的不足，例如平均值、變異數或矩陣運算等。',
        videourl: ['https://www.youtube.com/embed/ShhwiqqR6c8', 'https://www.youtube.com/embed/rgHZJJqPW1c'],
        pdg: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk1t2m2n1r48x%2F4_Py_numpy_basic.ipynb',
        pgdex: '',
    },
    {
        id: 5,
        group: 2,
        name: 'Pandas表格應用',
        content: '（共用模組）',
        text: 'pandas 提供 dataframe()格式，適用於關聯表格（例如excel 工作表），進行統計分析、資料處理、資料存檔時極為有用。同學要學會 dataframe的建置、複製、編修、合併、計算、貯存，以及各種篩選功能。安裝 Anaconda 後就會自動安裝 pandas 不需另行安裝。',
        videourl: ['https://www.youtube.com/embed/fgBGPaSAemQ', 'https://www.youtube.com/embed/vpDidAI_nyM', 'https://www.youtube.com/embed/kGIc3QYL0y8', 'https://www.youtube.com/embed/yPPvXdAaBI4'],
        pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2nvr3ovnuez%2F3_Py_Pandas_Basic.ipynb',
        pgdex: '',
    },
    {
        id: 6,
        group: 2,
        name: 'Plot繪圖視覺化',
        content: '（共用模組）',
        text: 'pandas 有簡單的繪圖功能，但經常不夠用。繪圖模組 matplotlib 功能強大，更為常用，matplotlib 隨 anaconda 自動安裝，不需另行安裝。另外 seaborn 與 plotly 亦頗為常用，要另行安裝。各繪圖模組均有官方網頁介紹使用方法與範例，透過 google 即可查得。',
        videourl: ['https://www.youtube.com/embed/9E0uzDCk1zM', 'https://www.youtube.com/embed/ieZasokZhmg'],
        pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk24218t3a81l%2F5_Py_Plot.ipynb',
        pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk241eh004epu%2Fdf_聯合.pkl',
    },
    {
        id: 7,
        group: 3,
        name: '網路爬蟲',
        content: '（資料）',
        text: '本週開始，我們要介紹網路爬蟲基本方法與技巧。今天討論 request 與 beautiful soup 的用法，下過討論 regular expression, 是字串處理的進階工具，第三週討論幾個綜合的爬蟲案例。由於網頁多半以html 語言撰寫，BeuatifulSoup4 是解析html檔案非常好用的工具。因此，值得好好學學。安裝 python, Anaconda 之後，會自動安裝 BeuatifulSoup4，不須另外安裝。',
        videourl: ['https://www.youtube.com/embed/v2HMBOc2W14', 'https://www.youtube.com/embed/GSXgJhj_fT4', 'https://www.youtube.com/embed/VAvniDOpIvA'],
        pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2e4ogzfh6we%2F7_Py_BeautifulSoup.ipynb',
        pgdex: ['https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2dbnlk3scft%2F20180302_這裡要移除_蔣介石銅像變木乃伊.html', 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2dbh4gkinnk%2F_news.rar']
    },
    {
        id: 8,
        group: 3,
        name: '模擬器爬蟲',
        content: '（資料）'
    },
    {
        id: 9,
        group: 3,
        name: '正規表達式',
        content: '（資料）',
        text: 'Regular Expression 主要的功能是針對很長的string 進行文字解析，為文本分析的必要工具。安裝了 python, anaconda 後便會自動安裝 Regular Expression (re)，毋須另行安裝。Regualar Expression 經常配合 Beautiful soup 使用，擴大文字解析功能。要注意的是 Regular Expression 本是針對英文字串(string)而設計，英文字與字間有空白隔開，中文沒有。執行的結果略有差異。',
        videourl: 'https://www.youtube.com/embed/mWYdrc-Je3o',
        pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F29b886b368462368dd0411cb63c53e5a709014bed5cecf7335e6144d752aac97%2F7_Py_Regular_Expression.ipynb',
        pgdex: ''
    },
    {
        id: 10,
        group: '文字處理',
        name: '索引與搜尋檢索',
        content: '（文字處理）',
        videourl: ''
    },
    {
        id: 11,
        group: '文字處理',
        name: '中文與英文斷詞',
        content: '（文字處理）',
        text: '中文是以「字詞」為意義的單元，在閱讀時，我們下意識地，不是一個字一個字的讀，而是一個詞一個詞的讀，亦既已經先斷好詞了，這樣才理解句子的意義。例如：「電視台獨家報導中研院生化所的新冠疫苗研發已有成效」以上這句話被斷詞成「電視台─獨家─報導─中研院─生化所─的─新冠─疫苗─研發─已─初具─成效」。一般而言，中文的閱讀者從前後文，斷詞並不困難，雖然有的時候，不同的斷詞方式，有不同的意義，會產生誤解。熟知的例子如：「下雨天留客天天留我不留」不同的斷詞，語意可能完全相反。文字探勘，要電腦幫我們閱讀，首先就得正確的斷詞，斷詞正確與否，會影響其後的分析。本週，我們介紹一個簡便的斷詞模組：monpa。它是台灣中研院開發的大套工具、簡單好用，而且可以自己新增詞彙，校正錯誤。不過即使如此，我們還是無保證斷詞完全正確，因為中文實在太複雜了。如果發現錯誤，通常以人工的方式校正。',
        videourl: ['https://www.youtube.com/embed/Vmb3f62Db08', 'https://www.youtube.com/embed/pbQ7ByiNIvE'],
        pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F28b7be3e582b9a9d1b58fac72ac718a58f6192f235b09f0537ead417ed1c59cc%2F5_Py_token-monapa.ipynb',
        pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Fcd9956cb75f55b146349c990d298d9228c4d04667acad469f06aae31b9c62086%2Fpresident.rar'
    },
    {
        id: 12,
        group: '文字處理',
        name: '字詞共現性',
        content: '（文字處理）',
        text: '今天要探討的是「共現性」，亦即字詞共同出現的頻率。如果有兩個字詞經常同時出現，亦即在同篇文章、同個句字，或前後幾個字之間，同時出現，經常有特別的意義。例如，「蔡英文」經常和「總統」、「同婚」、「人權」、「反中」、「論文」、「選舉」等字眼同時出現，代表蔡英文必定和這些字詞有某種關聯。顯然，不同的政治人物，一起出現的字詞不同；不同的文本中，共同出現的字詞也不一樣。我們可以比較，不同政治人物的差異，也可以比較不同的文本的差異。本週學習的重點就是在探討字詞與字詞的關聯性，以及不同文章間與字詞使用的差異，同時以視覺化的方式呈現我們的發現。',
        videourl: ['https://www.youtube.com/embed/fdkIw-3Ogow', 'https://www.youtube.com/embed/_E_K5yvq1ko', 'https://www.youtube.com/embed/Kg5DNHgOrhA', 'https://www.youtube.com/embed/59kbkGluaWE'],
        pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F6e43aafd304f5221b5f64cd823b1057237f0552e2cbbbca4886a8af3158ea3e1%2F8_Py_word_frequency_president.ipynb',
        pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Fc17434cfbcab41749670aae33cca4a75a03d1a13d7f5a8fc285b62f898ff4798%2Fdoc_token.pkl'
    },
    {
        id: 13,
        group: '文字處理',
        name: '文章與字詞向量化',
        content: '（文字處理）',
        text: '文字探勘很重要的一個步驟是將字詞或文章向量化，這個過程稱為「自然語言處理」。字詞或文章變成向量之後，可以進行數學計算。向量與向量之間的夾角，可作為相似度的判斷標準。文章由字詞所構成，一般而言，字詞出現的頻率愈多，代表這個字詞愈重要，但事實不然，有些字詞經常出現，例如介繫詞、連接詞、語助詞，卻沒有多大意義，因此文章向量裡面的字詞通常會加權。TFIDF 就是一種常見的加權方法，亦即將文章的長短，與字詞的普遍性，納入考慮。當然，針對某些特定類型的字型逕行處理，增加其權數，或減少權數，亦頗為常見。本週的學習包以台灣歷任總統就職演說為例，先斷句，以句子為單位，TFIDF 加權，計算各字詞的重要性。接著篩選比較重要的字詞。我們將所有的字詞，投射在兩度空間上，比較不同時期，就職演說的差異。最後以句子為單位，比較各句子的相似度。',
        videourl: ['https://www.youtube.com/embed/91reSpiEQuo', 'https://www.youtube.com/embed/bsaxcI4vSl8', 'https://www.youtube.com/embed/O3FSywg4bqo'],
        pgd: ['https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Ff1faa7a70c0a9cf0981a8ac42669ae7cc4f9e644388c2d8c1a6ee97f1545a611%2F10_py_vectorize_TFIDF.ipynb', 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F9ecf7ff5fd31ae3b1b4cc0091e943838ead86f2192e862ee51221fee76b2052f%2F10_Py_TDIDF_president.ipynb'],
        pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Fc17434cfbcab41749670aae33cca4a75a03d1a13d7f5a8fc285b62f898ff4798%2Fdoc_token.pkl'
    },
    {
        id: 14,
        group: '文字處理',
        name: '降維與潛在語意分析',
        content: '（文字處理）',
        text: '上週我們談到了將字詞或文章向量化，變成文章字詞矩陣之後，方能進行數學計算。但是文章字詞矩陣通常很龐大，各種計算很耗時，因此乃有降維之舉，最常見者如SVD, PCA。降維除了將複雜的矩陣簡單化，還有去污存精的效果，刪除不要的資訊。潛在語意分析，運用降維的技巧，找到構成文章的不同概念。',
        videourl: ['https://www.youtube.com/embed/c-6-v--ifMU', 'https://www.youtube.com/embed/ipiarROouzo', 'https://www.youtube.com/embed/nD7A54GO2XE'],
        pgd: ['https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Ffbf1f154d1d10a72878cf4818da0ad7556592b772f3894f7ab725904e519a319%2F11_py_SVD_PCA.ipynb'],
        pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F5f1239e72cdc9ce55703ec7b9f4118d70d4783e1157a08a640e01fa262ed5e48%2Feditorial_token.xlsx'
    },
    {
        id: 15,
        group: '文字處理',
        name: '主題分析',
        content: '（文字處理）',
        text: '文章分群：上禮拜我們將文章向量化，TFIDF加權，降維，找出不同的軸，創造一個向量空間，文章與字詞都可以投影在這個向量空間之上，今天緊接著，我們要將文章分群，類似的文章分成一 群。以台灣歷任總統的就職演說為例，除了分群，我們也進行了潛在語意分析，抽離出四個概念，繪文字雲圖確定概念的意義，繪製散佈圖，比較不同文章的空間位置，和社會網絡圖，看不同文章的關聯性。主題分析：主題分析是從多篇文章中萃取主題，不同的主題代表不同的類別。各篇文章都是由不同的主題不同的比例所構成。各個主題亦是由不同的字詞依不同的比例所構成。',
        videourl: ['https://www.youtube.com/embed/et4TsGQqJ_0', 'https://www.youtube.com/embed/GpYgGSFt5wc'],
        pgd: ['https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F7feccf536acea57725df69b47c820529bf9367d9b240dbd8ed64c9a3fe655088%2F12_Py_clustering_president.ipynb', 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F49fa7355298347c99d5b6f1df1428ef69646a6920786829578931ebf09b49d26%2F12_Py_Topic_model.ipynb', 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F30b2c6db7959aba072ec937a37ac7cf3b6b8550729ad79a031f451a94f401ee6%2F12_Py_Topic_model-scattertext.ipynb'],
        pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F2157e74854e08868064b2c64c6486bf3d1974f90c133d32e635a65b6cd421329%2Fpresident_token.pkl'
    },
    {
        id: 16,
        group: '機器學習',
        name: '監督學習：分類',
        content: '（機器學習）',
        text: '「機械學習」簡單地說，簡單地說，就是從過去的經驗學習，亦即先給電腦一些已知的資料，讓電腦找出一些規則，或建立模型，接著才可以用在預測未知資料之上。當然，模型建的好不好，自然就很重要了，有一些指標可以衡量模型建的好不好，例如誤差的平方和，或預測的準確率等。從已知的資料建立模型，一點也不陌生，例如統計的迴歸分析就是這樣的應用。給定已知的觀察值，裡面有自變數、有依變數，就可以建立迴歸模型，我們可以計算可解釋百分比，亦即 R 平方，也可以看係數是否等零，自變數是否顯著，也可以給定自變數，預測依變數的大小。機械學習也是一樣，先給電腦一些已知的資料(依變數、自變數)，藉由演算法建構模型，自變數就可推估依變數。如果依變數是類別變數，例如正面或負面，此時稱為標記（label）。我們可以檢測模型預測標記的準確率。基本的做法是將已知資料分為「訓練集」與「測試集」兩組，訓練組的資料，用來建立模型。建立模型的方法有許多，今天的學習包會介紹十種建立模型的演算法，模型建立後套用在測試集，就可以檢查正確率了。正確率愈高的模型， 代表模型愈好。',
        videourl: 'https://www.youtube.com/embed/aWJYX99ItfI',
        pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Ff263501bbe71daddfea18ebc5a279fd510f8b3a3d9ecdfb54c962d2117cdc270%2F13_Py_plot_classifier_comparison.ipynb',
        pgdex: '',
    },
    {
        id: 17,
        group: '機器學習',
        name: '非監督學習：分群',
        content: '（機器學習）'
    },
    {
        id: 18,
        group: '機器學習',
        name: '情感分析',
        content: '（機器學習）',
        text: '「情感分析」是分類的應用。也是將已知資料分為「訓練集」與「測試集」兩組。這兩組資料都要有情感標記，例如本例中的 P 與 N。訓練組資料數量要夠多、品質要夠好，沒有標記錯誤、而且要有代表性，方能提高準確率。多個類別的的分類，例如 P N M 亦可進行，同學可以自己試試看。',
        videourl: 'https://www.youtube.com/embed/pfzhwmqXJZA',
        pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F0815e5eadff1a410e192193f5bee8d42262b9096d1e77ffc4aa320ac521679ff%2F13_Py______sklearn.ipynb',
        pgdex: ['https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F0e6da4ce1f2547bbb3d4febba5cb9907e6fec91ab6d38fcd6e3843bbb9dae6aa%2Fsentiment_P_N.xlsx', 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F8e61f7e23a1436c74790cf18b66472476455d68e1c695bc0860c3b3348aae860%2Ftest_pos_neg.xlsx']
    },
];
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 35, vars: 0, consts: [[1, "position-relative", "overflow-hidden", "p-5", "p-md-5", "text-center", 2, "background-color", "rgb(0, 0, 0)"], ["src", "https://webpageprod-ws.ntu.edu.tw/Download.ashx?u=LzAwMS9VcGxvYWQvMTAzMi9ja2ZpbGUvNTY2NGI3ODQtN2MzMy00ZGIzLWI5YmUtNWIxYmYzYWViMjhiLnBuZw%3d%3d&n=bWFqb3JfbG9nby5wbmc%3d", "alt", ""], [1, "container", "marketing"], [1, "row", "featurette"], [1, "col-md-7"], [1, "featurette-heading"], [1, "text-muted", 2, "font-weight", "600"], [1, "lead"], [1, "col-md-5"], ["width", "100%", "height", "350", "src", "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/02/20/99/7494056.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1200&exp=3600"], [1, "featurette-divider"], [1, "row"], [1, "col-lg-3"], ["width", "200px", "src", "data:image/jpeg;base64,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", "alt", "", 1, "bd-placeholder-img", "rounded-circle", 2, "padding", "10px"], ["href", "http://www.nd.ntu.edu.tw/News_Content_teacher.aspx?n=11&s=112", "role", "button", 1, "btn", "btn-secondary"], ["width", "200px", "src", "https://avatars2.githubusercontent.com/u/9964847?s=400&v=4", "alt", "", 1, "bd-placeholder-img", "rounded-circle", 2, "padding", "10px"], ["href", "https://github.com/acer1456", "role", "button", 1, "btn", "btn-secondary"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u7528\u7C21\u55AE\u7684\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u5B78\u7FD2\u7A0B\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u672C\u5802\u8AB2\u7A0B\u70BA\u53F0\u5927\u570B\u767C\u6240\u7684\u9078\u4FEE\u8AB2\u7A0B\uFF08Python\u7A0B\u5F0F\u5BEB\u4F5C\u8207\u6587\u672C\u5206\u6790\u5C0E\u8AD6\uFF09\u4E4B\u5EF6\u4F38\u5B78\u7FD2\u6A21\u7D44\u5316\u6559\u5B78\uFF0C\u65E8\u5728\u5E6B\u52A9\u7A0B\u5F0F\u521D\u5FC3\u8005\u7684\u540C\u5B78\u5011\u7528\u6A21\u7D44\u5340\u584A\u7684\u65B9\u5F0F\u3001\u6216\u662F\u7528\u8B70\u984C\u767C\u60F3\u7684\u65B9\u5F0F\u4F86\u5BE6\u4F5C\u5206\u6790\u6587\u672C\uFF0C\u5C0D\u65BC\u8AD6\u6587\u7684\u7814\u7A76\u67B6\u69CB\u8207\u767C\u60F3\u4E0A\uFF0C\u6709\u66F4\u6DF1\u4E00\u6B65\u7684\u5E6B\u52A9\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u9127\u5FD7\u677E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u526F\u6559\u6388");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u67E5\u770B\u66F4\u591A \u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Wei");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u570B\u767C\u6240\u78A9\u4E8C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u67E5\u770B\u66F4\u591A \u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".marketing[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n\n.marketing[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n\n\n\n.marketing[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-right: .75rem;\n  margin-left: .75rem;\n}\n\n\n\n\n\n.featurette-divider[_ngcontent-%COMP%] {\n  margin: 5rem 0; \n}\n\n\n\n.featurette-heading[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 1;\n  \n  letter-spacing: -.05rem;\n}\n\n\n\n@media (min-width: 40em) {\n  \n  .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4;\n  }\n\n  .featurette-heading[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n\n@media (min-width: 62em) {\n  .featurette-heading[_ngcontent-%COMP%] {\n    margin-top: 7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7b0RBQ29EOztBQUVwRCxzRUFBc0U7O0FBQ3RFO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQSxxQkFBcUI7O0FBQ3JCO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFDQSxtQkFBbUI7O0FBRW5COzJCQUMyQjs7QUFFM0I7RUFDRSxjQUFjLEVBQUUsc0NBQXNDO0FBQ3hEOztBQUVBLG9DQUFvQzs7QUFDcEM7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7b0RBQ29EOztBQUVwRDtFQUNFLHFDQUFxQztFQUNyQztJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTUFSS0VUSU5HIENPTlRFTlRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIENlbnRlciBhbGlnbiB0aGUgdGV4dCB3aXRoaW4gdGhlIHRocmVlIGNvbHVtbnMgYmVsb3cgdGhlIGNhcm91c2VsICovXG4ubWFya2V0aW5nIC5jb2wtbGctMyB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hcmtldGluZyBoNSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4vKiBydGw6YmVnaW46aWdub3JlICovXG4ubWFya2V0aW5nIC5jb2wtbGctMyBwIHtcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW07XG4gIG1hcmdpbi1sZWZ0OiAuNzVyZW07XG59XG4vKiBydGw6ZW5kOmlnbm9yZSAqL1xuXG4vKiBGZWF0dXJldHRlc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcbiAgbWFyZ2luOiA1cmVtIDA7IC8qIFNwYWNlIG91dCB0aGUgQm9vdHN0cmFwIDxocj4gbW9yZSAqL1xufVxuXG4vKiBUaGluIG91dCB0aGUgbWFya2V0aW5nIGhlYWRpbmdzICovXG4uZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC8qIHJ0bDpyZW1vdmUgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07XG59XG5cbi8qIFJFU1BPTlNJVkUgQ1NTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG5cbiAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDdyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 44, vars: 0, consts: [["role", "banner", 1, "page-header", 2, "text-shadow", "30px"], [1, "project-name"], [1, "project-tagline"], ["routerLink", "/course", 1, "btn", "btn-primary"], [1, "container", 2, "padding", "50px"], [1, "row", "row-cols-3", "center"], [1, "col"], [1, "card", "box"], ["width", "150", "height", "130", "src", "https://titangene.github.io/images/cover/python.png", 1, "rounded-circle"], ["width", "150", "height", "130", "src", "https://d32kak7w9u5ewj.cloudfront.net/media/image/2019/12/c5730005eac14860be4d9565d92d236a.jpg", 1, "rounded-circle"], ["width", "150", "height", "130", "src", "https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2019/10/26/USATODAY/usatsports/gettyimages-977398052.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp", 1, "rounded-circle"], [1, "container", 2, "padding", "20px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Python\u6A21\u7D44\u5B78\u7FD2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u7528\u6700\u7C21\u55AE\u7684\u65B9\u5F0F\u5B78\u7FD2\u7A0B\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u6240\u6709\u8AB2\u7A0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u5B78\u7FD2\u6A21\u7D44\u5316");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u5C07\u8981\u5B78\u7FD2\u7684\u5340\u584A\u62C6\u5206\u6210\u591A\u500B\u5B78\u7FD2\u7D44\u5408\uFF0C\u8B93\u521D\u5FC3\u8005\u80FD\u5920\u4E00\u76EE\u77AD\u7136\u77E5\u9053\u6BCF\u500B\u5B78\u7FD2\u5340\u584A\uFF0C\u66F4\u80FD\u5920\u5206\u914D\u597D\u5B78\u7FD2\u76EE\u6A19\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u554F\u984C\u5C0E\u5411\u5B78\u7FD2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u4EE5\u554F\u984C\u3001\u8B70\u984C\u7684\u65B9\u5F0F\uFF0C\u4F86\u5283\u5206\u5B78\u7FD2\u6A21\u7D44\u7684\u5340\u584A\uFF0C\u80FD\u5920\u8FC5\u901F\u4E86\u89E3\u81EA\u5DF1\u60F3\u8981\u89E3\u6C7A\u3001\u5206\u6790\u7684\u554F\u984C\uFF0C\u9700\u8981\u54EA\u4E9B\u5B78\u7FD2\u6A21\u7D44\u4F86\u5B8C\u6210\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u7DDA\u4E0A\u8207\u8A0E\u8AD6\uFF08\u5EFA\u7F6E\u4E2D\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u4EE5\u5B78\u7FD2\u5305\u3001\u9304\u88FD\u5F71\u7247\u7684\u65B9\u5F0F\u6559\u5B78\uFF0C\u8B93\u5B78\u7FD2\u8005\u80FD\u5920\u7121\u6642\u7121\u523B\u81EA\u5B78\u7A0B\u5F0F\u8207\u5206\u6790\uFF0C\u53E6\u6709\u8A0E\u8AD6\u5340\u584A\u80FD\u5920\u8B93\u6BCF\u4E00\u4F4D\u5B78\u7FD2\u4EA4\u6D41\u8A0E\u8AD6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "## \u70BA\u4EC0\u9EBC\u8981\u5B78python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u6587\u5B57\u8CC7\u6599\u4F86\u6E90\u5F88\u591A\uFF0C\u5831\u7AE0\u96DC\u8A8C\u3001\u5B98\u65B9\u6587\u66F8\u3001\u7DB2\u8DEF\u8AD6\u58C7\u3001\u6703\u8B70\u7D00\u9304\u3001\u6F14\u8B1B\u7A3F\u3001\u5C0D\u8A71\u3001\u672D\u8A18\u3001\u8A2A\u8AC7\u7B49\uFF0C\u683C\u5F0F\u591A\u6A23\uFF0C\u593E\u96DC\u8457\u4E0D\u76F8\u5E72\u7684\u96DC\u8A0A\u3001\u5716\u7247\u3001\u5EE3\u544A\u7B49\uFF0C\u5728\u5206\u6790\u4EE5\u524D\uFF0C\u6211\u5011\u8981\u5148\u6E05\u7406\u8CC7\u6599\uFF0C\u522A\u9664\u4E0D\u8981\u7684\uFF0C\u4FDD\u7559\u8981\u7684\uFF0C\u4EA6\u5373\u6709\u5927\u91CF\u7684\u524D\u7F6E\u4F5C\u696D\u8981\u9032\u884C\u3002\u9019\u500B\u5DE5\u4F5C\u66E0\u65E5\u5EE2\u6642\uFF0C\u6C92\u6709\u7C21\u4FBF\u7684\u5957\u88DD\u8EDF\u9AD4\u53EF\u7528\uFF0C\u5FC5\u9808\u4EF0\u8CF4\u6211\u5011\u81EA\u5DF1\u5BEB\u7A0B\u5F0F\u3002\u9019\u9580 \u8AB2\uFF0C\u6211\u5011\u4EE5 Python \u8A9E\u8A00\u70BA\u4E3B\u3002\u4E3B\u8981\u539F\u56E0\u662F\uFF0C\u5B83\u7C21\u55AE\u6613\u5B78\u3001\u61C9\u7528\u5EE3\u6CDB\uFF0C\u6709\u5927\u91CF\u7684\u7A0B\u5F0F\u5EAB\uFF0C\u53EF\u4F9B\u904B\u7528\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "## \u8AB2\u7A0B\u8A2D\u8A08\u8207\u5B78\u7FD2\u5305\u7684\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u672C\u8AB2\u7A0B\u5206\u6210\u4E09\u5927\u90E8\u5206\uFF1A\u4E00\u3001python \u7684\u7A0B\u5F0F\u8A9E\u6CD5\uFF1B\u4E8C\u3001\u7DB2\u8DEF\u722C\u87F2\uFF1B\u4E09\u3001\u6587\u5B57\u63A2\u52D8\uFF0C\u9032\u884C\u5404\u7A2E\u6587\u5B57\u7684\u5206\u6790\u3002 \u4E0D\u53EA\u662F\u4ECB\u7D39\u65B9\u6CD5\uFF0C\u66F4\u91CD\u8981\u7684\u662F\u8981\u5BE6\u4F5C\uFF0C\u5B78\u671F\u7D50\u675F\u524D\uFF0C\u6211\u5011\u6703\u5206\u7D44\uFF0C\u5404\u7D44\u90FD\u8981\u5B8C\u6210\u4E00\u500B\u5C08\u6848\u3002 \u6839\u64DA\u904E\u53BB\u7D93\u9A57\uFF0C\u672C\u8AB2\u7A0B\u4FEE\u8AB2\u5B78\u751F\u5E73\u5747\uFF0C\u6BCF\u9031\u8981\u82B1\u5341\u500B\u5C0F\u6642\u6E96\u5099\uFF0C\u65B9\u80FD\u8DDF\u5F97\u4E0A\u9032\u5EA6\u3002 \u5B78\u7FD2\u5305\u5C31\u662F\u7BC4\u4F8B\u7A0B\u5F0F\u3002\u5EFA\u8B70\u5927\u5BB6\u5B78\u7FD2\uFF0C\u5148\u5F9E\u5B78\u7FD2\u5305\u958B\u59CB\u3002 \u53EA\u8981\u7A0B\u5F0F\u5B89\u88DD\u6B63\u78BA\uFF0C\u8A2D\u597D\u8DEF\u5F91\uFF0C\u555F\u52D5 Anaconda Nevigator > Jupyter Notebook \u5373\u53EF\u9010\u6B65\u57F7\u884C\u5B78\u7FD2\u5305\u7684\u6307\u4EE4\u3002\u4E00\u500Bcell \u4E00\u500Bcell \u57F7\u884C\uFF0C\u57F7\u884C\u7684\u7D50\u679C\u99AC\u4E0A\u5448\u73FE\u3002 \u7A0B\u5F0F\u65C1\u908A\u6709\u8A3B\u89E3\uFF0C\u540C\u5B78\u4E5F\u53EF\u4EE5\u4FEE\u6539\u6307\u4EE4\uFF0C\u6BD4\u8F03\u4E0D\u540C\u6307\u4EE4\u7684\u5DEE\u7570\u3002 \u6240\u6709\u7684\u7A0B\u5F0F\u7BC4\u4F8B\uFF0C\u90FD\u8207\u6587\u5B57\u63A2\u52D8\u95DC\uFF0C\u4E5F\u5C31\u662F\u8AAA\uFF0C\u540C\u5B78\u5011\u4E00\u65B9\u9762\u5728\u5B78\u7FD2\u7A0B\u5F0F\u8A9E\u8A00\uFF0C\u53E6\u4E00\u65B9\u9762\u5DF2\u5728\u9032\u884C\u6587\u5B57\u63A2\u52D8\u4E86\u3002 \u6BCF\u500B\u5B78\u7FD2\u5305\u5F8C\u9762\uFF0C\u90FD\u6709\u6578\u76EE\u4E0D\u7B49\u7684\uFF0C\u7DF4\u7FD2\u8207\u4F5C\u696D\uFF0C\u9019\u662F\u8003\u9A57\u5927\u5BB6\u5B78\u7FD2\u6210\u679C\u7684\u6700\u597D\u65B9\u5F0F\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 960px;\n}\n.page-header[_ngcontent-%COMP%]{color:#fff;text-align:center;background-color:#159957;background-image:linear-gradient(120deg, #0f3c69, #0c492a)}\n@media screen and (min-width: 64em){.page-header[_ngcontent-%COMP%]{padding:7rem 1rem 5rem}}\n@media screen and (min-width: 42em) and (max-width: 64em){.page-header[_ngcontent-%COMP%]{padding:3rem 4rem}}\n@media screen and (max-width: 42em){.page-header[_ngcontent-%COMP%]{padding:2rem 1rem}}\n.project-name[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0.1rem}\n@media screen and (min-width: 64em){.project-name[_ngcontent-%COMP%]{font-size:3.25rem}}\n@media screen and (min-width: 42em) and (max-width: 64em){.project-name[_ngcontent-%COMP%]{font-size:2.25rem}}\n@media screen and (max-width: 42em){.project-name[_ngcontent-%COMP%]{font-size:1.75rem}}\n.project-tagline[_ngcontent-%COMP%]{margin-bottom:2rem;font-weight:normal;opacity:0.7}\n@media screen and (min-width: 64em){.project-tagline[_ngcontent-%COMP%]{font-size:1.25rem}}\n@media screen and (min-width: 42em) and (max-width: 64em){.project-tagline[_ngcontent-%COMP%]{font-size:1.15rem}}\n@media screen and (max-width: 42em){.project-tagline[_ngcontent-%COMP%]{font-size:1rem}}\n\n\n.marketing[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.box[_ngcontent-%COMP%] {\n\n  background:rgb(255, 255, 255);\n  padding:10px;\n  box-shadow:0 10px 30px rgba(92, 92, 92, 0.1);\n  border-radius:20px;\n  transition:0.5s;\n}\n.box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n  padding-top:10px;\n}\n.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  text-align:center;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBLGFBQWEsVUFBVSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLDBEQUEwRDtBQUFDLG9DQUFvQyxhQUFhLHNCQUFzQixDQUFDO0FBQUMsMERBQTBELGFBQWEsaUJBQWlCLENBQUM7QUFBQyxvQ0FBb0MsYUFBYSxpQkFBaUIsQ0FBQztBQUNwVyxjQUFjLFlBQVksQ0FBQyxvQkFBb0I7QUFBQyxvQ0FBb0MsY0FBYyxpQkFBaUIsQ0FBQztBQUFDLDBEQUEwRCxjQUFjLGlCQUFpQixDQUFDO0FBQUMsb0NBQW9DLGNBQWMsaUJBQWlCLENBQUM7QUFBQyxpQkFBaUIsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsV0FBVztBQUFDLG9DQUFvQyxpQkFBaUIsaUJBQWlCLENBQUM7QUFBQywwREFBMEQsaUJBQWlCLGlCQUFpQixDQUFDO0FBQUMsb0NBQW9DLGlCQUFpQixjQUFjLENBQUM7QUFFbGtCO29EQUNvRDtBQUVwRCxzRUFBc0U7QUFDdEU7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbn1cbi5wYWdlLWhlYWRlcntjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQtY29sb3I6IzE1OTk1NztiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMwZjNjNjksICMwYzQ5MmEpfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pey5wYWdlLWhlYWRlcntwYWRkaW5nOjdyZW0gMXJlbSA1cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MmVtKSBhbmQgKG1heC13aWR0aDogNjRlbSl7LnBhZ2UtaGVhZGVye3BhZGRpbmc6M3JlbSA0cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MmVtKXsucGFnZS1oZWFkZXJ7cGFkZGluZzoycmVtIDFyZW19fVxuLnByb2plY3QtbmFtZXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowLjFyZW19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSl7LnByb2plY3QtbmFtZXtmb250LXNpemU6My4yNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJlbSkgYW5kIChtYXgtd2lkdGg6IDY0ZW0pey5wcm9qZWN0LW5hbWV7Zm9udC1zaXplOjIuMjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyZW0pey5wcm9qZWN0LW5hbWV7Zm9udC1zaXplOjEuNzVyZW19fS5wcm9qZWN0LXRhZ2xpbmV7bWFyZ2luLWJvdHRvbToycmVtO2ZvbnQtd2VpZ2h0Om5vcm1hbDtvcGFjaXR5OjAuN31AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKXsucHJvamVjdC10YWdsaW5le2ZvbnQtc2l6ZToxLjI1cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MmVtKSBhbmQgKG1heC13aWR0aDogNjRlbSl7LnByb2plY3QtdGFnbGluZXtmb250LXNpemU6MS4xNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDJlbSl7LnByb2plY3QtdGFnbGluZXtmb250LXNpemU6MXJlbX19XG5cbi8qIE1BUktFVElORyBDT05URU5UXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiBDZW50ZXIgYWxpZ24gdGhlIHRleHQgd2l0aGluIHRoZSB0aHJlZSBjb2x1bW5zIGJlbG93IHRoZSBjYXJvdXNlbCAqL1xuLm1hcmtldGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib3gge1xuXG4gIGJhY2tncm91bmQ6cmdiKDI1NSwgMjU1LCAyNTUpO1xuICBwYWRkaW5nOjEwcHg7XG4gIGJveC1zaGFkb3c6MCAxMHB4IDMwcHggcmdiYSg5MiwgOTIsIDkyLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOjIwcHg7XG4gIHRyYW5zaXRpb246MC41cztcbn1cbi5ib3ggaDR7XG4gIHBhZGRpbmctdG9wOjEwcHg7XG59XG4uYm94IHB7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JqR5":
/*!********************************************!*\
  !*** ./src/app/course-details/safepipe.ts ***!
  \********************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safe' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "MvpR":
/*!**********************************!*\
  !*** ./src/app/modal.service.ts ***!
  \**********************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ModalService {
    constructor() {
        this.tabVal$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getTabVal(aa) {
        this.tabVal$.next(aa);
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Python文字探勘';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 29, vars: 1, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark"], [1, "container"], ["routerLink", "/", "routerLinkActive", "active", 1, "navbar-brand", "d-flex", "align-items-center"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-md-0"], [1, "nav-item"], ["routerLink", "/course", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link"], [1, "footer", "mt-auto", "py-3", "bg-light"], [1, "footerr"], [1, "text-muted", 2, "margin", "0"], ["href", "http://www.nd.ntu.edu.tw/News_Content_teacher.aspx?n=11&s=112"], [1, "text-muted"], ["href", "https://github.com/acer1456/pythoncourse"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u6240\u6709\u8AB2\u7A0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u95DC\u65BC\u6211\u5011");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "footer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u6B64\u7DB2\u7AD9\u7531");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u53F0\u5927\u570B\u5BB6\u767C\u5C55\u7814\u7A76\u6240");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u9127\u5FD7\u677E\u6559\u6388\u7DAD\u8B77");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Wei");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".active[_ngcontent-%COMP%]{\n    color: white;\n  }\n\n  .footerr[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmV7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLmZvb3RlcnIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "XwkG":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "MvpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _course_details_safepipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course-details/safepipe */ "JqR5");






function ModalComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.course.text);
} }
function ModalComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u7A0B\u5F0F\u7BC4\u4F8B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.course.pgd, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ModalComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u3001 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u7BC4\u4F8B\u6A94\u6848");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.course.pgdex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ModalComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "iframe", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, i_r7), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function ModalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalComponent_div_14_div_2_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.course.videourl);
} }
function ModalComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "iframe", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r5.course.videourl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
class ModalComponent {
    constructor(route, modalService) {
        this.route = route;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.modalService.tabVal$.subscribe(res => {
                // this.course = courses[+params.get('id')];
                this.course = res;
            });
        });
    }
    showModal() {
        $("#myModal").modal('show');
    }
    // sendModal(): void {
    //   this.hideModal();
    // }
    hideModal() {
        // document.getElementById('close-modal').click();
        // $('.modal').ready(() => {
        $("#close-modal").click();
        //   $("#modal-body").html("");
        //   this.course = '';
        // });
        // $(".modal").on("hidden.bs.modal", function(){
        //   $("#modal-body").html("");
        //   this.course = '';
        // });
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 23, vars: 6, consts: [["id", "myModal", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header", 2, "background-color", "rgb(0, 110, 201)", "color", "white"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["id", "modal-body", 1, "modal-body"], [4, "ngIf"], ["class", "btn btn-danger", 3, "href", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["lengthe", ""], ["href", "https://piazza.com/class/kes3tr63npau8"], [1, "modal-footer", 2, "background-color", "rgb(0, 110, 201)", "color", "white"], [1, "mr-auto", 2, "text-align", "center"], ["type", "button", "id", "close-modal", "data-dismiss", "modal", 2, "display", "none"], [1, "btn", "btn-danger", 3, "href"], [1, "btn", "btn-success", 3, "href"], [1, "row", "row-cols-3", "center"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], ["width", "100%", "height", "250", 3, "src"], ["width", "500", "height", "300", 3, "src"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_6_listener() { return ctx.hideModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModalComponent_p_9_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalComponent_a_10_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModalComponent_span_11_Template, 4, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModalComponent_div_14_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModalComponent_ng_template_15_Template, 3, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u767B\u5165Piazza\u67E5\u770B\u8A0E\u8AD6\u5340");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course.text.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course.pgd.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course.pgdex.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course.videourl[1].length >= 2)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_course_details_safepipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course/course.component */ "ioW2");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/modal.component */ "XwkG");
/* harmony import */ var _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-details/course-details.component */ "hLKW");
/* harmony import */ var _course_details_safepipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course-details/safepipe */ "JqR5");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
        _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_8__["CourseDetailsComponent"],
        _course_details_safepipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                    _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"],
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
                    _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_8__["CourseDetailsComponent"],
                    _course_details_safepipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hLKW":
/*!************************************************************!*\
  !*** ./src/app/course-details/course-details.component.ts ***!
  \************************************************************/
/*! exports provided: CourseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsComponent", function() { return CourseDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../courses */ "6uvU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _safepipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safepipe */ "JqR5");






function CourseDetailsComponent_div_1_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "iframe", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, i_r5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function CourseDetailsComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CourseDetailsComponent_div_1_div_15_div_2_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.course.videourl);
} }
function CourseDetailsComponent_div_1_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "iframe", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r3.course.videourl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
const _c0 = function () { return ["/course"]; };
function CourseDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u8FD4\u56DE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u7A0B\u5F0F\u6A94\u6848\u4E0B\u8F09\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u7A0B\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u6559\u5B78\u5F71\u7247\u9023\u7D50\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CourseDetailsComponent_div_1_div_15_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CourseDetailsComponent_div_1_ng_template_16_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.course.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.course.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.course.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.course.pgd, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.course.videourl[1].length >= 2)("ngIfElse", _r2);
} }
class CourseDetailsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.course = _courses__WEBPACK_IMPORTED_MODULE_1__["courses"][+params.get('id')];
        });
    }
}
CourseDetailsComponent.ɵfac = function CourseDetailsComponent_Factory(t) { return new (t || CourseDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CourseDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseDetailsComponent, selectors: [["app-course-details"]], decls: 2, vars: 1, consts: [[1, "container", 2, "padding-top", "80px"], [4, "ngIf"], [1, "btn", "btn-danger", 3, "routerLink"], [3, "href"], [4, "ngIf", "ngIfElse"], ["lengthe", ""], [1, "row", "row-cols-3", "center"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], ["width", "100%", "height", "250", 3, "src"], ["width", "500", "height", "300", 3, "src"]], template: function CourseDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseDetailsComponent_div_1_Template, 18, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_safepipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-details',
                templateUrl: './course-details.component.html',
                styleUrls: ['./course-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ioW2":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../courses */ "6uvU");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "MvpR");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.component */ "XwkG");





// This lets me use jquery
// declare var $: any;
// declare let $: any;
class CourseComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.courses = _courses__WEBPACK_IMPORTED_MODULE_1__["courses"];
        // netImage:any = "../assets/Python 安裝與工作環境.png";
        this.netImage = "https://raw.githubusercontent.com/acer1456/pythoncourse/gh-pages/assets/done.png";
    }
    onDragEnded(event) {
        let element = event.source.getRootElement();
        let boundingClientRect = element.getBoundingClientRect();
        let parentPosition = this.getPosition(element);
        console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));
    }
    getPosition(el) {
        let x = 0;
        let y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            x += el.offsetLeft - el.scrollLeft;
            y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: y, left: x };
    }
    getCourse(gcourses) {
        this.modalService.getTabVal(gcourses);
    }
    // ngAfterViewInit(): void {
    //   $('img[usemap]').rwdImageMaps();
    // }
    // ngOnChanges(): void {
    //   $('img[usemap]').rwdImageMaps();
    // }
    ngOnInit() {
        // const script = this.renderer.createElement('script');
        // script.src = `http://mattstow.com/experiment/responsive-image-maps/jquery.rwdImageMaps.min.js`;
        // this.renderer.appendChild(document.head, script);
        // $(document).ready(function(e) {
        $('img[usemap]').ready(() => {
            $('img[usemap]').rwdImageMaps();
        });
        // });
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], decls: 22, vars: 1, consts: [["alt", "Workplace", "usemap", "#image-map", 2, "width", "fit-content", 3, "src"], ["name", "image-map"], ["target", "", "alt", "\u6B63\u898F", "title", "\u6B63\u898F", "href", "", "coords", "1168,168,1504,280", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u8868\u683C", "title", "\u8868\u683C", "href", "", "coords", "415,402,837,514", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u722C\u87F2", "title", "\u722C\u87F2", "href", "", "coords", "913,402,1211,512", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u65B7\u8A5E", "title", "\u65B7\u8A5E", "href", "", "coords", "1259,397,1697,509", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u4E3B\u984C\u5206\u6790", "title", "\u4E3B\u984C\u5206\u6790", "href", "", "coords", "1768,407,2089,514", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u975E\u76E3\u7763", "title", "\u975E\u76E3\u7763", "href", "", "coords", "2168,412,2648,524", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u7E6A\u5716", "title", "\u7E6A\u5716", "href", "", "coords", "211,682,585,786", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "Numpy", "title", "Numpy", "href", "", "coords", "679,677,1091,781", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u7D22\u5F15", "title", "\u7D22\u5F15", "href", "", "coords", "1214,677,1621,786", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u5B57\u8A5E\u5411\u91CF", "title", "\u5B57\u8A5E\u5411\u91CF", "href", "", "coords", "1725,682,2196,786", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u60C5\u611F", "title", "\u60C5\u611F", "href", "", "coords", "2483,672,2804,781", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u6A94\u6848", "title", "\u6A94\u6848", "href", "", "coords", "71,942,412,1041", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u908F\u8F2F", "title", "\u908F\u8F2F", "href", "", "coords", "570,939,1002,1041", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u5171\u73FE\u6027", "title", "\u5171\u73FE\u6027", "href", "", "coords", "1137,942,1491,1044", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u8A9E\u610F\u5206\u6790", "title", "\u8A9E\u610F\u5206\u6790", "href", "", "coords", "1580,937,2091,1049", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u76E3\u7763\u5B78\u7FD2", "title", "\u76E3\u7763\u5B78\u7FD2", "href", "", "coords", "2175,932,2610,1038", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"], ["target", "", "alt", "\u5B89\u88DD\u74B0\u5883", "title", "\u5B89\u88DD\u74B0\u5883", "href", "", "coords", "310,1143,702,1288", "data-target", "#myModal", "data-toggle", "modal", "shape", "rect", 2, "cursor", "pointer", 3, "click"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "area", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_4_listener() { return ctx.getCourse(ctx.courses[9]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "area", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_5_listener() { return ctx.getCourse(ctx.courses[5]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "area", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_6_listener() { return ctx.getCourse(ctx.courses[7]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "area", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_7_listener() { return ctx.getCourse(ctx.courses[11]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "area", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_8_listener() { return ctx.getCourse(ctx.courses[15]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "area", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_9_listener() { return ctx.getCourse(ctx.courses[17]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "area", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_10_listener() { return ctx.getCourse(ctx.courses[6]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "area", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_11_listener() { return ctx.getCourse(ctx.courses[4]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "area", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_12_listener() { return ctx.getCourse(ctx.courses[10]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "area", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_13_listener() { return ctx.getCourse(ctx.courses[13]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "area", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_14_listener() { return ctx.getCourse(ctx.courses[18]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "area", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_15_listener() { return ctx.getCourse(ctx.courses[3]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "area", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_16_listener() { return ctx.getCourse(ctx.courses[2]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "area", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_17_listener() { return ctx.getCourse(ctx.courses[12]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "area", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_18_listener() { return ctx.getCourse(ctx.courses[14]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "area", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_19_listener() { return ctx.getCourse(ctx.courses[16]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "area", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_Template_area_click_20_listener() { return ctx.getCourse(ctx.courses[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-modal");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.netImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]], styles: [".center[_ngcontent-%COMP%]{\n  text-align: center;\n}\n.color[_ngcontent-%COMP%]{\ncolor: black;\n}\n.card[_ngcontent-%COMP%] {\n  \n  background:#fff;\n  box-shadow:0 10px 20px rgba(0,0,0,.1);\n  border-radius:10px;\n  transition:0.5s;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow:0 20px 40px rgba(0,0,0,.2);\n}\nimg[_ngcontent-%COMP%] {\n  position: relative;\n  }\n.imgA1[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n\nimg[usemap][_ngcontent-%COMP%] {\n  border: none;\n  height: auto;\n  max-width: 100%;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUg7Ozs7Ozs7R0FPRztBQUVIO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6ImNvdXJzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbG9ye1xuY29sb3I6IGJsYWNrO1xufVxuLmNhcmQge1xuICAvKiB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7ICovXG4gIGJhY2tncm91bmQ6I2ZmZjtcbiAgYm94LXNoYWRvdzowIDEwcHggMjBweCByZ2JhKDAsMCwwLC4xKTtcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICB0cmFuc2l0aW9uOjAuNXM7XG59XG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6MCAyMHB4IDQwcHggcmdiYSgwLDAsMCwuMik7XG59XG5cbmltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4uaW1nQTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi8qIC5maWx0ZXJ7XG4gIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggcmdiYSgwLDAsMCwuNSkpIDtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9naXRodWIuY29tL2FjZXIxNDU2L3B5dGhvbmNvdXJzZS9ibG9iL2doLXBhZ2VzL2Fzc2V0cy9QeXRob24lMjAlRTUlQUUlODklRTglQTMlOUQlRTglODglODclRTUlQjclQTUlRTQlQkQlOUMlRTclOTIlQjAlRTUlQTIlODMucG5nP3Jhdz10cnVlXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgei1pbmRleDotMTA7XG4gIHpvb206IDE7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMDtcbn0gKi9cblxuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTBweCkge1xuICAuZmlsdGVye1xuICAgIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggcmdiYSgwLDAsMCwuNSkpIDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvLi4vYXNzZXRzL1B5dGhvbiDlronoo53oiIflt6XkvZznkrDlooMucG5nXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vZ2l0aHViLmNvbS9hY2VyMTQ1Ni9weXRob25jb3Vyc2UvYmxvYi9naC1wYWdlcy9hc3NldHMvUHl0aG9uJTIwJUU1JUFFJTg5JUU4JUEzJTlEJUU4JTg4JTg3JUU1JUI3JUE1JUU0JUJEJTlDJUU3JTkyJUIwJUU1JUEyJTgzLnBuZz9yYXc9dHJ1ZVwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgfVxufSAqL1xuXG5pbWdbdXNlbWFwXSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course',
                templateUrl: './course.component.html',
                styleUrls: ['./course.component.css']
            }]
    }], function () { return [{ type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course/course.component */ "ioW2");
/* harmony import */ var _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-details/course-details.component */ "hLKW");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/modal.component */ "XwkG");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'course', component: _course_course_component__WEBPACK_IMPORTED_MODULE_4__["CourseComponent"] },
    { path: 'courses/:id', component: _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_5__["CourseDetailsComponent"] },
    { path: 'modals/:id', component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map