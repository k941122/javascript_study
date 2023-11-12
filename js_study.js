

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

/**인수란?
 * 
 * 인수(argument)란 매개변수=인자 (parameter)에 전달 하려는 소괄호 안의 값을 인수라고 한다.
 * 값, 변수, 참조 등 전달 할 수 있다.
 * 
 * 인수(argument) : 함수를 호출할때 건네주는 변수
 * 인자(parameter) : 함수에서 정의되어 함수 내부에서 사용되는 변수, 매개변수,파라미터 라고 많이 불린다.
 * 
 * 
 * 쉽게 말해서 함수를 외부에서 호출할때는 인수(argument), 
 * 함수 내부에서 사용될 경우 인자 (parameter)=매개변수 라고 부른다.
 * 
 * 
 * 예시코드 1번 ▽
 * let num = 3; : 
 * 
 * function add13 (num) {  : add13은 함수 이름 , 그 옆의 괄호는 파라미터가 들어간다.
 * return num + 10
 * }
 * 
 * add13(num)  : add13 함수를 호출하는데 ()안에 위에서 설정된 변수 num을 호출하고 있음
 *               호출된 변수 num이 함수 내부에 설정된 파라미터 (인자,parameter)에 
 *               들어가서 return 에 설정된 식을 실행해서 console에 13이라고 나온다. 
 * 
 * 
 * 
 * 예시코드 2번 ▽
 * let num = 3;
 * 
 * function add13 (num) {
 * return num + 10 //만약 여기 식이 자체적으로 결과값을 나오게 만드는 식이었다면 add13();형식으로 인수(argument)없이 함수호출이 되더라도 값이 나왔을 것이다.
 * }
 * 
 * add13() : 위에서 설정된 add13함수를 호출하긴 하지만 인수(argument)가 없기 때문에 인자를 전달하지 모사고 JS에서는 인자,매개변수(parameter)가 설정되지 않으면 undefined 로 초기화 된다.
 *           따라서 undefined + 10  이 계산되게 되고, 'undefined'는 숫자가 아니므로 NaN(숫자가 아님)이 console창에 호출되게된다.
 * 
 */


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


// 반복문 (loop)














