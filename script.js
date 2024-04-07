const inputElement = document.getElementById('animated-input');
const quiz_text = document.getElementById('quiz-text');
const date = new Date();

let player_score = 0;
let player_id = 0;
let user_answer;

////////////////////////////////

let random_num;
let current_word;

let answer_distortion;
let hint = "";

////////////////////////////////

const quiz = [
    ['remainder',[`나머지`]],
    ['fun',[`즐거운`]],
    ['bad',[`나쁜`]],
    ['mere',[`단순한`]],
    ['implement', [`도구`]],
    ['foster',[`기르다`]],
    ['unpleasant', [`불편한`, `불쾌한`]],
    ['environment', [`환경`]],
    ['nonetheless', [`그럼에도 불구하고`]],
    ['hatred', [`증오`]],
    ['develop', [`키우다`, `발전`]],
    ['compassion', [`연민`]],
    ['task', [`업무`, `과업`]],
    ['policy', [`방책`, `정책`]],
    ['mentality', [`사고방식`]],
    ['alter', [`바꾸다`]],
    ['emerge', [`나타나다`]],
    ['conceive', [`고안하다`]],
    ['needle', [`바늘`]],
    ['vastly', [`훨씬`, `대단히`]],
    ['relevance', [`적합성`, `타당성`, `관련성`]],
    ['assume', [`가정하다`, '추정하다']],
    ['ambitious', [`야심에 찬`]],
    ['embrace', [`포용하다`, `껴안다`]],
    ['advance', [`발전`, `발전시키다`]],
    ['executive leadership', [`경영 지도자`]],
    ['expose', [`노출하다`]],
    ['integrate', [`흡수하다`, `통합하다`]],
    ['excel',[`탁월하다`]],
    ['retirement',[`은퇴`]],
    ['consequence', [`영향`, `결과`]],
    ['intake', [`섭취`]],
    ['cognitively', [`인지적으로`]],
    ['volume', [`용적`, `부피`]],
    ['unusual', [`특이한`]],
    ['isolate', [`분리하다`]],
    ['component', [`요소`]],
    ['inverse', ['역의', '반대의']],
    ['cortex', ['피질']],
    ['latter', ['후자의']],
    ['excessive', ['과도한']],
    ['metabolic', ['신진대사']],
    ['processed', ['가공된']],
    ['self-conscious', ['자의식의', '자의식이 강한']],
    ['awareness', ['인식']],
    ['rough', ['난폭한', '거친']],
    ['observe', ['관찰하다']],
    ['flaw', ['실수', '결점']],
    ['at expense of', ['~을 희생하면서']],
    ['proportion', ['비율']],
    ['certainty', ['확실성']],
    ['stem from', ['~에서 유래하다']],
    ['ancient', ['고대의']],
    ['ancestor', ['선조', '조상']],
    ['alongside', ['곁에', '나란히']],
    ['direct', ['안내하다', '지시하다']],
    ['dependence', ['의존']],
    ['ensure', ['책임지다']],
    ['vague', ['모호한']],
    ['sensation',['감각']],
    ['unpredictable', ['예측할 수 없는']],
    ['consistency', ['일관성']],
    ['virtue', ['장점', '미덕']],
    ['judgement', ['판단']],
    ['detect', ['감지하다']],
    ['advantageous', ['유리한']],
    ['statistical', ['통계의']],
    ['examine', ['조사하다']],
    ['forecast', ['예측하다']],
    ['demand', ['수요']],
    ['stable', ['변동이 없는', '안정된']],
    ['account for', ['~을 설명하다']],
    ['novel', ['새로운']],
    ['competitor', ['경쟁자']],
    ['means', ['수단']],
    ['assert', ['발휘하다', '주장하다']],
    ['obedient', ['복종적인', '순종적인']],
    ['subordinate', ['아랫사람', '부하']],
    ['deliberately', ['의도적으로']],
    ['dose', ['약을 주다']],
    ['moderate', ['적절한']],
    ['negotiate', ['협상하다']],
    ['arise', ['생기다', '일어나다']],
    ['verbal', ['언어적인', '말의']],
    ['investor', ['투자자']],
    ['exchange', ['주고받다', '교환하다']],
    ['record', ['보고하다', '기록하다']],
    ['expense', ['비용']],
    ['accountant', ['회계사']],
    ['criterion', ['기준']],
    ['recognition', ['인식']],
    ['scholar', ['학자']],
    ['myth', ['신화']],
    ['amplify', ['증폭시키다']],
    ['virtual', ['가상의']],
    ['conversely', ['반대로']],
    ['sustain', ['지속하다']],
    ['handful', ['몇 명뿐인']],
    ['immersive' ['몰입하게 하는']],
    ['ultimately', ['최종적으로']],
    ['extreme', ['극심한']],
    ['harsh', ['혹독한']],
    ['obvious', ['명백한']],
    ['midday', ['한낮의']],
    ['antarctive', ['남극의']],
    ['physiological', ['생리적인', '생리학의']],
    ['tolerance', ['내성', '관용']],
    ['cacti', ['선인장들']],
    ['ecologist', ['생태학자']],
    ['emotive', ['감정을 나타내다']],
    ['rational', ['이성적인']],
    ['outcome', ['결과']],
    ['instinct', ['본능']],
    ['intuition', ['직관']],
    ['variable', ['변인']],
    ['pedestrian', ['보행자']],
    ['precisely', ['정확히']],
    ['continuum', ['연속체']],
    ['frame V', ['틀을 씌우다']],
    ['specifically', ['특히']],
    ['misguide', ['잘못된 길로 이끌다']],
    ['expectation', ['기대']],
    ['imply', ['암시하다']],
    ['villain', ['악당']],
    ['aggressively', ['격렬하게']],
    ['defeat', ['패배시키다']],
    ['assumption', ['가정']],
    ['eventually', ['결국']],
    ['wholegrain', ['통곡물로 만든']],
    ['rarely', ['거의 ~하지 않는']],
    ['organ', ['기관, 장기']],
    ['chunk', ['덩어리']],
    ['intensity', ['강도']],
    ['discharge', ['방출하다']],
    ['electric field', ['전기장']],
    ['frequency', ['주파수']],
    ['interference', ['간섭']],
    ['drastically', ['극적으로']],
    ['productivity', ['생산성']],
    ['tangled', ['얽힌']],
    ['deliberation', ['심사숙고']],
    ['attack', ['착수']],
    ['publication', ['출간물']],
    ['substitute', ['대체하다']],
    ['puzzle', ['당황하게 하다']],
    ['distinguish', ['구분하다']],
    ['dimension', ['차원']],
    ['vertical', ['수직의']],
    ['gravity', ['중력']],
    ['positioning', ['배치']],
    ['horizontal', ['수평의']],
    ['relevant', ['중요한']],
    ['equally', ['똑같이']],
    ['upside down', ['거꾸로', '거꾸로 뒤집혀']],
    ['invert', ['뒤바꾸다']],
    ['artificial', ['인공적인']]
];

function send_quiz() {
    hint = "";
    random_num = parseInt(quiz.length*Math.random());

    current_word = {
        word: quiz[random_num][0],
        answer: quiz[random_num][1]
    };

    answer_distortion = distort_string_arr(current_word.answer);

    for (var i = 0; i<answer_distortion.length; i++) {
        hint += answer_distortion[i] + '//';
    }

    quiz_text.innerHTML = `${current_word.word}의 뜻은? <br>${hint}`;
};

function distort_string_arr(str_arr) {
    var rand;
    var send = ['힌트:'];
    var str_change = "";

    for (const element of str_arr) {
        rand = parseInt(element.length*Math.random());
        str_change = "";
        for (var i = 0; i<element.length; i++) {
            
            if (i === rand || element[i] === " ") {
                str_change += element[i];
            } else {
                str_change += "#";
            }
        }
        console.log(str_change);
        send.push(str_change);
    }
    
    return send;
}
////////////////////////////////////////////////////////

function check_answer() {
    user_answer = inputElement.value;
    
    for (i = 0; i<current_word.answer.length; i++) {
        if (user_answer === current_word.answer[i]) {
            alert('정답');
            send_quiz();
        }
    }
};

//////////////////////////////////////

function scaleinput() {
    inputElement.style.transform = 'scale(1.1)';

    setTimeout(function() {
        inputElement.style.transform = 'scale(1)';
    }, 30);
};

//////////////////////////////////////

inputElement.addEventListener('keydown', () => {
    // inputElement.style.transform = 'scale(1.1)';
});

inputElement.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        check_answer();
        inputElement.value = "";
    }
    // inputElement.style.transform = 'scale(1)';
});

inputElement.addEventListener('input', () => {
    scaleinput();
});

send_quiz();

//////////////////////////끝!!!!!!!!!!!!!!!!!!!!//////////////////////////

//영상 51:11
// ngrok : 테스트 시 유용한 라이브러리
// moment : 현재 시간 알려주는 라이브러리
// SocketIo : Client, Server 사용 
//오류 최소화
"use strict"
const socket = io();

// function send() {
//     const param = {
//         name: nickname.value,
//         msg: chatInput.value
//     }
//     socket.emit("chatting", param)
// }

// sendbutton.addEventListener("click", send)

//emit(채널이름, 소켓보내기)
//socket.emit("chatting", "from front")

// socket.on("chatting", (data) => {
//     const { name, msg, time } = data;
//     const item = new LiModel(name, msg, time);
//     item.makeLi()
//     displayContainer.scrollTo(0, displayContainer.scrollHeight)
// })

// function LiModel(name, msg, time) {
//     this.name = name;
//     this.msg = msg;
//     this.time = time;

//     this.makeLi = () => {
//         const li = document.createElement("li");
//         li.classList.add(nickname.value === this.name ? "sent": "received")
//         const dom = `<span class="profile">
//             <span class="user">${this.name}</span>
//             <img class = "image" src="https://placeimg/50/50/any" alt="any">
//         </span>
//         <span class="message">${this.msg}</span>
//         <span class="time">${this.time}</span>`;
//         li.innerHTML = dom;
//         chatList.appendChild(li);
//     }
// }