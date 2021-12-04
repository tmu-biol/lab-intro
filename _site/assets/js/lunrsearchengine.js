
var documents = [{
    "id": 0,
    "url": "/lab-intro/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/lab-intro/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "/lab-intro/authors",
    "title": "Authors",
    "body": "{% for author in site. authors %}                       {% if author[1]. gravatar %}                {% else %}                {% endif %}                  {% if author[1]. web %}                       {% endif %}          {% if author[1]. twitter %}                      {% endif %}          {% if author[1]. email %}                      {% endif %}                                     {{ author[1]. display_name }}:         {{ author[1]. description }}                {% endfor %}"
    }, {
    "id": 3,
    "url": "/lab-intro/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "/lab-intro/contact",
    "title": "Contact",
    "body": "  Please send your message to {{site. name}}. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "/lab-intro/",
    "title": "Home",
    "body": "  このサイトは生命科学科の学生に向けて公開しています。外部にURL等を公開しないようお願いします。  公開期間： 〜2月4日(金)  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "/lab-intro/%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/",
    "title": "研究室選びのポイント",
    "body": "2021/11/25 - 研究室選びのポイント:  研究室の名前にダマされない     研究室の名前からは想像できないような研究をしていることもありますし、研究室の名前のようなことを本当に研究しているとは限りません。    実際にどのような研究をしているのか     先輩から聞いた話、友達から聞いた噂、今までの授業内容、などの情報だけを当てにしていませんか？研究に関しては先生に直接聞きに行くのが一番です。    研究室で何ができるのか     卒業研究でどのようなことができるのか聞いてみましょう。自分で考えたテーマで研究させてくれる研究室もありますし、大きなテーマに沿ってみんなで協力して研究を進めている研究室もあります。   学外の研究機関から指導を受けられる研究室もあります。   卒研生として配属されたら、どのような研究が可能か、具体的に考えて見ましょう。    研究室の雰囲気も重要です。     本サイトで雰囲気だけでも感じてもらえればと思います。       研究室配属までの流れ:   研究室紹介     各研究室の先輩に直接話を聞けます。    アンケート調査①・②     その時点で各研究室を希望する人数を集計します。    予備調査     アンケート調査の結果や研究室紹介を参考にして、希望の研究室を決定し、提出します。    配属先決定     人数調整などを行い、指導教員の許可をもらった上で配属先が決定します。    Topへ戻る → "
    }, {
    "id": 7,
    "url": "/lab-intro/neumol/",
    "title": "神経分子機能研究室",
    "body": "2021/11/24 - こんにちは。神経分子機能研究室です。私たちはショウジョウバエ、培養細胞、マウスを用いて、脳の病気について研究しています。現在3名の先生、博士3人、修士3人、卒研生4人が所属しています。ゼミでは、研究の進捗状況や、論文の紹介を行います。時間は月曜日と木曜日の10時〜12時です。和気あいあいとした楽しい雰囲気の研究室です。興味がある方は是非一度見学に来てください☺️ 卒研テーマ例:  摂食と細胞内エネルギー代謝に注目した脳アンチエイジング アルツハイマー病など加齢依存性神経変性疾患の発症メカニズム 脳老化と疾患におけるミトコンドリアの役割ゼミの回数:  週２回"
    }, {
    "id": 8,
    "url": "/lab-intro/devpro/",
    "title": "発生生物学研究室",
    "body": "2021/11/23 - こんにちは、発生生物学研究室です。私たちは福田先生と高鳥先生のもと、発生のメカニズムについて研究をしています。研究はニワトリとホヤで・ニワトリ(福田先生)：修士1人、学部3人・ホヤ(高鳥先生)：博士1人　と分かれて行っていますゼミは水曜日(18:00～)と土曜日(10:00～)の週に2回あり、論文の紹介と研究の進捗発表をします 卒研テーマ例:  ニワトリ     ニワトリ胚の頭褶形成機構   トリ胚の張力維持に必要なEdge cellsについて    ホヤ     中胚葉と内胚葉の運命分離について   ゼミの回数:  週２回"
    }, {
    "id": 9,
    "url": "/lab-intro/celgen/",
    "title": "細胞遺伝学研究室",
    "body": "2021/11/22 -    自分で研究計画を立てて、それに合わせた生活を送っています。     細胞遺伝では坂井先生、武尾先生、朝野先生の３人の先生たちのもとにそれぞれ学生がいます。     学生の内訳は、上の学年から博士課程学生が5人、修士課程学生が5人、学部生が7人となっています。     私たちの研究室では、研究テーマが多種多様ですが、３つのグループの垣根を超えて学生同士で研究の相談は勿論のこと、気軽にお喋りしたりもしています。とてもｱｯﾄﾎｰﾑなﾗﾎﾞﾗﾄﾘｰになています。     ゼミは細胞遺伝学研究室全員が集まって、週に2回行われています。毎週月曜の朝(9:30〜11:30)と水曜の夕方(16:30〜18:00)に行っています。どちらも発表やスライドは全て英語で行なっており、主に論文を紹介しています。論文の他には、自分の進捗状況を発表します。  卒研テーマ例:  遺伝子組み換えショウジョウバエを用いたミトコンドリアアコニターゼ突然変異患者の代謝及び疾患の評価 ストレスが引き起こす性機能障害に関連する神経細胞の同定 昆虫外骨格の硬化・着色に関与する酵素遺伝子MCO2の機能解明ゼミの回数:  週２回"
    }, {
    "id": 10,
    "url": "/lab-intro/molgen/",
    "title": "分子遺伝学研究室",
    "body": "2021/11/21 -  加藤グループ     B4：1名   D1：1名    得平グループ     B4：4名   M1：4名   M2：1名   D2：1名   得平グループでは、シアノバクテリアを用いて微生物の環境適応機構を分子レベルで解明することを目指して研究を進めています。毎週月曜日の朝10時から12時に論文紹介、研究の進捗報告をするゼミを行っています。コアタイムなどは特にありません。研究室の雰囲気は和やかで、来たい時間に来て実験を行い帰りたい時間に帰ることができます。スケジュールの自由度が高いので、自分で計画をしっかり立てることのできる人に向いている研究室です。 ※加藤先生の研究室に興味がある方は直接アポを取るようお願いします。 卒研テーマ例:  大腸菌における酸化ストレス耐性関連遺伝子の機能解析 (加藤G) ゲノム縮小大腸菌の実験室進化 (加藤G) Anabaena sp. PCC7120におけるレスポンスレギュレーターOrrAをリン酸化するヒスチジンキナーゼの同定 (得平G) Anabaena variabilisにおけるアキネート形成に関与する新規遺伝子の同定 (得平G) 窒素固定型シアノバクテリアを利用した窒素と二酸化炭素からのシアノフィシン生産 (得平G) AzollaとNostoc azollaeの共生メカニズムの解明 (得平G)ゼミの回数:  不定期 (加藤G) 週１回 (得平G)"
    }, {
    "id": 11,
    "url": "/lab-intro/horcel/",
    "title": "植物発生生理学研究室",
    "body": "2021/11/20 - こんにちは。植物発生生理学研究室です。 私たちの研究テーマは「被子植物(イネ、コムギなど)の受精卵の発生機構」です。植物の受精と胚発生過程を顕微鏡下で再現することで、植物の発生原理を知り、そして新たな植物の作成を試みています。また、植物の発生機構を支える細胞の運命決定様式についての研究も進めています。 現在、先生3名の下に10人の学生が所属しています。内訳は研究員1人、博士3人、修士4人、卒研生2人です。 活動時間は原則平日の10~17時となっています。自分の研究に応じて、柔軟に研究活動を進めています。 ゼミは週1~2回で、火曜日14：40~と金曜日13：00~です。自分の研究活動の報告と論文の紹介を半期に一回ずつ行います。 研究室は3部屋がつながっており、先生や学生同士の距離が近くコミュニケーションがとりやすい環境です☺ 興味のある方は、ぜひ一度研究室に話を聞きに来てください！ 卒研テーマ例:  ヒストン脱アセチル化酵素の阻害剤による、卵細胞の自律的発生機構 コムギ—イネ交雑受精卵の発生及び、発生不全機構 C3-C4植物交雑受精卵の産生とゲノムダイナミクスの制御による、光合成細胞質置換 シロイヌナズナの花成における茎頂メリステムのサイズとアイデンティティ転換 ゼミ回数: 週２回 "
    }, {
    "id": 12,
    "url": "/lab-intro/celche/",
    "title": "細胞生化学研究室（準備中）",
    "body": "2021/11/19 - 準備中です。 "
    }, {
    "id": 13,
    "url": "/lab-intro/evogen/",
    "title": "進化遺伝学研究室（準備中）",
    "body": "2021/11/18 - 準備中です。 "
    }, {
    "id": 14,
    "url": "/lab-intro/neubio/",
    "title": "神経生物学研究室（準備中）",
    "body": "2021/11/17 - 準備中です。 "
    }, {
    "id": 15,
    "url": "/lab-intro/pladev/",
    "title": "植物環境応答研究室（準備中）",
    "body": "2021/11/16 - 準備中です。 "
    }, {
    "id": 16,
    "url": "/lab-intro/pladev-narikawa/",
    "title": "植物環境応答研究室 光合成微生物グループ（成川グループ）",
    "body": "2021/11/16 - 植物環境応答研究室光合成微生物グループ（成川グループ）は、今年の4月に発足した新しい研究グループです。 現在はPIの成川以外に、特任助教1名、博士課程学生2名、修士課程学生2名が在籍しています。来年度は、現状、特任助教1名、博士課程学生1名、修士課程学生3名となる予定です。ゼミは月曜日の10時から1-2時間ほど行っています。隔週で鐘ケ江先生のグループと共同での論文ゼミ、合間の週には成川グループ内での研究進捗報告ゼミを行っています。後者は、特に事前に資料を準備する必要はなく、2週間の間に行った実験について、ノートやパソコンを参照しながら報告してもらうスタイルです。 研究室の雰囲気は、その年々のメンバーによって変動すると思うので、一概に言えませんが、PIの成川の方針は「個人主義」です。個別に仲良くするのは自由ですが、みんなで何かをしようというような強い同調圧力のあるような研究室にはしたくないです。 研究としては、光合成微生物であるシアノバクテリアを対象として、「光生物学」という学問分野を土台として、分子レベルから細胞集団レベルまでの階層で、光利用戦略を解明する研究を行っています。将来的には生態レベルの階層での視点も取り入れたいと思っています。また、近年は、上記の研究によって発見したユニークな光センサー群を改変し、分子イメージングやオプトジェネティクス（光遺伝学）に資する蛍光プローブ・光スイッチの開発をする応用的な研究にも取り組んでいます。 卒研テーマ例:  Acaryochloris属のシアノバクテリアの光利用戦略の解明 開環テトラピロール色素を合成する酵素の発見・改変 シアノバクテリオクロム型光受容体の発見・改変ゼミの回数:  週１回"
    }, {
    "id": 17,
    "url": "/lab-intro/envmic/",
    "title": "環境微生物学研究室（準備中）",
    "body": "2021/11/15 - 準備中です。 "
    }, {
    "id": 18,
    "url": "/lab-intro/anieco/",
    "title": "動物生態学研究室",
    "body": "2021/11/14 - こんにちは、動物生態学研究室です🌞私たちは小型哺乳類、鳥類、爬虫類、両生類、魚類、昆虫類、ダニ類など様々な動物について、生態、行動、進化、保全の研究を行っています。メンバーは先生2人、博士3人、修士4人、卒研生5人です。 ゼミは毎週火曜日の4、5限です。4限は学生のみで勉強会、5限は論文紹介や研究紹介を行なっています。 とても優しい先輩がたくさんいる研究室です。興味があればいつでも遊びに来てください！ 卒研テーマ例:  アカネズミ類の餌嗜好性に及ぼすαピネンとリモネンの影響 トゲオオハアリの脂肪体と社会行動の関係性 ヒメシロモンドクガの翅多型と繁殖形質の関連ゼミの回数:  週１回"
    }, {
    "id": 19,
    "url": "/lab-intro/plaeco/",
    "title": "植物生態学研究室（準備中）",
    "body": "2021/11/13 - 準備中です。 "
    }, {
    "id": 20,
    "url": "/lab-intro/anisys/",
    "title": "動物系統分類学研究室(Systematic Zoology lab)",
    "body": "2021/11/12 - 所在：南大沢キャンパス牧野標本館2階214・217など。学年ごとの研究室の人数：B4 が3名、M1が1名、M2が2名、D1が1名、D2が1名、D3が１名。半数は留学生。ゼミの時間や内容：金曜日午後、通常１３時から。不開催日あり。研究室の雰囲気：気さくで頼りになる博士後期（D1~3）の先輩方がいます。アットホームな環境と言えます。料理が得意な人が料理を振る舞ってくれたりします。自分で作ることもできますが、ハイエナが多いと思うので多めに作りましょう。研究の概要（材料など）：陸上無脊椎動物（アリやクモ、ムカデなど）を主に扱っています。日本や東南アジア各地でサンプルを採集し、形態情報・遺伝情報を用いて系統体系に基づいた分類しています。また、そうした結果からや地理環境やその変遷に絡めた分析を行ったり、行動学的な観点から種の生殖的隔離機構に迫る研究も行われています。 卒研テーマ例: ２０２１年度は３テーマの研究が行われています。  コムカデ綱（Symphyla）の系統分類 マクラギヤスデ（Niponia nodulosa）の系統分類 タマヤスデ属（Hyleoglomeris）の系統分類、および生殖的隔離の行動観察ゼミの回数:  週１回未満"
    }, {
    "id": 21,
    "url": "/lab-intro/anisys-adam/",
    "title": "動物系統分類学研究室(Systems behavior lab)",
    "body": "2021/11/12 - こんにちは！Adamラボです！私たちの研究室は、B4 3人、M1 1人　D2 1人 D3 1人　客員研究員 3人　准教授 1人で構成されています！ 半分以上が海外出身の研究者である多国籍なラボです！ ゼミは毎週水曜日の14:00〜1時間ほど行います。また、月に1回、動物生態学研究室とコラボしたセミナーを開催しています。 内容としては、自分の研究の進捗報告がメインで行っています！ 研究室の雰囲気は、自由です。いや、ほんとに自由です。驚くほど自由です。笑 やりたいことがあればいくらでもサポートしてくれる環境は整っていると思います！ 研究の概要としては、社会性昆虫に関する生態学や進化生物学、動物行動学に関する研究や小笠原諸島や沖縄などでの島嶼生物学に関する研究がメインです！ 材料としては、アリやハチなどの社会性昆虫を含む様々な生き物を扱っています。 グリーアノールを扱っている学生もいるので幅広く動物は選べると思います。 詳しく、気になる方は、以下のURLをクリックして読んでみてください！ https://adamcronin. org/ → 卒研テーマ例:  Collective performance in Camponotus ants Immune responsiveness in Lasioglossum bees Biodiversity impacts of invasive Anolis lizards in Ogasawaraゼミ回数:  週１回未満"
    }, {
    "id": 22,
    "url": "/lab-intro/plasys/",
    "title": "植物系統分類学研究室（準備中）",
    "body": "2021/11/11 - 準備中です。 "
    }, {
    "id": 23,
    "url": "/lab-intro/muscle/",
    "title": "運動分子生物学研究室【HPS】",
    "body": "2021/11/10 - 「運動は我々を救うか？」初めまして、運動分子生物学研究室 B4のH. Sです。運動というと体育会系のイメージを持たれるかも知れませんが、実際には分子生物学・細胞生物学的手法を用いた研究を行っています。運動すると健康になる、これを科学的に証明し、健康増進・創薬の開発を目指した基礎研究を行っています。運動という現象を筋肉の収縮に置き換えて考えており、マウス・筋肉を主な材料としています。 〇メンバーキャラ濃く賑やかです。藤井宣晴 先生(教授)眞鍋康子 先生(准教授)古市泰郎 先生(助教)ポスドク；1名ドクター；3名マスター；4名卒研、学部4年；5名副専攻、学部3年；5名研究生；2名 現状のメンバーは上記に示した通りですが、来年度はさらに増える見込みです。 〇やれること  ウェスタン ブロッティング(タンパク質解析) PCR(qPCRによる遺伝子発現解析、ジェノタイピング) 凍結切片作成＞免疫染色(生体から摘出した組織の形態的観察です。培養細胞の染色も可能です。) 細胞培養実験(細胞株、幹細胞を扱ったin vitroな実験です。ラボには細胞を扱う専用の培養室があります。) 筋収縮実験；in vitro筋収縮、in situ収縮実験(マウスを生かしたまま筋収縮させます)、in vivo収縮(マウスから摘出した筋組織を収縮させます) FACS(セルソーター)を用いた幹細胞の単離あげるときりがないのですが大まかにこんな感じです。 〇ゼミの回数週２回 16:30-　各曜日担当者1人が発表月曜; 論文紹介ゼミ水曜日; 研究進捗ゼミコアタイムはないですが基本9:00- 17:00です。 〇最後に一言ただ研究するのではなく、世界を変える研究をしています。 卒研テーマ例:  糖尿病マウスの血清に含まれる筋萎縮因子の探索 糖尿病は高血糖が慢性的に続き、複数の合併症を引き起こすことが知られているが、その1つに筋萎縮があります。そこで糖尿病による筋萎縮の原因を突き止め、病気の改善、治療に役立てます。 マイオカインZ(筋から分泌され生理機能を持つ物質の１つ)が肝臓の脂肪蓄積に及ぼす機序の解明 マイオカインZが肝臓の脂肪蓄積に与える影響を解明することで、筋から分泌された物質が他臓器に作用する新たな経路を証明します。 筋でのマイオカインQ欠損が脂質代謝に与える影響の解明 筋から分泌されるマイオカインQが全身の脂質代謝に与える影響を解明し、筋が全身代謝を制御する新たな機構を突き止めます。 Musashi2が遅筋線維を維持する機序の解明 筋には速筋線維(収縮力が強く、瞬発的)と遅筋線維(収縮力が弱く、持久的)があり、寝たきりなどになると、遅筋線維が著しく減少します。そこで遅筋線維の制御に貢献するといわれている、Musashi2の作用機序を解明し、治療法確立に貢献します。 マイオカインQと間葉系幹細胞の相互作用の解明 マイオカインと間葉系幹細胞の相互作用を解明することにより、新たな筋の機能解明に貢献します。ゼミの回数:  週２回"
    }, {
    "id": 24,
    "url": "/lab-intro/behneu/",
    "title": "行動生理学研究室【HPS】（準備中）",
    "body": "2021/11/09 - 準備中です。 "
    }];

var lunr = require('./lib/lunr.js');
require('./lunr.stemmer.support.js')(lunr);
require('./lunr.ru.js')(lunr);
require('./lunr.multi.js')(lunr);

var idx = lunr(function () {


    this.ref('id');
    this.field('title');
    this.field('body');

    this.use(lunr.multiLanguage('en', 'ru'));

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});