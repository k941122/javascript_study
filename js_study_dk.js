

// javascript 모르는 부분 적어 놓는곳!




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





/**
 * isAdult 는 성인 인지 아닌지를 구분해주는 프로그래밍 용어이다.
 * 데이터 베이스, 웹사이트, 애플리케이션 등에서 성인 콘텐츠를 필터링 하거나,
 * 특정연령대 이상의 사용자에겜나 콘텐츠를 제공하는 데 사용되곤 한다.
 * 
 * const isAdult = true; //성인전용
 * const isAult = false; //전연령 접속가능
 * 
 * 위와 같은 용도로 사용될때 "isAult"는 Boolean 타입으로 처리됨!
 */


/**
 * 왜 명확한 획수가 정해져 있으면 for반복문을
 * 반복해야할 횟수나 범위가 명확하지 않으면 while반복문을 쓰지?
 */



