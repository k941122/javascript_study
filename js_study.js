
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

//대화상자







