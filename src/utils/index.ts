import lunarInfo from "../constants/lunarInfo";
const Test = (target: any) => {
  console.log(target);
};
const Test1 = () => {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(111);
    console.log(propertyKey);
    console.log(target);
    console.log(222);
  };
};

@Test
export class Demo {
  constructor() {
    console.log("init");
  }
  @Test1()
  hello() {
    console.log("123");
  }
  test = "abc";
}
/**
 * 计算农历的闰月
 * @param year
 * @return {number} 0: 没有闰月; (1 - 12) 闰月的月份
 */
export function getLeapMonth(year: number) {
  return lunarInfo[year - 1900] & 0xf;
}
