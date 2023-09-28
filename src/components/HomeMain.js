const HomeMain = () => {
  return (
    <main>
      <div id="block1" className="main-block-1">
        <div className="container d-flex flex-column align-items-center h-100">
          <div className="title-block d-flex align-items-center position-absolute top-50 start-50 translate-middle">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png" alt="" />
            <span className="fw-bold text-light">AquaR</span>
          </div>
          <div className="opening-card-block d-flex justify-content-between w-75 gap-5 mt-auto mb-5">
            <a href="#" className="card p-5">
              <p className="border-5 border-bottom border-dark fs-5 m-0 pb-3">Business Hours</p>
              <div className="d-flex align-items-center gap-2 py-3">
                <span className="material-symbols-outlined card-icon">grade</span>
                <span className="fs-5">營業時間</span>
              </div>
            </a>
            <a href="#" className="card p-5">
              <p className="border-5 border-bottom border-dark fs-5 m-0 pb-3">Information</p>
              <div className="d-flex align-items-center gap-2 py-3">
                <span className="material-symbols-outlined card-icon">grade</span>
                <span className="fs-5">館內資訊</span>
              </div>
            </a>
            <a href="#" className="card p-5">
              <p className="border-5 border-bottom border-dark fs-5 m-0 pb-3">Ticket</p>
              <div className="d-flex align-items-center gap-2 py-3">
                <span className="material-symbols-outlined card-icon">grade</span>
                <span className="fs-5">預約訂票</span>
              </div>
            </a>
          </div>
          <a href="#block2">
            <span className="material-symbols-outlined expandMore">expand_more</span>
          </a>
        </div>
      </div>
      <div id="block2" className="main-block-2">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="m-0 news fw-bold text-light">最新消息</h2>
          <div className="news-card-block d-flex justify-content-between w-100 gap-5 mt-5">
            <a href="#" className="card">
              <div className="mt-auto card-text-block py-4 px-5">
                <p className="m-0 text-light">2023.01.01</p>
                <h5 className="m-0 text-light fw-bold">新合作平台Klook上線囉!</h5>
              </div>
            </a>
            <a href="#" className="card">
              <div className="mt-auto card-text-block py-4 px-5">
                <p className="m-0 text-light">2023.01.01</p>
                <h5 className="m-0 text-light fw-bold">新合作平台Klook上線囉!</h5>
              </div>
            </a>
            <a href="#" className="card">
              <div className="mt-auto card-text-block py-4 px-5">
                <p className="m-0 text-light">2023.01.01</p>
                <h5 className="m-0 text-light fw-bold">新合作平台Klook上線囉!</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="main-block-3 position-relative">
        <div className="bg-success mx-5 px-5 py-4">
          <p className="text-center fs-2 fw-bold">配合動物自然生態習性，館內特定區域非全時段開放。</p>
          <p className="text-center fs-4 fw-bold">詳情請參閱現場公告或洽現場工作人員，敬請知悉並配合。</p>
        </div>
        <div className="d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
          <p className="vertical-text text-light fs-5 lh-lg">
            碧波深處珍奇珠，<br />
            七彩倩影舞輝璩。<br />
            海底王國真寶庫，<br />
            潮音引領夢幻途。
          </p>
          <p className="vertical-text text-light fs-3 vertical-text-title lh-lg">海洋夢——</p>
        </div>
      </div>
      <div className="main-block-4 d-flex flex-column align-items-center bg-black">
        <p className="my-3 text-light fs-3 fw-bold">來自旅行者的照片</p>
        <div className="photo-group d-flex mx-1 gap-1 w-100">
          <a href="#" className="photos-1">
            <img className="" src="https://images.unsplash.com/photo-1670983540012-8cd6c32bc221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
          </a>
          <a href="#" className="photos-2">
            <img className="" src="https://images.unsplash.com/photo-1684178401934-a80531c89461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
          </a>
          <a href="#" className="photos-3">
            <img className="" src="https://images.unsplash.com/photo-1683009427470-a36fee396389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
          </a>
          <a href="#" className="photos-4">
            <img className="" src="https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTkxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </a>
          <a href="#" className="photos-5">
            <img className="" src="https://images.unsplash.com/photo-1682686580433-2af05ee670ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTI0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </a>
        </div>

        <div className="photo-group d-flex mx-1 gap-1 mt-1 w-100">
          <a href="#" className="photos-5">
            <img className="" src="https://images.unsplash.com/photo-1682686580433-2af05ee670ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTI0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </a>
          <a href="#" className="photos-2">
            <img className="" src="https://images.unsplash.com/photo-1684178401934-a80531c89461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
          </a>
          <a href="#" className="photos-3">
            <img className="" src="https://images.unsplash.com/photo-1683009427470-a36fee396389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
          </a>
          <a href="#" className="photos-1">
            <img className="" src="https://images.unsplash.com/photo-1670983540012-8cd6c32bc221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
          </a>
          <a href="#" className="photos-4">
            <img className="" src="https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTkxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </a>
        </div>
        <button className="btn btn-secondary my-3">分享旅行中的體驗</button>
      </div>
    </main>
  )
}

export default HomeMain;