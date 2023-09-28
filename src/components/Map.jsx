import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../style/map.css";
import { useState } from "react";

const MapT = () => {
  t;
  const [floor, setfloor] = useState("1F");

  const [area1, setArea1] = useState("漫步花園");
  const [area2, setArea2] = useState("淺海迴廊");
  const [area3, setArea3] = useState("奇觀劇場");
  const [area4, setArea4] = useState("海洋漂流");

  const [content, setContent] = useState(
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

  const floorOneHandler = () => {
    setfloor("1F");
    setArea1("漫步花園");
    setArea2("淺海迴廊");
    setArea3("奇觀劇場");
    setArea4("海洋漂流");
  };

  const floorSecondHandler = () => {
    setfloor("2F");
    setArea1("水母幻境");
    setArea2("星空隧道");
    setArea3("雨林秘境");
    setArea4("潮間趣味");
    setContent(
      <span>
        　　各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。"
      </span>
    );
  };

  const floorThirdHandler = () => {
    setfloor("3F");
    setArea1("珊瑚寶藏");
    setArea2("極寒之地");
    setArea3("企鵝巡禮");
    setArea4("深海搖籃");
    setContent(<span>　　這是珊瑚寶藏的內文~~</span>);
  };

  const areaOne = () => {
    area1 === "漫步花園"
      ? setContent(
          <span>
            　　漫步花園作為館內第一個展區，引您進入美妙的海中世界，五彩斑斕的海生植物在水中舞動，猶如在風中搖曳的花兒，魚群如花海中的精靈般，邀請您共同在海中花園優游。
          </span>
        )
      : area1 === "水母幻境"
      ? setContent(
          "各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。"
        )
      : setContent(<span>　　這是珊瑚寶藏的內文~~</span>);
  };
  const areaSecond = () => {
    area2 === "淺海迴廊"
      ? setContent(
          <span>
            　　身處在微光交織的淺海迴廊中，您將可以近距離欣賞各種廣為人知的明星海洋生物，出現在電影裡的各種熱帶魚、療癒人心的微笑魟魚，造型獨特的獅子魚等等，都在這裡等您感受他們的魅力。
          </span>
        )
      : area2 === "星空隧道"
      ? setContent(<span>　　星空隧道文案要寫什麼</span>)
      : setContent(<span>　　深海搖籃的文案????</span>);
  };
  const areaThird = () => {
    area3 === "奇觀劇場"
      ? setContent(
          <span>
            　　歡迎來到奇觀劇場，在這寬敞的環形劇場中，匯集了不同生物的表演，每一刻都是令人歎為觀止的美妙出演，坐在觀眾席的您將感受到海洋生物的活力與美好。※依照當天動物的狀況調整演出。
          </span>
        )
      : area3 === "雨林秘境"
      ? setContent(<span>　　你覺得雨林秘境的文案要寫什麼呢？</span>)
      : setContent(<span>　　極寒之地寫到頭昏了</span>);
  };
  const areaForth = () => {
    area4 === "海洋漂流"
      ? setContent(<span>　　海洋漂流的內文</span>)
      : area4 === "潮間趣味"
      ? setContent(
          <span>　　潮間趣味~希望我寫得出好文案~希望大專順順利利成功♥</span>
        )
      : setContent(<span>　　深海搖籃寫完草稿了</span>);
  };

  const btnWCHandler = () => {
    setInterval(() => {
      setIconWc({
        transform: "scale(1.3)",
        opacity: 0.85,
        zIndex: 10,
        boxShadow:
          "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
        transition: "1.4s",
      });

      // setIconWc({ opacity: 0 });
      // console.log(213);
    }, 1500);

    setInterval(() => {
      setIconWc({
        transform: "scale(1.3)",
        opacity: 1,
        zIndex: 10,
        boxShadow:
          "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646,0 0 1.8rem #fee313, inset 0 0 1rem #fee313",
        transition: "2.8s",
      });
      console.log("AAA");
    }, 3000);

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
    setIconATM();
    setIconElevator();
    setIconEscalator();
    setIconExit();
    setIconInfo();
    setIconRestaurant();
    setIconShop();
  };
  const btnRestaurantHandler = () => {
    setIconWc();
    setIconBreast();
    setIconAED();
    setIconATM();
    setIconElevator();
    setIconEscalator();
    setIconExit();
    setIconInfo();
    setIconRestaurant({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconShop();
  };
  const btnExitHandler = () => {
    setIconWc();
    setIconBreast();
    setIconAED();
    setIconATM();
    setIconElevator();
    setIconEscalator();
    setIconExit({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconInfo();
    setIconRestaurant();
    setIconShop();
  };
  const btnEscalatorHandler = () => {
    setIconWc();
    setIconBreast();
    setIconAED();
    setIconATM();
    setIconElevator();
    setIconEscalator({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconExit();
    setIconInfo();
    setIconRestaurant();
    setIconShop();
  };
  const btnInfoHandler = () => {
    setIconWc();
    setIconBreast();
    setIconAED();
    setIconATM();
    setIconElevator();
    setIconEscalator();
    setIconExit();
    setIconInfo({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconRestaurant();
    setIconShop();
  };
  const btnShopHandler = () => {
    setIconWc();
    setIconBreast();
    setIconAED();
    setIconATM();
    setIconElevator();
    setIconEscalator();
    setIconExit();
    setIconInfo();
    setIconRestaurant();
    setIconShop({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
  };
  const btnElevatorHandler = () => {
    setIconWc();
    setIconBreast();
    setIconAED();
    setIconATM();
    setIconElevator({
      transform: "scale(1.3)",
      opacity: 1,
      zIndex: 10,
      boxShadow:
        "0 0 0.1rem #fee313, 0 0 0.5rem #fee313, 0 0 1rem #fee313, 0 0 1rem #887646, inset 0 0 1rem #fee313",
    });
    setIconEscalator();
    setIconExit();
    setIconInfo();
    setIconRestaurant();
    setIconShop();
  };

  return (
    <div>
      <div className="container">
        <h1>地圖導覽</h1>
        <div className="map_all row">
          <div className="map col-lg-6">
            <h2>{floor}</h2>
            <div className="floor-icons">
              <img
                className="wc1 icons"
                src={require("./img/wcV2.svg").default}
                alt="toilet"
                style={iconWc}
              />
              <img
                className="wc2 icons"
                src={require("./img/wcV2.svg").default}
                alt="toilet"
                style={iconWc}
              />
              <img
                className="wc3 icons"
                src={require("./img/wcV2.svg").default}
                alt="toilet"
                style={iconWc}
              />
              <img
                className="breast icons"
                src={require("./img/breast.svg").default}
                alt="breast"
                style={iconBreast}
              />
              <img
                className="breast2 icons"
                src={require("./img/breast.svg").default}
                alt="breast"
                style={iconBreast}
              />
              <img
                className="AED icons"
                src={require("./img/AED.svg").default}
                style={iconAED}
                alt="AED"
              />
              <img
                className="ATM icons"
                src={require("./img/ATM.svg").default}
                style={iconATM}
                alt="ATM"
              />
              <img
                className="elevator icons"
                src={require("./img/elevator-6.svg").default}
                style={iconElevator}
                alt="elevator"
              />
              <img
                className="exit icons"
                src={require("./img/exit.svg").default}
                style={iconExit}
                alt="exit"
              />
              <img
                className="exit2 icons"
                src={require("./img/exit.svg").default}
                style={iconExit}
                alt="exit"
              />
              <img
                className="info icons"
                src={require("./img/info.svg").default}
                style={iconInfo}
                alt="info"
              />
              <img
                className="restaurant icons"
                src={require("./img/restaurant.svg").default}
                style={iconRestaurant}
                alt="restaurant"
              />
              <img
                className="shop icons"
                src={require("./img/shop.svg").default}
                style={iconShop}
                alt="shop"
              />
              <img
                className="escalator icons"
                src={require("./img/escalator.svg").default}
                style={iconEscalator}
                alt="escalator"
              />
            </div>

            <img
              className="floor-map"
              src={require("./img/floor01-2.svg").default}
              alt="1F-plan"
            />
          </div>
          <section className="floor col-lg-6 mt-5 pe-5">
            <div className="floor-button mb-3">
              <button
                className="btn btn-primary px-4 me-2"
                onClick={floorOneHandler}
              >
                1F
              </button>
              <button
                className="btn btn-primary px-4 me-2"
                onClick={floorSecondHandler}
              >
                2F
              </button>
              <button
                className="btn btn-primary px-4"
                onClick={floorThirdHandler}
              >
                3F
              </button>
            </div>
            <div className="area-button">
              <button className="btn btn-success me-3" onClick={areaOne}>
                {area1}
              </button>
              <button className="btn btn-success me-3" onClick={areaSecond}>
                {area2}
              </button>
              <button className="btn btn-success me-3" onClick={areaThird}>
                {area3}
              </button>
              <button className="btn btn-success" onClick={areaForth}>
                {area4}
              </button>
            </div>
            <div className="introduction">
              <p>{content}</p>
            </div>
            <div className="icon mt-5">
              <div className="icon-first">
                <img
                  src={require("./img/icons/wc-BTN.svg").default}
                  alt="toilet"
                  onClick={btnWCHandler}
                />
                <img
                  src={require("./img/icons/breast-BTN.svg").default}
                  alt="toilet"
                  onClick={btnBreastHandler}
                />
                <img
                  src={require("./img/icons/AED-BTN.svg").default}
                  alt="toilet"
                  onClick={btnAEDHandler}
                />
                <img
                  src={require("./img/icons/ATM-BTN.svg").default}
                  alt="toilet"
                  onClick={btnATMHandler}
                />
                <img
                  src={require("./img/icons/elevator-BTN.svg").default}
                  alt="toilet"
                  onClick={btnElevatorHandler}
                />
              </div>

              <div className="icon-second mt-3">
                <img
                  src={require("./img/icons/escalator-BTN.svg").default}
                  alt="toilet"
                  onClick={btnEscalatorHandler}
                />
                <img
                  src={require("./img/icons/exit-BTN.svg").default}
                  alt="toilet"
                  onClick={btnExitHandler}
                />
                <img
                  src={require("./img/icons/info-BTN.svg").default}
                  alt="information"
                  onClick={btnInfoHandler}
                />
                <img
                  src={require("./img/icons/restaurant-BTN.svg").default}
                  alt="toilet"
                  onClick={btnRestaurantHandler}
                />
                <img
                  src={require("./img/icons/shop-BTN.svg").default}
                  alt="toilet"
                  onClick={btnShopHandler}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MapT;
