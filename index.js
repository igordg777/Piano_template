
document.getElementById('inputSound').onfocus = (event) => {
    let info = document.getElementById('info');
    info.innerHTML = "Записанный Вами c помощью кнопок клавиатуры код мелодии можно скопировать и сохранить для повторной игры на пианино";

}

document.getElementById('inputSound').onblur = (event) => {
    let info = document.getElementById('info');
    info.innerHTML = "";

}

document.getElementById('sentLink').onclick = (event) => {
    function email(addr, subj)
    {
        with(document.frm1)
        {
            action = "mailto:" + addr + "?subject=" + subj;
            submit();
        }
    }
    email('some.adress@mail.ru',`По ссылке https://igordg777.github.io/Piano/ можно научиться игре на пианино!`)

}

let checker;
function sound() {
    let rand;
    function randomizer() {
        rand = Math.floor(1 + Math.random() * (7 + 1 - 1));
        if (checker === rand) {
            randomizer()
        } else {
            checker = rand;
        }
    }
    randomizer()
    document.getElementById("myspan").innerHTML =
        `<embed src='./examplePiano/${rand}.mp3' hidden=true autostart=true loop=false>`;

    function randInfo(rand) {
        switch (rand) {
            case 1:
                document.getElementById("mydiv").innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Rachmaninov.jpg" width="200px" alt="альтернативный текст" class="leftimg"> <p align="justify">Композитор, пианист, дирижер Сергей Васильевич Рахманинов родился 1 апреля (20 марта по старому стилю) 1873 года в дворянской семье в имении Онег Новгородской губернии (по другим данным – в усадьбе Семеново Новгородской губернии, ныне – Новгородская область). Рос в музыкальной семье. Его дед, Аркадий Рахманинов, пианист, известен как автор салонных романсов. Сергей Васильевич Рахманинов – великий русский композитор, также прославившийся как пианист и дирижёр. Он получил первую известность еще будучи студентом, так как написал ряд весьма популярных романсов, знаменитую Прелюдию, Первый фортепианный концерт и оперу «Алеко», которую поставили в Большом театре. В своем творчестве он синтезировал две основные русские композиторские школы, московскую и петербургскую, и создал свой неповторимый стиль, ставший жемчужиной классической музыки. В 1893 году Рахманинов понимает, что влюблен, и дарит возлюбленной новый романс «Не пой, красавица, при мне». Личная жизнь Сергея Рахманинова меняется спустя девять лет - Наталья становится официальной супругой молодого композитора. С юных лет Сергей Рахманинов начал систематически учиться музыке. В 1882 году он поступил в Петербургскую консерваторию. <br> Биография Рахманинова Сергея Васильевича была бы неполной, если не сказать о его любви к России. Всю жизнь композитор оставался патриотом, окружил себя в эмиграции русскими друзьями, русской прислугой, русскими книгами. Но возвращаться отказывался, так как не признавал Советской власти. Тем не менее, когда Фашистская Германия напала на СССР, Рахманинов был чуть ли не на грани паники. Денежный сбор со многих концертов он стал отправлять в фонд Красной армии и призывал последовать своему примеров многих знакомых. <br> Всю жизнь Сергей Васильевич очень много курил, почти не расставаясь с сигаретами. Скорее всего, именно эта пагубная привычка вызвала у композитора на склоне лет меланому. Правда, сам Рахманинов об онкологическом заболевании не подозревал, работал до последних дней и всего за полтора месяца до смерти дал грандиозный концерт в США, который стал для него последним. Умер композитор 28 марта 1943 года.</p>`
                document.getElementById("titleSong").innerHTML = 'Рахманинов - Итальянская Полька'
                break
            case 2:
                document.getElementById("mydiv").innerHTML = `<img src="https://nebach.ru/wp-content/uploads/2016/09/%D1%8E%D1%80%D0%B8%D0%BC%D0%B0-1.jpg" width="200px" alt="альтернативный текст" class="leftimg"> <p align="justify">Yiruma, всемирно известный южнокорейский пианист и композитор, родился 15 февраля 1978 в Сеуле. Yiruma это сценическое имя я Ru-MA, что означает "достижение " на корейском языке. Связь Моцарта и корейского вундеркинда Ли Рума можно объяснить лишь теорией реинкарнации. В пять лет мальчик из Сеула, в семье которого никто ранее не занимался музыкой, сел за фортепьяно и просто начал играть. Удивленные родители отвели его в музыкальную школу, но там ответили: он слишком талантлив, чтобы учиться здесь. Уже в 11 лет Ли оказался в Англии, в знаменитой музыкальной школе Пёрселла для одаренных детей из разных стран. По ее окончании юноша поступил в Королевский колледж в Великобритании, где на глазах у ментора Харрисона Бёртуистла начал создавать свои первые произведения. Колледж Ли Рума покинул в статусе одного из самых многообещающих молодых композиторов мира. Yiruma является одним из величайших классических творцов.</p>`
                document.getElementById("titleSong").innerHTML = "Yiruma – «River Flows in You»"
                break
            case 3:
                document.getElementById("mydiv").innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Chopin%2C_by_Wodzinska.JPG/520px-Chopin%2C_by_Wodzinska.JPG" width="200px" alt="альтернативный текст" class="leftimg"> <p align="justify">Фредерик Шопен родился 22 февраля 1810 года в деревне Желязова-Воля недалеко от Варшавы (Польша). Прекрасный музыкальный вкус будущему композитору привила его мать, которая хорошо играла на фортепиано и пела. Необыкновенные музыкальные способности, а также самое важное – любовь к игре на фортепиано, проявились у Фредерика еще в раннем детстве. После окончания училища, Шопен начал изучать теорию музыки в классе композитора Юзефа Эльснера. Благодаря покровительству князей Четвертинских и Антона Радзивилла, Фредерику удалось попасть в высшее общество. 
                С 1829 года Фредерик Шопен, биография которого уже тогда свидетельствовала, что он станет великим музыкантом, начал активно выступать со своими произведениями в Вене. В 1830 году композитор навсегда покидает Варшаву. В 1831 году поселяется в Париже, где моментально становится известным, обретает множество поклонников. Через какое-то время музыкант сам начинает преподавать. Первый приступ заболевания легких случился у композитора Шопена в 1837 году (по мнению биографов музыканта, это был туберкулез). С тех пор он страдал астматическими приступами. В это время Шопен жил с писательницей Жорж Санд. С 1838 по 1839 год влюбленные пробыли на острове Мальорка. Их отношения были непростыми, что также отрицательно сказывалось на состоянии здоровья композитора. В 1847 году они расстались.
                В 1848 году Шопен поселился в Лондоне, где продолжал давать концерты и вести преподавательскую деятельность. 16 ноября 1848 года в Лондоне состоялся последний концерт великого композитора. С каждым днем он чувствовал себя все хуже и вскоре вернулся в Париж.
                5 (17) октября 1849 года оборвалась краткая биография Шопена. Похоронили великого композитора на кладбище Пер-Лашез в Париже.</p>`

                document.getElementById("titleSong").innerHTML = 'Шопен - Vals_do - diez_minor_or._64_№_2_'

                break
            case 4:
                document.getElementById("mydiv").innerHTML = `<img src="https://obrazovaka.ru/wp-content/uploads/2008/09/lyudvig-van-beethoven.jpg" width="200px" alt="альтернативный текст" class="leftimg"> <p align="justify">В австрийском (а ныне немецком) городе Бонне 16 декабря 1770 года в семье тенора придворной капеллы Иоганна ван Бетховена появился на свет третий в роду Людвиг, после своего деда (баса, а затем придворного капельмейстера) и старшего брата. Сам факт рождения в семье потомственных певцов предопределил судьбу мальчика. Когда к 1811 году маэстро полностью потерял слух, он стал редко выходить из дома. Публичная игра на фортепьяно была основным источником доходов виртуоза, а также он постоянно давал уроки музыки представителям аристократии. С потерей слуха для Бетховена наступили тяжелые времена. После провальной попытки в 1811 году исполнить собственный Концерт для фортепьяно № 5 («Император») он больше ни разу не появлялся на публике до того случая, когда в паре с дирижером Михаэлем Умлауфом руководил оркестром во время премьеры Симфонии № 9 в 1824 году.

                Но глухота не воспрепятствовала сочинению музыки. Бетховен пользовался специальной палочкой, прикрепленной одним концом к передней панели фортепьяно. Зажимая другой конец палочки зубами, он «чувствовал» издаваемый инструментом звук благодаря передающейся по палочке вибрации.
                
                Именно на последнюю декаду жизни композитора приходится написание самых великолепных произведений, которыми и по сей день не устают восхищаться слушатели: Струнный квартет, оп. 131; «Торжественная месса»; «Великая фуга», оп. 133 и, безусловно, Девятая симфония. В 1823 году Бетховен закончил "Торжественную мессу", которую считал своим величайшим произведением. Эта месса, рассчитанная скорее на концертное, чем на культовое исполнение, стала одним из этапных явлений в немецкой ораториальной традиции.

                При содействии Голицына "Торжественная месса" впервые была исполнена 7 апреля 1824 году в Петербурге. 26 марта 1827 года Людвиг ван Бетховен скончался в Вене от воспаления легких, осложненного желтухой и водянкой.</p>`

                document.getElementById("titleSong").innerHTML = "Людвиг Ван Бетховен «Лунная соната»"
                break
            case 5:
                document.getElementById("mydiv").innerHTML = `<img src="https://obrazovaka.ru/wp-content/uploads/2008/09/lyudvig-van-beethoven.jpg" width="200px" alt="альтернативный текст" class="leftimg"> <p align="justify">В австрийском (а ныне немецком) городе Бонне 16 декабря 1770 года в семье тенора придворной капеллы Иоганна ван Бетховена появился на свет третий в роду Людвиг, после своего деда (баса, а затем придворного капельмейстера) и старшего брата. Сам факт рождения в семье потомственных певцов предопределил судьбу мальчика. Когда к 1811 году маэстро полностью потерял слух, он стал редко выходить из дома. Публичная игра на фортепьяно была основным источником доходов виртуоза, а также он постоянно давал уроки музыки представителям аристократии. С потерей слуха для Бетховена наступили тяжелые времена. После провальной попытки в 1811 году исполнить собственный Концерт для фортепьяно № 5 («Император») он больше ни разу не появлялся на публике до того случая, когда в паре с дирижером Михаэлем Умлауфом руководил оркестром во время премьеры Симфонии № 9 в 1824 году.

                Но глухота не воспрепятствовала сочинению музыки. Бетховен пользовался специальной палочкой, прикрепленной одним концом к передней панели фортепьяно. Зажимая другой конец палочки зубами, он «чувствовал» издаваемый инструментом звук благодаря передающейся по палочке вибрации.
                
                Именно на последнюю декаду жизни композитора приходится написание самых великолепных произведений, которыми и по сей день не устают восхищаться слушатели: Струнный квартет, оп. 131; «Торжественная месса»; «Великая фуга», оп. 133 и, безусловно, Девятая симфония. В 1823 году Бетховен закончил "Торжественную мессу", которую считал своим величайшим произведением. Эта месса, рассчитанная скорее на концертное, чем на культовое исполнение, стала одним из этапных явлений в немецкой ораториальной традиции.

                При содействии Голицына "Торжественная месса" впервые была исполнена 7 апреля 1824 году в Петербурге. 26 марта 1827 года Людвиг ван Бетховен скончался в Вене от воспаления легких, осложненного желтухой и водянкой.</p>`

                document.getElementById("titleSong").innerHTML = "Людвиг Ван Бетховен «К Элизе»"

                break
            case 6:

                document.getElementById("mydiv").innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/George_Frideric_Handel_by_Balthasar_Denner.jpg/548px-George_Frideric_Handel_by_Balthasar_Denner.jpg" width="200px" alt="альтернативный текст" class="leftimg"> <p align="justify">Родился 27 февраля 1685 г. в городе Галле. С раннего детства мальчик отличался талантом к музыке, но отец мечтал, чтобы он стал юристом. Тем не менее родители разрешили сыну брать уроки игры на органе и композиции у Ф. В. Цахау. Начиная с 1712 г. композитор жил в основном в английской столице; ему оказывала покровительство вначале королева Анна Стюарт, а после её смерти — Георг I. С момента открытия в 1719 г. оперного театра «Королевская академия музыки», во главе которого стал Гендель, наступила пора его блестящей славы. Одну за другой писал композитор свои оперы: «Радамист» (1720 г.), «Муций Сцевола» (1721 г.), «Оттон» и «Флавий» (обе 1723 г.), «Юлий Цезарь» и «Тамерлан» (обе 1724 г.), «Роделинда» (1725 г.), «Сципион» и «Александр» (обе 1726 г.), «Адмет» и «Ричард I» (обе 1727 г.). В 1727 г. Гендель получил английское подданство. В 1728 г. из-за денежных затруднений оперный театр закрылся. Для Генделя наступила тяжёлая пора, он пытался создать новый театр, неоднократно ездил в Италию. Все эти неурядицы подорвали его здоровье: в 1737 г. у него парализовало правую сторону тела. Но композитор не оставил творчество. В 1738 г. им была написана опера «Ксеркс», но следующая опера — «Дейдамия» (1741 г.) — провалилась, и больше Гендель опер не писал. Он остановился на жанре оратории, в котором с не меньшим размахом выказал всю силу своего гения. Среди лучших образцов этого жанра — «Саул» и «Израиль в Египте» (обе 1739 г.), «Мессия» (1742 г.), «Самсон» (1743 г.), «Иуда Маккавей» (1747 г.), «Иевфай» (1752 г.). Кроме ораторий Генделем написано около ста кантат, а для оркестра — 18 концертов под общим названием «Большие концерты». После 1752 г. у Генделя сильно ухудшилось зрение, в конце жизни он вообще ослеп. Тем не менее композитор продолжал творить. Последний концерт под его управлением, в котором исполнялась оратория «Мессия», прошёл за восемь дней до смерти Генделя. Умер 14 апреля 1759 г. в Лондоне.</p>`
                document.getElementById("titleSong").innerHTML = "Гендель - Соната(скрипка и фортепиано)"
                break
            case 7:

                document.getElementById("mydiv").innerHTML = `<img src="https://mega-stars.ru/img/compositors/pictures/oginskij_mihail_kleofas.jpg" width="200px" alt="альтернативный текст" class="leftimg"> <p align="justify">Жизненный путь польского композитора М. Огиньского похож на увлекательную повесть, изобилующую внезапными поворотами судьбы, теснейшим образом связанной с трагической судьбой его родины. Имя композитора было окружено ореолом романтики, еще при жизни о нем возникало множество легенд (так, он не раз "узнавал" о собственной смерти). Музыка Огиньского, чутко отразившая настроения времени, многократно усиливала интерес к личности ее автора. Композитор обладал и литературным талантом, он - автор "Мемуаров о Польше и поляках", статей о музыке, стихов.

                Огиньский рос в высокообразованной дворянской, семье. Его дядя Михал Казимеж Огиньский - великий гетман Литвы - был музыкантом и поэтом, играл на нескольких инструментах, сочинял оперы, полонезы, мазурки, песни. Он усовершенствовал арфу и написал статью об этом инструменте для "Энциклопедии" Дидро. В 1789 г. начинается политическая деятельность Огиньского, он - польский посол в Нидерландах (1790), Англии (1791); возвратившись в Варшаву, занимает пост казначея Литвы (1793-94). Казалось, ничто не омрачает блестяще начатую карьеру. Но в 1794 г. вспыхивает восстание Т. Костюшко за восстановление национальной независимости страны (польско-литовское королевство Речь Посполитая было разделено между Пруссией, Австрией и Российской империей). Будучи страстным патриотом, Огиньский примыкает к восставшим и активно участвует в борьбе, а все свое имущество отдает "в дар родине". Марши и боевые песни, созданные композитором в эти годы, получили большое распространение и были популярны среди повстанцев. Огиньскому приписывается песня "Еще Польша не погибла" (ее автор точно не установлен), которая впоследствии стала национальным гимном. Активно участвуя в политической жизни, Огиньский не мог много времени уделять сочинению музыки. Кроме оперы, боевых песен и нескольких романсов основную часть его небольшого наследия составляют фортепианные пьесы: польские танцы - полонезы и мазурки, а также марши, менуэты, вальсы. Особенно прославился Огиньский своими полонезами (более 20). Скончался Михаил-Клеофас Огинский 15 октября 1833 года на 69-м году жизни во Флоренции.</p>`

                document.getElementById("titleSong").innerHTML = "Огинский - Полонез"

                break
        }
    }
    randInfo(rand)
}

function soundOut() {
    document.getElementById("myspan").innerHTML = "";
    document.getElementById("mydiv").innerHTML = "";
    document.getElementById("titleSong").innerHTML = "";
}

let checkerboomBox = false;

function soundBoomBox() {
    if(checkerboomBox === false){
        document.getElementById("myspan").innerHTML =
            `<embed src='./examplePiano/soundBoomBox.mp3' hidden=true autostart=true loop=false>`;
        checkerboomBox = true;
    }else{
        document.getElementById("myspan").innerHTML =
            `<embed src='' hidden=true autostart=true loop=false>`;
        checkerboomBox = false;
    }
}

(function () {
    'use strict';

    var boxElem = document.getElementById('box1');
    var pointerElem = document.getElementById('pointer1');

    function onMouseMove(event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;
        var crd = boxElem.getBoundingClientRect();
        var activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

        requestAnimationFrame(function movePointer() {
            if (activePointer) {
                pointerElem.classList.remove('box-pointer-hidden');
                pointerElem.style.left = Math.floor(mouseX) + 'px';
                pointerElem.style.top = Math.floor(mouseY) + 'px';
            } else {
                pointerElem.classList.add('box-pointer-hidden');
            }
        });
    }

    function disablePointer() {
        requestAnimationFrame(function hidePointer() {
            pointerElem.classList.add('box-pointer-hidden');
        });
    }

    boxElem.addEventListener('mousemove', onMouseMove, false);
    boxElem.addEventListener('mouseleave', disablePointer, false);

})();




