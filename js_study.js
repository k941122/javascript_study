

//변수 Part !


let name = "해리포터"

// 1000 lines....
// let name = "samsung"; => 변수명 'name'때문에 구문 오류 발생 (let은 같은 변수명을 허용하지 않는다.)
name = "sansung" //이런식으로 변수의 값을 변형한다.

//const => 상수 , 절대 변하지 않는 값, 수정 않됨, 변수명 만들시 대문자 => const BIRTH_DAY = '1994-11-22'
//tip! 모든 변수를 일단 const로 선언하고 나중에 변경될 여지가 있는 변수들만 나중에 let으로 바꿔준다.
age = 17;

const age = 17;

/** 변수 규칙!
 * 첫째 변수는 문자와 숫자, $와 _만 사용   const OUR_HOBBY = "코딩" , let _ = 77 , let $ = "달러"
 * 둘째 첫글자는 숫자가 될수 없음   let 7_11 = "store" (않됨!)
 * 셋째 예약어는 사용할수 없습니다.  let class = 75(class는 예약어 라서 않됨!)
 * 넷째 가급적 상수는 대문자로 알려주세요. const ICECREAM_CHOICE = "candy-bar"
 * 다섯째 변수명은 읽기쉽고 이해할 수 있게 선언 let c = 1994 (직관적이지 않음) let birth_year = 1994
*/

const animal_name = "핑핑이";
const animal_age = 3;


// 자료형 (문자열, 숫자형, boolean,null,undefined) typeof


// 문자열 표시 방법 string
const animal_name1 = "핑핑이"; //큰따옴표 ""
const animal_name2 = '핑핑이'; //작은따옴표 ''
const animal_name3 = `핑핑이`; //백틱 ``

const message = "I'm cat" //큰따옴표를 사용시 (') 작은 따옴표를 그냥 써도 된다.
const message2 = 'I\'m cat' // 작은 따옴표 사용시 (\') 특수문자+작은따옴표를 서야 작은 따옴표가 인식됨

const message3 = `My name is ${animal_name}`; // 백틱은 문자열(string) 중간에 '${변수이름}'변수가 들어 갈때 쓴다. 
console.log(message3); // 브라우저 콘솔에서 message3가 출력됨

const message4 = `고양이의 이름은 ${animal_name} 이고 ${2+1}살 입니다.`

//숫자형(number)

const my_age = 30; //숫자형 number
const PI = 3.14;

//숫자형은 사칙연산이 가능하다.
console.log(1+2);//더하기
console.log(31-1);//빼기
console.log(12*4);//곱하기
console.log(8/4);//나누기
console.log(12%5)//12에서5를 나눈 나머지

const x = 1/0; //1에서 0을 나누면?
console.log(x);//무한대를 얻을수 있다. 

const My_name = "짱구"
const z = My_name/2; //문자열(My_name)을 숫자(2)로 나누면?

console.log(z); //NaN =>  Not a Number 숫자가 아니다 라는 뜻! 숫자와 관련된 작업을 할때 NaN이 아닌지 염두해 둬야됨

//Boolean (true,false)

const handsome = true;
const ugly = false;


//Boolean 예시

const apartment = "Xi"
const price = 2000

console.log(apartment == xi); //변수명과 값이 일치하는지 여부를 물어봄 (true)
console.log(price <1000); // 변수 price의 값이 1000보다 작은지를 물어봄 (false)


//null 과 undefined

//null = 값이 정해지지 않음
//undefined = 값이 할당되지 않음

let toy;
console.log(toy); // toy라는 변수명만 만들었을뿐 값을 할당하지 않음으로 undefined

let toy_price = null;
console.log(toy_price); // toy_price 변수의 값을 null로 지정했을 경우 toy_price는 존재하지 않는다.(아예 나오질 않음)



//typeof 연산자 (변수의 자료형을 알아낼수 있음)


const perfum = "chanel"

console.log(typeof 3); //숫자형 number
console.log(typeof perfum) //문자형 string (상수 perfum의 값의 형태를 나타냄)
console.log(typeof "no.5") //문자형 string
console.log(typeof null); //객체 object ※하지만 null은 객체가 아니다! javascript의 오래된 오류일 뿐이다!
console.log(typeof undefined) //undefined

 /**typeof를 사용할 이유
  * 정상적으로 let과 const를 사용해서 변수를 만들 경우에는 사용할일이 없음
  * BUT! 다른 개발자가 만든 변수의 타입을 알아야 하거나
  * API통신들을 통해 받아온 데이터들을 타입에 따라 다른 방식으로 처리해야 할때 사용됨
 */


// tip!!!! 


/** 1번째 백틱 과 작은 따옴표를 햇갈리지 말것!
 * const name = "Mike";
 * const message = `My name is ${name}`;
 * 
 * const message_error = 'My name is ${name}' message에서 사용된 백틱 대신 작은 따옴표를 쓸경우
 * console.lor(message_error); console 창에서 변수 name이 호출되는 대신 문자열 그대로  "My name is ${name}"가 호출된다.
 */

/**2번째 숫자형(number)뿐만 아니라 문자열(string)도 더하기(+)를 이용할수 있다.
 * const department = "현대백화점";
 * const greetings = "어서오십시오.";
 * const greetings2 = "입니다.";
 * 
 * console.log(greetings + department + greetings2);  => '어서오십시오. 현대백화점 입니다.'  
 *                                                        각 변수명을 더하기(+)를 이용해 연결했다. 
 *                                                   
 * 
 * ※하지만 숫자형(number) + 문자열(string)을 더할경우 (+) 숫자형은 문자형으로 변한다!
 * 
 * const floor = 6; //숫자형 number
 * console.log(greetings + floor + "층" + greetings2); => "어서오십시오. 7층 입니다." 
 *                                                        숫자형 변수 floor가 문자형으로 변환되서 묶임!
 */



/**typeof는 배열(array) 에는 못쓰는데 그럼 어떻게 array의 타입을 확인할 수 있는가?
 * 
 * typeof 로 배열(array) = [] 과 객체 (object) ={}를 식별하게되면 둘다 object(객체) 가 뜬다.
 * 이때 배열을 구분하려면 Array.isArray 를 쓰면된다.
 * 
 * 예시--------------------------------------------------------------------------
 * 
 * cocnst object = new Object(); =>새로운 객체 (new Object)를 형성하여 변수 object에 전달
 * cosnt array = new Array(); => 새로운 배열(new Array)를 형성하여 변수 array에 전달
 * cosnt object2 = {}; => 객체
 * const array2 = []; => 배열
 * 
 * typeof를 이용해 배열과 오브젝트를 확인하기!
 * 
 * console.log(typeof(object)); => object(객체 '{}') 라고 확인됨
 * console.log(typeof(array)); => object(객체) f라고 확인됨
 * console.log(typeof(object) === typeof(object2)); => 둘다 오브젝트 이고 '==='은 값과 자료형 둘다 일치하는 지를 물어보는 것임으로 true
 * 
 * console.log(typeof(array)); => 콘솔창에 object (객체) 라고 확인됨
 * console.log(typeof (array2)); => 콘솔창에 object(객체) 라고 확인됨
 * console.log(typeof (array) === typeof(array2)) => 콘솔창에 true라고 확인됨 둘다 값과 자료형이 일치함
 * 
 * console.log(typeof(object) === typeof(array)); => 콘솔창에는 값과 자료형이 같다고 나오나 실제로는 객체(object)와 배열(array)임으로 틀림 
 *                                                   하지만 콘솔은 둘다 object라고 인식했기 때문에 true라고 나옴
 * 
 * Array.isArray를 이용해 배열 확인하기!
 * 
 * console.log(Array.isArray(object)); => Array.isArray를 이용해 배열인지 아닌지를 확인 하는 것이고 object(객체)가 들어가 있음으로 console창에 false라고 나옴
 * console.log(Array.isArray(array)); => Array.isArray를 이용해 (array)가 배열인지 아닌지를 가리는 것임으로 console창에 true라고 나옴. 
*/


//대화상자 alert propmpt confirm



//alert = 알려줌! , prompt = 입력받음 , confirm = 확인 받음 


/**
 * alert() : 경고창, 알림창을 띄우는 용도. 사용자가 확인 버튼을 누르기 전까지는 사라지지 않는다.
 * prompt() : 사람들이 어떤 값을 입력받을때 사용된다.
 */

const user_name = prompt("닉네임을 입력하세요!"); //promp창을 띄우고 user_name을 입력
alert("어서오세요" + user_name + "공주님"); //alert창이 뜨면서 "어서오세요 user_name 공주님" 이라는 메세지가 보임
alert(`어서오세요 ${user_name} 공주님`) // 위 alert 코드와 같아보이지만 백틱(``)을 쓰면서 ""와 +를 쓰지 않고 
                                       // 변수가 필요한 부분에만 ${}를 넣어서 쓸수 있다.

//만약 위 코드에서 prompt("닉네임을 입력하세요")창에서 취소 버튼을 누르면 console창에서는 null(아무내용도 없음) 값이 표시된다.


//propmpt는 default값도 입력받을수 있다.

const reservation_date = propmt("예약일을 입력해 주세요.","2023-11-11"); //prompt는 두개의 인수를 받을수 있다.
                                                                        //"예약일을 입력해 주세요."와 "2023-11-11"이라는 인수를 통해 prompt창에서 전달하고자 하는 메세지 1번째 인수와 입력창에 나오는 예약어 2번째 인수가 나오게 된다.


//confirm() 확인받을때 사용

const isClient = confirm("고객님께서는 백화점 회원 입니까?");
console.log(isClient);

/**
 * 위와 같이 confirm();을 쓰게 된다면 alert나 prompt와 달리 확인과 취소 버튼이 나오게 된다.
 * 활용예시 ) 결제 하시겠습니까? , 정말 삭제 하시겠습니까? 같은 사용자의 행동을 한번더 확인하고 선택하게 할때 사용된다.
 */

/**최종 정리!
 * 
 *alert("취소되었습니다.") : 메세지를 보여주며 확인 버튼을 누르면 닫힘
 *prompt("예약일을 입력하세요","2023-11-11") : 사용자에게 메세지 보여주기 어떤 값을 입력할수 있는 필드를 보여줌, 취소를 누르면 null을 반환,확인을 누르면 default(propmt의 2번째 인수)를 제공
 *confirm("구독을 취소 하시겠습니까?"); : 사용자에게 확인을 받기 위해서 사용됨,확인버튼은 true를 취소 버튼은 false를 반환 함.
 */

/**alert(),prompt(),confirm()의 단점!! 
 * 
 * 1. 창이 떠있을 동안 스크립트 일시정지
 * 2. 스타일링 불가능! - 브라우저(크롬 엣지 파이어폭스 등..)마다 디자인이 다름. 
 *                      디자이너가 싫어함, 모달창을 쓰기도 하지만 기본적으로 제공되는 알림창들이 작동이 빠름
*/



//형변환 Part !

/**
*String() => 문자형으로 변환
*Number() => 숫자형으로 변환
*Boolean() => 불린형으로 변환
*/

//예제01 ▽
const mathScore = prompt("수학 몇점?");
const artScore = prompt("미술 몇점");

const result = (mathScore + artScore) /2

console.log(result);

/**
 * mathScore에 20, artScore에 40 을 입력한다면 console창 에서는 1020(숫자열)이 출력됨
 * 오류가 있음! 원래는 20과 40을 더한값에 2를 나눈 평균이 나와야함 30(숫자열)이 출력되야함
 */


//예제02 ▽
const mathScore2 = 20;
const artScore2 = 40;

const result2 = (mathScore2 + artScore2) /2;

console.log(result2);

/**
 * 위의 식으로 console창을 실행 시킬경우 30(숫자형)이라는 정상적인 값이 나온다.
 */


/** 자동 형변환!(예제01번)
 * 
 * 예제01번 에서 1020(숫자형)으로 console창에 출력된 이유
 * 
 * const mathScore = prompt("수학 몇점?");
 * const artScore = prompt("미술 몇점");
 * 
 * mathScore과 artScore 변수에 값으로 설정된 prompt();창에서 입력된 값은 문자형(string)으로 출력되기 때문이다.
 * 그러므로 mathScore과 artScore prompt창에서 입력된 20과40은 숫자형이 아닌 "20","40"으로 입력되는 것이다.
 * 
 * const result = (mathScore + artScore) /2
 * prompt창에서 입력된 문자형 값 ("20","40") 들을 더할 경우 60(숫자형)이 아닌 "20"+"40" ="2040" 문자 그대로 더해지게 되는것이다.
 * 도출된 "2040"(문자형)값에 2를 나눠주면 1020(숫자형)이 나오는 이유는 나누기(/)같은 표현식은 숫자형으로 "※자동변환※"되서 표현되기 때문이다.
 * 
 * "2040"/2 = 1020 이 나오는 이유도 그렇다. 문자형"2040"이 나누기(/)를 통해서 숫자형으로 자동 변환되어 2로 나누기 되는것이고 1020(숫자형)이 나오게 된다.
 * 
 * 자동형변환 예시 문제▽
 * "8"/"4" = 2(숫자형) => 문자형이지만 나누기를 통해 숫자형으로 자동 형변환 된것이다.
 */

/**※자동 형변환의 단점!!!※
 * 자동으로 자료형을 바꿔준다는 부분이 편해 보일수 있으나, 실제로 코드를 작성할때 예기치 못한 error을 일으킬수 있다.
 * 의도를 가지고 형변환을 지정해 주는게 안정성이 높다.(명시적 형변환!)
 */


// 명시적 형변환 하는법!! 

/** String()-----------------------------------------------------------------
 * 
 * String()은 괄호안의 타입을 문자형으로 바꿔줍니다.
 * String()을 사용할때는 앞의 S를 대문자 S로 써줘야 한다!
 */

console.log (
    String(3),         //"3" 문자열 "3"으로 변환!
    String(true),      //"true" 문자열 "true"로 변환!
    String(false),     //"false" 문자열 "false"로 변환!
    String(null),      //"null" 문자열 "null"로 변환!
    String(undefined)  //"undefined" 문자열 "undefined"로 변환!
);

//※console.log(); tip!!! => console.log의 괄호안에 따옴표(,)를 이용해서 여러가지 값을 넣을수 있습니다!




/**Number()------------------------------------------------------------------------
 * 
 * Number()은 괄호안에 타입을 숫자형으로 바꿔줍니다.
 * Number() 역시 앞자리 스팰링을 대문자 N으로 적습니다.
 * 주로 문자형을 숫자형으로 바꿀때 씁니다.
 */

console.log(
    Number("741"),     //"741"문자형 이 741(숫자형) 으로 변환되어 console창에 출력됩니다.
    Number("852abc"),  // 만약 숫자형으로 자료형을 변형시키는 Number() 괄호 안에 "852abc" 숫자와 문자가 혼용되 있으면 NaN (숫자없음) 으로 뜨니 주의해야한다.
    Number(true),      // boolean형인 true를 Number() 괄호에 넣을 경우 1(숫자형)이 출력된다.
    Number(false)      // boolean형인 false를 Number() 괄호에 넣을 경우 0(숫자형)이 출력된다.
);




/** Boolean()--------------------------------------------------------------------------
 * 
 * Boolean()은 입력된 자료형을 Boolean형 으로 바꿔준다.
 * 다른 명시적 변환 과 똑같이 맨 앞글자를 대문자 B로 써준다.
 * 
 * Boolean() 명시적 변환은 false를 중심적으로 기억하면 된다.
 *  ▷ 숫자형 0
 *  ▷ 빈 문자열 ""
 *  ▷ null        => 비어있다는 자료형
 *  ▷ undefined   => 값이 지정되지 않음
 *  ▷ NaN         => 숫자가 아님 (무언가 지정되지 않은 느낌)
 * 
 * 위 자료형 들은 모두 0(숫자형) 이거나 값이 없는 비어있는 형태를 보인다.
 * 0 혹은 비어있는 것을 나타내는 자료형은 false 라고 console창에 뜨게된다.
 * 
 * 위에서 나온 자료형들 외에는 전부다 true 값이 반환되게 된다.
 *
 */

//Boolean() 명시적 반환 예시코드 ▽

//true로 반환되는 경우
console.log(
    Boolean(1),          // 숫자열 1은 true로변환 
    Boolean(123),        // 숫자열 123은 true로 변환 
    Boolean("frontend")  // 문자열 "frontend"는 true로 변환
);

//false로 반환되는 경우

console.log(
    Boolean(0),           // 숫자형 0은 false로 반환
    Boolean(""),          // 빈문자열 ""은 false로 반환
    Boolean(null),        // null 자료형은 false로 반환
    Boolean(undefined),   // undefined 자료형은 false로 반환
    Boolean(NaN)          // NaN (숫자 없음)은 false로 반환
);


/**※주의사항!-------------------------------------------------------------------
 * Number(null) 은 0으로 반환됨
 * Number(undefined)은 NaN(숫자없음)으로 반환
 * 
 * 위 두가지는 암기를 해야한다.
 * 
 * 주의사항02!--------------------------------------------------------------------
 * Number(0) 은 false 0이 숫자형 이기 때문!
 * Number('0')은 true ''에 0이 들어 가서 문자열로 인식되기 때문!
 * 
 * Number('') 빈문자열 ''은 false
 * Number(' ') 따옴표 사이에 공백(스페이스바)가 들어가면 true!
 * 
 * 위에 있는 모든 주의 사항들은 버그없는 코드를 만들기 위해서 꼭! 암기해야 된다!!!
*/


//연산자! () -----------------------------------------------------------------------


/**나머지 (%)를 어디에 쓰는지 알아보기! 
 * ▷ 나머지란 어떤 수를 나누고 난뒤 얼마가 남는지를 보여주는 것입니다.
 * 
 * 홀수 : X % 2 = 1 => (X % 2)는 어떤 숫자 X를 2로 나눈뒤 나머지 값이 얼마냐 라는 식입니다. 2로 나눈뒤 나머지 값이 1이 나왔음으로 X는 홀수 입니다. 
 * 짝수 : Y % 2 = 0 => (Y % 2)는 어떤 숫자 Y를 2로 나눈뒤 나머지 값이 얼마냐 라는 식입니다. 2로 나눈뒤 나머지 값이 0이 나왔음으로 Y는 짝수 입니다. 
 * (짝수란 정수중에서 2로 나눠 떨어지는 정수들을 말함으로 위에서 처럼 2로 나눈뒤 나머지 값이 0으로 나와야 합니다. 그러지 않은 값은 홀수 입니다.)
 * 
 * 어떤 값이 들어와도 5를 넘기지 않고 싶다면? 
 * X % 5 = 0~4 사이의 값만 반환! => 임의의 숫자가 들어올수 있는 X에 어떤 값이 들어와도 나머지 값이 5를 넘기지 않고 싶다면? (X % 5)식을 세우면 된다.
 * 
 * ▽예시
 *   7 % 5는 2를 나머지 값으로 반환 합니다. (7에서 5를 나눈 나머지값)
 *   10 % 5는 0을 나머지 값으로 반환 합니다. (10에서 5를 나눈 나머지값)
 *   200 % 5는 0을 나머지 값으로 반환 합니다. (200에서 5를 나눈 나머지 값)
 * 
 * 아무리 큰 숫자라도 5를 나누면 나머지 값이 5보다 작은 0~4 사이 값만 나오게 된다!
 * 
*/


/**거듭제곱 (**)
 * ▷ 거듭제곱을 사용하고 싶을때는 곱하기를 뜻하는 별(*)을 두번(**) 적습니다.
 * 
 * const num = 2**3;
 * console.log(num) => 8을 반환 / 위의 num변수의 값인 2**3은 2의3승(2를3번 곱했다.) 임으로 8을 반환!
 */


/**사칙연산의 우선순위
 * 
 * 곱하기(*),나누기(/) > 더하기(+),빼기(-)
 * 위에서 보여주는 네가지의 사칙연산을 동시에 사용할 경우 더하기(+),빼기(-)보다 곱하기(*),(/)가 더 계산할때 우선순위가 높다!
 * 사친연산을 통해 원하는 값을 얻기 위해서는 괄호()를 적절히 사용해야 된다!
 * 
 * 예시 ▽
 * 
 * const price = (200+300)*2/3
 * 위의 경우 원래라면 곱하기(*)와 나누기(/)를 먼저 계산한후 더하기(+)를 해야한다. 
 * 하지만 200+300 부분에 괄호()를 넣어주면 (200+300)이 우선 순위가 생기면서 200+300을 먼저 계산하게 된다!
 */

/* 줄여 쓸수 있는 연산자!
 *
 * let sale = 20;
 * sale = sale + 5; => 변수 sale의 값을 변경 하는 식인데, 기존의 sale값(20)에 5를 더한것이다. 25
 * sale +=5; // 연산자 줄여서 쓰지! 기존의 변수 sale에 
 *
 * console.log(num)
*/

/**증가 연산자와 감소 연산자
 * 사용법: 플러스를 두번(++)누르거나 마이너스를 두번(--)누르면 된다!
 * 
 * let num = 20;
 * num++; => console창에 11 이라고 뜬다.
 * num--; => console창에 9라고 뜬다. 
 * console.log(num);
 * 
 * let num2 = 10
 * let result = num++ => 값이 10이 나온다. 증가연산자를 사용했음에도 변화가 없음.
 * let result2 = ++num => 값이 11이 나온다. 
 * 
 * 뒤에 ++를 넣으면 더해지기 전의 값이 나온다.
 * 앞에 ++를 넣으면 더해진 값이 나온다.
 * 
 * console.log(result);
 */


//비교연산자, 조건문 part ------------------------------------------------------------

/**javascript 비교연산자!
 * 
 * <(크다) , >(작다) , <=(크거나 같다) , >=(작거나 같다.) , ==(같은값이다.) , !=(같지 않다.)
 *  
 * =을 하나 쓰는것은 값을 할당한다. 라는 의미이다.
 * ex) fruit = "apple"; fruit라는 변수에 =을 이용해서 문자형 "apple"이라는 값을 할당한다.
 *     fruit == "apple" furit가 "apple"과 같은가? 라는 의미이다.
 *     fruit != "apple" fruit는 "apple"과 같지않다. 
 * 반환값은 Boolean 자료형이다. true 나 false를 반환한다.
 */

console.log(15 < 5);  //false 로 반환된다.
console.log(15 == 5); //false로 반환된다. "=="은 동등연산자 이다!
console.log(15 != 5); //true로 반환된다.

/**동등연산자 (==)
 * 값만 비교해서 동일한지 여부를 반환하는 비교연산자.
 * 
 * const dog_age = 12;
 * const cat_age = "12";
 * 
 * console.log(dog_age == cat_age); => console창에서 true라고 출력됨
 * dog_age는 숫자형 12, cat_age는 문자형 12로 자료형은 다르지만 값이 같기 때문에 =을 두개 쓰는 동등연산자(==)로 비교했을시 true라고 나오게 된다..
 * 
 * 일체연산자(===)
 * console.log(dog_age === cat_age); => =을 세개 쓰는 일체연산자는 값과 자료형 타입 둘다 일치해야 true라고 뜬다. 여기서 두 변수의 값은 같으나 자료형 타입이 다르기 때문에 false가 나온다.
 * 
 * ※가급적 "일체 연산자(===)"를 쓸것!! 자료형을 구분할줄 모르는 동등연산자는 어떤 버그를 일으킬지 모른다.※
 * 
 * 
 */

//조건문!!!!!!!!

/**if문 괄호안에 들어가는 조건을 평가해서 true면 값을 반환하는 조건문 입니다. 괄호안에 위에서 배웠던 조건문이 들어 갑니다.
 * 
*/

if(price > 2000) { 
    console.log("비싸다.");
}
/**위코드는 price가 2000보다 크면 실행되는 if 조건문 이다.
 * 실행이 된다면 중괄호{} 안에 적힌 식이 실행되면서 "비싸다"라는 문자열이 출력됩니다.
 * if문에서 {}는 true면 실행되는 식이 적히는 곳입니다. 코드가 간단할 경우 생략가능 하지만 가급적 써주느것이 바람직하다.
 * if문 에서 if()괄호안에 적힌 조건문은 항상 Boolean (true,false)으로 변환된지 판단된다. 
 */

//만약 console창에 "저렴하다."라는 값을 출력하고 싶다면?

if(price > 2000) { 
    console.log("비싸다.");
}

if(price < 2000) { 
    console.log("저렴하다.");
}

//if문의 괄호안의 조건과 중괄호 안의 식을 바꿔서 두번 적으면 된다.
//하지만 좀더 효율적인 코드를 작성하고 싶다면 else를 이용하면 된다.


/**else문  
 * else문은 if절의 조건이 true가 아닌 false일때 실행됩니다.
*/

//▽if문을 두개작성해서 조건무을 작성했을 경우!
const price02 = 3000;


if(price02 > 2000) {
    console.log("비싸다.")
} // console창에 "비싸다"라는 문구가 출력

if(price02 < 2000) {
    console.log("저렴하다.")
} //console 창에 출력되지 않음!


/**let price02 = 3000; 은 price02에 3000이라는 숫자형 값을 지정해 준것이고
 * 아래에 있는 두개의 if문 괄호안에 price02에 3000이라는 값이 들어가게 된다.
 * price02는 3000의 값을 가짐으로 true인 조건식인 (price02 > 2000)인 if문이 출력되고 "비싸다"라는 문구가 출력된다.
 */

//else문을 이용해서 두개의 다른 조건문을 가진 if문 작성하기

const price03 = 3000;

if(price03 > 2000) {
    console.log("비싸다.")
} else {
    console.log("저렴하다.")
}

/**if문을 두번 작성 했던 것을 else를 이용하면,
 * 괄호안의 조건문이 true라면 반환될 식이 적힌 if() {식}
 * false라면 반환될 식이 적힌 else{식} 형식으로 좀더 간결하게 나타낼수 있다.
 */


//else if문 

/**2000원 보다 price04가 크면 "비싸다.",
 * 2000원 보다 price04가 작으면 "저렴하다.",
 * 2000원과 price04가 일치하면 "적당하다. 라는 값을 출력하고 싶다면?
 */

const price04 = 2000;

if(price04 > 2000) { // 선언된 price04의 값이 해당 괄호안의 조건문과 일치한다면 "비싸다"라는 문구가 출력
    console.log("비싸다.");
} else if (price04 === 2000) { //첫번째 괄호안의 조건문과 price04가 일치하지 않으면 else fi문 괄호안의 조건문으로 넘어와서 true인지 false인지 비교한후 맞으면 "일치합니다" flase면 else문으로 넘어감
    console.log("적당하다.");
} else {                        // if와 else if 괄호 안의 조건문 모두와 price04의 값이 일치하지 않는다면 false로 처리되 else문으로 넘어온다. "저렴하다"라는 문구가 출력
    console.log("저렴하다.")
}



/**논리연산자 ||(or) , &&(and) , !(not)
 * 
 * || (or) = 여러개중 하나라도 true면 true,
 * 모든값이 false 일때만 false를 반환
 * 
 * &&(and) = 모든값이 true면 true,
 * 하나라도 false면 false.
 * 
 * ! (not) = true와 false를 반대값으로 바꿔줌
 * true면 false, false면 true.
 * 
 * or => 케이트 윈슬렛은 미국인 이거나(or), 남자이다. => true! , 이거나 는 or임으로 두 조건중 하나만 맞아도 true이다.
 * and => 케이트 윈슬렛은 미국인 이고(and), 남자이다. => false , 이고 는 and임으로, 모든 조건이 맞아야 true가 나온다. 그러므로 false이다.
 * 
 * ※ or and 알아두어야 할점!
 * 
 * 평가)
 * Or은 첫번째 true를 발견하는 즉시 평가를 멈춤!
 * 케이트 윈슬렛은 여자이거나(or), 한국인 이거나, 인형 이거나...
 * 위 코드에서 true인 여자이거나 에서 평가를 멈춤
 *  
 * And는 첫번째 false를 발견하는 죽시 평가를 멈춤
 * 케이트 윈슬렛은 여자이고(and), 한국인 이며, 인형인 동시에....
 * 위 코드에서 한국인 이며 라는 false에서 평가를 멈춘다.
 * 
 * tip! (복잡한 코드를 작성 전에 논리연산자 부분이 단순하다면 단순화 시키는 것이 좋다.)
 * 
 * 
 * ex) 엑셀 자격증이 있고 토익이 800점 이상인 청각장애인 지원자.
 * 
 * 위 문장에서 엑셀자격증은 전체 지원자의 90%, 토익이 800점 이상인 지원자는 70%, 청각장애인 지원자는 전체 지원자의 3%
 * 라는 비율이 나왔을때 전체 지원자 대비 비율이 적은 순으로 수정해 주는게 좋다.
 * → 청각장애를 가진 토익이 800점 이상이고 엑셀자격증이 있는 지원자.
 * 순으로 바꾼다면 1번째 조건인 청각장애를 가진 지원자는 전체 지원자의 3%임으로 97%에 달하는 지원자를 거를수 있다.
 * 그러므로 사용되는 시간과 데이터 양을 더 효율적으로 사용할수 있다.
 * 
 */


/**논리 연산자 사용법!
 * 
 * ||(OR) => a||b => a와 b중 true가 있으면 true입니다.
 * &&(and) => a&&b => a와b 둘다 true이면 true 입니다.
 * !(not) => !a => a가 false이면 true, true이면 false! , a 제일 앞에 !를 붙이면 된다.
 */

//▼OR 예제 문제!
//제품명이 lotion 이거나, 가격이 2000원 이상이면 통과!

const cosmatic = "tonner";
const price2= 2000;

if(cosmatic === "lotion" || price2 >= 2000) {
    console.log('구매');
}

//위 if문에서 괄호안에 조건식이 consmatic의 값이 tonner 라서 틀리지만 price2이 값이 2000원 보다 크거나 같아서 "구매" 라는 문구가 출력된다.
//위 문제에서 조건이 ltotion 이거나(or) 이기 때문에 두 조건중 하나만 일치해도 true이기 때문에 값이 출력된다.


//▼and 예제 문제!
//제품명이 tonner 이고, 가격이 2000원 이상이면 통과!

const cosmatic2 = tonner;
const price3 = 2000;

if (consomatic2 === "tonner" && price3 >= 2000) {
    console.log('구매');
} else {
    console.log("별로!")
}

/**
 * 위 and 예제 문제에서 if문 조건 부분에서 cosmatic2와 tonner가 일치하고 price3 역시 2000원 보다 크거나 같기 때문에 console창에 "구매 라고 뜬다."s
 */

//▼and 논리 연산자에서 조건중 하나라도 틀리는 경우의 예제문제!

const comatic3 = "tonner";
const price4 = 1500;

if (cosmatic3 === "tonner" && price4 >= 2000) {
    console.log("구매");
}else {
    console.log("별로");
}

/**
 * if문에서 조건을 봤을때 cosmatic3는 tonner가 값임으로 "tonner와 일치하지만", price4는 2000보다 작은 1500이라는 값을 가졌음으로 false값을 출력한다.
 * console창에는 "별로" 라는 문구가 출력된다.
 */


//not에 대한 예제 
//가격을 입력한후 3000원 이상이 아니면 행사대상이 아님...

const price5 = prompt('구매하신 가격을 입력해 주세요.');
const isPrice = price5 >= 3000;

if (!isPrice) {
    console.log("행사대상이 아닙니다.")
}

/**
 * price5 의 prompt창에 1500을 입력하면 isPrice의 값인 price5 >=3000 으로 계산되어 
 * 아래 if문에 !isPrice = (isPrice 값이 아닌것 , not) 조건문에 따라 true임으로 "행사 대상이 아닙니다."라고 출력된다.
 * 
 * 만약 price5 의 prompt 창에 3000이나 3000이상의 값을 입력하게 되면 if문 !isPrice 값이 false로 나와 console창에 아무것도 출력되지 않는다.
 */

//논리연산자의 우선순위!
//and 가 or보다 처리 순위가 높다!!

//마그네슘 이고, 제품명이 nature 이거나 나이제한이 성인에 속해있으면 구매!

const category = "비타민";
const product_name = "Alive";
const isAdult = true;

if (categoty === "마그네슘" && product_name === "nature" || isAdult) {
    console.log("구매하기!");
}else {
    console.log("돌아가기...");
}

/**
 * 위 코드는를 실행하면 "구매하기!"라고 나온다.
 * 왜냐하면,  categoty === "마그네슘" && product_name === "nature" 이부분의 코드는 and(&&)연산자 임으로 먼저 계산됨
 * 그다음에는, || isAdult or(||)연산자가 처리됨으로 최종적으로 계산된 조건식은 isAdult는 true라는 값을 가졌음으로 "구매하기!"
 * 라고 나오게 된다.
 * 
 * 즉 위 if문 조건식은 
 * 
 * if ((categoty === "마그네슘" && product_name === "nature") || isAdult)
 * 
 * 위 조건식과 같다는 것이다. 괄호안의 and(&&) 조건식이 먼저 계산되고 최종적으로 or (||) 가 마지막으로 계산 됨으로 true값이 나올수 밖에 없다.
 * 
 * 
 */

/**
 * 만약 우리가 의도한 대로 결과값이 나오게 하고 싶다면?
 * 
 * if (category === "마그네슘" && (product_name ==="nature || isAult))
 * 
 * if 조건문의 조건식을 위와같은 형태로 적어야 한다. 
 * 
 * 그래야 논리연산자의 우선순위 앞에 있는 and(&&) 보다 or(||)이 or논리연산자를 감싸고 있는 괄호를 통해 우선순위를 얻게 되고 그 두가지 조건에서 false true여부를 결정한후 and(&&) 논리 연산자로 넘어가게 된다.
 */

const category2 = "비타민";
const product_name2 = "Alive";
const isAdult2 = true;

if (categoty2 === "마그네슘" && (product_name2 === "nature" || isAdult2)) {
    console.log("구매하기!");
}else {
    console.log("돌아가기...");
}

/**
 * 위의 수정된 변수 선언문과 if문의 조건문을 이용한다면 console창의 값은 "구매하기"가 출력된다.
 * 
 * 왜냐하면 if문 괄호안의 조건문에서 or(||)연산자에 괄호가 쳐져 있음으로 둘중에 하나라도 일치하면 true이고 
 * 그뒤로 and(&&)가 계산되며 앞의 조건과 모두 일치하는지를 계산하게 됨으로, 먼저 계산된 or(||)논리 연산자 부분은 true이고 and(&&)부분도 일치함으로 true 이다.
 * 그럼으로 "구매하기!"라는 문구가 console창에 출력된다. 
 */


// 반복문 (loop) part -------------------------------------------------------------

/**반복문 (loop) : 동일한 작업을 여러번 반복 */


//for 반복문!

for(let i = 0; i < 10, i++) {
    //반복할 코드를 넣는곳..
}

/**
 * for 반복문은 괄호안에 들어갈 조건식의 부분을 세미콜론(;)으로 구분한다!
 * for 반복문의 조건식은 3부분으로 구별 할수있다.
 * 
 * 
 * for(let i = 0; i < 10; i++)
 * 
 * 위 에서 보이는 for 반복문의 괄호안 조건식을 보면
 * 
 * 1번째 "let i =0" 은  초기값을 설정한다. 반복문에 진입할때 "처음 한번만" 실행된다.
 *       let i 라는 변수를 만들고 0 이라는 값을 설정했다.
 * 
 * 2번째 "i < 10" 은 조건을 적는 부분입니다.
 *       반복문이 돌면서 설정한 2번째 부분의 조건을 확인하고 false가 되면 멈춥니다.
 *       i < 10은 i를 반복시켜서 10보다 작을때 (미만) 멈추게 설정한 것이다. (0,1,2,3,4,5,6,7,8,9)
 * 
 * 3번째 "i++"는 반복문이 한번 실행후 해야 될 작업을 보여줍니다.
 *       방금전 조건에서 넘어온 ("i < 10"에") i에 1을 더하면서 증가시켜 준다는 것입니다.
 *       
 */

for(let i = 0; i < 10, i++) {
    //반복할 코드를 넣는곳..
}

/**
 * 위의 코드를 해석해 보면!
 * 
 * 1. 처음 초기값 부분에서 변수 let i의 값이 0으로 넣는다고 하였고!
 * 
 * 2. 그다음 초기값 let i의 0이 조건 "i < 10" 으로 넘어가,
 *    i가 0보다 작은지(미만) 확인한다음, 조건에 맞으면 (i가 10보다 작으면)
 * 
 * 3. for 반복문에 있는 중괄호 {} 안에 있는 식을 실행시켜 준다.  
 * 
 * 4. 코드가 실행한뒤 2번 단계 "조건(i<10)"에서 넘어온 i의 값은 0임으로, 1을 증가시키고.
 * 
 * 5. "i++"에서 증가된 1이라는 값이,
 *    다시 2단계인 "조건(i < 10)"으로 가서 10보다 작은지의 여부를 확인하고,
 *    코드가 실행된뒤 i ++로 넘어간뒤 (초기값 - 조건 - 코드실행 - i++ )을 조건(i < 10)이 false가 나올때 까지 반복하는 것이다. 
 * 
 * 풀어쓴 위 단계를 간략화 시키자면..
 * 
 * i = 0
 * i가 10보다 작음
 * 코드 실행
 * i값 증가
 * 증가된 i값이 다시 10보다 작은지 확인
 * i값 증가..
 *     :
 *     :
 *     :
 * (i값이 10과 같아지거나 커지면 false가 되면서 반복이 멈춤!)
 */

for (let i = 0; i < 15; i++) {
    console.log(i);
}

/**
 * 위와 같은 for 반복문의 경우 변수 let i는 0으로 초기값이 설정되었고
 * i의 값이 15보다 작을 경우 코드가 실행된다.
 * 코드가 실행된후 i++ 에서 1을 더하게 되고 (++는 증가 연산자)
 * i의 값은 0이었으나 i++ 증가연산자를 통해 1이 된 값이
 * 다시 i < 15 로 가게되어 15보다 작으면 코드를 실행 한다.
 * 
 * 위와 같은 단계를 i가 15보다 같거나 커질때 까지 반복함으로 
 * console창에는 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14 라는 숫자들이 출력된다.
 * 
 * ※ for 반복문 조건문을 쓰는 괄호안에 i++ 에서 증가연산자(++)를 뒤에 쓰는 이유는
 *    i < 15를 통해 15보다 작으면 코드 실행 -> 실행후 i의 값 0이 i++로 들어옴 -> 다시 i < 15로 갈때 증가해서 나가야됨 이기 때문에
 *    증가 연산자를 뒤에 쓰는 것이다.
 */




//while 반복문 

let i = 0;

while (i<10) {
    //반복하고 싶은 코드
    i++;
}

/**
 * while 반복문의 기본적인 코드는 위와 같은 형태이다.
 * 초기값 변수를 while반복문 외부에 선언하고 
 * while반복문 조건문을 쓰는 곳에 i <10 형식으로 반복하고 싶은 횟수만큼 숫자를 집어넣는다.
 * 그리고 i++;를 중괄호 내부에 넣는다.
 * 
 * 기본적인 동작방식은 for반복문과 같으나 초기값 (변수), 조건 (i < 10) , 코드실행후 증가연산자 (i++)
 * 를 넣는 위치가 달라진 것이다. 
 * 
 * 
 * ※ 만약 중괄호 {}안에 증가연산자(i++)를 넣지 않는다면 코드는 무한히 반복할 것이고 
 *    컴퓨터의 서버는 다운될 것이다. 주의해야한다.
 */


let a = 0;

while (a <= 10) {
    console.log(a);
    a++;
}



//do,while 반복문!!

let b = 0;

do {
    console.log(b);//반복하고 싶은 코드 입력하기!
    b++;
}while(b<11)

/**
 * do,while반복문은 조건이 do 다음 while에 간다는 것이다.
 * 
 * 위와 같이 do중괄호{}안에 있는 코드와 b++; 가 한번 실행이 되고 
 * while()괄호 조건 안에 있는 부분으로 받아준다는 것이다.
 * 즉 코드실행 -> b++;를 이용한 1증가 -> 조건 확인 순으로 이루어 진다는 것이다.
 * 
 * 하지만 순서만 다를뿐 결과값은 똑같이 1,2,3,4,5,6,7,8,9,10 이 나온다. 
 */


//break,continue 반복을 멈추는 코드!!!

/**
 * break : 멈추고 빠져나옴
 * 
 * continue : 멈추고 다음 반복을 진행..
 * 
 */


//▼ break; 사용 예제
while(true){ // ※while반복문 괄호 안에 (true)를 집어 넣는것은 무한반복을 뜻한다. 조심할것!!
    let info = comfirm("입력하신 정보가 맞습니까?");
    if(!info) {
        break;
    }
}

/**
 * 위 while반복문 break; 사용 예제에서 
 * let info에 값으로 지정된 confirm (확인 취소가 뜨는 알림창)에서 
 * 확인을 누르면 무한반복되지만(while반복문 while(true):무한반복, 안에 있기 때문에
 * 취소를 누르면 아래 if문 에서 조건문을 쓰는 괄호 안에 (!info) info가 아니면 : 취소를 누르면 , 
 * info 중괄호{} 안에 사용된 break;를 통해 while에서 설정된 반복이 멈추고 그 while에서 빠져나오게 된다.
 */

//▼ continue 사용 예제
//조건 : 10보다 작은 숫자 중에 짝수만 출력하기

for(let i =0; i < 10; i++) {
    if(i%2){
        continue;
    }
    console.log(i);
}

/**
 * for반복문 조건식 (let i =0; i < 10; i++)는 continue 사용 예제 조건 에서 "10보다 작은"
 * 이라는 조건을 충족시키기 위한 조건식들 이다. 
 * 
 * if문은 위의 for반복문 에서 내려온 값을 받아들여 실행하는 코드중 하나이다.
 * 또한 if문 괄호()안의 i%2 는 for 반복문 에서 내려온 값을 받아들여  i를 2로 나눈 나머지 여부를 확인 합니다.
 * 이 if조건문 에서 중요한 것은 0이면 false , 1이면 true(Boolean 타입인 경우 true는 1 false 는 0 이다.) 를 반환 한다는 것입니다.
 * 
 * 즉 i가 2로 나누어 나머지 값이 0일때 i%2 는 0이되고 false가 되고
 * i가 2로 나누어 나머지 값이 1이 될때 i%2 1 이 되기에 true가 됩니다.
 * 
 * true일 경우 if문 중괄호 안에 있는 continue;가 실행이 되서 반복을 멈추고 다시 for반복문을 재시작합니다.
 * 홀수일 경우 i++ 증가연산자 부분으로 가서 1이 증가가 된뒤 조건 i < 10 을 거쳐 
 * if문으로 내려와 n%2에서 0이 됨으로 false로 인식되어 if문이 실행되지 않고
 * console.log(i); 실행됩니다.
 * 
 * 그러므로 console창에는 2 4 6 8 숫자가 출력됩니다. 
 * 
 */


/**
 * for 반복문과 while 반복문을 쓰는 TIP!!!!
 * 
 * 명확히 몇번 반복을 해야 한다! for 반복문!
 * 
 * 횟수가 정해져 있지 않으면 while 반복문 !
 * 
 * do,while반복문은 거의 쓰이진 않음....
 */

//개발자는 코드를 줄이고 효율적으로 쓰기위해 노력해야한다!
//반복문은 코드를 효율적으로 쓰기에 매우 좋은 기능이다!!!





//switch문!!-------------------------------------------------

/**
 * swith문은 if else 문을 숙지하고 있다면 신경쓰지 않아도된다.
 * 하지만 케이스에 따라서 간단하고 효율적으로 코드를 짤수 있기 때문에 
 * 알아둬야 한다.
 */


//switch문과 if else문 과의 비교!!!

/**
 * switch(평가){
 *  caseA:
 *   //A일때 코드
 *  caseB:
 *   //B일때 코드
 * .......
 * }
 * 
 * if(평가 == A) {
 *  //A일때 코드
 * }else if(평가 == B) {
 *  //B일때 코드
 * }
 * 
 * 위 switch 반복문과 if else 반복문이 나타내고자 하는 값은 똑같다.
 * 
 * swithc 반복문은 괄호()안의 값과 동일한 값을
 * 중괄호{}안의 case에 쓰여진 코드들과 비교해서 찾아 낸다.
 * 반복되던 switch 문은 break;를 만나 완전히 멈추게 된다.
 * 
 * 
 */


//▼ switch문 예제

/**
 * 겐조 : 100원
 * 샤넬 : 200원
 * 디올 : 300원
 * 랑방 : 400원
 * 조말론 : 500원
 * 겔랑 : 600원
 * 
 * 구매하고 싶은 향수 물어보고,가격 알려주기!
 */

let perfum1 = prompt("어떤 향수를 원하시나요?")

switch(perfum1) {
    case "겐조" :
        console.log("100원 입니다.");
        break;
    case "샤넬" : 
        console.log("200원 입니다.");
        break;
    case "디올" :
        console.log("300원 입니다.");
        break;
    case "랑방" :
        console.log("400원입니다.");
        break;
    // case "조말론" :
    //     console.log("500원입니다.");
    //     break;
    // case "겔랑" :
    //     console.log("500원입니다.");

    //▲ 위와 같이 중복되는 case 코드가 있을 경우?
    case "조말론" :
    case "겔랑" :
        console.log("500원입니다.");
    /**위와 같이 case "값":
     *           case "값":
     *           동일한 코드!
     *            break;
     * 
     * 형식으로 입력해 주면 된다.!
     */

        break;
    default : //만약 위의 조건들(case)와 일치하는 값이 없으면 "defualt :"를 쓰면 된다.
        console.log("그런 향수는 없습니다.");
}

/**
 * switch반복문 에서 case "값" : "실행할코드" 뒤에 break를 작성하지 않으면
 * 지정된 값 아래의 모든 case 코드가 실행 되게 된다.
 * 
 * 위의 switch문 예제에서 break; 라는 코드가 없다라고 가정한다면!
 * 
 * perfum1에서 실행되는 prompt창에 랑방 이라고 입력하게 되면
 * case "랑방" 아래의 case "조말론"  , case "겔랑" 의 코드들이 실행되게 된다.
 * 
 * 그러므로 switch 반복문 case 내부에 작동이 되면 멈춰주는 break;를 실행시켜 줘야한다.
 */



//함수(function)-----------------------------------------------

/**
 * 함수를 작성하는 이유는 중복되는 코드를 막기위해서 이다!!!!
 * 
 * 코드를 작성하다보면 여러 중복되는 코드를 관리해주거나 하나로 묶어서
 * 작성할 필요가 있다. 그럴때 쓰는게 함수(function)이다.
 */

//함수의 기본 형식!!

function sayHello(name) {
    console.log(`안녕하세요.${name}님!`);
}

sayHello('수지');

/**함수의 기본구조는 function(함수) sayHello(함수명) (name)(매개변수) {"실행시킬 코드"}중괄호
 * 로 나눌수 있다.
 * 
 * (name)매개변수는 무언가가 들어갈수도 있고 아닐수도 있다. (name) 또는 ()
 * 매개변수가 한개 이상이라면 ,으로 구별해준다. (a,b,c)
 * 
 * 위의 sayHello 함수는 함수 밖에 sayHello('수지'); 함수이름 + 괄호() 로 호출할수 있다.
 */


//▽매개변수가 있는 함수
function infoEror() {
    alert("입력하신 정보가 잘못되었습니다. 다시 확인해 주세요.");
}

infoEror();

/**
 * 함수의 장점은 infoEror내부에 작성된 alert창이
 * 각기 다른 페이지의 로그인, 이벤트 등록, 제품구매 등 수십수백 가지의 페이지에서 사용될시
 * 일일히 해당 페이지 코드창에 alert창 코드를 넣을 필요 없이 하나의 function 을 만들고 
 * 해당함수의 함수명과 괄호 "infoEror()"하나 만으로 사용할수 있다는 것이다.
 * 
 * 또한 반복 재사용 되는 코드 (위의 infoEror의 alert창의 안내문구 같은..) 들을 손쉽게 수정할수 있다는 것이다.
 * 즉 수십 수백개의 페이지에 동일한 메세지를 보여주기 위해 일일히 alert창을 넣고 후에 수정할때도 일일히 수십수백개의 페이지를
 * 보며 몇백번 수정할 필요 없이 딱 infoEror 이라는 함수명을 가진 함수에 alert창 문구를 수정해 주면 되는 것이다!
 */


//▽매개변수가 있는 함수

function welcome(name) {
    const msg = `안녕하십니까.${name}고객님.`;
    console.log(msg);
}

welcome('영웅재중');


//▽만약 위 예제에서 로그인을 하지 않아서 (welcome()) 고객정보를 불러오지 못했다면?
function welcome(name) {
    let msg = `안녕하십니까.`; 
    if(name) {
        // msg = `안녕하십니까. ${name}고객님.`;
        msg += `${name} 고객님`;
    }
    console.log(msg);
}

welcome();

/**
 * 위의 예제 코드는 고객 이름 정보 (name)이 없을시 어떻게 대응해야 하는가를 적은 코드이다.
 * 
 * 먼저 원래 const로 선언했던 변수 msg를 let로 바꿔 변경 가능하게 한뒤
 * if문을 추가해 괄호안에 name을 넣어 name이 입력된다면 위의 msg변수의 값에
 * name을 더한 부분을 출력해 준다.
 * 
 * 또한 msg += name를 백틱(``)으로 감싸줘서 msg += `${name} 고객님.` 이라고 수정해준다.
 * 고객이름 정보가 업로드 된채로 welcome함수를 호출한다면 
 * '안녕하십니까 ${name} 고객님.' 이라고 호출해 준다.
 */



//전역변수 지역변수!!!

let msg = '안녕하십니까.' //(global varable) 전역변수!
console.log("함수 호출전!");
console.log(msg);

function welcome(name) {
    let msg = `안녕하십니까.`; //이 msg 변수는 내부 지역변수이다. 함수 내부에서만 사용가능.
    if(name) {
        msg += `${name} 고객님`;
    }
    console.log("함수내부")
    //지역변수 (local varable)
    console.log(msg);
}

console.log("함수 호출 후!");
welcome();

//전역 변수 지역 변수 예제2번!

let msg2 = "어서오세요."
console.log(msg2);

function sayWelcome (name) {
    let msg = "환영합니다."
    console.log(msg + ``+ name);
}

sayWelcome('원빈');
console.log(msg);

/**
 * 위코드를 console창에 출력했을때 
 * "어서오세요."
 * "환영합니다. 원빈"
 * "어서오세요."
 * 
 * 전역 변수 보다는 지역 변수위주로 할당해서 쓰는게 유리하다.
 * 전역 변수는 적용하고자 하는 범위나 위치를 특정하기 어렵기 때문에 오류가 나기 쉽다.
 * 지역 변수는 함수처럼 어떤 특정 범위 내에서만 적용되는 변수임으로 컨트롤 하고 관리하기가 쉽다!
 */

//OR 

function sayUser(name) {
    let newName = name || "고객";
    let msg = `환영합니다. ${newName}님`
    console.log(msg);
}

sayUser();
sayUser("차은우");

/**
 * sayUser 함수서 매개변수로 name이 들어간다.
 * sayUser 함수 내부 중괄호{} 안에 newName변수의 값은 name 또는 (or, ||) "고객" 이다.
 * msg 변수의 값은 `환영합니다. ${name}님` 이다.
 * 
 * 만약 sayUser를 호출할때 인수에 값이 할당되지 않으면 name에 값이 없음으로 name은 flase가 되고 "고객"이라는 값이 newName 변수에 할당되게 된다.
 * 그러므로 console창에는 환영합니다 고객님 이라는 구절이 호출된다.
 * 
 * sayUser의 인수에 "차은우" 라는 값이 할당되면 sayUser의 매개변수에 "차은우"라는 값이 할당된다.
 * newName 변수의 값 name || "고객"에서 name에 값이 할당되 true가 되고 
 * msg변수 ${newName}에 "차은우"라는 값이 할당 되서 
 * console창에 환영합니다. 차은우님 이라는 문구가  출력된다.
 */

//default 값

function sayUser(name = "고객") {
    let msg = `환영합니다. ${name}님`
    console.log(msg);
}

sayUser();
sayUser("유인나");

/**
 * 함수 sayUser의 매개변수에 name = "고객"을 할당함으로써
 * sayUser 함수 밖에서 sayUser함수를 호출했을때 인수에 값이 없으면 name에 "고객"을 할당하고
 * sayUser 함수 호출시 인수값이 있으면 해당 인수값이 name에 할당되어 console창에 문구가 출력된다.
 * 
 */

//return값으로 반환

function toy(num1 , num2) {
    return num1+num2;
}

let price6 = toy(200,400);
console.log(price6);

/**
 * 위의 toy 함수에 중괄호 내부에 있는
 *  return은 내부에 있는 식을 실행후 종료하고 호출한 곳으로 반환 한다는 것입니다.
 * 
 * 
 * 위 return 값의 반환 예시 코드를 보면
 * 
 * toy함수 외부에 price6 변수의 값으로 toy 함수가 인수 200, 400과 함께 호출되고 있습니다.
 * 이 호출된 toy함수의 매개변수 num1,num2에 인수 200,400이 들어가게 되고
 * return에 있는 num1+num2로 넘어가 + 더해진뒤 
 * 다시 호출된 let price6 변수로 넘어가게 됩니다. 
 * console.log에서 price6를 호출하고 있음으로 console창에는 600이 출력 됩니다.
 * 
 */

function showError() {
    alert('애러가 발생했습니다.');
}

const result3 = showError();
console.log(result3);

/**
 * 꼭 return 뒤에 써줘야 값이 호출된 곳으로 반환되는 것은 아니다.
 * alert 같은 경우 return이 없더라도 호출된 result3로 undefined를 반환한다.
 */


/**함수(function) 주의사항!
 * 
 * 함수 하나는 한번에 한작업에 집중,
 * 하나의 함수가 여러작업을 진행할 경우 기능을 잘개 나눠서 여러 함수를 작성하는게 좋다!
 * 읽기쉽고 어떤 동작인지 알 수 있게 네이밍
 * ▽예시!
 * showError // 에러를 보여줌
 * getName //이름을 얻어옴
 * createUserData //유저데이터 생성
 * 
 */


//함수표현식 화살표 함수!-----------------------------------

/**
 * 함수 선언문!
 * 
 * ▽함수 선언문 예제!
 * 
 * sayHello(); <-여기에서 sayHello함수 호출해도 호출가능!
 * 
 * function sayHello() {
 *  console.log("안녕");
 * }
 * 
 * 어디서든 호출이 가능하다.
 * ex) 함수의 위, 아래 등등...
 * 
 * -> javascirpt는 한줄씩 위에서 아래로 읽으면서 내려가는 인터프리터 언어.
 *    하지만 함수 선언문이 해당 함수 위에서 호출해도 부를수 있는 이유는 ?
 *    -> javascript는 실행전 모든 함수 선언문을 수집한다.
 *       그러므로 함수 선언문에서 선언된 함수가 적용될수 있는 범위가 
 *       코드위치 보다 위로 올라가는 것이다. 
 *    위와 같은 것을 호이스팅(hoisting) 이라고 부른다. 
 */

/**
 * 함수 표현식!
 * 
 * ▽함수 표현식 예제!
 * let sayHello = function() {
 *  console.log('Hello');
 * }
 * 
 * sayHello(); <- 함수 표현식일 경우 함수 아래에서 호출해야됨
 * 
 * 하나하나 아래로 읽어 나가는 js의 인터프리터 형식이 적용됨!
 * 꼭! 함수의 아래에서 호출해줘야됨!!
 */


//화살표 함수(arrow funtion)

let add = function(num1,num2) {
    return num1+num2;
}

//위의 함수표현식 add를 화살표 함수로 바꾸기

let add2 = (num1,num2) => ( num1 + num2)

/**
 * 함수표현식에서 쓰이는 function을 생략할수 잇고 중괄호{}를 괄호()로 바꿀수 있다.
 * 또한 return을 생략할수 있으며 식이 한게일 경우 괄호 자체도 생략 가능하다.
 * -> let add2 = (num1,num2) => num1 + num2;
 */
    

//인수가 하나인 경우

let hello = name = `안녕하세요. ${name}`;

/**
 * 인수가 하나인 경우 매개변수의 괄호를 지울수 있다.
 */

//매개변수가 없을 경우의 함수 표현식!

let showError = () => {
    alert('error');
}

/**매개변수가 하나도 없더라도 매개변수가 들어갈 괄호 () 생략은 할수 없다. */

//return 전에 코드가 있을때!

let add3 = (num1,num2) => {
    const result = num1 + num2;
    return result;
}

/**
 * return 문 전에 코드가 있을 경우 일반 괄호()를 사용할수 없다.
 * 그대로 중괄호{}를 이용해야 한다.
 */

//여러 함수 적용해보기!

showHello ();

let showHello = () => {
    console.log('반갑습니다!')
}

/**
 * 위이 함수는 함수 표현식으로 작성되어서 함수 위에서 함수를 호출시 인식할수 없다.
 */


//함수 선언문!!

showHello ();

function showHello () {
    console.log('반갑습니다!')
}

/**
 * 함수 선언문은 호이스팅으로 인해 함수 위아래로 호출할수 있다.!
 */

//화살표 함수!!!! 만들기!!!!

const Hello = function (name) {
    const msg = `Hello, ${name}`;
    console.log(msg);
};

//위의 형식을

const Hello2 = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
};

/**
 * 아래의 형식으로 바꾸면 된다. 
 * function을 빼고 매개변수 일반 괄호() 뒤에 "=>" 화살표 모양을 
 * 넣어주면 된다!
 */

//화살표 함수 간단하게 하기!

const plus = (num1 , num2) => {
    const result = num1+num2;
    return result;
};

//위의 함수를 간단하게 표현하고 싶다면

const plus2 = (num1 , num2) => (num1+num2) 

/**
 * 결국에 const result의 값은 매개변수 num1 +num2의 값이고
 * return 은 뒤에서 나온 식들을 계산하고 호출한곳에 되돌려 주는 것임으로
 * 
 * return뒤에 num1 + num2을 넣어주면 된다.
 * 그리고 return은 삭제한 뒤 중괄호{}는 일반 괄호()로 바꿔준다. 
 */

/**
 * 화살표 함수는 ES6 Javascript 이후로 자주 사용되고 있다!
 * 자주 연습할것 !!!!
 */


//객체(object) --------------------------------------------------

/**
 * 객체는 중괄호로 작성하고 kye와 값으로 구성된 프로퍼티가 들어간다.
 * 각 프로퍼티는 쉼표(,)로 구별한다.
 */


// 이 인형의 이름은 쥬쥬이다. 나이는 12살이다.

const doll = { //중괄호 {}
    name:'juju', // key:vaule(값),
    age: 12,
}

//위 객체를 이용하는 방법!!

//생성된 객체에 "접근" 하는 방법!!

doll.name
doll['age']

/**
 * 위 코드는 작성된 doll 이라는 객체에 접근하기 위한 코드들이다.
 * 
 * 첫번째 doll.name 은 'juju' 라는 값을 출력한다. "객체이름.key" 형태로 작성된다.
 * 두번째 doll['age']는 12 라는 값을 출력한다. 객체이름['key'] 형태로 작성된다. 
 */

//생성된 객체에 '추가'하는 방법!

doll.hobby = 'shopping';
doll['hairColor'] = 'brown';

/**
 * 위 코드는 doll 객체에 key와 value를 추가하는 코드 입니다.
 * 
 * 첫번째 doll.hobby = 'shopping'은 const doll 객체의 중괄호에 hobby:'shopping'을 추가한다.
 * 두번째 doll[hairColor] = 'brown'은 doll 객체에 hairColor:'brown'을 추가한다. 위와 다른점은 코드 작성 형식이다.
 * 객체이름[추가하고싶은 key] = 'value값' 형식으로 작성한다.
 */

//생성된 객체의 프로퍼티를 삭제하는 방법!

delete doll.hairColor;

/**
 * delete를 삭제하고 싶은 프로퍼티 앞에 붙여주는데 그 형식은 아래와 같습니다.
 * delete 객체이름.key값;
 */


//Object - 단축 프로퍼티

const coffee = "americano"
const latte = "milkform latte"

const cafeMenu = {
    coffee:coffee,
    latte:latte,
    choco:'hotchoco'
}

/**
 * 위의 cafeMenu라는 객체를 보면 key값 coffee와 latte는 
 * 외부에서 선언된 변수 coffee와 latte에서 value를 받아온다.
 * 
 * 이 부분을 더 간단하게 작성 할수 있다.
 */

const coffee2 = "americano"
const latte2 = "milkform latte"

const cafeMenu2 = {
    coffee2,
    latte2,
    choco:'hotchoco'
}

/**
 * 위의 cafeMenu2를 보면 key값의 value값이 외부에서 선언된 변수와 일치하기 때문에
 * 일치하는 key값만 작성할수 있다. 
 */

//Object - 프로퍼티(key:value) 존제 여부 확인

const barby = {
    name:'barby',
    age:15,
}

barby.hobby;  //첫번째 방법!
//undefined

'hobby' in barby; //두번째 방법 (in 연산자)
//false
'age' in barby;
//true

/**
 * 위의 코드는 선언된 객체 barby의 프로퍼티(key:value)값을 확인하는 것이다.
 * 
 * 첫번째 방법 (객체명.key값) 은 객체 내부에 일치하는 프로퍼티가 없으면 undefined를 출력한다.
 * 
 * 두번째 방법 (key값 in 객체이름) 은 해당 key값이 있으면 true를 없으면 false를 출력한다.
 * 
 */

/**
 * 언제 in 을 써서 객체의 프로퍼티를 찾을까?
 * 
 * 어떤값이 넘어올지 확실할수 없을때 사용하면 된다.
 * 함수 인자로 받거나 api 통신을 통해 들어 왔을때 사용된다!!!
 */


//for...in 반복문

for(let key in barby) {
    console.log(key)
    console.log(barby[key])
}

/**
 * for in 반복문 으로 객체의 프로퍼티를 찾는것은 간단하다.
 */


const mimi = {
    eyeColor:blue,
    age : 14
}

console.log(mimi.eyeColor); //mimi객쳋의 프로퍼티 eyeColor:blue가 출력된다.
console.log(mimi['age']); // console창에 mimi객체의 프로퍼티 age:14가 출력된다.

mimi.hairColor = 'blonde'; //mimi객체에 hairColor:'blonde'가 추가된다.
mimi[hobby] = 'reading' //mimi객체에 hobby:'reading'이 추가된다.
delete mimi.age; // mimi객체의 age 프로퍼티가 삭제된다.

console.log(mimi); // const mimi 의 객체가 전부 출력이 된다.


//객체

function makeObject (name,age){
    return {
        name:name, //name , name:name,은 key는 anme이고 value값은 매개변수에서 내려올 1번째값 name 이기 때문에 'name' 하나만 쓰는것으로 축약이 가능하다. 
        age:age,   //age , age:age 는 key가 age이고 value값은 매개변수에서 내려올 2번째값 age 이기 때문에 'age'하나로 써도 된다!
        hobby:'art'
    }
}

const Minsu = makeObject('Minsu',20); //위의 makeObject 함수 호출! makeObject 함수 매개변수에 전달할 두개의 인수 Minsu,20 을 가지고 호출한다.
console.log(Minsu); // 성언된 const 변수 Minsu를 호출한다. 이 Minsu 변수는 함수 makeObject를 호출하는것을 값으로 가지기 때문에 
                    // makeObject를 호출하면서 인수 Minsu와 20이 makeObject함수 내부에 있는 return 내부의 객체의 value 값에 적용된다.
                    //Object {key:파라미터값으로 받은 value값들..} 이 console창에 뜨게 된다.

console.log("name" in Minsu); //Minsu 라는 객체에 name이라는 key값이 있는지를 물어보는 것이다. 존제함으로 true값이 출력된다.
console.log("tall" in Minsu); //Minsu 라는 객체에 tall이라는 key값이 있는지 물어보는 것이다. 없음으로 false이다.

//객체 in

function isAdult (user) {
    if(user.age < 20) {
        return false;
    }
    return true;
}

const jully = {
    name = "jully",
    age = 20,
}

const james = {
    name = "james",
}

console.log(isAdult(jully)); //true
console.log(isAdult(james)); //true

/**
 * 위의 코드에서 james를 isAdult 함수로 호출해서 성인 여부를 확인해본 결과 true가 나왔다.
 * james는 age key값이 없었고 이는 식별할수 없음(undefined)라고 뜨기 때문에 if문을 통과해서 true에 도달한다.
 */


function isAdult (user) {
    if(!(age in user)//매개 변수 user의 key값 age이 없거나
     || //or = 또는, => 둘중에 하나가 맞으면 true로 넘어간다.
     user.age<20) // 매개변수 user에 key값 age의value값이 20 미만이면 true로 넘긴다.
      {
        return false;
    }
    return true; //위의 if문 조건문을 쓰는 일반괄호()안의 조건들이 둘다 부합하지 않으면 false임으로 이곳으로 넘어온다.
}

const judy = {
    name = "judy",
    age = 20,
}

const tom = {
    name = "tom",
}

console.log(isAdult(judy)); //true
console.log(isAdult(tom)); //false


/**
 * 위 코드에서 if문 조건문을 쓰는 일반괄호()안에 or을 뜻하는 ||기호를 사용했다.
 * 하지만 age in user 의 뜻은" isAdult의 매개변수 user에 age라는 key 값이 있거나"라는 뜻이다.
 * age in user 에 일반 괄호 ()를 넣어서 (age in user) 을 만들고 그앞에 not을 뜻하는 "!"를 넣어,
 * !(age in user) = user 매개변수에 age라는 key값이 없다. 는 뜻이 된다.
 * 
 * 즉 위의 if(!(age in user) || user.age<20) 은 
 * !(age in user) = 매개변수 user에 age가 없다.
 * || = (or) 또는
 * user.age < 20 = 매개변수 user에 age key의 value 값이 20보다 작으면,
 * if 문 중괄호 안의 false로 넘어간다는 것이다. (if문 조건문 안의 두 조건중 하나라도 맞다면 true 로 처리가 되서 if문 중괄호로 넘어가기 때문!)
 * 
 * if문 일반괄호()안의 모든 조건에 부합하지 않는다면 성인 임으로 if문 아래 작성된 return true로 호출된곳으로 반환된다.
 * 
 */


//예제! for...in문

const jason = {
    name: jason,
    age: 17,
};

for(key in jason){
    console.log(jason);//console창에 jason의 key값 들이 출력된다. => "name" , "age"
    console.log(jason[key]); //jason[name] => jason [age] 순서대로 차례차례 jason이 가지고 있는 key값 순으로 value값을 읽고난뒤,
                             // console창에 jason이 가지고 있는 key의 value값이 출력된다. => "jason" , 17
}



//객체 method/this -------------------------------------------------------------


/**
 * method: 객체 프로퍼티(key:value에서 value값으로 할당된 함수!)로 할당된 함수! 
 */

const jorgy = {
    name:" jorgy",
    age: 21,
    work: function () {
        console.log("대학생 입니다.")
    }
}

jorgy.work(); //객체 const jorgy의 work라는 key 값을 호출하면, work에 할당된 value값 함수가 실행되면서 console.log("대학생 입니다.")가 실행된다.

/**
 * 위의 method 예제 구문을 줄여서 작성할수도 있다.
 * 
 * const jorgy = {
 *  name: "jorgy",
 *  age: 21,
 *  work() => {
 *      console.log("대학생  입니다.");
 * }
 * 
 * const jorgy 라는 객체의 프로퍼티에 할당된 함수 => (method = key:function (매개변수) {작동시킬 코드})
 * 의 형태를 key : function () {} 형태에서,
 * key (매개변수) => {작동시킬 코드} 형식의 화살표 함수로 바꿀수 있다.
 * work () => {console.log("대학생 입니다.")} 이런 형태가 그 예시이다.
 * 
 * }
 */


//Object !!

const customer = {
    name : "Minho",
    saywellcome: function () {
        console.log(`어서오세요. ${this.name}고객님.`);
    }
}

customer.saywellcome(); //"어서오세요. Minho고객님."

/**
 * 위 예시 코드에서 saywellcome : function () {console.log(`어서오세요. "ㅁㅁㅁ"고객님.`)}
 * saywellcome 메서드 안에 있는 함수에 있는 console.log(`어서오세요. "ㅁㅁㅁ"고객님.`) 부분의
 * "ㅁㅁㅁ" 내부에 cutomer 객체 내부의 name:Minho 라는 프로퍼티를 넣고 싶다면?
 * 
 * => (`어서오세요. ${this.name}고객님`) 이라고 입력하면 된다. 
 * 위의 $(this.name)에서 this는 아래에서 호출한 customer.saywellcome()에서
 * customer을 의미한다. (customer = this)
 */


//▽this 예제 2번

let tommy = {
    purchased: '스마트폰',
    buyItem: function () {
        console.log(`고객님께서는 ${this.purchased}을(를) 구매하셨습니다.`)
    },
};

let jenny = {
    purchased:'화장품',
    buyItem: function () {
        console.log(`고객님께서는 ${this.purchased}을(를) 구매하셨습니다.`)
    },
}

tommy.buyItem(); // "고객님께서는 스마트폰을(를) 구매하셨습니다."
jenny.buyItem(); // "고객님께서는 화장품을(를) 구매하셨습니다."

/**
 * 위의 변수에 buyItem : function () { console.log(`고객님 께서는 ${this.purchased}를 구매하셨습니다.`)}라는 메서드를 입력한뒤
 * 호출한다면, this는 호출한 순서대로 출력되기에 tommy 객체와 jenny객체 순으로 출력된다.
 * 호출된 객체이름.buyItem()에서 buyItem이란 메서드를 호출하면 buyItem 메서드 내부에 설정된 코드가 실행되면서
 * ${this.purchased} this는 호출할 객체의 이름을 뜻하는 것이다. 
 * 
 * ex) let jenny = { purchased: "화장품"
 *                   buyItem: function () {
 *                       console.log(고객님께서는 ${this.purchased}을(를)구매하셨습니다.)
 *                   },
 * 
 *    위 코드에서 $(this.purchased) 에서 this에 들어갈 것은 해당 메서드가 속한 jenny 객체의 이름이다. 
 */


//※만약 위의 메서드를 함수 선언식이 아닌 화살표 함수로 작성한다면 this의 동작이 달라지게 된다.

/**
 * 화살표 함수는 일반 함수와 달리 자신만의 this를 가지지 않음!
 * 화살표 함수 내부에서 this를 사용한다면 "그 this는 외부에서 값을 가져온다."
 */

//▽ 화살표 함수로 표현한 메서드 와 this의 동작 예제!

let lancome = {
    price:2000,
    ment:() => {
        console.log(`랑콤의 가격은 ${this.price}원 입니다.`); // 화살표 함수에서 this는 전역객체
    }
}

lancome.ment();
//this != lancome , lancome.ment()로 lancome의 매서드 ment를 호출할시에, 해당 메서드 ment안의 this는 lancome이 아니다.

/**
 * 환경에 따른 전역객체의 의미!!!!!
 * window:browser
 * node: global
 */


// 이해를 위한 예제 문제들!!!!!

let bird = {
    name: swan,
    showFly: function () {
        console.log(`${bird.name}의 날갯짓은 파닥파닥!`);
    }
};

let animal = bird; //animal 변수에 bird라는 객체를 값으로 할당한다.
                   //bird로도 animal로도 해당 객체에 접근 가능하다!

animal.name = "Sparrow"; //객체 bird가 할당된 let animal변수에서 name이라는 프로퍼티의 value값을 "swan"에서 "Sparrow"로 바꾸면,
console.log(bird.name); //객체 bird의 프로퍼티의 vaule값이 "Sparrow"로 바뀌어서 출력된다.

animal.showFly(); //bird 객체가 할당된 animal변수를 이용해 showFly 매서드(method)를 호출하면 "Sparrow의 날갯짓은 파닥파닥!" 이라고 출력된다.
bird = null; //객체 bird를 null(아무것도 할당된게 없음) 으로 바꿔주면?

animal.showFly(); //animal 변수를 이용해 showFly 메서드를 호출해주면 console창에 showFly매서드를 찾을수 없다고 나온다.

/**
 * 하지만 위의 bird 변수의 showFly 메서드에서 ${bird.name}을 ${this.name}으로 변경한뒤
 * bird=null;
 * animal.shoFly();를 호출해 주면 "Sparrow의 날갯짓은 파닥파닥!" 이라는 문구가 출력된다.
 */

//▽객체의 매서드를 화살표 함수로 표현해주기!!! 예제코드!!!

let cat = {
    name: "냐옹이",
    sayCall:function () {
        console.log(this);
    }
}

cat.sayCall();

/**
 * 위의 cat 객체의 sayCall 이라는 매서드를 호출해주면 = cat.sayCall();
 * sayCall 매서드 안에 있는 모든 함수의 코드가 호출된다.
 * 그러므로 cnosole창에는 
 * 
 * Object {
 *  name: "냐옹이",
 *  sayCall:function () {↔}
 *  }
 * 
 * 위의 코드가 출력된다.
 */

//※객체(object)의 매서드(method)를 꼭 함수 선언문 형식으로 쓸것!
//  화살표 함수 형식으로 작성한다면 오류가 생긴다!!!

//▽객체의 매서드를 화살표 함수로 선언할시 예시코드!!

let dog = {
    name:"바둑이",
    sayCall: () => {
        console.log(this);
    }
};

dog.sayCall();

/**
 * dog라는 객체(object)의 메서드 (key의 value값을 함수로 표현한것!)를 화살표 함수로 작성시,
 * 해당 객체의 매서드를 호출시 "dog.sayCall();" console창에서 오류 문구가 출력된다.
 * 이 오류문구가 일어나는 이유는 객체의 매서드를 화살표 함수로 작성하고 해당 매서드 내부에 this를 사용하면,
 * 이 선언된 this는 해당 객체 내부에서 값을 받아오는것(지역객체)이 아닌 전체 범위(전역객체)에서 값을 받아오기 때문이다.
 * 
 * 그래서 "function () {this}" 함수 선언식 형식으로 작성된 매서드의 this는 해당 객체 내부에서 값을 받아오지만
 * "key: ()=>{this}" 화살표 함수로 작성된 매서드는 전체영역엥서 값을 받아온다. 
 * 
 */

//※this를 이용해 객체의 값을 받아오고 싶다면 화살표 함수는 사용하면 안된다!※




//배열(Array)-------------------------------------------------------------------------------)

 /**
  * 배열 (Array)는 순서가 있는 리스트 라고 보면된다!
  * 
  * 배열의 기본 형식 = 변수(let or const) 변수이름 = ['배열의값1','배열의값2',.....];
  * 
  */

/**1번에 갤럭시 , 2번에 아이폰 ,........30번에 샤오미
 * 위의 품목들을 일일히 변수로 만들면 30개의 변수를 만들어야 한다.
 * ex) const galaxy = "갤럭시" const iphone = "iphone" ....... consts xiaomi ="xiaomi"
 * 
*/

//위의 품목들을 간단하게 리스트로 만들려면 배열(Array)가 필요하다. 
//▽ 배열 코드!
let smartPhone = ['갤럭시','아이폰',...'샤오미'];

/**
 * 배열을 탐색할때는 고유번호(index)를 사용한다! 
 * 위에 있는 smartPhone의 index(고유번호)는 갤럭시 = 0, 아이폰 = 1,....샤오미 =29 이다.
 * index(고유번호)는 0부터 시작한다.!!!
 */

console.log(smartPhone[0]); // 배열(Array)의 index(고유번호)0번을 호출, 즉 smartPhone 배열의 0번인 "갤럭시"가 출력
console.log(smartPhone[1]); // smartPhone 배열의 1번째 index(고유번호)를 호출 "아이폰" 출력
console.log(smartPhone[29]); // smartPhone 배열의 29번째 index(고유번호)를 호출 " 샤오미" 출력

student[0] = '화웨이'; //student 배열(Array)의 0번째 index(고유번호)를 수정, 원래 있었던 0번째 index(고유번호)인 "갤럭시"가 "화웨이"로 수정
console.log(smartPhone); //위의 배열 수정으로 0번째 index가 수정되면, ['화웨이','아이폰'...'샤오미'] 로 출력된다.


//배열(Array)"[]"의 특징!!!

//배열의 문자 뿐만 아니라 숫자, 객체, 함수 등도 포함할 수 있음!!!!

let person = [
    '김제니', //문자(string)
    false, //(boolean)
    {
        name: 'jenny',          // |
        age: 28,                // |
    },                          //◁ 객체(object)
    function () {
        console.log("안녕하세요${this} 입니다!")    //함수(function)!!
    }
];

//배열의 길이 구하기! (length:배열의 길이!!)

let smartPhone2 = ['갤럭시','아이폰',...'샤오미'];


//▽위의 smartPhone2의 배열(Array)길이 구하기!
smartPhone.length //30이라고 출력 0~29
// 배열 이름.length 는 그 배열이 가지고 있는 요소의 갯수를 반환한다.


//배열의 method(메소드) 종류!!!!!

//"push():" 은 배열의 끝에 추가 해준다!!

let menu = ['아메리카노','라떼','아인슈페너'];

menu.push('스무디');//위 menu 배열에 일반괄호 안의'스무디'를 push(추가) 해준다.
console.log(menu); // ['아메리카노','라떼','아인슈페너','스무디'] 라는 menu의 배열이 출력


