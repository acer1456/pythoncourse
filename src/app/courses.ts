export const courses = [
  {
    id: 0,
    group: 0,
    name: '安裝與介紹',
    content: '（環境與建立）',
    videourl: 'https://www.youtube.com/embed/yPhKSeVTwX0',
    // text: '各位同學大家好首先歡迎大家修習這門課。 我們要在一學期之內，教會大家，從完全不懂程式，到可以利用python 程式語言進行文字探勘。這不是一件容易的工作，每週都有一個小作業，學期未有分組專業報告，根據過去經驗，平均每週要花十個小時以上，方能跟上進度。先問一下，是否有同學要加選？要加選同學，等一下下課十分鐘時處理。接著，介紹課程網站 piazza。大家是否有收到我寄給你們的邀請信，如果有的話，請自行註冊、登錄。就可以進來這個網站。我們上課所有的資料、學習包、錄影、討論、作業繳交，都在這個網站上進行。如果沒有收到邀請信的同學，同樣下課十分鐘時來我這邊處理。',
    text: `<strong>課前請先安裝 anaconda</strong><strong></strong> <br>
    教學影片1 piazza, <a href="https://youtu.be/CB-eCFmNCDQ" target="_blank" rel="noopener noreferrer">https://youtu.be/CB-eCFmNCDQ</a> <br>
    教學影片2 Jupyter notebook, <a href="https://youtu.be/yPhKSeVTwX0" target="_blank" rel="noopener noreferrer">https://youtu.be/yPhKSeVTwX0</a> <br>
    <br>
    各位同學大家好
    首先歡迎大家修習這門課。我們要在一學期之內，教會大家，從完全不懂程式，到可以利用python 程式語言進行文字探勘。這不是一件容易的工作，每週都有一個小作業，學期未有分組專業報告，根據過去經驗，平均每週要花十個小時以上，方能跟上進度。
    <br> <br>
    接著，介紹課程網站 piazza。大家是否有收到我寄給你們的邀請信，如果有的話，請自行註冊、登錄。就可以進來這個網站。
    我們上課所有的資料、學習包、錄影、討論、作業繳交，都在這個網站上進行。如果沒有收到邀請信的同學，同樣下課十分鐘時來我這邊處理。
    <br><br>
    教學影片1 piazza, <a href="https://youtu.be/CB-eCFmNCDQ" target="_blank" rel="noopener noreferrer">https://youtu.be/CB-eCFmNCDQ</a><br>
    請打開 piazza，上方工具列有各週的資料夾，請點選 hw1 即可看到本週的上課資料。
    右上角齒輪的符號代表設定，請打開，點 Account/Email Settings
    Full Name 請改為中文
    change picture 圖片，請貼上一張你的頭像
    2020PYTHON &gt; Edit Email Notifications 兩個地方都點選 No Emails，這樣可以避免貼文時太多 Email 通知，不堪其擾。
    設定完後回到 Q &amp; A
    <br> <br>
    進入 hw1 資料夾，左側是資料列表
    點選 &lt;課程介紹&gt; 

    ## 軟體安裝：

    <ul>
    <li>Anaconda 是配合Python 的作業環境，提供常用的模組，讓 python 功能更強大。</li>
    <li>anaconda (python 3.X) 網站：<a href="https://www.anaconda.com/products/individual" target="_blank" rel="noopener noreferrer">https://www.anaconda.com/products/individual</a> 依自己電腦規格選擇 32或64位元。</li>
    <li>python 是目前最普遍的程式語言，簡單易學，功能強大，幾乎任何問題均可處理。</li>
    <li>安裝 anaconda 時 python 軟體會自動安裝，</li>
    <li>python 官方網站 <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">https://www.python.org/downloads/</a> .</li>
    <li>window 與 Mac 版本，功能相同。</li>
    </ul>

    教學影片2 Jupyter notebook, <a href="https://youtu.be/yPhKSeVTwX0" target="_blank" rel="noopener noreferrer">https://youtu.be/yPhKSeVTwX0</a><br>
    <br>
    本週的進度是課程介紹，安裝程式，並學會  Jupyter Notebook 的操作，作業則是以 Jupyter Notebook 完成自我介紹。<br>
    好，現在請大家 啟動 Anaconda Nevigator  &gt;  Jupyter Notebook，<br>
    打開第一個學習包 <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F7083e1c6cd7ba802df3612d2d99b19b97137300ee8b401c51f4b8b20fcfb0c55%2F1_python_____.ipynb" target="_blank" rel="noopener noreferrer">1_python_install.ipynb</a>。<br>
    請下載後置於 C:/Users/user/ 亦即 home directory, 註注意：user 是你自己的電腦帳號，以後各週的資料夾均同。
    下面兩個範例圖片請下載，置於 pic 目錄下<br>
    C:/Users/user/pic/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fadf0fee74b72077cce8d1623277d27dda63e1f3caafb0166d6ffa6563adffd0e%2FJypyter_notebook____.PNG" target="_blank" rel="noopener noreferrer">Jypyter_notebook.PNG</a><br>
    C:/Users/user/pic/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F17d9fc27da33cb998f14e6896450d4ace90762e9cdf8f938a1bbe7fcfe6ea564%2Fgirl.gif" target="_blank" rel="noopener noreferrer">girl.gif</a>
    `,
    pgd: '',
    pgdex:'',
  },
  {
    id: 1,
    group: 1,
    name: '變數創建與編修',
    content: '（基礎）',
    // text: '學寫python 程式，首先要瞭解變數的意義。X=2, Y=3, Z=X+Y=5，X,Y,Z 都是變數。指定一個數字(常數) 給變數，變數與變數間就可以運算，例如上例中的加減乘除。Python 使用的變數有不同的類型，數字變數只是其中之一，其他的類型，例如字串(string)、清單(list)、有序清單(tuple)、集合(set)、序列(array)、字典(dictionary)、關聯表(DataFrame)等均是，不同的變數型態有不同的格式。當然，變數的型態還不只這些，本週及後面幾週，我們要把這些搞清楚，包括：如何產生新的變數，如何指定變數的值，以及變數與變數間的轉換與計算。',
    text: `學寫python 程式，首先要瞭解變數的意義。X=2, Y=3, Z=X+Y=5，X,Y,Z 都是變數。指定一個數字(常數) 給變數，變數與變數間就可以運算，例如上例中的加減乘除。Python 使用的變數有不同的類型，數字變數只是其中之一，其他的類型，例如字串(string)、清單(list)、有序清單(tuple)、集合(set)、序列(array)、字典(dictionary)、關聯表(DataFrame)等均是，不同的變數型態有不同的格式。當然，變數的型態還不只這些，本週及後面幾週，我們要把這些搞清楚，包括：如何產生新的變數，如何指定變數的值，以及變數與變數間的轉換與計算。

    學習包：<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Ffc17b993ae02d1a577ee254f50163c060d194a5a61608e697ade47f3f216ca89%2F2_Py_python_basic.ipynb" target="_blank" rel="noopener noreferrer">2_Py_python_basic.ipynb</a>`,
    videourl: ['https://www.youtube.com/embed/u3WNJEw8pXU', 'https://www.youtube.com/embed/OuLRi0JoDw8', 'https://www.youtube.com/embed/_DgRSAr8jVw'],
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Ffc17b993ae02d1a577ee254f50163c060d194a5a61608e697ade47f3f216ca89%2F2_Py_python_basic.ipynb',
    pgdex:'',
  },
  {
    id: 2,
    group: 1,
    name: '程式基本邏輯',
    content: '（基礎）',
    // text:'Python 程式語言簡單易學，功能完整，幾乎無所不能。所謂的「程式」就是將一連串的「指令」串聯起來，電腦依你的設定逐步執行。學習程式可先從前人的程式範例開始，嘗試瞭解程式其邏輯，再修改成為自己要的，不斷試誤。每個單元，我們都會提供「學習包」，亦即範例程式，旁邊會有中文註解，請從學習包開始，每個 cells 依序執行(Shift-Enter)。有任何問題記得 google 上網查詢。鍵入python, 指令名稱，或程式出現的錯誤警告訊息，google 蒐尋，你會有意想不到的發現。本週課程重點是流程控制，設定一些條件，請電腦重覆執行，百次、千次。',
    text:`本週我們要教程序控制，電腦最大的好處是可以重覆執行相同的指令，千次、萬次，這就是所謂的迴圈。我們也可以讓電腦變得更聰明，依照不同的情況，執行不同的指令，這是條件控制，值得注意的是，你要將所有的情況考慮進去，不能有遺漏。最後，程式要結構化，一個大程式可拆成無數個小程式，有些小程式會經常重覆，我們沒有必要重覆的寫，可以把它變成函數，隨時呼叫出來使用。定義許許多多的函數，這樣寫程式就像堆積木一樣，不同的積木，排列組合，達成不同的目的。

    程式除錯也很重要，當程式愈來愈複雜，經常會出錯。有的是文法上的錯誤，例如指令拼錯了、或是沒有對齊、少了一個標點符號，Jupyter notebook 會幫我們診斷錯誤，並提出建議。如果是邏輯上的錯誤，就比較困難了，除錯需要經驗，我們會告訴大家一些簡單的方法。寫程式就是不斷試誤的過程，錯了，就換另一種方式寫寫看，直到對為止。 google 的網路蒐尋，也很有用，特別是程式範例、除錯、網路上都有很多討論，請同學多利用 google 蒐尋功能，你會有意想不到的發現。

    學習包：<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F6f135ff532f80fd7dd97250829e815765b974a050e884a7497f43108e716cbe2%2F3_Py_program.ipynb" target="_blank" rel="noopener noreferrer">3_Py_program.ipynb</a>`,
    videourl: ['https://www.youtube.com/embed/aXeA_RROAPM', 'https://www.youtube.com/embed/3gigrQhmibc', 'https://www.youtube.com/embed/QXpE-uvkBdU'],
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk100cb7xx26e%2F2_Py_program.ipynb',
    pgdex:'',
  },
  {
    id: 3,
    group: 2,
    name: '檔案與讀寫',
    content: '（共用模組）',
    // text: 'Python 產生的資料可以儲存至硬碟，同時，也可以從硬碟叫進檔案。一般均以txt檔(文字檔)或csv, xlsx, xls 檔(關聯表)儲存之。dataframe 可儲存或讀取 xlsx, xls, csv 檔。pickle 用壓縮檔方式存檔，可儲存 list, dictionary。存檔與讀檔，很重要，大家必須熟悉。',
    text: `Python 產生的資料可以儲存至硬碟&#xff0c;同時&#xff0c;也可以從硬碟叫進檔案。
    一般均以txt檔(文字檔)或csv, xlsx, xls 檔(關聯表)儲存之。
    dataframe 可儲存或讀取 xlsx, xls, csv 檔。
    pickle 用壓縮檔方式存檔&#xff0c;可儲存 list, dictionary。
    存檔與讀檔&#xff0c;很重要&#xff0c;大家必須熟悉。

    學習包&#xff1a;<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F19fd7e18e519210af8536fa9d16ccf35cab5c6ae13757e671b88098bd726e2fb%2F5_Py_read_write.ipynb" target="_blank" rel="noopener noreferrer">5_Py_read_write.ipynb</a>

    範例檔案&#xff1a;<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fcd9956cb75f55b146349c990d298d9228c4d04667acad469f06aae31b9c62086%2Fpresident.rar" target="_blank" rel="noopener noreferrer">president.rar</a>`,
    videourl: 'https://www.youtube.com/embed/sqeiqa0CafE',
    pgd:'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk1u16s6u1wwx%2F6_Py_read_write.ipynb',
    pgdex:'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk1ue88m05l7e%2Fpresident.rar',
  },
  {
    id: 4,
    group: 2,
    name: 'Numpy運算邏輯',
    content: '（共用模組）',
    // text:'Numpy是處理Array的常用模組。安裝 Anaconda 後就會自動安裝 numpy, 不需另行安裝。Array 即一串數字，可有多層級，適合矩陣運算，Numpy 提供方便的建置工具，亦可由List 轉換為 array。Numpy 有各種針對Array的數學計算功能，補強 python list 的不足，例如平均值、變異數或矩陣運算等。',
    text:`Numpy 是處理 Array 的常用模組。Array 是多維的陣列(list)，
    Numpy 有各種針對Array的數學計算功能，補強 python 的不足，例如抽樣，平均值、變異數或矩陣運算等。
    安裝 Anaconda 後就會自動安裝 numpy, 不需另行安裝。
    numpy array 裡面的元素，只能是數字，不能是字串、list 等其他的變數型態，list 則無此限制。

    學習包：<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F5859689dac78dc13ecd4c0d64d846ba8fa2ddbe6a70f1afb93f50bafbd6f611e%2F4_Py_numpy_basic.ipynb" target="_blank" rel="noopener noreferrer">4_Py_numpy_basic.ipynb</a>

    學習成果自我查核：
    1 array 與list 間的相互轉換
    2 計算 array 的欄列統計量（平均值、總合、標準差）
    3 array 的矩陣運算，加、減、乘、除。`,
    videourl: 'https://www.youtube.com/embed/umXsBRU_uiQ',
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk1t2m2n1r48x%2F4_Py_numpy_basic.ipynb',
    pgdex:'',
  },
  {
    id: 5,
    group: 2,
    name: 'Pandas表格應用',
    content: '（共用模組）',
    // text: 'pandas 提供 dataframe()格式，適用於關聯表格（例如excel 工作表），進行統計分析、資料處理、資料存檔時極為有用。同學要學會 dataframe的建置、複製、編修、合併、計算、貯存，以及各種篩選功能。安裝 Anaconda 後就會自動安裝 pandas 不需另行安裝。',
    text: `Pandas 是一個很有用的模組，它提供一個新型態的變數，叫做 DataFrame，亦即關聯表型態的變數。所謂的關聯表，其實與Microsoft Excel 裡面的工作表(sheet)雷同。表內有欄、有列，欄通常代表變數，列代表觀察值，相對應的貯存格裡面就是變數值，構成一個二維的矩陣形式，變數值可以有各種不同的型態，像 float, string, integer, list, set, tuple, dictionary 等各種 python 的變數。

    這個講次我們要介紹 DataFrame的各種功能, 包括建置、編修、讀取、篩選、計算、存檔、讀檔等，指令非常的多，大家只要設想，在excel工作表內的所有的運算，DataFrame 內都可以操作。作為資料建置與貯存的工具，DataFrame 非常有用，大家務必熟悉它的操作。

    本週的模組 pandas，在安裝 anaconda時已自動安裝，只要用 import 叫出即可

    官方網站 <a href="https://pandas.pydata.org/docs/user_guide/index.html" target="_blank" rel="noopener noreferrer">https://pandas.pydata.org/docs/user_guide/index.html</a>

    <strong>學習包：</strong><a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F8017b68353f66a4a82018eebf957e6b164f0c8f803e2fbdaf235ac4d0c67fcb8%2F4_Py_Pandas_Basic.ipynb" target="_blank" rel="noopener noreferrer">4_Py_Pandas_Basic.ipynb</a>

    <strong>範例資料檔</strong>:
    <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F7359d6b6ab9fb9680a792d566d3fd1c23c5640045d83aeef215711d8f4f35a1e%2F___________.xlsx" target="_blank" rel="noopener noreferrer">legislator10.xlsx</a>  （發現檔名會跑掉）
    <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fac2526b33035a12e1b13dcf2bcc1bfcc8bf411f0eabb284f44960590034c9793%2Flegislator10.rar" target="_blank" rel="noopener noreferrer">legislator10.rar</a> （壓縮檔則 OK）

    <strong>學習成果自我查核</strong>：
    1 是否會自己建立 DataFrame?
    2 是否會進行欄列的編修與運算、垂直與水平合併？
    3 是否會進行 DataFrame 的字串分析？
    4 是否會進行資料篩選？存成新的DataFrame?`,
    videourl: ['https://www.youtube.com/embed/-JyJ0SQBtXk', 'https://www.youtube.com/embed/CtbUrwm2rsY'],
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2nvr3ovnuez%2F3_Py_Pandas_Basic.ipynb',
    pgdex:'',
  },
  {
    id: 6,
    group: 2,
    name: 'Plot繪圖視覺化',
    content: '（共用模組）',
    // text: 'pandas 有簡單的繪圖功能，但經常不夠用。繪圖模組 matplotlib 功能強大，更為常用，matplotlib 隨 anaconda 自動安裝，不需另行安裝。另外 seaborn 與 plotly 亦頗為常用，要另行安裝。各繪圖模組均有官方網頁介紹使用方法與範例，透過 google 即可查得。',
    text: `<ul>
    <li>大家已經學會一些基本的字詞探勘的技巧，像計算詞頻、詞對、概念建構等，今天要教大家繪圖，視覺化呈現，亦即我們字詞計算的結果，如何用圖示的方式，讓讀者一目瞭然。我們主要會利用 matplotlib 及文字雲 wordcloud。</li>
    <li>這兩個模組都會隨anaconda 自動安裝，不需另行安裝。</li>
    <li>另外還有一些繪圖模組，如 seaborn, pygal 與 plotly 亦頗為常用，但需要另行安裝。請同學自行參考。我們就不介紹了。</li>
    <li>提醒大家，各模組均有官方網站，提供完整的使用說明與範例，有了基礎的程式知識之後，自學並不困難。</li>
    </ul>
    Matplotlib 如果無法出現中文字型，請下載檔案，放在以下目錄中
    <ul>
    <li>C:\Users\你的電腦名稱\anaconda3\Lib\site-packages\matplotlib\mpl-data\fonts\ttf\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fb642c3b47249c14b6e35866833e298069f9e5d76a0870bb18d9aaa4f5c774c28%2Fmingliu.ttc" target="_blank" rel="noopener noreferrer">mingliu.ttc</a></li>
    <li>C:\Users\你的電腦名稱\anaconda3\Lib\site-packages\matplotlib\mpl-data\fonts\ttf\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F03a01753d6916c13bb2d2d159ba6f858949d191059b588f143fd589bf394d101%2FDejaVuSans.ttf" target="_blank" rel="noopener noreferrer">DejaVuSans.ttf</a></li>
    <li>如果文字雲圖無法出現中文</li>
    <li>C:\Windows\Fonts\msjhbd.ttc</li>
    </ul>
    安裝 wordcloud
    <ul>
    <li>命令提示字元</li>
    <li>pip install wordcloud</li>
    </ul>


    結巴斷詞
    <ul>
    <li>使用前要先安裝, 在命令提示字元</li>
    <li>pip install jieba</li>
    <li>速度比較快，但詞性標記錯誤太多</li>
    <li>官方網頁 <a href="https://github.com/fxsjy/jieba" target="_blank" rel="noopener noreferrer">https://github.com/fxsjy/jieba</a></li>
    <li>自訂字典 d:/my python/corpus/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F6073f73ec37714ec58870f5869f3efd13b962fc0b309f7c84326d6d958adecf5%2Fuserdict.txt" target="_blank" rel="noopener noreferrer">userdict.txt</a> 滑鼠右鍵 save link as </li>
    <li>停用字 d:/my python/corpus/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F78f02e37a850b1032429756335477594c134dc9eed836800a6b26f838f846d7c%2Fdeletewords.txt" target="_blank" rel="noopener noreferrer">deletewords.txt</a> <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F81d354a9b921115e93f367d9bd10b58b54d4502c459dd2ae3145a240f25c4714%2Fallowwords.txt" target="_blank" rel="noopener noreferrer"></a> 滑鼠右鍵 save link as </li>
    </ul>
    檔案下載
    <ul>
    <li>d:/my python/corpus/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fc43f784a40a07c194d0ab6ce332de7c93d979834f154ed5f4fd5a1c289145479%2Fdf_union.pkl" target="_blank" rel="noopener noreferrer">df_union.pkl</a> 聯合報社論</li>
    <li>d:/my python/data/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F56abdc5b2fd864d2c12394cf8291902cf2e571bf415198b7ab1883a4cf6e81c4%2Fnews_union_token.pkl" target="_blank" rel="noopener noreferrer">news_union_token.pkl</a> 聯合報社論九二共識，已斷詞，刪除停用字 dataframe</li>
    <li>d:/my python/pic/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F46adcc427441ca19a63b63fe382bd126c02d5fb4fea9bd7260a2c1f9c9f776fe%2Fchina.PNG" target="_blank" rel="noopener noreferrer">china.PNG</a>  圖像檔，滑鼠右鍵 save link as </li>
    <li>d:/my python/pic/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F9d590346662a2acfa2e5ce8584bb6813d52c960d3b43afb474938b8a39764c24%2Ftaiwan.jpg" target="_blank" rel="noopener noreferrer">taiwan.jpg</a> 圖像檔，滑鼠右鍵 save link as</li>
    <li>d:/my python/pic/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fe527467115ff153b0e79755cafa5e4475021ce6e6ee419c8840d4e55e1bd34b3%2Fcircle.jpg" target="_blank" rel="noopener noreferrer">circle.jpg</a> 圖像檔，滑鼠右鍵 save link as</li>
    </ul>
    學習包
    <ul>
    <li><a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F2ba39b2fafe72c8fda6107df9b0e9a5a997ed8d3ea74762cc1706c31c5c97807%2F9_Py_Plot.ipynb" target="_blank" rel="noopener noreferrer">9_Py_Plot.ipynb</a></li>
    </ul>
    教學影片
    <ul>
    <li><a href="https://youtu.be/t1WyMUi2KRc" target="_blank" rel="noopener noreferrer">https://youtu.be/t1WyMUi2KRc</a> 點線圖及中文設定</li>
    <li><a href="https://youtu.be/XFAPRMiQGfc" target="_blank" rel="noopener noreferrer">https://youtu.be/XFAPRMiQGfc</a> 長條圖</li>
    <li><a href="https://youtu.be/qZ1IVm21Qcs" target="_blank" rel="noopener noreferrer">https://youtu.be/qZ1IVm21Qcs</a> 折線圖，散佈圖，圓餅圖</li>
    <li><a href="https://youtu.be/96XXbgSm2Us" target="_blank" rel="noopener noreferrer">https://youtu.be/96XXbgSm2Us</a> 多圖並陳、雷達圖</li>
    <li><a href="https://youtu.be/OPpNoPhYW1o" target="_blank" rel="noopener noreferrer">https://youtu.be/OPpNoPhYW1o</a> 時間變化趨勢</li>
    <li><a href="https://youtu.be/kZAUaQSsTCg" target="_blank" rel="noopener noreferrer">https://youtu.be/kZAUaQSsTCg</a> 文字雲圖</li>
    </ul>`,
    videourl: ['https://www.youtube.com/embed/9E0uzDCk1zM', 'https://www.youtube.com/embed/ieZasokZhmg'],
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk24218t3a81l%2F5_Py_Plot.ipynb',
    pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk241eh004epu%2Fdf_聯合.pkl',
  },
  {
    id: 7,
    group: 3,
    name: '網路爬蟲',
    content: '（資料）',
    // text:'本週開始，我們要介紹網路爬蟲基本方法與技巧。今天討論 request 與 beautiful soup 的用法，下過討論 regular expression, 是字串處理的進階工具，第三週討論幾個綜合的爬蟲案例。由於網頁多半以html 語言撰寫，BeuatifulSoup4 是解析html檔案非常好用的工具。因此，值得好好學學。安裝 python, Anaconda 之後，會自動安裝 BeuatifulSoup4，不須另外安裝。',
    text:`本週開始，我們要介紹網路爬蟲基本方法與技巧。
    不過，要提醒大家，網路資料基本上是開放自由流覽，不過用程式下載，有些網站主會不高興了，他們設一些阻礙，增加下載的難度。
    我希望我們是網路爬蟲，但不是網路駭客，所以還是要注意一些基本的禮節。
    大部分的網頁都是用html 語言撰寫，BeuatifulSoup4 是解析html檔案非常好用的工具。
    安裝 Anaconda 之後，會自動安裝 BeuatifulSoup4，不須另外安裝。

    <strong>學習包：</strong>
    基本爬蟲技巧 <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F001fcf3d795a921e28e092f9c97a8d70ac0b497c8befcac0b894a666c523e0be%2F6_Py_BeautifulSoup.ipynb" target="_blank" rel="noopener noreferrer">6_Py_BeautifulSoup.ipynb</a>
    PTT gossip 爬蟲範例 <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F7ae2af1439532ced02405b11ce49d65b819f3b8b1126112c4d151d0a040f6f41%2F6_Py_scrawler_PTT_gossip.ipynb" target="_blank" rel="noopener noreferrer">6_Py_scrawler_PTT_gossip.ipynb</a>
    中宣部，中共的宣傳機構 <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F7f6dfbb9e739022e926258ab39775d383ddc253698781e898906dfa898ab84c7%2F6_Py_scrawler_ch_propaganda.ipynb" target="_blank" rel="noopener noreferrer">6_Py_scrawler_ch_propaganda.ipynb</a>
    蔡英文新聞與活動 <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F570d182535d98dae47ed01c0f93d767ee05c2310fe09d51fb452b506f9fd843c%2F6_Py_scrawler_TsaiIngwen.ipynb" target="_blank" rel="noopener noreferrer">6_Py_scrawler_TsaiIngwen.ipynb</a>
    下載之文本: <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F83845b31805cf15a4e642d1e4146a71ae38bef97980ea5b77219a6c0c5e4b506%2FMy_Python.rar" target="_blank" rel="noopener noreferrer">My_Python.rar</a>
    `,
    videourl: ['https://www.youtube.com/embed/MwAe7DBqEvg', 'https://www.youtube.com/embed/CmvgzbwFRpU'],
    pgd:'https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2e4ogzfh6we%2F7_Py_BeautifulSoup.ipynb',
    pgdex:['https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2dbnlk3scft%2F20180302_這裡要移除_蔣介石銅像變木乃伊.html','https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fjlrqtgi8cpaej%2Fi91z715dpjc6y0%2Fk2dbh4gkinnk%2F_news.rar']
  },
  {
    id: 8,
    group: 3,
    name: '模擬器爬蟲',
    content: '（資料）',
    text:`另外一個下載網頁的模組 selenium，模擬使用者操作鍵盤，下載動態網站常用的方法。
    動態網站，通常指使用者進入網頁後，要和網頁互動，才能獲得想要的資訊。

    安裝selenium
    命令提示字元：pip install selenium
    安裝 ChromeDriver, 其他瀏覽器亦可，本學習包以 Chrome為例。
    https://sites.google.com/a/chromium.org/chromedriver/downloads，
    解壓縮後， chromedriver.exe 拷貝至 C:/Users/Public/ 資料夾。

    selenium 官網
    https://pypi.python.org/pypi/selenium
    http://selenium-python-zh.readthedocs.io/en/latest/index.html 中文文檔

    學習包：
    <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fd460efe531c04a4a95d85203c969b954c500f865d8e23824a77a9452d22956f3%2F7_Py_scrawler_python.ipynb" target="_blank" rel="noopener noreferrer">7_Py_scrawler_python.ipynb</a> (新版本，修正下拉式選單的選取，請重新下載)
    <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F8a3d239bd5c832663a7cbf6b321d584af99ad9dcee29e94bfa58fdba7ca017e1%2F7_Py_scrawler_XiJinPing.ipynb" target="_blank" rel="noopener noreferrer">7_Py_scrawler_XiJinPing.ipynb</a>

    範例資料：
    D:/My Python/data/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fb027923458aa8352a06b033fabee7d487d3cf4612ed665d6267ca48dc4cb0b87%2Fdoc_token.pkl" target="_blank" rel="noopener noreferrer">doc_token.pkl</a>
    `,
  },
  {
    id: 9,
    group: 3,
    name: '正規表達式',
    content: '（資料）',
    // text: 'Regular Expression 主要的功能是針對很長的string 進行文字解析，為文本分析的必要工具。安裝了 python, anaconda 後便會自動安裝 Regular Expression (re)，毋須另行安裝。Regualar Expression 經常配合 Beautiful soup 使用，擴大文字解析功能。要注意的是 Regular Expression 本是針對英文字串(string)而設計，英文字與字間有空白隔開，中文沒有。執行的結果略有差異。',
    text:`Regular Expression 主要的功能是針對很長的string 進行文字解析&#xff0c;為文本分析的必要工具。
    安裝了 python, anaconda 後便會自動安裝 Regular Expression (re)&#xff0c;毋須另行安裝。
    Regualar Expression 經常配合 Beautiful soup 使用&#xff0c;擴大文字解析功能。
    要注意的是 Regular Expression 本是針對英文字串(string)而設計&#xff0c;英文字與字間有空白隔開&#xff0c;中文沒有。執行的結果略有差異。

    學習包&#xff1a;
    <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F7a68abf976e5d41ffcd31cdfc0a48c113ab937e79611242a4d21344ad1e801f5%2F7_Py_Regular_Expression.ipynb" target="_blank" rel="noopener noreferrer"></a><a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F29b886b368462368dd0411cb63c53e5a709014bed5cecf7335e6144d752aac97%2F7_Py_Regular_Expression.ipynb" target="_blank" rel="noopener noreferrer">7_Py_Regular_Expression.ipynb</a><a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F7a68abf976e5d41ffcd31cdfc0a48c113ab937e79611242a4d21344ad1e801f5%2F7_Py_Regular_Expression.ipynb" target="_blank" rel="noopener noreferrer"></a>`,
    videourl: 'https://www.youtube.com/embed/mWYdrc-Je3o',
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F29b886b368462368dd0411cb63c53e5a709014bed5cecf7335e6144d752aac97%2F7_Py_Regular_Expression.ipynb',
    pgdex:''
  },
  {
    id: 10,
    group: '文字處理',
    name: '索引與搜尋檢索',
    content: '（文字處理）',
    text: '',
    videourl: '',
    pgd: '',
    pgdex: '',
  },
  {
    id: 11,
    group: '文字處理',
    name: '中文與英文斷詞',
    content: '（文字處理）',
    // text:'中文是以「字詞」為意義的單元，在閱讀時，我們下意識地，不是一個字一個字的讀，而是一個詞一個詞的讀，亦既已經先斷好詞了，這樣才理解句子的意義。例如：「電視台獨家報導中研院生化所的新冠疫苗研發已有成效」以上這句話被斷詞成「電視台─獨家─報導─中研院─生化所─的─新冠─疫苗─研發─已─初具─成效」。一般而言，中文的閱讀者從前後文，斷詞並不困難，雖然有的時候，不同的斷詞方式，有不同的意義，會產生誤解。熟知的例子如：「下雨天留客天天留我不留」不同的斷詞，語意可能完全相反。文字探勘，要電腦幫我們閱讀，首先就得正確的斷詞，斷詞正確與否，會影響其後的分析。本週，我們介紹一個簡便的斷詞模組：monpa。它是台灣中研院開發的大套工具、簡單好用，而且可以自己新增詞彙，校正錯誤。不過即使如此，我們還是無保證斷詞完全正確，因為中文實在太複雜了。如果發現錯誤，通常以人工的方式校正。',
    text:`中文是以「字詞」為意義的單元，在閱讀時，我們下意識地，不是一個字一個字的讀，而是一個詞一個詞的讀，亦既已經先斷好詞了，這樣才理解句子的意義。例如：「電視台獨家報導中研院生化所的新冠疫苗研發已有成效」以上這句話被斷詞成「電視台─獨家─報導─中研院─生化所─的─新冠─疫苗─研發─已─初具─成效」。

    一般而言，中文的閱讀者從前後文，斷詞並不困難，雖然有的時候，不同的斷詞方式，有不同的意義，會產生誤解。熟知的例子如：「下雨天留客天天留我不留」不同的斷詞，語意可能完全相反。文字探勘，要電腦幫我們閱讀，首先就得正確的斷詞，斷詞正確與否，會影響其後的分析。本週，我們介紹一個簡便的斷詞模組：monpa。它是台灣中研院開發的大套工具、簡單好用，而且可以自己新增詞彙，校正錯誤。不過即使如此，我們還是無保證斷詞完全正確，因為中文實在太複雜了。如果發現錯誤，通常以人工的方式校正。

    程式安裝

      需先安裝 pytorch <a href="https://pytorch.org/get-started/locally/" target="_blank" rel="noopener noreferrer">https://pytorch.org/get-started/locally/</a></需先安裝>
      win10,命令提示字元
      pip install torch===1.6.0 torchvision===0.7.0 -f <a href="https://download.pytorch.org/whl/torch_stable.html" target="_blank" rel="noopener noreferrer">https://download.pytorch.org/whl/torch_stable.html</a>
      pip install monpa

    範例檔案：
    歷屆總統就職演說 <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fcd9956cb75f55b146349c990d298d9228c4d04667acad469f06aae31b9c62086%2Fpresident.rar" target="_blank" rel="noopener noreferrer">president.rar</a>
    自訂辭典 <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F85307bd164aa55f2ebf7788fa5a1d6d1934403bba7a1cbb79a732bf8116fdb2f%2Fuserdict_monpa.txt" target="_blank" rel="noopener noreferrer">userdict_monpa.txt</a>
    語料庫 <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F4b07aad22092199ca959a8a265735457fd21aafc63747a32ddbdd2c74b9191ca%2Fcorpus_test.rar" target="_blank" rel="noopener noreferrer">corpus_test.rar</a>
    解壓縮後有 民主自由、法統、兩岸 三個語料庫 txt 檔

    另外為編輯文字檔，nodepad++ 很好用，請自行安裝 <a href="https://notepad-plus-plus.org/downloads/v7.0/" target="_blank" rel="noopener noreferrer">https://notepad-plus-plus.org/downloads/v7.0/</a>

    Monpa 簡介 <a href="http://www.aclclp.org.tw/rocling/2019/O19-1023.pdf" target="_blank" rel="noopener noreferrer">http://www.aclclp.org.tw/rocling/2019/O19-1023.pdf</a>

    學習包：<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F28b7be3e582b9a9d1b58fac72ac718a58f6192f235b09f0537ead417ed1c59cc%2F5_Py_token-monapa.ipynb" target="_blank" rel="noopener noreferrer">5_Py_token-monapa.ipynb</a>
    `,
    videourl: ['https://www.youtube.com/embed/Vmb3f62Db08', 'https://www.youtube.com/embed/pbQ7ByiNIvE'],
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F28b7be3e582b9a9d1b58fac72ac718a58f6192f235b09f0537ead417ed1c59cc%2F5_Py_token-monapa.ipynb',
    pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Fcd9956cb75f55b146349c990d298d9228c4d04667acad469f06aae31b9c62086%2Fpresident.rar'

  },
  {
    id: 12,
    group: '文字處理',
    name: '字詞共現性',
    content: '（文字處理）',
    // text:'今天要探討的是「共現性」，亦即字詞共同出現的頻率。如果有兩個字詞經常同時出現，亦即在同篇文章、同個句字，或前後幾個字之間，同時出現，經常有特別的意義。例如，「蔡英文」經常和「總統」、「同婚」、「人權」、「反中」、「論文」、「選舉」等字眼同時出現，代表蔡英文必定和這些字詞有某種關聯。顯然，不同的政治人物，一起出現的字詞不同；不同的文本中，共同出現的字詞也不一樣。我們可以比較，不同政治人物的差異，也可以比較不同的文本的差異。本週學習的重點就是在探討字詞與字詞的關聯性，以及不同文章間與字詞使用的差異，同時以視覺化的方式呈現我們的發現。',
    text:`本週開始&#xff0c;我們要進入真正的文字探勘了。

    大家都已下載了自己有興趣的網路資料。交作業的同時&#xff0c;我希望你們要介紹自己的資料&#xff0c;說明資料的特性&#xff0c;以及構想中&#xff0c;可以做出怎樣的研究。這個很重要&#xff0c;下載資料都是有目的性的&#xff0c;不是胡亂下載。接著&#xff0c;大家可以彼此觀摹&#xff0c;看看別人下載的東西&#xff0c;是否可以和自己的搭配運用。期末報告時&#xff0c;我們會重新分組&#xff0c;最好興趣相同的分在一組&#xff0c;這樣合作比較有效率。

    今天要探討的是「共現性」&#xff0c;亦即字詞共同出現的頻率。如果有兩個字詞經常同時出現&#xff0c;亦即在同篇文章、同個句字&#xff0c;或前後幾個字之間&#xff0c;同時出現&#xff0c;經常有特別的意義。例如&#xff0c;「蔡英文」經常和「總統」、「同婚」、「人權」、「反中」、「論文」、「選舉」等字眼同時出現&#xff0c;代表蔡英文必定和這些字詞有某種關聯。顯然&#xff0c;不同的政治人物&#xff0c;一起出現的字詞不同&#xff1b;不同的文本中&#xff0c;共同出現的字詞也不一樣。我們可以比較&#xff0c;不同政治人物的差異&#xff0c;也可以比較不同的文本的差異。本週學習的重點就是在探討字詞與字詞的關聯性&#xff0c;以及不同文章間與字詞使用的差異&#xff0c;同時以視覺化的方式呈現我們的發現。

    軟體安裝
    scattertext
    <ul><li>比較兩類不同的文本&#xff0c;用字的差異</li><li>安裝 scattertext
    <ul><li>pip install scattertext</li></ul>
    </li><li>下載中文模組

    <ul><li>請在命令提示字元執行以下指令即可</li><li>python -m spacy download zh_core_web_sm</li><li><a href="https://spacy.io/usage/models" target="_blank" rel="noopener noreferrer">https://spacy.io/usage/models</a></li></ul>
    </li></ul>
    networkX  如果無法出現中文字型&#xff0c;可參考以下做法&#xff1a;
    <ul><li>下載檔案&#xff0c;放在以下目錄中</li><li>C:\Users\你的電腦名稱\anaconda3\Lib\site-packages\matplotlib\mpl-data\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Ff48980898ace23b1d8db114e9b6d96454bf3a07b6ec70cde812e4b517d4d53e7%2Fmatplotlibrc" target="_blank" rel="noopener noreferrer">matplotlibrc</a></li><li>C:\Users\你的電腦名稱\anaconda3\Lib\site-packages\matplotlib\mpl-data\fonts\ttf\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fb642c3b47249c14b6e35866833e298069f9e5d76a0870bb18d9aaa4f5c774c28%2Fmingliu.ttc" target="_blank" rel="noopener noreferrer">mingliu.ttc</a></li><li>C:\Users\你的電腦名稱\anaconda3\Lib\site-packages\matplotlib\mpl-data\fonts\ttf\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F03a01753d6916c13bb2d2d159ba6f858949d191059b588f143fd589bf394d101%2FDejaVuSans.ttf" target="_blank" rel="noopener noreferrer">DejaVuSans.ttf</a></li></ul>

    學習包&#xff1a;
    <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F6e43aafd304f5221b5f64cd823b1057237f0552e2cbbbca4886a8af3158ea3e1%2F8_Py_word_frequency_president.ipynb" target="_blank" rel="noopener noreferrer">8_Py_word_frequency_president.ipynb</a>

    範例資料: 
    D:/My Python/data/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fc17434cfbcab41749670aae33cca4a75a03d1a13d7f5a8fc285b62f898ff4798%2Fdoc_token.pkl" target="_blank" rel="noopener noreferrer">doc_token.pkl</a>

    教學影片&#xff1a;
    1 <a href="https://youtu.be/fdkIw-3Ogow" target="_blank" rel="noopener noreferrer">https://youtu.be/fdkIw-3Ogow</a>  詞頻與詞對
    2 <a href="https://youtu.be/_E_K5yvq1ko" target="_blank" rel="noopener noreferrer">https://youtu.be/_E_K5yvq1ko</a>  詞對社會網絡圖
    3 <a href="https://youtu.be/Kg5DNHgOrhA" target="_blank" rel="noopener noreferrer">https://youtu.be/Kg5DNHgOrhA</a> 字詞卡方檢定
    4 <a href="https://youtu.be/59kbkGluaWE" target="_blank" rel="noopener noreferrer">https://youtu.be/59kbkGluaWE</a>  文字散佈圖

    自我查核&#xff1a;

    作業&#xff1a;
    本週討論了文章中的字詞使用&#xff0c;同學可以計算詞頻&#xff0c;也可以計算詞對&#xff0c;繪製詞對的社會網絡圖&#xff0c;也可以比較不同文章的字詞分佈&#xff0c;繪製散佈圖。
    請以你們自己下載資料寫作業&#xff0c;比較不同的文章&#xff0c;字詞使用的差異性。注意&#xff0c;我們是社科院&#xff0c;著重於講故事&#xff0c;程式只是工具。
    `,
    videourl: ['https://www.youtube.com/embed/fdkIw-3Ogow', 'https://www.youtube.com/embed/_E_K5yvq1ko', 'https://www.youtube.com/embed/Kg5DNHgOrhA', 'https://www.youtube.com/embed/59kbkGluaWE'],
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F6e43aafd304f5221b5f64cd823b1057237f0552e2cbbbca4886a8af3158ea3e1%2F8_Py_word_frequency_president.ipynb',
    pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Fc17434cfbcab41749670aae33cca4a75a03d1a13d7f5a8fc285b62f898ff4798%2Fdoc_token.pkl'
  },
  {
    id: 13,
    group: '文字處理',
    name: '文章與字詞向量化',
    content: '（文字處理）',
    // text: '文字探勘很重要的一個步驟是將字詞或文章向量化，這個過程稱為「自然語言處理」。字詞或文章變成向量之後，可以進行數學計算。向量與向量之間的夾角，可作為相似度的判斷標準。文章由字詞所構成，一般而言，字詞出現的頻率愈多，代表這個字詞愈重要，但事實不然，有些字詞經常出現，例如介繫詞、連接詞、語助詞，卻沒有多大意義，因此文章向量裡面的字詞通常會加權。TFIDF 就是一種常見的加權方法，亦即將文章的長短，與字詞的普遍性，納入考慮。當然，針對某些特定類型的字型逕行處理，增加其權數，或減少權數，亦頗為常見。本週的學習包以台灣歷任總統就職演說為例，先斷句，以句子為單位，TFIDF 加權，計算各字詞的重要性。接著篩選比較重要的字詞。我們將所有的字詞，投射在兩度空間上，比較不同時期，就職演說的差異。最後以句子為單位，比較各句子的相似度。',
    text:`<ul><li>文字探勘很重要的一個步驟是將字詞或文章向量化&#xff0c;這個過程稱為「自然語言處理」。</li><li>字詞或文章變成向量之後&#xff0c;可以進行數學計算。向量與向量之間的夾角&#xff0c;可作為相似度的判斷標準。</li><li>文章由字詞所構成&#xff0c;一般而言&#xff0c;字詞出現的頻率愈多&#xff0c;代表這個字詞愈重要&#xff0c;但事實不然&#xff0c;有些字詞經常出現&#xff0c;例如介繫詞、連接詞、語助詞&#xff0c;卻沒有多大意義&#xff0c;因此文章向量裡面的字詞通常會加權。TFIDF 就是一種常見的加權方法&#xff0c;亦即將文章的長短&#xff0c;與字詞的普遍性&#xff0c;納入考慮。當然&#xff0c;針對某些特定類型的字型逕行處理&#xff0c;增加其權數&#xff0c;或減少權數&#xff0c;亦頗為常見。</li><li>本週的學習包以台灣歷任總統就職演說為例&#xff0c;先斷句&#xff0c;以句子為單位&#xff0c;TFIDF 加權&#xff0c;計算各字詞的重要性。接著篩選比較重要的字詞。我們將所有的字詞&#xff0c;投射在兩度空間上&#xff0c;比較不同時期&#xff0c;就職演說的差異。最後以句子為單位&#xff0c;比較各句子的相似度。</li></ul>
    學習包&#xff1a;
    C:\Users\[使用者名稱]\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Ff1faa7a70c0a9cf0981a8ac42669ae7cc4f9e644388c2d8c1a6ee97f1545a611%2F10_py_vectorize_TFIDF.ipynb" target="_blank" rel="noopener noreferrer">10_py_vectorize_TFIDF.ipynb</a>
    C:\Users\[使用者名稱]\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F9ecf7ff5fd31ae3b1b4cc0091e943838ead86f2192e862ee51221fee76b2052f%2F10_Py_TDIDF_president.ipynb" target="_blank" rel="noopener noreferrer">10_Py_TDIDF_president.ipynb</a>

    資料檔案&#xff1a;
    d:\my python\data\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fc17434cfbcab41749670aae33cca4a75a03d1a13d7f5a8fc285b62f898ff4798%2Fdoc_token.pkl" target="_blank" rel="noopener noreferrer">doc_token.pkl</a>
    d:\my python\corpus\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F5622c9611dec075fabad460148e49495e05b9ebb14f62d0ba35e82a31997faeb%2Fsentiment.rar" target="_blank" rel="noopener noreferrer">sentiment.rar</a> 自行解壓縮
    d:\my python\corpus\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F78f02e37a850b1032429756335477594c134dc9eed836800a6b26f838f846d7c%2Fdeletewords.txt" target="_blank" rel="noopener noreferrer">deletewords.txt</a>
    C:\Users\[使用者名稱]\pic\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F93ff29d8263aeda18745432beec4b0230f956254087326469440e26902480346%2Fvector_projection.jpg" target="_blank" rel="noopener noreferrer">vector_projection.jpg</a>
    C:\Users\[使用者名稱]\pic\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fc523d6578a4ddbb477870f34f8e0b20f0937a5a8f3ea2835e5299f0cdc6330dd%2FTFIDF.png" target="_blank" rel="noopener noreferrer">TFIDF.png</a>

    教學影片&#xff1a;
    1 <a href="https://youtu.be/91reSpiEQuo" target="_blank" rel="noopener noreferrer">https://youtu.be/91reSpiEQuo</a>
    2 <a href="https://youtu.be/bsaxcI4vSl8" target="_blank" rel="noopener noreferrer">https://youtu.be/bsaxcI4vSl8</a>
    3 <a href="https://youtu.be/O3FSywg4bqo" target="_blank" rel="noopener noreferrer">https://youtu.be/O3FSywg4bqo</a>

    自我查核&#xff1a;
    1 文章如何把它變成向量&#xff1f;
    2 字詞如何把它變成向量&#xff1f;
    3 如何將向量加權&#xff1f;
    4 如何計算向量與向量間的相似度&#xff1f;

    作業&#xff1a;
    用自己的資料&#xff0c;將字詞或文章向量化&#xff0c;並進行分析&#xff0c;請注意&#xff1a;作業最後一定要有研究發現&#xff0c;亦即你從這個分析中&#xff0c;看到了什麼&#xff1f;跟你原來預測的一樣嗎? 有沒有什麼不一樣的發現? 你如何解釋這個發現&#xff1f;`,
    videourl: ['https://www.youtube.com/embed/91reSpiEQuo', 'https://www.youtube.com/embed/bsaxcI4vSl8', 'https://www.youtube.com/embed/O3FSywg4bqo'],
    pgd: ['https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Ff1faa7a70c0a9cf0981a8ac42669ae7cc4f9e644388c2d8c1a6ee97f1545a611%2F10_py_vectorize_TFIDF.ipynb','https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F9ecf7ff5fd31ae3b1b4cc0091e943838ead86f2192e862ee51221fee76b2052f%2F10_Py_TDIDF_president.ipynb'],
    pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Fc17434cfbcab41749670aae33cca4a75a03d1a13d7f5a8fc285b62f898ff4798%2Fdoc_token.pkl'
  },
  {
    id: 14,
    group: '文字處理',
    name: '降維與潛在語意分析',
    content: '（文字處理）',
    // text:'上週我們談到了將字詞或文章向量化，變成文章字詞矩陣之後，方能進行數學計算。但是文章字詞矩陣通常很龐大，各種計算很耗時，因此乃有降維之舉，最常見者如SVD, PCA。降維除了將複雜的矩陣簡單化，還有去污存精的效果，刪除不要的資訊。潛在語意分析，運用降維的技巧，找到構成文章的不同概念。',
    text:`<ul><li>上週我們談到了將字詞或文章向量化&#xff0c;變成文章字詞矩陣之後&#xff0c;方能進行數學計算。</li><li>但是文章字詞矩陣通常很龐大&#xff0c;各種計算很耗時&#xff0c;因此乃有降維之舉&#xff0c;最常見者如SVD, PCA。</li><li>降維除了將複雜的矩陣簡單化&#xff0c;還有去污存精的效果&#xff0c;刪除不要的資訊。</li><li>潛在語意分析&#xff0c;運用降維的技巧&#xff0c;找到構成文章的不同概念。</li></ul>
    學習包&#xff1a;
    C:\Users\[使用者名稱]\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Ffbf1f154d1d10a72878cf4818da0ad7556592b772f3894f7ab725904e519a319%2F11_py_SVD_PCA.ipynb" target="_blank" rel="noopener noreferrer">11_py_SVD_PCA.ipynb</a><a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fa2ce789928c24e337cfb45cba5beeda44453f6de0e7689d2b3c90be0a16c2086%2F11_py_SVD_PCA.ipynb" target="_blank" rel="noopener noreferrer"></a>

    資料檔案&#xff1a;
    d:\my python\_editorial\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F5f1239e72cdc9ce55703ec7b9f4118d70d4783e1157a08a640e01fa262ed5e48%2Feditorial_token.xlsx" target="_blank" rel="noopener noreferrer">editorial_token.xlsx</a>
    C:\Users\[使用者名稱]\pic\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F3eecb73ebb39ab21db68f111ff606171a61270082575760d1b9c7aedef4578b9%2Fsvd.jpg" target="_blank" rel="noopener noreferrer">svd.jpg</a> (滑鼠右鍵save link as)
    C:\Users\[使用者名稱]\pic\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fb79efe40922d062f4b5a2b452cca8a11fd0a5b6e3bd45c291b9eb22aff381408%2FPCA_projection.gif" target="_blank" rel="noopener noreferrer">PCA_projection.gif</a> (滑鼠右鍵save link as)

    教學影片&#xff1a;
    1 <a href="https://youtu.be/c-6-v--ifMU" target="_blank" rel="noopener noreferrer">https://youtu.be/c-6-v--ifMU</a>
    2 <a href="https://youtu.be/ipiarROouzo" target="_blank" rel="noopener noreferrer">https://youtu.be/ipiarROouzo</a>
    3 <a href="https://youtu.be/nD7A54GO2XE" target="_blank" rel="noopener noreferrer">https://youtu.be/nD7A54GO2XE</a>

    自我查核&#xff1a;
    1 SVD 與 PCA 降維&#xff0c;自己都做一次&#xff0c;比較其間的差異&#xff1f;
    2 做一次潛在語意分析&#xff0c;你覺得這個分析有什麼用處&#xff1f;
    3 思考降維以後的矩陣可以怎麼運用&#xff1f;

    作業&#xff1a;
    用自己的資料&#xff0c;將字詞或文章向量化&#xff0c;接著再降維&#xff0c;降維以前的分析&#xff0c;降維之後都可以做&#xff0c;但是結果可能不一樣。請試試看&#xff0c;以降維以後的向量進行分析&#xff1f;有什麼發現&#xff1f;
    `,
    videourl: ['https://www.youtube.com/embed/c-6-v--ifMU', 'https://www.youtube.com/embed/ipiarROouzo', 'https://www.youtube.com/embed/nD7A54GO2XE'],
    pgd: ['https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Ffbf1f154d1d10a72878cf4818da0ad7556592b772f3894f7ab725904e519a319%2F11_py_SVD_PCA.ipynb'],
    pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F5f1239e72cdc9ce55703ec7b9f4118d70d4783e1157a08a640e01fa262ed5e48%2Feditorial_token.xlsx'

  },
  {
    id: 15,
    group: '文字處理',
    name: '主題分析',
    content: '（文字處理）',
    // text: '文章分群：上禮拜我們將文章向量化，TFIDF加權，降維，找出不同的軸，創造一個向量空間，文章與字詞都可以投影在這個向量空間之上，今天緊接著，我們要將文章分群，類似的文章分成一 群。以台灣歷任總統的就職演說為例，除了分群，我們也進行了潛在語意分析，抽離出四個概念，繪文字雲圖確定概念的意義，繪製散佈圖，比較不同文章的空間位置，和社會網絡圖，看不同文章的關聯性。主題分析：主題分析是從多篇文章中萃取主題，不同的主題代表不同的類別。各篇文章都是由不同的主題不同的比例所構成。各個主題亦是由不同的字詞依不同的比例所構成。',
    text:`文章分群<a href="http://localhost:8888/notebooks/12%20Py_clustering_president.ipynb#%E6%96%87%E7%AB%A0%E5%88%86%E7%BE%A4"></a>
    <ol><li>
    上禮拜我們將文章向量化&#xff0c;TFIDF加權&#xff0c;降維&#xff0c;找出不同的軸&#xff0c;創造一個向量空間&#xff0c;文章與字詞都可以投影在這個向量空間之上&#xff0c;今天緊接著&#xff0c;我們要將文章分群&#xff0c;類似的文章分成一 群。
    </li><li>
    以台灣歷任總統的就職演說為例&#xff0c;除了分群&#xff0c;我們也進行了潛在語意分析&#xff0c;抽離出四個概念&#xff0c;
    </li><li>
    繪文字雲圖確定概念的意義&#xff0c;繪製散佈圖&#xff0c;比較不同文章的空間位置&#xff0c;和社會網絡圖&#xff0c;看不同文章的關聯性。
    </li></ol>
     主題分析<a href="http://localhost:8888/notebooks/12_Py_Topic%20model.ipynb#%E4%B8%BB%E9%A1%8C%E5%88%86%E6%9E%90%EF%BC%9A%E4%BB%A5%E5%8F%B0%E7%81%A3%E6%AD%B7%E4%BB%BB%E7%B8%BD%E7%B5%B1%E7%9A%84%E5%B0%B1%E8%81%B7%E6%BC%94%E8%AA%AA%E7%82%BA%E4%BE%8B"></a>
    <ol><li>主題分析是從多篇文章中萃取主題&#xff0c;不同的主題代表不同的類別。</li><li>各篇文章都是由不同的主題不同的比例所構成。</li><li>各個主題亦是由不同的字詞依不同的比例所構成。</li></ol>
    學習包&#xff1a;
    C:\Users\[使用者名稱]\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F7feccf536acea57725df69b47c820529bf9367d9b240dbd8ed64c9a3fe655088%2F12_Py_clustering_president.ipynb" target="_blank" rel="noopener noreferrer">12_Py_clustering_president.ipynb</a><a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Ffbf1f154d1d10a72878cf4818da0ad7556592b772f3894f7ab725904e519a319%2F11_py_SVD_PCA.ipynb" target="_blank" rel="noopener noreferrer"></a>
    C:\Users\[使用者名稱]\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F49fa7355298347c99d5b6f1df1428ef69646a6920786829578931ebf09b49d26%2F12_Py_Topic_model.ipynb" target="_blank" rel="noopener noreferrer">12_Py_Topic_model.ipynb</a>
    C:\Users\[使用者名稱]\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F30b2c6db7959aba072ec937a37ac7cf3b6b8550729ad79a031f451a94f401ee6%2F12_Py_Topic_model-scattertext.ipynb" target="_blank" rel="noopener noreferrer">12_Py_Topic_model-scattertext.ipynb</a>

    安裝 gensim<a href="http://localhost:8888/notebooks/12_Py_Topic_model.ipynb#%E5%AE%89%E8%A3%9D-gensim"></a>
    <ul><li>gensim 官方網頁: <a href="https://radimrehurek.com/gensim/tut1.html" target="_blank" rel="noopener noreferrer">https://radimrehurek.com/gensim/tut1.html</a></li><li>See this <em>gensim</em> tutorial on the web <a href="https://radimrehurek.com/gensim/tut1.html" target="_blank" rel="noopener noreferrer">here</a>.</li><li>有完整範例與說明&#xff0c;請自行參考。</li><li>安裝 gensim:
    <ul><li>命令提示字元&#xff1a;pip install --upgrade gensim 或 easy_install -U gensim</li></ul>
    </li></ul>

    LDA 視覺呈現<a href="http://localhost:8888/notebooks/12_Py_Topic_model.ipynb#LDA-%E8%A6%96%E8%A6%BA%E5%91%88%E7%8F%BE"></a>
    <ul><li>須先安裝</li><li>pip install pyldavis</li></ul>

    資料檔案&#xff1a;
    d:\my python\corpus\president\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F2157e74854e08868064b2c64c6486bf3d1974f90c133d32e635a65b6cd421329%2Fpresident_token.pkl" target="_blank" rel="noopener noreferrer">president_token.pkl</a>

    教學影片&#xff1a;
    1 <a href="https://youtu.be/et4TsGQqJ_0" target="_blank" rel="noopener noreferrer">https://youtu.be/et4TsGQqJ_0</a>
    2 <a href="https://youtu.be/GpYgGSFt5wc" target="_blank" rel="noopener noreferrer">https://youtu.be/GpYgGSFt5wc</a>

    自我查核&#xff1a;


    作業&#xff1a;
    我們介紹了許多種萃取文章主題的方法&#xff0c;包括 LSA, PCA, LSI, LDA, NMF&#xff0c;以及分群&#xff08;clustering&#xff09;&#xff0c;這些方法都有共同的問題&#xff0c;你要抽離出幾個主題&#xff1f;如何識別這些主題&#xff1f;&#xff08;不管你稱呼它是概念、軸、組成或維度&#xff09;以你自己的資料試試看&#xff0c;你覺得哪一種方法最好操作&#xff0c;最容易識別主題&#xff1f;
    `,
    videourl: ['https://www.youtube.com/embed/et4TsGQqJ_0', 'https://www.youtube.com/embed/GpYgGSFt5wc'],
    pgd: ['https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F7feccf536acea57725df69b47c820529bf9367d9b240dbd8ed64c9a3fe655088%2F12_Py_clustering_president.ipynb','https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F49fa7355298347c99d5b6f1df1428ef69646a6920786829578931ebf09b49d26%2F12_Py_Topic_model.ipynb','https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F30b2c6db7959aba072ec937a37ac7cf3b6b8550729ad79a031f451a94f401ee6%2F12_Py_Topic_model-scattertext.ipynb'],
    pgdex: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2F2157e74854e08868064b2c64c6486bf3d1974f90c133d32e635a65b6cd421329%2Fpresident_token.pkl'
  },
  {
    id: 16,
    group: '機器學習',
    name: '監督學習：分類',
    content: '（機器學習）',
    // text: '「機械學習」簡單地說，簡單地說，就是從過去的經驗學習，亦即先給電腦一些已知的資料，讓電腦找出一些規則，或建立模型，接著才可以用在預測未知資料之上。當然，模型建的好不好，自然就很重要了，有一些指標可以衡量模型建的好不好，例如誤差的平方和，或預測的準確率等。從已知的資料建立模型，一點也不陌生，例如統計的迴歸分析就是這樣的應用。給定已知的觀察值，裡面有自變數、有依變數，就可以建立迴歸模型，我們可以計算可解釋百分比，亦即 R 平方，也可以看係數是否等零，自變數是否顯著，也可以給定自變數，預測依變數的大小。機械學習也是一樣，先給電腦一些已知的資料(依變數、自變數)，藉由演算法建構模型，自變數就可推估依變數。如果依變數是類別變數，例如正面或負面，此時稱為標記（label）。我們可以檢測模型預測標記的準確率。基本的做法是將已知資料分為「訓練集」與「測試集」兩組，訓練組的資料，用來建立模型。建立模型的方法有許多，今天的學習包會介紹十種建立模型的演算法，模型建立後套用在測試集，就可以檢查正確率了。正確率愈高的模型， 代表模型愈好。',
    text:`<ul><li>「機械學習」簡單地說&#xff0c;簡單地說&#xff0c;就是從過去的經驗學習&#xff0c;亦即先給電腦一些已知的資料&#xff0c;讓電腦找出一些規則&#xff0c;或建立模型&#xff0c;接著才可以用在預測未知資料之上。當然&#xff0c;模型建的好不好&#xff0c;自然就很重要了&#xff0c;有一些指標可以衡量模型建的好不好&#xff0c;例如誤差的平方和&#xff0c;或預測的準確率等。</li><li>從已知的資料建立模型&#xff0c;一點也不陌生&#xff0c;例如統計的迴歸分析就是這樣的應用。給定已知的觀察值&#xff0c;裡面有自變數、有依變數&#xff0c;就可以建立迴歸模型&#xff0c;我們可以計算可解釋百分比&#xff0c;亦即 R 平方&#xff0c;也可以看係數是否等零&#xff0c;自變數是否顯著&#xff0c;也可以給定自變數&#xff0c;預測依變數的大小。</li><li>機械學習也是一樣&#xff0c;先給電腦一些已知的資料(依變數、自變數)&#xff0c;藉由演算法建構模型&#xff0c;自變數就可推估依變數。如果依變數是類別變數&#xff0c;例如正面或負面&#xff0c;此時稱為標記&#xff08;label&#xff09;。我們可以檢測模型預測標記的準確率。</li><li>基本的做法是將已知資料分為「訓練集」與「測試集」兩組&#xff0c;訓練組的資料&#xff0c;用來建立模型。建立模型的方法有許多&#xff0c;今天的學習包會介紹十種建立模型的演算法&#xff0c;模型建立後套用在測試集&#xff0c;就可以檢查正確率了。正確率愈高的模型&#xff0c; 代表模型愈好。</li><li>「情感分析」是分類的應用。也是將已知資料分為「訓練集」與「測試集」兩組。這兩組資料都要有情感標記&#xff0c;例如本例中的 P 與 N。訓練組資料數量要夠多、品質要夠好&#xff0c;沒有標記錯誤、而且要有代表性&#xff0c;方能提高準確率。多個類別的的分類&#xff0c;例如 P N M 亦可進行&#xff0c;同學可以自己試試看。</li></ul>
    學習包&#xff1a;
    C:\Users\[使用者名稱]\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Ff263501bbe71daddfea18ebc5a279fd510f8b3a3d9ecdfb54c962d2117cdc270%2F13_Py_plot_classifier_comparison.ipynb" target="_blank" rel="noopener noreferrer">13_Py_plot_classifier_comparison.ipynb</a><a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Ffbf1f154d1d10a72878cf4818da0ad7556592b772f3894f7ab725904e519a319%2F11_py_SVD_PCA.ipynb" target="_blank" rel="noopener noreferrer"></a>
    C:\Users\[使用者名稱]\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F0815e5eadff1a410e192193f5bee8d42262b9096d1e77ffc4aa320ac521679ff%2F13_Py______sklearn.ipynb" target="_blank" rel="noopener noreferrer">13_Py_sentiment_sklearn.ipynb</a>

    資料檔案&#xff1a;
    d:\my python\corpus\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F0e6da4ce1f2547bbb3d4febba5cb9907e6fec91ab6d38fcd6e3843bbb9dae6aa%2Fsentiment_P_N.xlsx" target="_blank" rel="noopener noreferrer">sentiment_P_N.xlsx</a>
    d:\my python\data\<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F8e61f7e23a1436c74790cf18b66472476455d68e1c695bc0860c3b3348aae860%2Ftest_pos_neg.xlsx" target="_blank" rel="noopener noreferrer">test_pos_neg.xlsx</a>

    教學影片&#xff1a;
    1 <a href="https://youtu.be/aWJYX99ItfI" target="_blank" rel="noopener noreferrer">https://youtu.be/aWJYX99ItfI</a>
    2 <a href="https://youtu.be/pfzhwmqXJZA" target="_blank" rel="noopener noreferrer">https://youtu.be/pfzhwmqXJZA</a>

    自我查核&#xff1a;


    作業&#xff1a;
    本週介紹機械學習以及他在情感分析上的應用&#xff0c;本週我希望你們整理五十筆資料&#xff0c;加上標記&#xff0c;作為測試組&#xff0c;首先將你們的資料併入上課提供的標記好的資料&#xff0c;降維、加權&#xff0c;取得文章向量後&#xff0c;訓練組與測試組資料再分開來。各種分類演算法都試一次&#xff0c;預測測試組的標記料&#xff0c;告訴我準確率如何&#xff1f;那一種分類法效果最好&#xff1f;
    交作業的時候除了要交程式檔外&#xff0c;還要交這五十筆標記過的excel檔。

    ##############################################
    補充&#xff1a;
    分類預測其實是機率的概念&#xff0c;如果想看機率&#xff0c;請用下面的指令&#xff0c;用法與 predict 相同&#xff0c;輸出為 tuple&#xff0c;各類別的機率&#xff1a;
    <code>predict_proba</code>(X_test)

    `,
    videourl: 'https://www.youtube.com/embed/aWJYX99ItfI',
    pgd: 'https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fi91z715dpjc6y0%2Ff263501bbe71daddfea18ebc5a279fd510f8b3a3d9ecdfb54c962d2117cdc270%2F13_Py_plot_classifier_comparison.ipynb',
    pgdex:'',
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
