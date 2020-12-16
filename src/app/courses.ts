export const courses = [
  {
    id: 0,
    group: 0,
    name: '安裝與介紹',
    content: '（環境與建立）',
    videourl: 'https://www.youtube.com/embed/yPhKSeVTwX0',
    text: '各位同學大家好首先歡迎大家修習這門課。 我們要在一學期之內，教會大家，從完全不懂程式，到可以利用python 程式語言進行文字探勘。這不是一件容易的工作，每週都有一個小作業，學期未有分組專業報告，根據過去經驗，平均每週要花十個小時以上，方能跟上進度。先問一下，是否有同學要加選？要加選同學，等一下下課十分鐘時處理。接著，介紹課程網站 piazza。大家是否有收到我寄給你們的邀請信，如果有的話，請自行註冊、登錄。就可以進來這個網站。我們上課所有的資料、學習包、錄影、討論、作業繳交，都在這個網站上進行。如果沒有收到邀請信的同學，同樣下課十分鐘時來我這邊處理。',
    pgd: '',
    pgdex:'',
  },
  {
    id: 1,
    group: 1,
    name: '變數創建與編修',
    content: '（基礎）',
    text: '學寫python 程式，首先要瞭解變數的意義。X=2, Y=3, Z=X+Y=5，X,Y,Z 都是變數。指定一個數字(常數) 給變數，變數與變數間就可以運算，例如上例中的加減乘除。Python 使用的變數有不同的類型，數字變數只是其中之一，其他的類型，例如字串(string)、清單(list)、有序清單(tuple)、集合(set)、序列(array)、字典(dictionary)、關聯表(DataFrame)等均是，不同的變數型態有不同的格式。當然，變數的型態還不只這些，本週及後面幾週，我們要把這些搞清楚，包括：如何產生新的變數，如何指定變數的值，以及變數與變數間的轉換與計算。',
    videourl: ['https://www.youtube.com/embed/u3WNJEw8pXU', 'https://www.youtube.com/embed/OuLRi0JoDw8', 'https://www.youtube.com/embed/_DgRSAr8jVw'],
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Ffc17b993ae02d1a577ee254f50163c060d194a5a61608e697ade47f3f216ca89%2F2_Py_python_basic.ipynb',
    pgdex:'',
  },
  {
    id: 2,
    group: 1,
    name: '程式基本邏輯',
    content: '（基礎）',
    text:'Python 程式語言簡單易學，功能完整，幾乎無所不能。所謂的「程式」就是將一連串的「指令」串聯起來，電腦依你的設定逐步執行。學習程式可先從前人的程式範例開始，嘗試瞭解程式其邏輯，再修改成為自己要的，不斷試誤。每個單元，我們都會提供「學習包」，亦即範例程式，旁邊會有中文註解，請從學習包開始，每個 cells 依序執行(Shift-Enter)。有任何問題記得 google 上網查詢。鍵入python, 指令名稱，或程式出現的錯誤警告訊息，google 蒐尋，你會有意想不到的發現。本週課程重點是流程控制，設定一些條件，請電腦重覆執行，百次、千次。',
    videourl: ['https://www.youtube.com/embed/aXeA_RROAPM', 'https://www.youtube.com/embed/3gigrQhmibc', 'https://www.youtube.com/embed/QXpE-uvkBdU'],
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk100cb7xx26e%2F2_Py_program.ipynb',
    pgdex:'',
  },
  {
    id: 3,
    group: 2,
    name: '檔案與讀寫',
    content: '（共用模組）',
    text: 'Python 產生的資料可以儲存至硬碟，同時，也可以從硬碟叫進檔案。一般均以txt檔(文字檔)或csv, xlsx, xls 檔(關聯表)儲存之。dataframe 可儲存或讀取 xlsx, xls, csv 檔。pickle 用壓縮檔方式存檔，可儲存 list, dictionary。存檔與讀檔，很重要，大家必須熟悉。',
    videourl: ['https://www.youtube.com/embed/Pn5TLtSWB7g', 'https://www.youtube.com/embed/km-XgBgEBms'],
    pgd:'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk1u16s6u1wwx%2F6_Py_read_write.ipynb',
    pgdex:'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk1ue88m05l7e%2Fpresident.rar',
  },
  {
    id: 4,
    group: 2,
    name: 'Numpy運算邏輯',
    content: '（共用模組）',
    text: 'Numpy 是處理 Array的常用模組。安裝 Anaconda 後就會自動安裝 numpy, 不需另行安裝。Array 即一串數字，可有多層級，適合矩陣運算，Numpy 提供方便的建置工具，亦可由List 轉換為 array。Numpy 有各種針對Array的數學計算功能，補強 python list 的不足，例如平均值、變異數或矩陣運算等。',
    videourl: ['https://www.youtube.com/embed/ShhwiqqR6c8', 'https://www.youtube.com/embed/rgHZJJqPW1c'],
    pdg: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk1t2m2n1r48x%2F4_Py_numpy_basic.ipynb',
    pgdex:'',
  },
  {
    id: 5,
    group: 2,
    name: 'Pandas表格應用',
    content: '（共用模組）',
    text: 'pandas 提供 dataframe()格式，適用於關聯表格（例如excel 工作表），進行統計分析、資料處理、資料存檔時極為有用。同學要學會 dataframe的建置、複製、編修、合併、計算、貯存，以及各種篩選功能。安裝 Anaconda 後就會自動安裝 pandas 不需另行安裝。',
    videourl: ['https://www.youtube.com/embed/fgBGPaSAemQ', 'https://www.youtube.com/embed/vpDidAI_nyM', 'https://www.youtube.com/embed/kGIc3QYL0y8', 'https://www.youtube.com/embed/yPPvXdAaBI4'],
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2nvr3ovnuez%2F3_Py_Pandas_Basic.ipynb',
    pgdex:'',
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
    text:'本週開始，我們要介紹網路爬蟲基本方法與技巧。今天討論 request 與 beautiful soup 的用法，下過討論 regular expression, 是字串處理的進階工具，第三週討論幾個綜合的爬蟲案例。由於網頁多半以html 語言撰寫，BeuatifulSoup4 是解析html檔案非常好用的工具。因此，值得好好學學。安裝 python, Anaconda 之後，會自動安裝 BeuatifulSoup4，不須另外安裝。',
    videourl: ['https://www.youtube.com/embed/v2HMBOc2W14', 'https://www.youtube.com/embed/GSXgJhj_fT4', 'https://www.youtube.com/embed/VAvniDOpIvA'],
    pgd:'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2e4ogzfh6we%2F7_Py_BeautifulSoup.ipynb',
    pgdex:['https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2dbnlk3scft%2F20180302_這裡要移除_蔣介石銅像變木乃伊.html','https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2dbh4gkinnk%2F_news.rar']
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
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F29b886b368462368dd0411cb63c53e5a709014bed5cecf7335e6144d752aac97%2F7_Py_Regular_Expression.ipynb'
  },
  {
    id: 10,
    group: '文字處理',
    name: '索引與搜尋檢索',
    content: '（文字處理）',
  },
  {
    id: 11,
    group: '文字處理',
    name: '中文與英文斷詞',
    content: '（文字處理）',
    text:'中文是以「字詞」為意義的單元，在閱讀時，我們下意識地，不是一個字一個字的讀，而是一個詞一個詞的讀，亦既已經先斷好詞了，這樣才理解句子的意義。例如：「電視台獨家報導中研院生化所的新冠疫苗研發已有成效」以上這句話被斷詞成「電視台─獨家─報導─中研院─生化所─的─新冠─疫苗─研發─已─初具─成效」。一般而言，中文的閱讀者從前後文，斷詞並不困難，雖然有的時候，不同的斷詞方式，有不同的意義，會產生誤解。熟知的例子如：「下雨天留客天天留我不留」不同的斷詞，語意可能完全相反。文字探勘，要電腦幫我們閱讀，首先就得正確的斷詞，斷詞正確與否，會影響其後的分析。本週，我們介紹一個簡便的斷詞模組：monpa。它是台灣中研院開發的大套工具、簡單好用，而且可以自己新增詞彙，校正錯誤。不過即使如此，我們還是無保證斷詞完全正確，因為中文實在太複雜了。如果發現錯誤，通常以人工的方式校正。',
    videourl: ['https://www.youtube.com/embed/Vmb3f62Db08', 'https://www.youtube.com/embed/pbQ7ByiNIvE'],
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F28b7be3e582b9a9d1b58fac72ac718a58f6192f235b09f0537ead417ed1c59cc%2F5_Py_token-monapa.ipynb',
    pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Fcd9956cb75f55b146349c990d298d9228c4d04667acad469f06aae31b9c62086%2Fpresident.rar'

  },
  {
    id: 12,
    group: '文字處理',
    name: '字詞共現性',
    content: '（文字處理）',
    text:'今天要探討的是「共現性」，亦即字詞共同出現的頻率。如果有兩個字詞經常同時出現，亦即在同篇文章、同個句字，或前後幾個字之間，同時出現，經常有特別的意義。例如，「蔡英文」經常和「總統」、「同婚」、「人權」、「反中」、「論文」、「選舉」等字眼同時出現，代表蔡英文必定和這些字詞有某種關聯。顯然，不同的政治人物，一起出現的字詞不同；不同的文本中，共同出現的字詞也不一樣。我們可以比較，不同政治人物的差異，也可以比較不同的文本的差異。本週學習的重點就是在探討字詞與字詞的關聯性，以及不同文章間與字詞使用的差異，同時以視覺化的方式呈現我們的發現。',
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
    pgd: ['https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Ff1faa7a70c0a9cf0981a8ac42669ae7cc4f9e644388c2d8c1a6ee97f1545a611%2F10_py_vectorize_TFIDF.ipynb','https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F9ecf7ff5fd31ae3b1b4cc0091e943838ead86f2192e862ee51221fee76b2052f%2F10_Py_TDIDF_president.ipynb'],
    pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Fc17434cfbcab41749670aae33cca4a75a03d1a13d7f5a8fc285b62f898ff4798%2Fdoc_token.pkl'
  },
  {
    id: 14,
    group: '文字處理',
    name: '降維與潛在語意分析',
    content: '（文字處理）',
    text:'上週我們談到了將字詞或文章向量化，變成文章字詞矩陣之後，方能進行數學計算。但是文章字詞矩陣通常很龐大，各種計算很耗時，因此乃有降維之舉，最常見者如SVD, PCA。降維除了將複雜的矩陣簡單化，還有去污存精的效果，刪除不要的資訊。潛在語意分析，運用降維的技巧，找到構成文章的不同概念。',
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
    pgd: ['https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F7feccf536acea57725df69b47c820529bf9367d9b240dbd8ed64c9a3fe655088%2F12_Py_clustering_president.ipynb','https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F49fa7355298347c99d5b6f1df1428ef69646a6920786829578931ebf09b49d26%2F12_Py_Topic_model.ipynb','https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F30b2c6db7959aba072ec937a37ac7cf3b6b8550729ad79a031f451a94f401ee6%2F12_Py_Topic_model-scattertext.ipynb'],
    pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F2157e74854e08868064b2c64c6486bf3d1974f90c133d32e635a65b6cd421329%2Fpresident_token.pkl'
  },
  {
    id: 16,
    group: '機器學習',
    name: '監督學習：分類',
    content: '（機器學習）'
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
    content: '（機器學習）'
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
