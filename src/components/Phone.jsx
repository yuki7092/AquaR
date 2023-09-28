import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Phone = () => {
  // const [floor, setfloor] = useState("1F");

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

  const floorHandler = (e) => {
    console.log(e);
    console.log(e.target.value);

    if (e.target.value == "1F") {
      setContent(
        <span>
          　　漫步花園作為館內第一個展區，引您進入美妙的海中世界，五彩斑斕的海生植物在水中舞動，猶如在風中搖曳的花兒，魚群如花海中的精靈般，邀請您共同在海中花園優游。
        </span>
      );
      setArea1("漫步花園");
      setArea2("淺海迴廊");
      setArea3("奇觀劇場");
      setArea4("海洋漂流");
    } else if (e.target.value == "2F") {
      setContent(
        "各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。"
      );
      setArea1("水母幻境");
      setArea2("星空隧道");
      setArea3("雨林秘境");
      setArea4("潮間趣味");
    } else {
      setContent("這是珊瑚寶藏的內文~~");
      setArea1("珊瑚寶藏"); //透过珊瑚之眼，窥探珊瑚的微观世界，欣赏微小生物的美丽
      setArea2("極寒之地");
      setArea3("企鵝巡禮");
      setArea4("深海搖籃");
    }
  };

  // const floorSecondHandler = () => {
  //   console.log(222);
  //   setfloor("2F");
  // setArea1("二樓一區");
  // setArea2("星空隧道");
  // setArea3("雨林秘境");
  // setArea4("潮間趣味");
  // };

  // const floorThirdHandler = () => {
  //   setfloor("3F");
  // setArea1("三樓一區");
  // setArea2("深海搖籃");
  // setArea3("極寒之地");
  // setArea4("三樓四區");
  // };

  const areaHandler = (e) => {
    e.target.value === "漫步花園"
      ? setContent(
          <span>
            　　漫步花園作為館內第一個展區，引您進入美妙的海中世界，五彩斑斕的海生植物在水中舞動，猶如在風中搖曳的花兒，魚群如花海中的精靈般，邀請您共同在海中花園優游。
          </span>
        )
      : e.target.value === "淺海迴廊"
      ? setContent(
          <span>
            　　身處在微光交織的淺海迴廊中，您將可以近距離欣賞各種廣為人知的明星海洋生物，出現在電影裡的各種熱帶魚、療癒人心的微笑魟魚，造型獨特的獅子魚等等，都在這裡等您感受他們的魅力。
          </span>
        )
      : e.target.value === "奇觀劇場"
      ? setContent("這是奇觀劇場的內文")
      : e.target.value === "海洋漂流"
      ? setContent("這是海洋漂流的內文")
      : e.target.value === "水母幻境"
      ? setContent(
          <span>
            　　各色虹光灑在透明的水母身上，無邊鏡面創造奇幻氛圍，顏色各異的水母在您身邊悠遊，彷彿進入幻境般暢遊水母世界，享受這絢麗的視覺饗宴，讓您的心一起翩翩起舞。"
          </span>
        )
      : e.target.value === "星空隧道"
      ? setContent("星空隧道文案要寫什麼")
      : e.target.value === "雨林秘境"
      ? setContent("你覺得雨林秘境的文案要寫什麼呢？")
      : e.target.value === "潮間趣味"
      ? setContent("潮間趣味~希望我寫得出好文案~希望大專順順利利成功♥")
      : e.target.value === "珊瑚寶藏"
      ? setContent("這是珊瑚寶藏的內文~~")
      : e.target.value === "極寒之地"
      ? setContent("極寒之地的文案????")
      : e.target.value === "企鵝巡禮"
      ? setContent("三樓三區企鵝巡禮寫到頭昏了")
      : setContent("深海搖籃寫完草稿了");
  };
  // const areaOne = () => {
  //   area1 === "初入海洋"
  //     ? setContent("這是初入海洋的內文")
  //     : area1 === "二樓一區"
  //     ? setContent("^_^這是二樓一區的內文^_^")
  //     : setContent("這是三樓一區的內文~~");
  // };
  // const areaSecond = () => {
  //   area2 === "一樓二區"
  //     ? setContent("這是一樓區域2的內文")
  //     : area2 === "星空隧道"
  //     ? setContent("星空隧道文案要寫什麼")
  //     : setContent("深海搖籃的文案????");
  // };
  // const areaThird = () => {
  //   area3 === "一樓三區"
  //     ? setContent("這是一樓區域3的內文")
  //     : area3 === "雨林秘境"
  //     ? setContent("你覺得雨林秘境的文案要寫什麼呢？")
  //     : setContent("三樓三區極寒之地寫到頭昏了");
  // };
  // const areaForth = () => {
  //   area4 === "一樓四區"
  //     ? setContent("這是一樓區域4的內文")
  //     : area4 === "潮間趣味"
  //     ? setContent("潮間趣味~希望我寫得出好文案~希望大專順順利利成功♥")
  //     : setContent("三樓四區寫完草稿了");
  // };

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
    <div className="container">
      <h1>地圖導覽</h1>
      <div className="map_all row">
        <div className="map col-lg-6">
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
              <option defaultValue="select">--請選擇--</option>
              <option defaultValue="jellyfish1">{area1}</option>
              <option defaultValue="jellyfish2">{area2}</option>
              <option defaultValue="jellyfish3">{area3}</option>
              <option defaultValue="jellyfish4">{area4}</option>
            </select>
          </div>

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
            className="floor-map mt-1"
            src={require("./img/floor01-2.svg").default}
            alt="1F-plan"
          />
        </div>
        <section className="floor col-lg-6">
          <div className="bt-icon mt-2">
            <div className="bt-icon-first">
              <div className="wc-btn bt-btn" onClick={btnWCHandler}>
                <img
                  src={require("./img/nbg-icon/WC.svg").default}
                  alt="toilet"
                />
                <p>化妝室</p>
              </div>
              <div className="wc-btn bt-btn" onClick={btnBreastHandler}>
                <img
                  src={require("./img/nbg-icon/breast.svg").default}
                  alt="toilet"
                />
                <p>哺乳室</p>
              </div>
              <div className="wc-btn bt-btn" onClick={btnAEDHandler}>
                <img
                  src={require("./img/nbg-icon/WC.svg").default}
                  alt="toilet"
                />
                <p>急救器</p>
              </div>
              <div className="wc-btn bt-btn" onClick={btnInfoHandler}>
                <img
                  src={require("./img/nbg-icon/WC.svg").default}
                  alt="toilet"
                />
                <p>服務台</p>
              </div>
              <div className="wc-btn bt-btn">
                <img src="../img/nbg-icon/WC.svg" alt="toilet" />
                <p>化妝室</p>
              </div>
              <div className="wc-btn bt-btn">
                <img src="../img/nbg-icon/WC.svg" alt="toilet" />
                <p>化妝室</p>
              </div>
              <div className="wc-btn bt-btn">
                <img src="../img/nbg-icon/WC.svg" alt="toilet" />
                <p>化妝室</p>
              </div>
            </div>

            <div className="bt-icon-second mt-3"></div>
          </div>
          <div className="introduction">{content}</div>
        </section>
      </div>
    </div>
  );
};

export default Phone;
