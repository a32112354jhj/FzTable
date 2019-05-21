import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';

export default class App extends Component {

  show = 3; //顯示數量
  slide = 1; //滑動格數
  btn_show = ['btn_hide', 'btn_show'];//按鈕狀態class

  state = {
    scroll_position: 0, //捲動框位置
    btn_l_status: 1, //左按鈕狀態
    btn_r_status: 0, //右按鈕狀態
    scroll_style: {
      transition: this.props.speed + 's',
      left: 0 + '%'
    }
  }


  constructor(props) {
    super(props);

    // 移動格數
    this.slide = typeof (props.count.slide) !== 'undefined' ? props.count.slide : this.slide;
    if (this.slide > 4) {
      this.slide = 4;
    }
    else if (this.slide <= 0) {
      this.slide = 1;
    }

    // M版一次顯示格數
    this.show = typeof (props.count.show) !== 'undefined' ? props.count.show : this.show;
    if (this.show > 4) {
      this.show = 4;
    }
    else if (this.show <= 0) {
      this.show = 1;
    }
  }

  // 按鈕動作
  slideLeft = () => {
    let scroll_position = this.state.scroll_position - (100 / this.show) * this.slide;

    if (this.show == 4 && scroll_position <= -75) {
      scroll_position = -75;
      this.setState({
        btn_l_status: 0
      });
    }
    else if (this.show == 3 && scroll_position <= -133.333) {
      scroll_position = -133.333;
      this.setState({
        btn_l_status: 0
      });
    }
    else if (this.show == 2 && scroll_position <= -250) {
      scroll_position = -250;
      this.setState({
        btn_l_status: 0
      });
    }
    else if (this.show == 1 && scroll_position <= -600) {
      scroll_position = -600;
      this.setState({
        btn_l_status: 0
      });
    }

    this.setState({
      scroll_position: scroll_position,
      btn_r_status: 1,
      scroll_style: {
        transition: this.props.speed + 's',
        left: scroll_position + '%',
      }
    });
  }

  slideRight = () => {
    let scroll_position = this.state.scroll_position + (100 / this.show) * this.slide;

    if (scroll_position >= 0) {
      scroll_position = 0;
      this.setState({
        btn_r_status: 0,
      });
    }

    this.setState({
      scroll_position: scroll_position,
      btn_l_status: 1,
      scroll_style: {
        transition: this.props.speed + 's',
        left: scroll_position + '%',
      }
    });
  }


  render() {
    return (
      <div className="App">
        <div className={"fz_table_box cfx" + " mob_" + this.show}>
          <div className="left_box">
            <div className="table_title">
              <span>回程</span>
              <span>去程</span>
            </div>
            <div><span className="day">12/27(一)</span></div>
            <div><span className="day">12/28(二)</span></div>
            <div><span className="day">12/29(三)</span></div>
            <div><span className="day">12/30(四)</span></div>
            <div><span className="day">12/31(五)</span></div>
            <div><span className="day"><i>2018</i>01/01(六)</span></div>
            <div><span className="day">01/02(日)</span></div>
          </div>
          {/* 右框 */}
          <div className="right_box">
            {/* 左按鈕 */}
            <button type="button" className={"slide_left slide_btn " + this.btn_show[this.state.btn_l_status]} onClick={this.slideLeft}>
              <i className="fas fa-chevron-left"></i>
            </button>
            {/* 右按鈕 */}
            <button type="button" className={"slide_right slide_btn " + this.btn_show[this.state.btn_r_status]} onClick={this.slideRight}>
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="scroll_box" style={this.state.scroll_style}>
              {/* 日期 */}
              <div className="top_title">
                <div><span className="day">12/27(一)</span></div>
                <div><span className="day">12/28(二)</span></div>
                <div><span className="day">12/29(三)</span></div>
                <div><span className="day">12/30(四)</span></div>
                <div><span className="day">12/31(五)</span></div>
                <div><span className="day"><i>2018</i>01/01(六)</span></div>
                <div><span className="day">01/02(日)</span></div>
              </div>
              <div className="content_box">
                <div className="row cfx">
                  <div className="col1" onClick={(e) => this.props.whenClick(e.currentTarget)}>— —</div>
                  <div className="col2" onClick={(e) => this.props.whenClick(e.currentTarget)}>
                    <label></label>
                    <span className="price">
                      $15,568
                  </span>
                  </div>
                  <div className="col3">
                    <span className="price">
                      $15,568
                 </span>
                  </div>
                  <div className="col4">
                    <span className="price">
                      $15,568
                    </span>
                  </div>
                  <div className="col5">
                    <span className="price">
                      $15,568
                    </span>
                  </div>
                  <div className="col6">
                    <span className="price">
                      $15,568
                    </span>
                  </div>
                  <div className="col7">
                    <span className="price">
                      $15,568
                    </span>
                  </div>
                </div>
                <div className="row cfx">
                  <div className="col1">查看</div>
                  <div className="col2">
                    <label></label>
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col3">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col4">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col5">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div>
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div>
                    <span className="price">
                      $15,568
                </span>

                  </div>
                </div>
                <div className="row cfx">
                  <div className="col1">查看</div>
                  <div className="col2">
                    <label></label>
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col3">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col4">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col5">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col6">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col7">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                </div>
                <div className="row cfx">
                  <div className="col1">— —</div>
                  <div className="col2">
                    <label></label>
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col3">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col4">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col5">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col6">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col7">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                </div>
                <div className="row cfx">
                  <div className="col1">— —</div>
                  <div className="col2">
                    <label></label>
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col3">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col4">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col5">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col6">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col7">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                </div>
                <div className="row cfx">
                  <div className="col1">— —</div>
                  <div className="col2">
                    <label></label>
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col3">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col4">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col5">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col6">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col7">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                </div>
                <div className="row cfx">
                  <div className="col1">— —</div>
                  <div className="col2">
                    <label></label>
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col3">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col4">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col5">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col6">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                  <div className="col7">
                    <span className="price">
                      $15,568
                </span>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }

}


// export default App;
