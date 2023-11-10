

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










