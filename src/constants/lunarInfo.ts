type lunarTenYearType = [number, number, number, number, number, number, number, number, number, number];

/**
 * 农历月份 1900-2100年的
 * @example
 * 如 2020年
 * lunarInfo[1900 - 2100]为0x07954 二进制为 111100101010100
 * 从右向左
 * 1-4位: 表示闰月 0x07954 & 0xf = 111100101010100 & 1111 = 4
 * 说明 2020年 润四月
 * 5-16位: 表示农历大小月 从高位到低位依次 1 - 12月 16位是1月 5位是12月
 * 17位 闰月是大月还是小月
 *
 * 00111 1001 0101 0100 => 0111[小大大大] [0[润四月小]] 1001[大小小大] 0101[小大小大] 0100
 *
 */
const lunarInfo_1900_1909: lunarTenYearType = [
  0x04bd8,
  0x04ae0,
  0x0a570,
  0x054d5,
  0x0d260,
  0x0d950,
  0x16554,
  0x056a0,
  0x09ad0,
  0x055d2
];
const lunarInfo_1910_1919: lunarTenYearType = [
  0x04ae0,
  0x0a5b6,
  0x0a4d0,
  0x0d250,
  0x1d255,
  0x0b540,
  0x0d6a0,
  0x0ada2,
  0x095b0,
  0x14977
];
const lunarInfo_1920_1929: lunarTenYearType = [
  0x04970,
  0x0a4b0,
  0x0b4b5,
  0x06a50,
  0x06d40,
  0x1ab54,
  0x02b60,
  0x09570,
  0x052f2,
  0x04970
];
const lunarInfo_1930_1939: lunarTenYearType = [
  0x06566,
  0x0d4a0,
  0x0ea50,
  0x06e95,
  0x05ad0,
  0x02b60,
  0x186e3,
  0x092e0,
  0x1c8d7,
  0x0c950
];
const lunarInfo_1940_1949: lunarTenYearType = [
  0x0d4a0,
  0x1d8a6,
  0x0b550,
  0x056a0,
  0x1a5b4,
  0x025d0,
  0x092d0,
  0x0d2b2,
  0x0a950,
  0x0b557
];
const lunarInfo_1950_1959: lunarTenYearType = [
  0x06ca0,
  0x0b550,
  0x15355,
  0x04da0,
  0x0a5b0,
  0x14573,
  0x052b0,
  0x0a9a8,
  0x0e950,
  0x06aa0
];
const lunarInfo_1960_1969: lunarTenYearType = [
  0x0aea6,
  0x0ab50,
  0x04b60,
  0x0aae4,
  0x0a570,
  0x05260,
  0x0f263,
  0x0d950,
  0x05b57,
  0x056a0
];
const lunarInfo_1970_1979: lunarTenYearType = [
  0x096d0,
  0x04dd5,
  0x04ad0,
  0x0a4d0,
  0x0d4d4,
  0x0d250,
  0x0d558,
  0x0b540,
  0x0b6a0,
  0x195a6
];
const lunarInfo_1980_1989: lunarTenYearType = [
  0x095b0,
  0x049b0,
  0x0a974,
  0x0a4b0,
  0x0b27a,
  0x06a50,
  0x06d40,
  0x0af46,
  0x0ab60,
  0x09570
];
const lunarInfo_1990_1999: lunarTenYearType = [
  0x04af5,
  0x04970,
  0x064b0,
  0x074a3,
  0x0ea50,
  0x06b58,
  0x055c0,
  0x0ab60,
  0x096d5,
  0x092e0
];
const lunarInfo_2000_2009: lunarTenYearType = [
  0x0c960,
  0x0d954,
  0x0d4a0,
  0x0da50,
  0x07552,
  0x056a0,
  0x0abb7,
  0x025d0,
  0x092d0,
  0x0cab5
];
const lunarInfo_2010_2019: lunarTenYearType = [
  0x0a950,
  0x0b4a0,
  0x0baa4,
  0x0ad50,
  0x055d9,
  0x04ba0,
  0x0a5b0,
  0x15176,
  0x052b0,
  0x0a930
];
const lunarInfo_2020_2029: lunarTenYearType = [
  0x07954,
  0x06aa0,
  0x0ad50,
  0x05b52,
  0x04b60,
  0x0a6e6,
  0x0a4e0,
  0x0d260,
  0x0ea65,
  0x0d530
];
const lunarInfo_2030_2039: lunarTenYearType = [
  0x05aa0,
  0x076a3,
  0x096d0,
  0x04afb,
  0x04ad0,
  0x0a4d0,
  0x1d0b6,
  0x0d250,
  0x0d520,
  0x0dd45
];
const lunarInfo_2040_2049: lunarTenYearType = [
  0x0b5a0,
  0x056d0,
  0x055b2,
  0x049b0,
  0x0a577,
  0x0a4b0,
  0x0aa50,
  0x1b255,
  0x06d20,
  0x0ada0
];
const lunarInfo_2050_2059: lunarTenYearType = [
  0x14b63,
  0x09370,
  0x049f8,
  0x04970,
  0x064b0,
  0x168a6,
  0x0ea50,
  0x06b20,
  0x1a6c4,
  0x0aae0
];
const lunarInfo_2060_2069: lunarTenYearType = [
  0x0a2e0,
  0x0d2e3,
  0x0c960,
  0x0d557,
  0x0d4a0,
  0x0da50,
  0x05d55,
  0x056a0,
  0x0a6d0,
  0x055d4
];
const lunarInfo_2070_2079: lunarTenYearType = [
  0x052d0,
  0x0a9b8,
  0x0a950,
  0x0b4a0,
  0x0b6a6,
  0x0ad50,
  0x055a0,
  0x0aba4,
  0x0a5b0,
  0x052b0
];
const lunarInfo_2080_2089: lunarTenYearType = [
  0x0b273,
  0x06930,
  0x07337,
  0x06aa0,
  0x0ad50,
  0x14b55,
  0x04b60,
  0x0a570,
  0x054e4,
  0x0d160
];
const lunarInfo_2090_2099: lunarTenYearType = [
  0x0e968,
  0x0d520,
  0x0daa0,
  0x16aa6,
  0x056d0,
  0x04ae0,
  0x0a9d4,
  0x0a2d0,
  0x0d150,
  0x0f252
];
const lunarInfo_2100 = [0x0d520];
const lunarInfo = [
  ...lunarInfo_1900_1909,
  ...lunarInfo_1910_1919,
  ...lunarInfo_1920_1929,
  ...lunarInfo_1930_1939,
  ...lunarInfo_1940_1949,
  ...lunarInfo_1950_1959,
  ...lunarInfo_1960_1969,
  ...lunarInfo_1970_1979,
  ...lunarInfo_1980_1989,
  ...lunarInfo_1990_1999,
  ...lunarInfo_2000_2009,
  ...lunarInfo_2010_2019,
  ...lunarInfo_2020_2029,
  ...lunarInfo_2030_2039,
  ...lunarInfo_2040_2049,
  ...lunarInfo_2050_2059,
  ...lunarInfo_2060_2069,
  ...lunarInfo_2070_2079,
  ...lunarInfo_2080_2089,
  ...lunarInfo_2090_2099,
  ...lunarInfo_2100
];
export default lunarInfo;
