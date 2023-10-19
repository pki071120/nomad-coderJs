const quotes = [
  {//1
    quote:"삶이 있는 한 희망은 있다",
    author:"키케로",
  },
  {//2
    quote:"산다는것 그것은 치열한 전투이다.",
    author:"로망로망",
  },
  {//3
    quote:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author:"사무엘존슨"
  },
  {//4
    quote:"언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author:"파울로 코엘료",
  },
  {//5
    quote:"진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해",
    author:"찰리 채플린",
  },
  {//6
    quote:"직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author:"엘버트 허버드",
  },
  {//7
    quote:"신은 용기있는자를 결코 버리지 않는다.",
    author:"켄러",
  },
  {//8
    quote:"피할 수 없으면 즐겨라",
    author:"로버트 엘리엇",
  },
  {//9
    quote:"먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
    author:"엘사 맥스웰",
  },
  {//10
    quote:"한번의 실패와 영원한 실패를 혼동하지 마라",
    author:"F.스콧 핏제랄드",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[0]);

Math.random() * 10