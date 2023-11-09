import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

const Mix = () => {
  const [areaImgPhone, setAreaImgPhone] = useState("img/area/1-1Garden.jpg");
  const [areaImg1F, setAreaImg1F] = useState("img/area/1-1Garden.jpg");
  const [areaImg2F, setAreaImg2F] = useState("img/area/2-1jelly.jpg");
  const [areaImg3F, setAreaImg3F] = useState("img/area/3-1coral.jpg");

  const [area1, setArea1] = useState("漫步花園");
  const [area2, setArea2] = useState("淺海迴廊");
  const [area3, setArea3] = useState("奇觀劇場");
  const [area4, setArea4] = useState("海洋漂流");

  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedFloor, setSelectedFloor] = useState(null);

  const [activeRegion, setActiveRegion] = useState(1);

  const [content, setContent] = useState(
    <span>
      漫步花園作為館內第一個展區，引您進入美妙的海中世界，五彩斑斕的海生植物在水中舞動，猶如在風中搖曳的花兒，魚群如花海中的精靈般，邀請您共同在海中花園優游。
    </span>
  );
  const [content2, setContent2] = useState(
    <span>
      各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。{" "}
    </span>
  );
  const [content3, setContent3] = useState(
    <span>
      這是一個隱藏在海洋深處的秘密王國，絢麗的珊瑚群落提供了各式海洋生物安全的棲息地，他們是地球生態系統的重要一環，是地球上的珍貴寶藏。
    </span>
  );
  const [contentPhone, setContentPhone] = useState(
    <span>
      漫步花園作為館內第一個展區，引您進入美妙的海中世界，五彩斑斕的海生植物在水中舞動，猶如在風中搖曳的花兒，魚群如花海中的精靈般，邀請您共同在海中花園優游。
    </span>
  );

  const [iconWc, setIconWc] = useState({});
  const [iconBreast, setIconBreast] = useState({});
  const [iconAED, setIconAED] = useState({});
  const [iconATM, setIconATM] = useState({});
  const [iconExit, setIconExit] = useState({});
  const [iconRestaurant, setIconRestaurant] = useState({});
  const [iconInfo, setIconInfo] = useState({});
  const [iconShop, setIconShop] = useState({});
  const [iconElevator, setIconElevator] = useState({});
  const [iconEscalator, setIconEscalator] = useState({});

  let area01 = activeRegion === 1 ? "area1F active" : "area1F";
  let area02 = activeRegion === 2 ? "area1F active" : "area1F";
  let area03 = activeRegion === 3 ? "area1F active" : "area1F";
  let area04 = activeRegion === 4 ? "area1F active" : "area1F";
  let area05 = activeRegion === 5 ? "area1F active" : "area1F";
  let area06 = activeRegion === 6 ? "area1F active" : "area1F";
  let area07 = activeRegion === 7 ? "area1F active" : "area1F";
  let area08 = activeRegion === 8 ? "area1F active" : "area1F";
  let area09 = activeRegion === 9 ? "area1F active" : "area1F";
  let area10 = activeRegion === 10 ? "area1F active" : "area1F";
  let area11 = activeRegion === 11 ? "area1F active" : "area1F";
  let area12 = activeRegion === 12 ? "area1F active" : "area1F";

  const floorOneHandler = () => {
    setActiveRegion(null);
    setSelectedButton(null);
    // handlefloorClick(1);
    // 樓層按鈕亮起
    setSelectedFloor(1);
    setArea1("漫步花園");
    setArea2("淺海迴廊");
    setArea3("奇觀劇場");
    setArea4("海洋漂流");

    // setContent(<span>　　請選擇一個區域</span>);
  };

  const floorSecondHandler = () => {
    setActiveRegion(null);
    setSelectedButton(null);
    setSelectedFloor(2);
    setArea1("水母幻境");
    setArea2("星空隧道");
    setArea3("雨林秘境");
    setArea4("潮間趣味");
    // setContent(<span>　　請選擇一個區域</span>);
  };

  const floorThirdHandler = () => {
    setActiveRegion(null);
    setSelectedButton(null);
    setSelectedFloor(3);
    setArea1("珊瑚寶藏");
    setArea2("極寒之地");
    setArea3("企鵝巡禮");
    setArea4("深海搖籃");
    // setContent(<span>　　請選擇一個區域</span>);
  };

  const handleButtonClick = (region) => {
    setActiveRegion(region);
  };

  //設定當區塊被點選時，區域按鈕亮起
  const handleBlockClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  // ? ----- 樓層區域按鈕 -----
  const areaOne = () => {
    setAreaImg1F("img/area/1-1Garden.jpg");
    setAreaImgPhone("img/area/1-1Garden.jpg");

    (function () {
      handleButtonClick(1); // 區塊的文字
      handleBlockClick(1); //區塊點選時區塊按鈕發光
    })();
    setContent(
      <span>
        漫步花園作為館內第一個展區，引您進入美妙的海中世界，五彩斑斕的海生植物在水中舞動，猶如在風中搖曳的花兒，魚群如花海中的精靈般，邀請您共同在海中花園優游。
      </span>
    );
    setContentPhone(
      <span>
        漫步花園作為館內第一個展區，引您進入美妙的海中世界，五彩斑斕的海生植物在水中舞動，猶如在風中搖曳的花兒，魚群如花海中的精靈般，邀請您共同在海中花園優游。
      </span>
    );
    document.querySelector("#area").value = "漫步花園";

    // if (area1 === "漫步花園") {
    // } else if (area1 === "水母幻境") {
    //   setAreaImgPhone("img/area/2-1jelly.jpg");
    //   setContent(
    //     <span>
    //       各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。{" "}
    //     </span>
    //   );
    //   setContentPhone(
    //     <span>
    //       各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。{" "}
    //     </span>
    //   );
    //   document.querySelector("#area").value = "水母幻境";
    // } else {
    //   setAreaImgPhone("img/area/3-1coral.jpg");

    //   setContentPhone(
    //     <span>
    //       這是一個隱藏在海洋深處的秘密王國，絢麗的珊瑚群落提供了各式海洋生物安全的棲息地，他們是地球生態系統的重要一環，是地球上的珍貴寶藏。
    //     </span>
    //   );
    //   setContent(
    //     <span>
    //       這是一個隱藏在海洋深處的秘密王國，絢麗的珊瑚群落提供了各式海洋生物安全的棲息地，他們是地球生態系統的重要一環，是地球上的珍貴寶藏。
    //     </span>
    //   );
    //   document.querySelector("#area").value = "珊瑚寶藏";
    // }
  };

  const areaSecond = () => {
    setAreaImg1F("img/area/1-2cloister.jpg");
    setAreaImgPhone("img/area/1-2cloister.jpg");
    setContentPhone(
      <span>
        身處在微光交織的淺海迴廊中，您將可以近距離欣賞各種廣為人知的明星海洋生物，出現在電影裡的各種熱帶魚、療癒人心的微笑魟魚，造型獨特的獅子魚等等，都在這裡等您感受他們的魅力。
      </span>
    );
    setContent(
      <span>
        身處在微光交織的淺海迴廊中，您將可以近距離欣賞各種廣為人知的明星海洋生物，出現在電影裡的各種熱帶魚、療癒人心的微笑魟魚，造型獨特的獅子魚等等，都在這裡等您感受他們的魅力。
      </span>
    );
    document.querySelector("#area").value = "淺海迴廊";

    (function () {
      handleButtonClick(2);
      handleBlockClick(2);
    })();
    // if (area2 === "淺海迴廊") {

    //
    // } else if (area2 === "星空隧道") {
    //   setContentPhone(
    //     <span>
    //       您是否覺得如果能在海底自在穿梭該有多好？星空隧道將滿足您的願望，
    //       在這裡眼前是一片舒心靜謐的藍，魚兒如夜空中繁星點點，又如流星般劃過眼前，
    //       或許踏入這裡，能實現您更多心願。
    //     </span>
    //   );
    //   setContent(
    //     <span>
    //       您是否覺得如果能在海底自在穿梭該有多好？星空隧道將滿足您的願望，
    //       在這裡眼前是一片舒心靜謐的藍，魚兒如夜空中繁星點點，又如流星般劃過眼前，
    //       或許踏入這裡，能實現您更多心願。
    //     </span>
    //   );
    //   document.querySelector("#area").value = "星空隧道";
    // } else {
    //   setContentPhone(<span>　　深海搖籃的文案????</span>);
    //   setContent(<span>　　深海搖籃的文案????</span>);
    //   document.querySelector("#area").value = "深海搖籃";
    // }
  };
  const areaThird = () => {
    setAreaImg1F("img/area/1-3theater.jpg");
    setAreaImgPhone("img/area/1-3theater.jpg");
    setContent(
      <span>
        歡迎來到奇觀劇場，在這寬敞的環形劇場中，匯集了不同生物的表演，每一刻都是令人歎為觀止的美妙出演，坐在觀眾席的您將感受到海洋生物的活力與美好。※依照當天動物的狀況調整演出。
      </span>
    );
    setContentPhone(
      <span>
        歡迎來到奇觀劇場，在這寬敞的環形劇場中，匯集了不同生物的表演，每一刻都是令人歎為觀止的美妙出演，坐在觀眾席的您將感受到海洋生物的活力與美好。※依照當天動物的狀況調整演出。
      </span>
    );
    (function () {
      handleButtonClick(3);
      handleBlockClick(3);
    })();

    // if (area3 === "奇觀劇場") {

    //   document.querySelector("#area").value = "奇觀劇場";
    // } else if (area3 === "雨林秘境") {
    //   setContent(
    //     <span>
    //       穿過隧道，來到一片欣欣向榮的綠意雨林，在這潮濕溫暖的環境下，
    //       許多奇特的物種就此誕生：皮膚有如鎧甲的巨骨舌魚、腹部半透明的玻璃蛙、
    //       呆萌的水豚與擁有華麗羽色的金太陽……等。
    //     </span>
    //   );
    //   setContentPhone(
    //     <span>
    //       穿過隧道，來到一片欣欣向榮的綠意雨林，在這潮濕溫暖的環境下，
    //       許多奇特的物種就此誕生：皮膚有如鎧甲的巨骨舌魚、腹部半透明的玻璃蛙、
    //       呆萌的水豚與擁有華麗羽色的金太陽……等。
    //     </span>
    //   );
    //   document.querySelector("#area").value = "雨林秘境";
    // } else {
    //   setContentPhone(<span>　　你覺得極寒之地的文案要寫什麼呢？</span>);
    //   setContent(<span>　　你覺得極寒之地的文案要寫什麼呢？</span>);
    //   document.querySelector("#area").value = "極寒之地";
    // }
  };

  const areaForth = () => {
    setAreaImg1F("img/area/1-4tuna.jpg");
    setAreaImgPhone("img/area/1-4tuna.jpg");
    setContent(
      <span>
        這個展區將帶領您漂流至大洋中，在這心型的展區中和魚群一齊洄流，彷彿成為了海洋旅者，穿梭於不同的浩瀚海域之中，與各種海洋生物共譜一曲奇妙的邂逅。
      </span>
    );
    setContentPhone(
      <span>
        這個展區將帶領您漂流至大洋中，在這心型的展區中和魚群一齊洄流，彷彿成為了海洋旅者，穿梭於不同的浩瀚海域之中，與各種海洋生物共譜一曲奇妙的邂逅。
      </span>
    );

    (function () {
      handleButtonClick(4);
      handleBlockClick(4);
    })();
  };

  const areaFifth = () => {
    setAreaImg2F("img/area/2-1jelly.jpg");
    setAreaImgPhone("img/area/2-1jelly.jpg");

    (function () {
      handleButtonClick(5);
      handleBlockClick(5);
    })();

    setContent2(
      <span>
        各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。{" "}
      </span>
    );
    setContentPhone(
      <span>
        各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。
      </span>
    );
    document.querySelector("#area").value = "水母幻境";
  };

  const areaSixth = () => {
    setAreaImgPhone("img/area/2-2starry.jpg");
    setAreaImg2F("img/area/2-2starry.jpg");

    (function () {
      handleButtonClick(6);
      handleBlockClick(6);
    })();

    setContent2(
      <span>
        您是否覺得如果能在海底自在穿梭該有多好？星空隧道將滿足您的願望，
        在這裡眼前是一片舒心靜謐的藍，魚兒如夜空中繁星點點，又如流星般劃過眼前，
        或許踏入這裡，能實現您更多心願。
      </span>
    );
    setContentPhone(
      <span>
        您是否覺得如果能在海底自在穿梭該有多好？星空隧道將滿足您的願望，
        在這裡眼前是一片舒心靜謐的藍，魚兒如夜空中繁星點點，又如流星般劃過眼前，
        或許踏入這裡，能實現您更多心願。
      </span>
    );
    document.querySelector("#area").value = "星空隧道";
  };

  const areaSeventh = () => {
    setAreaImgPhone("img/area/2-3Rainforest.jpg");
    setAreaImg2F("img/area/2-3Rainforest.jpg");

    (function () {
      handleButtonClick(7);
      handleBlockClick(7);
    })();

    setContent2(
      <span>
        穿過隧道，來到一片欣欣向榮的綠意雨林，在這潮濕溫暖的環境下，
        許多奇特的物種就此誕生：皮膚有如鎧甲的巨骨舌魚、腹部半透明的玻璃蛙、
        呆萌的水豚與擁有華麗羽色的金太陽等等。
      </span>
    );
    setContentPhone(
      <span>
        穿過隧道，來到一片欣欣向榮的綠意雨林，在這潮濕溫暖的環境下，
        許多奇特的物種就此誕生：皮膚有如鎧甲的巨骨舌魚、腹部半透明的玻璃蛙、
        呆萌的水豚與擁有華麗羽色的金太陽……等。
      </span>
    );
    document.querySelector("#area").value = "雨林秘境";
  };

  const areaEighth = () => {
    setAreaImgPhone("img/area/2-4intertidal.jpg");
    setAreaImg2F("img/area/2-4intertidal.jpg");

    (function () {
      handleButtonClick(8);
      handleBlockClick(8);
    })();

    setContent2(
      <span>
        在這高低潮之間的底質海域，可看見各種蝦蟹貝類，
        而各種藻類也組織了屬於自己的花園。
        著名的招潮蟹正揮舞著大螯，如同彈奏小提琴，因此又被喻為「琴師蟹」，
        饒富趣味，而海星、海參和海葵觸摸池也在這裡喚起您的童心。
      </span>
    );
    setContentPhone(
      <span>
        在這高低潮之間的底質海域，可看見各種蝦蟹貝類，
        而各種藻類也組織了屬於自己的花園。
        著名的招潮蟹正揮舞著大螯，如同彈奏小提琴，因此又被喻為「琴師蟹」或「提琴手蟹」，
        饒富趣味，而海星、海參和海葵觸摸池也在這裡。
      </span>
    );
    document.querySelector("#area").value = "潮間趣味";
  };
  const areaNinth = () => {
    setAreaImgPhone("img/area/3-1coral.jpg");
    setAreaImg3F("img/area/3-1coral.jpg");

    (function () {
      handleButtonClick(9);
      handleBlockClick(9);
    })();

    setContent3(
      <span>
        這是一個隱藏在海洋深處的秘密王國，絢麗的珊瑚群落提供了各式海洋生物安全的棲息地，他們是地球生態系統的重要一環，是地球上的珍貴寶藏。
      </span>
    );
    setContentPhone(
      <span>
        這是一個隱藏在海洋深處的秘密王國，絢麗的珊瑚群落提供了各式海洋生物安全的棲息地，他們是地球生態系統的重要一環，是地球上的珍貴寶藏。
      </span>
    );
    document.querySelector("#area").value = "珊瑚寶藏";
  };
  const areaTenth = () => {
    setAreaImgPhone("img/area/3-2seal.jpg");
    setAreaImg3F("img/area/3-2seal.jpg");

    (function () {
      handleButtonClick(10);
      handleBlockClick(10);
    })();

    setContent3(
      <span>
        極寒之地將引領您至冰天雪地，在這冷冽的寒意，中您可以看到由巨大昆布組成的海洋森林與水中自由穿梭的海豹們，並結合聲光影視效果，還能尋訪北極熊的身影，猶如置身南北極之中。
      </span>
    );
    setContentPhone(
      <span>
        極寒之地將引領您至冰天雪地，在這冷冽的寒意，中您可以看到由巨大昆布組成的海洋森林與水中自由穿梭的海豹們，並結合聲光影視效果，還能尋訪北極熊的身影，猶如置身南北極之中。
      </span>
    );
    document.querySelector("#area").value = "極寒之地";
  };

  const areaEleventh = () => {
    setAreaImgPhone("img/area/3-3penguin.jpg");
    setAreaImg3F("img/area/3-3penguin.jpg");

    (function () {
      handleButtonClick(11);
      handleBlockClick(11);
    })();

    setContent3(
      <span>
        首先映入眼簾的是一片雪白，不同種類的企鵝在這邊與您相遇，您可看見他們在陸地上行走的可愛模樣和在水中嬉戲暢遊的模樣。此展區也模擬了極寒氣候，
      </span>
    );
    setContentPhone(
      <span>
        首先映入眼簾的是一片雪白，不同種類的企鵝在這邊與您相遇，您可看見他們在陸地上行走的可愛模樣和在水中嬉戲暢遊的模樣。此展區也模擬了極寒氣候，
      </span>
    );
    document.querySelector("#area").value = "企鵝巡禮";
  };

  const areaTwelfth = () => {
    setAreaImg3F("img/area/3-4deep.jpg");

    setAreaImgPhone("img/area/3-4deep.jpg");


    (function () {
      handleButtonClick(12);
      handleBlockClick(12);
    })();

    setContent3(
      <span>
        踏足這片幽暗神秘的深淵，您將被黑暗籠罩，彷彿置身海洋世界的盡頭，
        海洋是無數生命的搖籃，孕育出多樣的生物，在這裡您可以探索型態各異的深海生物。
      </span>
    );
    setContentPhone(
      <span>
        踏足這片幽暗神秘的深淵，您將被黑暗籠罩，彷彿置身海洋世界的盡頭，
        海洋是無數生命的搖籃，孕育出多樣的生物，在這裡您可以探索型態各異的深海生物。
      </span>
    );
    document.querySelector("#area").value = "深海搖籃";
  };

  // ? ----- icon按鈕 -----
  const btnWCHandler = () => {
    setIconWc({
      transform: "scale(1.3)",
      opacity: 0.85,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
      transition: "1.4s",
    });

    setIconWc({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646,0 0 1.8rem #fee313, inset 0 0 1rem #fee313",
      transition: "2.8s",
    });
    console.log("AAA");
    setIconWc({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646,0 0 2.5rem #fee313, inset 0 0 1rem #fee313",
    });
    setIconBreast({ opacity: 0.65 });
    setIconAED({ opacity: 0.65 });
    setIconATM({ opacity: 0.65 });
    setIconElevator({ opacity: 0.65 });
    setIconEscalator({ opacity: 0.65 });
    setIconExit({ opacity: 0.65 });
    setIconInfo({ opacity: 0.65 });
    setIconRestaurant({ opacity: 0.65 });
    setIconShop({ opacity: 0.65 });
  };

  const btnBreastHandler = () => {
    setIconWc({ opacity: 0.65 });
    setIconBreast({
      transform: "scale(1.3)",

      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646,0 0 2.5rem #887646, inset 0 0 1rem #fee313",
    });
    setIconAED({ opacity: 0.6 });
    setIconATM({ opacity: 0.6 });
    setIconElevator({ opacity: 0.6 });
    setIconEscalator({ opacity: 0.6 });
    setIconExit({ opacity: 0.6 });
    setIconInfo({ opacity: 0.6 });
    setIconRestaurant({ opacity: 0.6 });
    setIconShop({ opacity: 0.6 });
  };
  const btnATMHandler = () => {
    setIconWc({ opacity: 0.6 });
    setIconBreast({ opacity: 0.6 });
    setIconAED({ opacity: 0.6 });
    setIconATM({
      transform: "scale(1.3)",

      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconElevator({ opacity: 0.6 });
    setIconEscalator({ opacity: 0.6 });
    setIconExit({ opacity: 0.6 });
    setIconInfo({ opacity: 0.6 });
    setIconRestaurant({ opacity: 0.6 });
    setIconShop({ opacity: 0.6 });
  };
  const btnAEDHandler = () => {
    setIconWc();
    setIconBreast();
    setIconAED({
      transform: "scale(1.3)",

      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconATM({ opacity: 0.65 });
    setIconElevator({ opacity: 0.65 });
    setIconEscalator({ opacity: 0.65 });
    setIconExit({ opacity: 0.65 });
    setIconInfo({ opacity: 0.65 });
    setIconRestaurant({ opacity: 0.65 });
    setIconShop({ opacity: 0.65 });
  };
  const btnRestaurantHandler = () => {
    setIconWc({ opacity: 0.65 });
    setIconBreast({ opacity: 0.65 });
    setIconAED({ opacity: 0.65 });
    setIconATM({ opacity: 0.65 });
    setIconElevator({ opacity: 0.65 });
    setIconEscalator({ opacity: 0.65 });
    setIconExit({ opacity: 0.65 });
    setIconInfo({ opacity: 0.65 });
    setIconRestaurant({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconShop({ opacity: 0.65 });
  };
  const btnExitHandler = () => {
    setIconWc({ opacity: 0.65 });
    setIconBreast({ opacity: 0.65 });
    setIconAED({ opacity: 0.65 });
    setIconATM({ opacity: 0.65 });
    setIconElevator({ opacity: 0.65 });
    setIconEscalator({ opacity: 0.65 });
    setIconExit({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconInfo({ opacity: 0.65 });
    setIconRestaurant({ opacity: 0.65 });
    setIconShop({ opacity: 0.65 });
  };
  const btnEscalatorHandler = () => {
    setIconWc({ opacity: 0.65 });
    setIconBreast({ opacity: 0.65 });
    setIconAED({ opacity: 0.65 });
    setIconATM({ opacity: 0.65 });
    setIconElevator({ opacity: 0.65 });
    setIconEscalator({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconExit({ opacity: 0.65 });
    setIconInfo({ opacity: 0.65 });
    setIconRestaurant({ opacity: 0.65 });
    setIconShop({ opacity: 0.65 });
  };
  const btnInfoHandler = () => {
    setIconWc({ opacity: 0.65 });
    setIconBreast({ opacity: 0.65 });
    setIconAED({ opacity: 0.65 });
    setIconATM({ opacity: 0.65 });
    setIconElevator({ opacity: 0.65 });
    setIconEscalator({ opacity: 0.65 });
    setIconExit({ opacity: 0.65 });
    setIconInfo({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconRestaurant({ opacity: 0.65 });
    setIconShop({ opacity: 0.65 });
  };
  const btnShopHandler = () => {
    setIconWc({ opacity: 0.65 });
    setIconBreast({ opacity: 0.65 });
    setIconAED({ opacity: 0.65 });
    setIconATM({ opacity: 0.65 });
    setIconElevator({ opacity: 0.65 });
    setIconEscalator({ opacity: 0.65 });
    setIconExit({ opacity: 0.65 });
    setIconInfo({ opacity: 0.65 });
    setIconRestaurant({ opacity: 0.65 });
    setIconShop({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
  };
  const btnElevatorHandler = () => {
    setIconWc({ opacity: 0.65 });
    setIconBreast({ opacity: 0.65 });
    setIconAED({ opacity: 0.65 });
    setIconATM({ opacity: 0.65 });
    setIconElevator({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconEscalator({ opacity: 0.65 });
    setIconExit({ opacity: 0.65 });
    setIconInfo({ opacity: 0.65 });
    setIconRestaurant({ opacity: 0.65 });
    setIconShop({ opacity: 0.65 });
  };

  //   手機版區域
  const floorHandler = (e) => {
    setActiveRegion(null);
    setSelectedButton(null);

    if (e.target.value === "1F") {
      (function () {
        handleButtonClick(1); // 區塊的文字
        handleBlockClick(1); //區塊點選時區塊按鈕發光
      })();
      setAreaImgPhone("img/area/1-1Garden.jpg");
      setContentPhone(
        <span>
          漫步花園作為館內第一個展區，引您進入美妙的海中世界，五彩斑斕的海生植物在水中舞動，猶如在風中搖曳的花兒，魚群如花海中的精靈般，邀請您共同在海中花園優游。
        </span>
      );
      setArea1("漫步花園");
      setArea2("淺海迴廊");
      setArea3("奇觀劇場");
      setArea4("海洋漂流");
      document.querySelector(".map-1F-phone").style.opacity = "1";
      document.querySelector(".map-1F-phone").style.display = "block";
      document.querySelector(".map-2F-phone").style.opacity = "0";
      document.querySelector(".map-2F-phone").style.display = "none";
      document.querySelector(".map-3F-phone").style.opacity = "0";
      document.querySelector(".map-3F-phone").style.display = "none";
    } else if (e.target.value === "2F") {
      setAreaImgPhone("img/area/2-1jelly.jpg");
      (function () {
        handleButtonClick(5); // 區塊的文字
        handleBlockClick(5); //區塊點選時區塊按鈕發光
      })();
      setContentPhone(
        <span>
          各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。
        </span>
      );
      setArea1("水母幻境");
      setArea2("星空隧道");
      setArea3("雨林秘境");
      setArea4("潮間趣味");
      document.querySelector(".map-1F-phone").style.opacity = "0";
      document.querySelector(".map-1F-phone").style.display = "none";
      document.querySelector(".map-2F-phone").style.opacity = "1";
      document.querySelector(".map-2F-phone").style.display = "block";
      document.querySelector(".map-3F-phone").style.opacity = "0";
      document.querySelector(".map-3F-phone").style.display = "none";
    } else {
      setAreaImgPhone("img/area/3-1coral.jpg");

      (function () {
        handleButtonClick(9);
        handleBlockClick(9);
      })();
      setContentPhone(
        <span>
          這是一個隱藏在海洋深處的秘密王國，絢麗的珊瑚群落提供了各式海洋生物安全的棲息地，他們是地球生態系統的重要一環，是地球上的珍貴寶藏。
        </span>
      );
      setArea1("珊瑚寶藏");
      setArea2("極寒之地");
      setArea3("企鵝巡禮");
      setArea4("深海搖籃");
      document.querySelector(".map-1F-phone").style.opacity = "0";
      document.querySelector(".map-1F-phone").style.display = "none";
      document.querySelector(".map-2F-phone").style.opacity = "0";
      document.querySelector(".map-2F-phone").style.display = "none";
      document.querySelector(".map-3F-phone").style.opacity = "1";
      document.querySelector(".map-3F-phone").style.display = "block";
    }
  };

  const areaHandler = (e) => {
    if (e.target.value === "漫步花園") {
      setAreaImgPhone("img/area/1-1Garden.jpg");

      setContentPhone(
        <span>
          漫步花園作為館內第一個展區，引您進入美妙的海中世界，五彩斑斕的海生植物在水中舞動，猶如在風中搖曳的花兒，魚群如花海中的精靈般，邀請您共同在海中花園優游。
        </span>
      );
      (function () {
        handleButtonClick(1);
      })();
    } else if (e.target.value === "淺海迴廊") {
      setAreaImgPhone("img/area/1-2cloister.jpg");

      setContentPhone(
        <span>
          身處在微光交織的淺海迴廊中，您將可以近距離欣賞各種廣為人知的明星海洋生物，出現在電影裡的各種熱帶魚、療癒人心的微笑魟魚，造型獨特的獅子魚等等，都在這裡等您感受他們的魅力。
        </span>
      );
      (function () {
        handleButtonClick(2);
      })();
    } else if (e.target.value === "奇觀劇場") {
      setAreaImgPhone("img/area/1-3theater.jpg");

      setContentPhone(
        <span>
          歡迎來到奇觀劇場，在這寬敞的環形劇場中，匯集了不同生物的表演，每一刻都是令人歎為觀止的美妙出演，坐在觀眾席的您將感受到海洋生物的活力與美好。※依照當天動物的狀況調整演出。
        </span>
      );
      (function () {
        handleButtonClick(3);
      })();
    } else if (e.target.value === "海洋漂流") {
      setAreaImgPhone("img/area/1-4tuna.jpg");

      setContentPhone(
        <span>
          這個展區將帶領您漂流至大洋中，在這心型的展區中和魚群一齊洄流，彷彿成為了海洋旅者，穿梭於不同的浩瀚海域之中，與各種海洋生物共譜一曲奇妙的邂逅。
        </span>
      );
      (function () {
        handleButtonClick(4);
      })();
    } else if (e.target.value === "水母幻境") {
      setAreaImgPhone("img/area/2-1jelly.jpg");
      setContentPhone(
        <span>
          各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。{" "}
        </span>
      );
      (function () {
        handleButtonClick(5);
      })();
    } else if (e.target.value === "星空隧道") {
      setAreaImgPhone("img/area/2-2starry.jpg");

      setContentPhone(
        <span>
          您是否覺得如果能在海底自在穿梭該有多好？星空隧道將滿足您的願望，
          在這裡眼前是一片舒心靜謐的藍，魚兒如夜空中繁星點點，又如流星般劃過眼前，
          或許踏入這裡，能實現您更多心願。
        </span>
      );
      (function () {
        handleButtonClick(6);
      })();
    } else if (e.target.value === "雨林秘境") {
      setAreaImgPhone("img/area/2-3Rainforest.jpg");

      setContentPhone(
        <span>
          穿過隧道，來到一片欣欣向榮的綠意雨林，在這潮濕溫暖的環境下，
          許多奇特的物種就此誕生：皮膚有如鎧甲的巨骨舌魚、腹部半透明的玻璃蛙、
          呆萌的水豚與擁有華麗羽色的金太陽……等。
        </span>
      );
      (function () {
        handleButtonClick(7);
      })();
    } else if (e.target.value === "潮間趣味") {
      setAreaImgPhone("img/area/2-4intertidal.jpg");

      setContentPhone(
        <span>
          在這高低潮之間的底質海域，可看見各種蝦蟹貝類，
          而各種藻類也組織了屬於自己的花園。
          著名的招潮蟹正揮舞著大螯，如同彈奏小提琴，因此又被喻為「琴師蟹」或「提琴手蟹」，
          饒富趣味，而海星、海參和海葵觸摸池也在這裡。
        </span>
      );
      (function () {
        handleButtonClick(8);
      })();
    } else if (e.target.value === "珊瑚寶藏") {
      setAreaImgPhone("img/area/3-1coral.jpg");

      setContentPhone(
        <span>
          這是一個隱藏在海洋深處的秘密王國，絢麗的珊瑚群落提供了各式海洋生物安全的棲息地，他們是地球生態系統的重要一環，是地球上的珍貴寶藏。
        </span>
      );
      (function () {
        handleButtonClick(9);
      })();
    } else if (e.target.value === "極寒之地") {
      setAreaImgPhone("img/area/3-2seal.jpg");

      setContentPhone(
        <span>
          極寒之地將引領您至冰天雪地，在這冷冽的寒意，中您可以看到由巨大昆布組成的海洋森林與水中自由穿梭的海豹們，並結合聲光影視效果，還能尋訪北極熊的身影，猶如置身南北極之中。
        </span>
      );
      (function () {
        handleButtonClick(10);
      })();
    } else if (e.target.value === "企鵝巡禮") {
      setAreaImgPhone("img/area/3-3penguin.jpg");

      setContentPhone(
        <span>
          首先映入眼簾的是一片雪白，不同種類的企鵝在這邊與您相遇，您可看見他們在陸地上行走的可愛模樣和在水中嬉戲暢遊的模樣。此展區也模擬了極寒氣候，
        </span>
      );
      (function () {
        handleButtonClick(11);
      })();
    } else if (e.target.value === "深海搖籃") {
      setAreaImgPhone("img/area/3-4deep.jpg");
      setContentPhone(
        <span>
          踏足這片幽暗神秘的深淵，您將被黑暗籠罩，彷彿置身海洋世界的盡頭，
          海洋是無數生命的搖籃，孕育出多樣的生物，在這裡您可以探索型態各異的深海生物。
        </span>
      );
      (function () {
        handleButtonClick(12);
      })();
    }
  };
  //   手機版

  //樓層按鈕元件
  const FloorButton = ({ floor, onClick, style }) => {
    return (
      <button
        className="btn btn-secondary px-4 me-2 mt-5 "
        onClick={onClick}
        style={style}
      >
        {floor}
      </button>
    );
  };

  const FloorButtonData = [
    {
      id: 1,
      floor: "1F",
      onClick: floorOneHandler,
      style: {
        border: "none",
        backgroundColor: selectedFloor === 1 ? "lightblue" : "rgb(0, 82, 169)",
        color: selectedFloor === 1 ? "rgb(0, 82, 169)" : "white",
      },
    },
    {
      id: 2,
      floor: "2F",
      onClick: floorSecondHandler,
      style: {
        border: "none",
        backgroundColor: selectedFloor === 2 ? "lightblue" : "rgb(0, 82, 169)",
        color: selectedFloor === 2 ? "rgb(0, 82, 169)" : "white",
      },
    },
    {
      id: 3,
      floor: "3F",
      onClick: floorThirdHandler,
      style: {
        border: "none",
        backgroundColor: selectedFloor === 3 ? "lightblue" : "rgb(0, 82, 169)",
        color: selectedFloor === 3 ? "rgb(0, 82, 169)" : "white",
      },
    },
  ];

  //區域按鈕元件
  const AreaButton = ({ area, onClick, style }) => {
    return (
      <button
        className="btn btn-outline-success area-button"
        style={style}
        onClick={onClick}
      >
        {area}
      </button>
    );
  };

  const AreaButtonData1F = [
    {
      id: 1,
      area: "漫步花園",
      onClick: areaOne,
      style: {
        boxShadow:
          selectedButton === 1
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 1 ? " #e0f8ff" : "",
        color: selectedButton === 1 ? "#182434" : "",
        border: selectedButton === 1 ? "none" : "1px solid white",
        marginRight: "19.3px",
        fontWeight: 500,
      },
    },
    {
      id: 2,
      area: "淺海迴廊",
      onClick: areaSecond,

      style: {
        boxShadow:
          selectedButton === 2
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 2 ? " #e0f8ff" : "",
        color: selectedButton === 2 ? "#182434" : "",
        border: selectedButton === 2 ? "none" : "1px solid white",

        marginRight: "19.3px",
        fontWeight: 500,
      },
    },
    {
      id: 3,
      area: "奇觀劇場",
      onClick: areaThird,
      style: {
        boxShadow:
          selectedButton === 3
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 3 ? " #e0f8ff" : "",
        color: selectedButton === 3 ? "#182434" : "",
        border: selectedButton === 3 ? "none" : "1px solid white",
        marginRight: "19.3px",
        fontWeight: 500,
      },
    },
    {
      id: 4,
      area: "海洋漂流",
      onClick: areaForth,
      style: {
        boxShadow:
          selectedButton === 4
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 4 ? " #e0f8ff" : "",
        color: selectedButton === 4 ? "#182434" : "",
        border: selectedButton === 4 ? "none" : "1px solid white",
        fontWeight: 500,
      },
    },
  ];
  const AreaButtonData2F = [
    {
      id: 1,
      area: "水母幻境",
      onClick: areaFifth,
      style: {
        boxShadow:
          selectedButton === 5
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 5 ? " #e0f8ff" : "",
        color: selectedButton === 5 ? "#182434" : "",
        border: selectedButton === 5 ? "none" : "1.5px solid white",
        fontWeight: 500,
        marginRight: "19.3px",
      },
    },
    {
      id: 2,
      area: "星空隧道",
      onClick: areaSixth,

      style: {
        boxShadow:
          selectedButton === 6
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 6 ? " #e0f8ff" : "",
        color: selectedButton === 6 ? "#182434" : "",

        border: selectedButton === 6 ? "none" : "1.5px solid white",
        fontWeight: 500,
        marginRight: "19.3px",
      },
    },
    {
      id: 3,
      area: "雨林秘境",
      onClick: areaSeventh,
      style: {
        boxShadow:
          selectedButton === 7
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 7 ? " #e0f8ff" : "",
        color: selectedButton === 7 ? "#182434" : "",
        border: selectedButton === 7 ? "none" : "1.5px solid white",
        fontWeight: 500,
        marginRight: "19.3px",
      },
    },
    {
      id: 4,
      area: "潮間趣味",
      onClick: areaEighth,
      style: {
        boxShadow:
          selectedButton === 8
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 8 ? " #e0f8ff" : "",
        color: selectedButton === 8 ? "#182434" : "",
        border: selectedButton === 8 ? "none" : "1.5px solid white",
        fontWeight: 500,
      },
    },
  ];

  const AreaButtonData3F = [
    {
      id: 1,
      area: "珊瑚寶藏",
      onClick: areaNinth,
      style: {
        boxShadow:
          selectedButton === 9
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 9 ? " #e0f8ff" : "",
        color: selectedButton === 9 ? "#182434" : "",
        border: selectedButton === 9 ? "none" : "1.5px solid white",
        fontWeight: 500,
        marginRight: "41px",
      },
    },
    {
      id: 2,
      area: "極寒之地",
      onClick: areaTenth,

      style: {
        boxShadow:
          selectedButton === 10
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 10 ? " #e0f8ff" : "",
        color: selectedButton === 10 ? "#182434" : "",
        border: selectedButton === 10 ? "none" : "1.5px solid white",
        marginRight: "41px",
        fontWeight: 500,
      },
    },
    {
      id: 3,
      area: "企鵝巡禮",
      onClick: areaEleventh,
      style: {
        boxShadow:
          selectedButton === 11
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 11 ? " #e0f8ff" : "",
        color: selectedButton === 11 ? "#182434" : "",
        border: selectedButton === 11 ? "none" : "1.5px solid white",
        marginRight: "41px",
        fontWeight: 500,
      },
    },
    {
      id: 4,
      area: "深海搖籃",
      onClick: areaTwelfth,
      style: {
        boxShadow:
          selectedButton === 12
            ? "0px 2px 8px 0px #84e4f9, 0px -3px 8px 0px #84e4f9"
            : "",

        backgroundColor: selectedButton === 12 ? " #e0f8ff" : "",
        color: selectedButton === 12 ? "#182434" : "",
        border: selectedButton === 12 ? "none" : "1.5px solid white",
        fontWeight: 500,
      },
    },
  ];

  //icon按鈕元件
  const NewIconButton = ({ onClick, src, alt, className, p }) => {
    return (
      <div className="newIconButton" onClick={onClick}>
        <div className="iconCircle">
          <img src={src} alt={alt} className="newIcon" />
        </div>
        <p className={className}>{p}</p>
      </div>
    );
  };

  const NewIconButtonDataFirst = [
    {
      id: 1,
      src: "img/NewIconsButton/wc2.svg",
      alt: "toliet",
      onClick: btnWCHandler,
      p: "化妝室",
      className: "iconButtonP",
    },

    {
      id: 2,
      src: "img/NewIconsButton/breast.svg",
      alt: "breast",
      onClick: btnBreastHandler,
      p: "哺乳室",
      className: "iconButtonP",
    },
    {
      id: 3,
      src: "img/NewIconsButton/ATM.svg",
      alt: "ATM",
      onClick: btnATMHandler,
      p: "提款機",
      className: "iconButtonP",
    },
    {
      id: 4,
      src: "img/NewIconsButton/info.svg",
      alt: "info",
      onClick: btnInfoHandler,
      p: "服務台",
      className: "iconButtonP",
    },
    {
      id: 5,
      src: "img/NewIconsButton/restaurant.svg",
      alt: "restaurant",
      onClick: btnRestaurantHandler,
      p: "餐廳",
      className: "iconButtonP2",
    },
  ];

  const NewIconButtonDataSecond = [
    {
      id: 1,
      src: "img/NewIconsButton/shop.svg",
      alt: "shop",
      onClick: btnShopHandler,
      p: "禮品店",
      className: "iconButtonP",
    },

    {
      id: 2,
      src: "img/NewIconsButton/AED.svg",
      alt: "AED",
      onClick: btnAEDHandler,
      p: "急救器",
      className: "iconButtonP",
    },
    {
      id: 3,
      src: "img/NewIconsButton/escalator.svg",
      alt: "escalator",
      onClick: btnEscalatorHandler,
      p: "手扶梯",
      className: "iconButtonP",
    },
    {
      id: 4,
      src: "img/NewIconsButton/elevator.svg",
      alt: "elevator",
      onClick: btnElevatorHandler,
      p: "電梯",
      className: "iconButtonP2",
    },
    {
      id: 5,
      src: "img/NewIconsButton/exit.svg",
      alt: "exit",
      onClick: btnExitHandler,
      p: "逃生口",
      className: "iconButtonP",
    },
  ];

  //地圖左側滾動視差
  window.addEventListener("scroll", () => {
    const mapSvg = document.querySelector("#left-mapSvg");
    const floor1F = document.querySelector("#floor-1F");
    const floor2F = document.querySelector("#floor-2F");
    const floor3F = document.querySelector("#floor-3F");
    const scrollPositionY = window.scrollY;

    // 在這裡設定你想要的滾動高度
    const startScrollingHeight = 150; //地圖開始位置
    const stopScrollingHeight = 1600; //地圖停止位置

    const start1FScrollingHeight = 150; //一樓起始高度
    const stop1FScrollingHeight = 400; //一樓停止高度
    const start2FScrollingHeight = 600; //二樓起始高度
    const stop2FScrollingHeight = 1000; //二樓停止高度
    const start3FScrollingHeight = 1200; //三樓起始高度
    const stop3FScrollingHeight = 1600; //三樓停止高度

    if (
      scrollPositionY >= startScrollingHeight &&
      scrollPositionY <= stopScrollingHeight
    ) {
      mapSvg.style.transform = `translateY(${
        scrollPositionY - startScrollingHeight
      }px)`;
    }

    if (window.innerWidth > 768) {
      // 1樓地圖
      if (scrollPositionY < 600) {
        document.querySelector(".map-1F").style.opacity = "1";
        document.querySelector(".map-1F").style.display = "block";
        setSelectedButton(1);
        setActiveRegion(1);
        setContent(
          <span>
            漫步花園作為館內第一個展區，引您進入美妙的海中世界，五彩斑斕的海生植物在水中舞動，猶如在風中搖曳的花兒，魚群如花海中的精靈般，邀請您共同在海中花園優游。
          </span>
        );
        setAreaImg1F("img/area/1-1Garden.jpg");
      } else {
        document.querySelector(".map-1F").style.opacity = "0";
        document.querySelector(".map-1F").style.display = "none";
      }

      // 2樓地圖
      if (scrollPositionY >= 600 && scrollPositionY < 1200) {
        document.querySelector(".map-2F").style.opacity = "1";
        document.querySelector(".map-2F").style.display = "block";
        setSelectedButton(5);
        setActiveRegion(5);
        setContent(
          <span>
            各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。{" "}
          </span>
        );
        setAreaImg2F("img/area/2-1jelly.jpg");
      } else {
        document.querySelector(".map-2F").style.opacity = "0";
        document.querySelector(".map-2F").style.display = "none";
      }

      // 3樓地圖
      if (scrollPositionY >= 1200) {
        document.querySelector(".map-3F").style.opacity = "1";
        document.querySelector(".map-3F").style.display = "block";
        setSelectedButton(9);
        setActiveRegion(9);
        setContent(
          <span>
            這是一個隱藏在海洋深處的秘密王國，絢麗的珊瑚群落提供了各式海洋生物安全的棲息地，他們是地球生態系統的重要一環，是地球上的珍貴寶藏。
          </span>
        );
        setAreaImg3F("img/area/3-1coral.jpg");
      } else {
        document.querySelector(".map-3F").style.opacity = "0";
        document.querySelector(".map-3F").style.display = "none";
      }
    }

    if (
      scrollPositionY >= start1FScrollingHeight &&
      scrollPositionY <= stop1FScrollingHeight
    ) {
      floor1F.style.transform = `translateY(${
        scrollPositionY - start1FScrollingHeight
      }px)`;
    }

    if (
      scrollPositionY >= start2FScrollingHeight &&
      scrollPositionY <= stop2FScrollingHeight
    ) {
      floor2F.style.transform = `translateY(${
        scrollPositionY - start2FScrollingHeight - 150
      }px)`;
    }

    if (
      scrollPositionY >= start3FScrollingHeight &&
      scrollPositionY <= stop3FScrollingHeight
    ) {
      floor3F.style.transform = `translateY(${
        scrollPositionY - start3FScrollingHeight - 150
      }px)`;
    }
  });

  //右側1樓滾動

  // 地圖
  const [isVisible1F, setIsVisible1F] = useState(true);
  const [isVisible2F, setIsVisible2F] = useState(false);
  const [isVisible3F, setIsVisible3F] = useState(false);

  const floor1FStyle = {
    transition: "opacity 0.5s",
    opacity: isVisible1F ? 1 : 0,
    pointerEvents: isVisible1F ? "all" : "none",
  };
  const floor2FStyle = {
    transition: "opacity 0.5s",
    opacity: isVisible2F ? 1 : 0,
    pointerEvents: isVisible2F ? "all" : "none",
  };
  const floor3FStyle = {
    transition: "opacity 0.5s",
    opacity: isVisible3F ? 1 : 0,
    pointerEvents: isVisible3F ? "all" : "none",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 350 && isVisible1F) {
        setIsVisible1F(false);
      }
      if (scrollY < 350 && !isVisible1F) {
        setIsVisible1F(true);
      }

      //二樓
      if (scrollY >= 600 && scrollY <= 950) {
        setIsVisible2F(true);
      } else {
        setIsVisible2F(false);
      }

      //三樓
      if (scrollY >= 1200) {
        setIsVisible3F(true);
      } else {
        setIsVisible3F(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible1F, isVisible2F, isVisible3F]);

  return (
    <div>
      <div className="blackBG">
        <div className="myBG"></div>

        <div className="container mapContainer">
          <h1 className="map_h1">館內導覽</h1>

          {/* h1以下的左右邊 */}

          <div className="map_all row">
            <div className="floor-select">
              <label htmlFor="floor">請選擇樓層：</label>
              <select
                name="floor"
                id="floor"
                className="form-select"
                onChange={floorHandler}
              >
                <option defaultValue="1F">1F</option>
                <option defaultValue="2F">2F</option>
                <option defaultValue="3F">3F</option>
              </select>
              <br />
              <label htmlFor="area" className="areaLabel">
                請選擇區域：
              </label>
              <select
                name="area"
                id="area"
                className="form-select"
                onChange={areaHandler}
              >
                <option defaultValue="option1">{area1}</option>
                <option defaultValue="option2">{area2}</option>
                <option defaultValue="option3">{area3}</option>
                <option defaultValue="option4">{area4}</option>
              </select>

              {/* 手機版地圖 */}
              <div className="map-phone">
                {/* 地圖區 */}

                <div className="map-1F-phone">
                  <svg
                    className="phoneSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="822"
                    height="455"
                    viewBox="0 0 822 555"
                    fill="#BBB"
                  >
                    {/* 裡面整個區塊 */}
                    <path
                      className="area1FStroke"
                      d="M821 425.182L752.755 425.182L738.257 377.102V305.278L796.435 242.56L752.755 67.8704L659.99 29.6587V1H63.2901V111.965H1V317.591L36.1833 404.168L104.075 479.862L217.532 551H379.706V506.583H614.674V551H821V425.182Z"
                      fill="rgb(24, 36, 52)"
                      stroke="black"
                      transform="translate(-0.5,-8)"
                    />
                    {/* 漫步花園 */}

                    <path
                      id="area1FGarden"
                      className={area01}
                      d="M1 390.999C40.9546 370.41 175.86 281.409 179 196.999C177.84 157.829 163.43 130.528 130 112L281.5 1L374.5 39.5L418 214L360 276.5V349L366 369L236 478H1.50031L1 390.999Z"
                      transform="translate(377, 21)"
                      onClick={areaOne}
                    />
                    <text
                      fontSize="18"
                      className="areaStroke"
                      transform="matrix(2 0 0 2 570 300)"
                      fill={activeRegion === 1 ? "rgb(24, 36, 52)" : "white"}
                    >
                      漫步花園
                    </text>
                    {/* 淺海迴廊 */}
                    <path
                      id="area1FGallery"
                      className={area02}
                      d="M63.2901 0.5H62.7901V1V111.465H1H0.5V111.965V317.591V317.689L0.536788 317.779L27.5241 384.188L28.4505 383.812L28.4334 383.77C46.8262 364.503 72.761 352.5 101.5 352.5C157.281 352.5 202.5 397.719 202.5 453.5C202.5 480.763 191.699 505.503 174.14 523.674L174.499 524.02L174.234 524.442L217.267 551.424L217.388 551.5H217.532H379.706H380.206V551V419.6L380.229 419.556L380.206 419.544V419H379.206V419.024C358.824 408.359 315.954 381.313 277.53 346.562C257.992 328.891 239.617 309.24 225.934 288.75C212.251 268.259 203.283 246.963 202.5 225.991C202.504 171.371 238.646 138.717 278.8 131.183C318.971 123.646 363.09 141.255 379.094 187.165L380.039 186.835L379.965 186.626L380.084 186.668C400.15 130.399 462.931 116.992 508.161 140.622L508.357 140.89L661.293 29.3331L660.704 28.5252L660.49 28.6815V1V0.5H659.99H63.2901ZM659.49 29.4109V1.5H63.7901V111.965V112.465H63.2901H1.5V317.493L28.021 382.755C46.5755 363.488 72.6382 351.5 101.5 351.5C157.833 351.5 203.5 397.167 203.5 453.5C203.5 480.81 192.766 505.615 175.288 523.923L217.676 550.5H379.206V420.152C358.944 409.621 315.642 382.38 276.859 347.303C257.284 329.599 238.847 309.886 225.103 289.305C211.361 268.727 202.29 247.248 201.5 226.019L202 226H201.5C201.5 170.842 238.039 137.813 278.615 130.2C318.738 122.672 362.875 139.991 379.503 185.337C400.168 129.294 463.049 116.077 508.401 139.619L659.49 29.4109Z"
                      transform="translate(-1, -8)"
                      onClick={areaSecond}
                    />
                    <text
                      fontSize="18"
                      className="areaStroke"
                      transform="matrix(2 0 0 2 30 216)"
                      fill={activeRegion === 2 ? "rgb(24, 36, 52)" : "white"}
                    >
                      淺海迴廊
                    </text>
                    {/* 奇觀劇場 - 色塊 */}
                    <circle
                      id="area1FTheater"
                      className={area03}
                      cx="101.5"
                      cy="445.5"
                      r="101"
                      onClick={areaThird}
                    />
                    <text
                      fontSize="18"
                      transform="matrix(2 0 0 2 30 456)"
                      fill={activeRegion === 3 ? "rgb(24, 36, 52)" : "white"}
                    >
                      奇觀劇場
                    </text>

                    {/* 海洋漂流 - 色塊 */}
                    <path
                      id="area1FOcean"
                      className={area04}
                      d="M278.3486 123.06547C237.9719 130.3281 201.50416 162.6945 201.5 216.9908C202.2826 237.963 211.2514 259.259 224.9344 279.75C238.6172 300.24 256.9917 319.891 276.5299 337.562C315.46 372.771 358.955 400.071 379 410.437C399.045 400.071 442.54 372.771 481.47 337.562C501.008 319.891 519.383 300.24 533.066 279.75C546.749 259.259 555.717 237.963 556.5 216.9906C556.496 162.6944 520.028 130.3281 479.651 123.06547C439.258 115.83403 395.032 133.69957 379.474 179.82L379 179.6602L378.526 179.82C362.968 133.69957 318.742 115.83403 278.3486 123.06547ZM379 178.1283C362.844 132.4314 318.549 114.56839 278.1715 121.08127C237.3771 128.41905 200.5 161.1548 200.5 216.0001H201L200.500346 216.0187C201.29007 237.248 210.3613 258.727 224.1028 279.305C237.8465 299.886 256.2842 319.599 275.8592 337.304C315.007 372.71 358.758 400.132 378.771 410.445L379 410L379.229 410.445C399.242 400.132 442.993 372.71 482.141 337.304C501.716 319.599 520.154 299.886 533.897 279.305C547.639 258.727 556.71 237.248 557.5 216.0187L557 216.0001H557.5C557.5 161.1548 520.623 128.41905 479.828 121.08127C439.451 113.81839 395.156 131.4314 379 178.1283Z"
                      transform="translate(-1,0)"
                      onClick={areaForth}
                    />
                    <text
                      fontSize="18"
                      transform="matrix(2 0 0 2 308.5 266)"
                      fill={activeRegion === 4 ? "#182434" : "white"}
                    >
                      海洋漂流
                    </text>
                    {/* ------------------線框區------------------ */}
                    {/* 愛心 - 線框 */}
                    <path
                      className="area1FStroke"
                      d="
                  M201 217C201 121.28561 313.808 93.308 362.687 150.5M557 217C557 121.40727 444.4786 93.3823 395.5 150.2823M201 217C204.14004 303.4095 339.045 394.411 379 411M557 217C551.86 303.4095 418.9546 394.411 379 411"
                      transform="translate(-1,-0.8)"
                      // stroke="black"
                      fill="none"
                    />
                    {/* 劇場區 - 線框 */}
                    <path
                      className="area1FStroke"
                      d="M151.707 364.0579C137.032 355.74538 120.07 351 102 351C46.2192 351 1 396.2192 1 452C1 507.781 46.2192 553 102 553C157.781 553 203 507.781 203 452C203 428.6894 195.103 407.2233 181.838 390.1309"
                      // stroke="black"
                      fill="none"
                      transform="translate(0,-7)"
                    />
                    <text transform="matrix(2 0 0 2 740 530)" fontSize="18">
                      入口
                    </text>
                    {/* 地圖上的區隔線 */}
                    <path
                      className="area1FStroke"
                      d="M509 132 L550 102 M600 65 L660 22"
                    />
                    <path className="area1FStroke" d="M612 500 L705 422" />
                    <path className="area1FStroke" d="M381 506 L381 445" />
                  </svg>

                  {/* icon */}
                  <div className="floor-icons-1F-phone">
                    <img
                      className="wc1 icons"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="wc2 icons"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="wc3 icons"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="breast icons"
                      src="img/icons/breast.svg"
                      alt="breast"
                      style={iconBreast}
                    />
                    <img
                      className="breast2 icons"
                      src="img/icons/breast.svg"
                      alt="breast"
                      style={iconBreast}
                    />
                    <img
                      className="AED icons"
                      src="img/icons/AED.svg"
                      style={iconAED}
                      alt="AED"
                    />
                    <img
                      className="ATM icons"
                      src="img/icons/ATM.svg"
                      style={iconATM}
                      alt="ATM"
                    />
                    <img
                      className="elevator icons"
                      src="img/icons/elevator.svg"
                      style={iconElevator}
                      alt="elevator"
                    />
                    <img
                      className="exit icons"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />
                    <img
                      className="exit2 icons"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />
                    <img
                      className="info icons"
                      src="img/icons/info.svg"
                      style={iconInfo}
                      alt="info"
                    />
                    <img
                      className="restaurant icons"
                      src="img/icons/restaurant.svg"
                      style={iconRestaurant}
                      alt="restaurant"
                    />
                    <img
                      className="shop icons"
                      src="img/icons/shop.svg"
                      style={iconShop}
                      alt="shop"
                    />
                    <img
                      className="escalator icons"
                      src="img/icons/escalator.svg"
                      style={iconEscalator}
                      alt="escalator"
                    />
                  </div>
                </div>

                <div className="map-2F-phone">
                  <svg
                    className="phoneSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="759"
                    height="550"
                    viewBox="0 0 759 550"
                    fill="none"
                  >
                    {/* 水母幻境區塊 */}
                    <path
                      d="M358 30V302.5H208C190.5 357 148.803 375.558 113.5 390.5C86.9921 401.719 62 405.368 27.5 409L0.5 411.003V199V1H258.5V30H358Z"
                      transform="translate(400,0)"
                      id="area2FJellyfish"
                      className={area05}
                      onClick={areaFifth}
                    />
                    <text
                      transform="matrix(2 0 0 2 500 130)"
                      fill={activeRegion === 5 ? "#182434" : "white"}
                    >
                      水母幻境
                    </text>

                    {/* 星空隧道區塊 */}
                    <path
                      d="M217 66.5H1C48.5 144.5 93.5 196.7 209.5 225.5C354.5 261.5 476.5 246.5 568.5 219.5C608.828 207.665 663.065 182.711 702.5 133C730.265 98 756.87 27.0963 758 0.5H608C590.5 55 548.802 73.5583 513.5 88.5C486.992 99.7194 462 103.368 427.5 107C393 110.632 367.5 109.5 343 107C318.5 104.5 299.206 101.155 298 99.5C298 99.5 282.5 96 262.5 88.5C242.5 81 217 66.5 217 66.5Z"
                      transform="translate(0,301)"
                      id="area2FStarry"
                      className={area06}
                      onClick={areaSixth}
                    />
                    <text
                      transform="matrix(2 0 0 2 330 490)"
                      fill={activeRegion === 6 ? "#182434" : "white"}
                    >
                      星空隧道
                    </text>

                    {/* 雨林秘境區塊 */}
                    <path
                      d="M400.5 213.003V1H1V170.5H217C217 170.5 242.5 185 262.5 192.5C282.5 200 298 203.5 298 203.5C299.206 205.155 318.5 208.5 343 211C366.03 213.384 378.565 213.671 400.5 213.003Z"
                      transform="translate(0,198)"
                      id="area2FRainforest"
                      className={area07}
                      onClick={areaSeventh}
                    />
                    <text
                      transform="matrix(2 0 0 2 150 260)"
                      fill={activeRegion === 7 ? "#182434" : "white"}
                    >
                      雨林秘境
                    </text>

                    {/* 潮間趣味區塊 */}
                    <path
                      d="M400.5 199V1H63V61.5L1 136.5V199H400.5Z"
                      id="area2FIntertidal"
                      className={area08}
                      onClick={areaEighth}
                    />
                    <text
                      transform="matrix(2 0 0 2 150 115)"
                      fill={activeRegion === 8 ? "#182434" : "white"}
                    >
                      潮間趣味
                    </text>

                    {/* 整個區域外框 */}
                    <path
                      d="M400.5 1H658.5V30H758V302.5C756.87 329.096 730.265 400 702.5 435C663.065 484.711 608.828 509.665 568.5 521.5C476.5 548.5 354.5 563.5 209.5 527.5C93.5 498.7 48.5 446.5 1 368.5M400.5 1H63V61.5L1 136.5V199V283.75M400.5 1V143M400.5 411.003V199H51.5M1 368.5H39M1 368.5V283.75M608 302.5C590.5 357 548.803 375.558 513.5 390.5C486.992 401.719 462 405.368 427.5 409C393 412.632 367.5 411.5 343 409C318.5 406.5 299.205 403.155 298 401.5C298 401.5 282.5 398 262.5 390.5C242.5 383 217 368.5 217 368.5H176.5M608 302.5V163M608 302.5H683H720.5M1 283.75H298"
                      stroke="#FFF"
                    />
                  </svg>

                  <div className="floor-icons-2F-phone">
                    <img
                      className="wc1 icons"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="wc2 icons"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />

                    <img
                      className="breast icons"
                      src="img/icons/breast.svg"
                      alt="breast"
                      style={iconBreast}
                    />

                    <img
                      className="AED icons "
                      src="img/icons/AED.svg"
                      style={iconAED}
                      alt="AED"
                    />

                    <img
                      className="elevator icons"
                      src="img/icons/elevator.svg"
                      style={iconElevator}
                      alt="elevator"
                    />
                    <img
                      className="exit icons"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />
                    <img
                      className="exit2 icons"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />
                    <img
                      className="escalator icons"
                      src="img/icons/escalator.svg"
                      style={iconEscalator}
                      alt="escalator"
                    />
                  </div>
                </div>

                {/* --------  3樓地圖  -------- */}
                <div className="map-3F-phone">
                  <div className="floor-icons-3F-phone">
                    <img
                      className="wc1 icons"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="wc2 icons"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="wc3 icons"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="breast icons"
                      src="img/icons/breast.svg"
                      alt="breast"
                      style={iconBreast}
                    />

                    <img
                      className="AED icons"
                      src="img/icons/AED.svg"
                      style={iconAED}
                      alt="AED"
                    />
                    <img
                      className="ATM icons"
                      src="img/icons/ATM.svg"
                      style={iconATM}
                      alt="ATM"
                    />
                    <img
                      className="elevator icons"
                      src="img/icons/elevator.svg"
                      style={iconElevator}
                      alt="elevator"
                    />
                    <img
                      className="exit icons"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />
                    <img
                      className="exit2 icons"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />

                    <img
                      className="restaurant icons"
                      src="img/icons/restaurant.svg"
                      style={iconRestaurant}
                      alt="restaurant"
                    />

                    <img
                      className="escalator icons"
                      src="img/icons/escalator.svg"
                      style={iconEscalator}
                      alt="escalator"
                    />
                  </div>

                  <svg
                    className="phoneSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="757"
                    height="549"
                    viewBox="0 0 757 549"
                    fill="none"
                  >
                    <path
                      d="M132 227.5V286.5H0.5V238.5V166.25V94V0H145.5V28.5H321V227.5H247.5H132Z"
                      transform="translate(433,0)"
                      className={area09}
                      onClick={areaNinth}
                    />
                    <text
                      transform="matrix(2 0 0 2 530 145)"
                      fill={activeRegion === 9 ? "#182434" : "white"}
                    >
                      珊瑚寶藏
                    </text>
                    <path
                      d="M460 0.5V59.5H328.5V155.5V191H35.5L0 263.5V320.5H564.5L623.5 191H649V0.5H575.5H460Z"
                      transform="translate(106,225)"
                      className={area10}
                      onClick={areaTenth}
                    />
                    <text
                      transform="matrix(2 0 0 2 530 400)"
                      fill={activeRegion === 10 ? "#182434" : "white"}
                    >
                      極寒之地
                    </text>

                    <path
                      d="M434.5 48.5V0.5H0V252.5H106L141.5 180H434.5V144.5V48.5Z"
                      transform="translate(0,237)"
                      className={area11}
                      onClick={areaEleventh}
                    />
                    <text
                      transform="matrix(2 0 0 2 160 350)"
                      fill={activeRegion === 11 ? "#182434" : "white"}
                    >
                      企鵝巡禮
                    </text>
                    <path
                      d="M434.5 238.5V0H60.5V60.5H0V238.5H434.5Z"
                      className={area12}
                      onClick={areaTwelfth}
                    />
                    <text
                      transform="matrix(2 0 0 2 160 150)"
                      fill={activeRegion === 12 ? "#182434" : "white"}
                    >
                      深海搖籃
                    </text>

                    <path
                      d="M435.5 1H61.5V61.5H1V239.5M435.5 1H580.5V29.5H756V228.5V419H730.5L671.5 548.5H107V491.5H1V239.5M435.5 1V95M142.5 419H435.5V383.5V287.5M1 239.5H362.5M435.5 287.5V239.5V167.25M435.5 287.5H567V228.5H682.5"
                      stroke="#FFF"
                    />
                  </svg>
                </div>
              </div>

              {/* icon按鈕 */}
              <div className="iconbutton-phone">
                <div className="icon-first">
                  {NewIconButtonDataFirst.map((IconsButtonData) => {
                    return (
                      <NewIconButton
                        key={IconsButtonData.id}
                        src={IconsButtonData.src}
                        alt={IconsButtonData.alt}
                        onClick={IconsButtonData.onClick}
                        p={IconsButtonData.p}
                        className={IconsButtonData.className}
                      />
                    );
                  })}

                  {NewIconButtonDataSecond.map((IconsButtonData) => {
                    return (
                      <NewIconButton
                        key={IconsButtonData.id}
                        src={IconsButtonData.src}
                        alt={IconsButtonData.alt}
                        onClick={IconsButtonData.onClick}
                        p={IconsButtonData.p}
                        className={IconsButtonData.className}
                      />
                    );
                  })}
                </div>
              </div>

              <img src={areaImgPhone} alt="" className="areaImg" />
              <div className="introduction">
                <p>{contentPhone}</p>
              </div>
            </div>

            {/* 泡泡 */}

            {/* 電腦-左側 */}
            <div className="map col-md-6">
              {/* 左側-地圖 */}
              <div id="left-mapSvg">
                {/* 地圖-1F */}

                <div className="map-1F">
                  <svg
                    className="computerSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="822"
                    height="455"
                    viewBox="0 0 822 555"
                    fill="#BBB"
                  >
                    {/* 裡面整個區塊 */}
                    <path
                      className="area1FStroke"
                      d="M821 425.182L752.755 425.182L738.257 377.102V305.278L796.435 242.56L752.755 67.8704L659.99 29.6587V1H63.2901V111.965H1V317.591L36.1833 404.168L104.075 479.862L217.532 551H379.706V506.583H614.674V551H821V425.182Z"
                      fill="rgb(24, 36, 52)"
                      stroke="black"
                      transform="translate(-0.5,-8)"
                    />
                    {/* 漫步花園 */}
                    {/* 測試從三元改成if */}
                    <path
                      id="area1FGarden"
                      className={area01}
                      d="M1 390.999C40.9546 370.41 175.86 281.409 179 196.999C177.84 157.829 163.43 130.528 130 112L281.5 1L374.5 39.5L418 214L360 276.5V349L366 369L236 478H1.50031L1 390.999Z"
                      transform="translate(377, 21)"
                      onClick={areaOne}
                    />
                    <text
                      transform="matrix(2 0 0 2 570 300)"
                      fill={selectedButton === 1 ? "rgb(24, 36, 52)" : "white"}
                    >
                      漫步花園
                    </text>
                    {/* 淺海迴廊 */}
                    <path
                      id="area1FGallery"
                      className={area02}
                      d="M63.2901 0.5H62.7901V1V111.465H1H0.5V111.965V317.591V317.689L0.536788 317.779L27.5241 384.188L28.4505 383.812L28.4334 383.77C46.8262 364.503 72.761 352.5 101.5 352.5C157.281 352.5 202.5 397.719 202.5 453.5C202.5 480.763 191.699 505.503 174.14 523.674L174.499 524.02L174.234 524.442L217.267 551.424L217.388 551.5H217.532H379.706H380.206V551V419.6L380.229 419.556L380.206 419.544V419H379.206V419.024C358.824 408.359 315.954 381.313 277.53 346.562C257.992 328.891 239.617 309.24 225.934 288.75C212.251 268.259 203.283 246.963 202.5 225.991C202.504 171.371 238.646 138.717 278.8 131.183C318.971 123.646 363.09 141.255 379.094 187.165L380.039 186.835L379.965 186.626L380.084 186.668C400.15 130.399 462.931 116.992 508.161 140.622L508.357 140.89L661.293 29.3331L660.704 28.5252L660.49 28.6815V1V0.5H659.99H63.2901ZM659.49 29.4109V1.5H63.7901V111.965V112.465H63.2901H1.5V317.493L28.021 382.755C46.5755 363.488 72.6382 351.5 101.5 351.5C157.833 351.5 203.5 397.167 203.5 453.5C203.5 480.81 192.766 505.615 175.288 523.923L217.676 550.5H379.206V420.152C358.944 409.621 315.642 382.38 276.859 347.303C257.284 329.599 238.847 309.886 225.103 289.305C211.361 268.727 202.29 247.248 201.5 226.019L202 226H201.5C201.5 170.842 238.039 137.813 278.615 130.2C318.738 122.672 362.875 139.991 379.503 185.337C400.168 129.294 463.049 116.077 508.401 139.619L659.49 29.4109Z"
                      transform="translate(-1, -8)"
                      onClick={areaSecond}
                    />
                    <text
                      transform="matrix(2 0 0 2 40 216)"
                      fill={selectedButton === 2 ? "rgb(24, 36, 52)" : "white"}
                    >
                      淺海迴廊
                    </text>
                    {/* 奇觀劇場 - 色塊 */}
                    <circle
                      id="area1FTheater"
                      className={area03}
                      cx="101.5"
                      cy="445.5"
                      r="101"
                      onClick={areaThird}
                    />
                    <text
                      transform="matrix(2 0 0 2 40 456)"
                      fill={selectedButton === 3 ? "rgb(24, 36, 52)" : "white"}
                    >
                      奇觀劇場
                    </text>

                    {/* 海洋漂流 - 色塊 */}
                    <path
                      id="area1FOcean"
                      className={area04}
                      d="M278.3486 123.06547C237.9719 130.3281 201.50416 162.6945 201.5 216.9908C202.2826 237.963 211.2514 259.259 224.9344 279.75C238.6172 300.24 256.9917 319.891 276.5299 337.562C315.46 372.771 358.955 400.071 379 410.437C399.045 400.071 442.54 372.771 481.47 337.562C501.008 319.891 519.383 300.24 533.066 279.75C546.749 259.259 555.717 237.963 556.5 216.9906C556.496 162.6944 520.028 130.3281 479.651 123.06547C439.258 115.83403 395.032 133.69957 379.474 179.82L379 179.6602L378.526 179.82C362.968 133.69957 318.742 115.83403 278.3486 123.06547ZM379 178.1283C362.844 132.4314 318.549 114.56839 278.1715 121.08127C237.3771 128.41905 200.5 161.1548 200.5 216.0001H201L200.500346 216.0187C201.29007 237.248 210.3613 258.727 224.1028 279.305C237.8465 299.886 256.2842 319.599 275.8592 337.304C315.007 372.71 358.758 400.132 378.771 410.445L379 410L379.229 410.445C399.242 400.132 442.993 372.71 482.141 337.304C501.716 319.599 520.154 299.886 533.897 279.305C547.639 258.727 556.71 237.248 557.5 216.0187L557 216.0001H557.5C557.5 161.1548 520.623 128.41905 479.828 121.08127C439.451 113.81839 395.156 131.4314 379 178.1283Z"
                      transform="translate(-1,0)"
                      onClick={areaForth}
                    />
                    <text
                      transform="matrix(2 0 0 2 320.5 266)"
                      fill={selectedButton === 4 ? "#182434" : "white"}
                    >
                      海洋漂流
                    </text>
                    {/* ------------------線框區------------------ */}
                    {/* 愛心 - 線框 */}
                    <path
                      className="area1FStroke"
                      d="
                  M201 217C201 121.28561 313.808 93.308 362.687 150.5M557 217C557 121.40727 444.4786 93.3823 395.5 150.2823M201 217C204.14004 303.4095 339.045 394.411 379 411M557 217C551.86 303.4095 418.9546 394.411 379 411"
                      transform="translate(-1,-0.8)"
                      fill="none"
                    />
                    {/* 劇場區 - 線框 */}
                    <path
                      className="area1FStroke"
                      d="M151.707 364.0579C137.032 355.74538 120.07 351 102 351C46.2192 351 1 396.2192 1 452C1 507.781 46.2192 553 102 553C157.781 553 203 507.781 203 452C203 428.6894 195.103 407.2233 181.838 390.1309"
                      stroke="black"
                      fill="none"
                      transform="translate(0,-7)"
                    />
                    <text transform="matrix(2 0 0 2 750 530)">入口</text>
                    {/* 地圖上的區隔線 */}
                    <path
                      className="area1FStroke"
                      d="M509 132 L550 102 M600 65 L660 22"
                    />
                    <path className="area1FStroke" d="M612 500 L705 422" />
                    <path className="area1FStroke" d="M381 506 L381 445" />
                  </svg>

                  {/* 電腦icon */}
                  <div className="floor-icons-1F ">
                    <img
                      className="wc1 icons icon-computer"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />

                    <img
                      className="wc2 icons icon-computer"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="wc3 icons icon-computer"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="breast icons icon-computer"
                      src="img/icons/breast.svg"
                      alt="breast"
                      style={iconBreast}
                    />
                    <img
                      className="breast2 icons icon-computer"
                      src="img/icons/breast.svg"
                      alt="breast"
                      style={iconBreast}
                    />
                    <img
                      className="AED icons icon-computer"
                      src="img/icons/AED.svg"
                      style={iconAED}
                      alt="AED"
                    />
                    <img
                      className="ATM icons icon-computer"
                      src="img/icons/ATM.svg"
                      style={iconATM}
                      alt="ATM"
                    />
                    <img
                      className="elevator icons icon-computer"
                      src="img/icons/elevator.svg"
                      style={iconElevator}
                      alt="elevator"
                    />
                    <img
                      className="exit icons icon-computer"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />
                    <img
                      className="exit2 icons icon-computer"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />
                    <img
                      className="info icons icon-computer"
                      src="img/icons/info.svg"
                      style={iconInfo}
                      alt="info"
                    />
                    <img
                      className="restaurant icons icon-computer"
                      src="img/icons/restaurant.svg"
                      style={iconRestaurant}
                      alt="restaurant"
                    />
                    <img
                      className="shop icons icon-computer"
                      src="img/icons/shop.svg"
                      style={iconShop}
                      alt="shop"
                    />
                    <img
                      className="escalator icons icon-computer"
                      src="img/icons/escalator.svg"
                      style={iconEscalator}
                      alt="escalator"
                    />
                  </div>
                </div>

                <div className="map-2F">
                  <svg
                    className="computerSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="759"
                    height="550"
                    viewBox="0 0 759 550"
                    fill="none"
                  >
                    {/* 水母幻境區塊 */}
                    <path
                      d="M358 30V302.5H208C190.5 357 148.803 375.558 113.5 390.5C86.9921 401.719 62 405.368 27.5 409L0.5 411.003V199V1H258.5V30H358Z"
                      transform="translate(400,0)"
                      id="area2FJellyfish"
                      className={area05}
                      onClick={areaFifth}
                    />
                    <text
                      transform="matrix(2 0 0 2 500 130)"
                      fill={selectedButton === 5 ? "#182434" : "white"}
                    >
                      水母幻境
                    </text>

                    <path
                      d="M217 66.5H1C48.5 144.5 93.5 196.7 209.5 225.5C354.5 261.5 476.5 246.5 568.5 219.5C608.828 207.665 663.065 182.711 702.5 133C730.265 98 756.87 27.0963 758 0.5H608C590.5 55 548.802 73.5583 513.5 88.5C486.992 99.7194 462 103.368 427.5 107C393 110.632 367.5 109.5 343 107C318.5 104.5 299.206 101.155 298 99.5C298 99.5 282.5 96 262.5 88.5C242.5 81 217 66.5 217 66.5Z"
                      transform="translate(0,301)"
                      id="area2FStarry"
                      className={area06}
                      onClick={areaSixth}
                    />
                    <text
                      transform="matrix(2 0 0 2 330 490)"
                      fill={selectedButton === 6 ? "#182434" : "white"}
                    >
                      星空隧道
                    </text>

                    <path
                      d="M400.5 213.003V1H1V170.5H217C217 170.5 242.5 185 262.5 192.5C282.5 200 298 203.5 298 203.5C299.206 205.155 318.5 208.5 343 211C366.03 213.384 378.565 213.671 400.5 213.003Z"
                      transform="translate(0,198)"
                      id="area2FRainforest"
                      className={area07}
                      onClick={areaSeventh}
                    />
                    <text
                      transform="matrix(2 0 0 2 150 260)"
                      fill={selectedButton === 7 ? "#182434" : "white"}
                    >
                      雨林秘境
                    </text>

                    <path
                      d="M400.5 199V1H63V61.5L1 136.5V199H400.5Z"
                      id="area2FIntertidal"
                      className={area08}
                      onClick={areaEighth}
                    />
                    <text
                      transform="matrix(2 0 0 2 150 115)"
                      fill={selectedButton === 8 ? "#182434" : "white"}
                    >
                      潮間趣味
                    </text>

                    <path
                      d="M400.5 1H658.5V30H758V302.5C756.87 329.096 730.265 400 702.5 435C663.065 484.711 608.828 509.665 568.5 521.5C476.5 548.5 354.5 563.5 209.5 527.5C93.5 498.7 48.5 446.5 1 368.5M400.5 1H63V61.5L1 136.5V199V283.75M400.5 1V143M400.5 411.003V199H51.5M1 368.5H39M1 368.5V283.75M608 302.5C590.5 357 548.803 375.558 513.5 390.5C486.992 401.719 462 405.368 427.5 409C393 412.632 367.5 411.5 343 409C318.5 406.5 299.205 403.155 298 401.5C298 401.5 282.5 398 262.5 390.5C242.5 383 217 368.5 217 368.5H176.5M608 302.5V163M608 302.5H683H720.5M1 283.75H298"
                      stroke="#FFF"
                      // strokeWidth={5}
                    />
                  </svg>
                  {/* 電腦icon */}
                  <div className="floor-icons-2F">
                    <img
                      className="wc1 icons icon-computer"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="wc2 icons icon-computer"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />

                    <img
                      className="breast icons icon-computer"
                      src="img/icons/breast.svg"
                      alt="breast"
                      style={iconBreast}
                    />

                    <img
                      className="AED icons icon-computer"
                      src="img/icons/AED.svg"
                      style={iconAED}
                      alt="AED"
                    />

                    <img
                      className="elevator icons icon-computer"
                      src="img/icons/elevator.svg"
                      style={iconElevator}
                      alt="elevator"
                    />
                    <img
                      className="exit icons icon-computer"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />
                    <img
                      className="exit2 icons icon-computer"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />

                    <img
                      className="escalator icons icon-computer"
                      src="img/icons/escalator.svg"
                      style={iconEscalator}
                      alt="escalator"
                    />
                  </div>
                </div>

                {/* --------  3樓地圖  -------- */}
                <div className="map-3F">
                  {/* 電腦icon */}
                  <div className="floor-icons-3F">
                    <img
                      className="wc1 icons icon-computer"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="wc2 icons icon-computer"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="wc3 icons icon-computer"
                      src="img/icons/wc.svg"
                      alt="toilet"
                      style={iconWc}
                    />
                    <img
                      className="breast icons icon-computer"
                      src="img/icons/breast.svg"
                      alt="breast"
                      style={iconBreast}
                    />

                    <img
                      className="AED icons icon-computer"
                      src="img/icons/AED.svg"
                      style={iconAED}
                      alt="AED"
                    />
                    <img
                      className="ATM icons icon-computer"
                      src="img/icons/ATM.svg"
                      style={iconATM}
                      alt="ATM"
                    />
                    <img
                      className="elevator icons icon-computer"
                      src="img/icons/elevator.svg"
                      style={iconElevator}
                      alt="elevator"
                    />
                    <img
                      className="exit icons icon-computer"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />
                    <img
                      className="exit2 icons icon-computer"
                      src="img/icons/exit.svg"
                      style={iconExit}
                      alt="exit"
                    />

                    <img
                      className="restaurant icons icon-computer"
                      src="img/icons/restaurant.svg"
                      style={iconRestaurant}
                      alt="restaurant"
                    />

                    <img
                      className="escalator icons icon-computer"
                      src="img/icons/escalator.svg"
                      style={iconEscalator}
                      alt="escalator"
                    />
                  </div>

                  <svg
                    className="computerSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="757"
                    height="549"
                    viewBox="0 0 757 549"
                    fill="none"
                  >
                    <path
                      d="M132 227.5V286.5H0.5V238.5V166.25V94V0H145.5V28.5H321V227.5H247.5H132Z"
                      transform="translate(433,0)"
                      className={area09}
                      onClick={areaNinth}
                    />
                    <text
                      transform="matrix(2 0 0 2 530 145)"
                      fill={selectedButton === 9 ? "#182434" : "white"}
                    >
                      珊瑚寶藏
                    </text>
                    <path
                      d="M460 0.5V59.5H328.5V155.5V191H35.5L0 263.5V320.5H564.5L623.5 191H649V0.5H575.5H460Z"
                      transform="translate(106,225)"
                      className={area10}
                      onClick={areaTenth}
                    />
                    <text
                      transform="matrix(2 0 0 2 530 400)"
                      fill={selectedButton === 10 ? "#182434" : "white"}
                    >
                      極寒之地
                    </text>

                    <path
                      d="M434.5 48.5V0.5H0V252.5H106L141.5 180H434.5V144.5V48.5Z"
                      transform="translate(0,237)"
                      className={area11}
                      onClick={areaEleventh}
                    />
                    <text
                      transform="matrix(2 0 0 2 160 350)"
                      fill={selectedButton === 11 ? "#182434" : "white"}
                    >
                      企鵝巡禮
                    </text>
                    <path
                      d="M434.5 238.5V0H60.5V60.5H0V238.5H434.5Z"
                      className={area12}
                      onClick={areaTwelfth}
                    />
                    <text
                      transform="matrix(2 0 0 2 160 150)"
                      fill={selectedButton === 12 ? "#182434" : "white"}
                    >
                      深海搖籃
                    </text>

                    <path
                      d="M435.5 1H61.5V61.5H1V239.5M435.5 1H580.5V29.5H756V228.5V419H730.5L671.5 548.5H107V491.5H1V239.5M435.5 1V95M142.5 419H435.5V383.5V287.5M1 239.5H362.5M435.5 287.5V239.5V167.25M435.5 287.5H567V228.5H682.5"
                      stroke="#FFF"
                    />
                  </svg>
                </div>

                {/* icon按鈕 */}
                <div className="icon ">
                  <div className="icon-first">
                    {NewIconButtonDataFirst.map((IconsButtonData) => {
                      return (
                        <NewIconButton
                          key={IconsButtonData.id}
                          src={IconsButtonData.src}
                          alt={IconsButtonData.alt}
                          onClick={IconsButtonData.onClick}
                          p={IconsButtonData.p}
                          className={IconsButtonData.className}
                        />
                      );
                    })}
                  </div>

                  <div className="icon-second mt-3">
                    {NewIconButtonDataSecond.map((IconsButtonData) => {
                      return (
                        <NewIconButton
                          key={IconsButtonData.id}
                          src={IconsButtonData.src}
                          alt={IconsButtonData.alt}
                          onClick={IconsButtonData.onClick}
                          p={IconsButtonData.p}
                          className={IconsButtonData.className}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* 電腦版-整個右側選單 */}
            <div className="right-floorArea col-md-6">
              {/* === 一樓 === */}
              <section
                className="floorAll px-3 "
                id="floor-1F"
                style={floor1FStyle}
              >
                <h3 className="nowFloor">1F</h3>

                <div className="area-buttons mt-3">
                  {AreaButtonData1F.map((AreaButtonData) => {
                    return (
                      <AreaButton
                        key={AreaButtonData.id}
                        area={AreaButtonData.area}
                        onClick={AreaButtonData.onClick}
                        style={AreaButtonData.style}
                      />
                    );
                  })}
                </div>
                <div className="mt-3">
                  <img src={areaImg1F} alt="" className="areaImg" />
                </div>
                <div className="introduction">
                  <p>{content}</p>
                </div>
              </section>
              {/* === 二樓 === */}
              <section
                className="floorAll px-3 pb-5"
                id="floor-2F"
                style={floor2FStyle}
              >
                <h3 className="mt-5">2F</h3>

                <div className="area-buttons mt-3">
                  {AreaButtonData2F.map((AreaButtonData) => {
                    return (
                      <AreaButton
                        key={AreaButtonData.id}
                        area={AreaButtonData.area}
                        onClick={AreaButtonData.onClick}
                        style={AreaButtonData.style}
                      />
                    );
                  })}
                </div>
                <div className="mt-3">
                  <img src={areaImg2F} alt="" className="areaImg" />
                </div>
                <div className="introduction">
                  <p>{content2}</p>
                </div>
              </section>

              {/* === 三樓 === */}
              <section
                className="floor floor-2F  px-3 pb-5"
                id="floor-3F"
                style={floor3FStyle}
              >
                <h3 className="mt-5">3F</h3>

                <div className="area-buttons mt-3">
                  {AreaButtonData3F.map((AreaButtonData) => {
                    return (
                      <AreaButton
                        key={AreaButtonData.id}
                        area={AreaButtonData.area}
                        onClick={AreaButtonData.onClick}
                        style={AreaButtonData.style}
                      />
                    );
                  })}
                </div>
                <div className="mt-3">
                  <img src={areaImg3F} alt="" className="areaImg" />
                </div>
                <div className="introduction">
                  <p>{content3}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mix;
