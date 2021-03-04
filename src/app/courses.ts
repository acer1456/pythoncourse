export const courses = [
  {
    id: 0,
    group: 0,
    name: '安裝與介紹',
    content: '（環境與建立）',
    videourl: 'https://www.youtube.com/embed/yPhKSeVTwX0',
    // text: '各位同學大家好首先歡迎大家修習這門課。 我們要在一學期之內，教會大家，從完全不懂程式，到可以利用python 程式語言進行文字探勘。這不是一件容易的工作，每週都有一個小作業，學期未有分組專業報告，根據過去經驗，平均每週要花十個小時以上，方能跟上進度。先問一下，是否有同學要加選？要加選同學，等一下下課十分鐘時處理。接著，介紹課程網站 piazza。大家是否有收到我寄給你們的邀請信，如果有的話，請自行註冊、登錄。就可以進來這個網站。我們上課所有的資料、學習包、錄影、討論、作業繳交，都在這個網站上進行。如果沒有收到邀請信的同學，同樣下課十分鐘時來我這邊處理。',
    text: `各位同學大家好
首先歡迎大家修習這門課。我們要在一學期之內&#xff0c;教會大家&#xff0c;從完全不懂程式&#xff0c;到可以利用python 程式語言進行文字探勘。這不是一件容易的工作&#xff0c;每週都有一個小作業&#xff0c;學期未有分組專業報告&#xff0c;根據過去經驗&#xff0c;平均每週要花十個小時以上&#xff0c;方能跟上進度。

## 軟體安裝&#xff1a;
<ul><li>Anaconda 是配合Python 的作業環境&#xff0c;提供常用的模組&#xff0c;讓 python 功能更強大。</li><li>anaconda (python 3.X) 網站&#xff1a;<a href="https://www.anaconda.com/products/individual" target="_blank" rel="noopener noreferrer">https://www.anaconda.com/products/individual</a> 依自己電腦規格選擇 32或64位元。</li><li>python 是目前最普遍的程式語言&#xff0c;簡單易學&#xff0c;功能強大&#xff0c;幾乎任何問題均可處理。</li><li>安裝 anaconda 時 python 軟體會自動安裝&#xff0c;</li><li>python 官方網站 <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">https://www.python.org/downloads/</a> .</li><li>window 與 Mac 版本&#xff0c;功能相同。</li></ul>

好&#xff0c;現在請大家 啟動 Anaconda Nevigator  &gt;  Jupyter Notebook&#xff0c;
打開第一個學習包 <a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F7083e1c6cd7ba802df3612d2d99b19b97137300ee8b401c51f4b8b20fcfb0c55%2F1_python_____.ipynb" target="_blank" rel="noopener noreferrer">1_python_install.ipynb</a>。
請下載後置於 C:/Users/user/ 亦即 home directory, 註注意&#xff1a;user 是你自己的電腦帳號&#xff0c;以後各週的資料夾均同。
下面兩個範例圖片請下載&#xff0c;置於 pic 目錄下
C:/Users/user/pic/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2Fadf0fee74b72077cce8d1623277d27dda63e1f3caafb0166d6ffa6563adffd0e%2FJypyter_notebook____.PNG" target="_blank" rel="noopener noreferrer">Jypyter_notebook.PNG</a>
C:/Users/user/pic/<a href="/redirect/s3?bucket=uploads&amp;prefix=paste%2Fi91z715dpjc6y0%2F17d9fc27da33cb998f14e6896450d4ace90762e9cdf8f938a1bbe7fcfe6ea564%2Fgirl.gif" target="_blank" rel="noopener noreferrer">girl.gif</a>`,
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
    content: '（機器學習）',
    text: '「機械學習」簡單地說，簡單地說，就是從過去的經驗學習，亦即先給電腦一些已知的資料，讓電腦找出一些規則，或建立模型，接著才可以用在預測未知資料之上。當然，模型建的好不好，自然就很重要了，有一些指標可以衡量模型建的好不好，例如誤差的平方和，或預測的準確率等。從已知的資料建立模型，一點也不陌生，例如統計的迴歸分析就是這樣的應用。給定已知的觀察值，裡面有自變數、有依變數，就可以建立迴歸模型，我們可以計算可解釋百分比，亦即 R 平方，也可以看係數是否等零，自變數是否顯著，也可以給定自變數，預測依變數的大小。機械學習也是一樣，先給電腦一些已知的資料(依變數、自變數)，藉由演算法建構模型，自變數就可推估依變數。如果依變數是類別變數，例如正面或負面，此時稱為標記（label）。我們可以檢測模型預測標記的準確率。基本的做法是將已知資料分為「訓練集」與「測試集」兩組，訓練組的資料，用來建立模型。建立模型的方法有許多，今天的學習包會介紹十種建立模型的演算法，模型建立後套用在測試集，就可以檢查正確率了。正確率愈高的模型， 代表模型愈好。',
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
