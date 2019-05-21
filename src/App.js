import React, { Component } from 'react';
import './style.css';
import Data from './tripData.json';
import classNames from 'classnames';

export default class App extends Component {

  show = 3; //顯示數量
  slide = 1; //滑動格數
  btn_show = ['btn_hide', 'btn_show'];//按鈕狀態class

  state = {
    scroll_position: 0, //捲動框位置
    btn_l_status: 0, //左按鈕狀態
    btn_r_status: 1, //右按鈕狀態
    point_x: 0, //點擊x
    point_y: 0, //點擊y
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
        btn_r_status: 0
      });
    }
    else if (this.show == 3 && scroll_position <= -133.333) {
      scroll_position = -133.333;
      this.setState({
        btn_r_status: 0
      });
    }
    else if (this.show == 2 && scroll_position <= -250) {
      scroll_position = -250;
      this.setState({
        btn_r_status: 0
      });
    }
    else if (this.show == 1 && scroll_position <= -600) {
      scroll_position = -600;
      this.setState({
        btn_r_status: 0
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

  slideRight = () => {
    let scroll_position = this.state.scroll_position + (100 / this.show) * this.slide;

    if (scroll_position >= 0) {
      scroll_position = 0;
      this.setState({
        btn_l_status: 0,
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


  handleClick = (x, y, e) => {
    this.setState({
      point_x: x,
      point_y: y
    });
    this.props.whenClick(e.currentTarget);
  }
  

  render() {
    let tripData = Data.data;
    return (
      <div className="App">
        <div className={"fz_table_box cfx" + " mob_" + this.show}>
          <div className="left_box">
            <div className="table_title">
              <span>回程</span>
              <span>去程</span>
            </div>

            {
              // 日期直
              tripData.map((item, key) => {
                return <div><span className="day">{item.date_year && <i>{item.date_year}</i>}{item.date}</span></div>
              })
            }

          </div>
          {/* 右框 */}
          <div className="right_box">
            {/* 左按鈕 */}
            <button type="button" className={"slide_left slide_btn " + this.btn_show[this.state.btn_l_status]} onClick={this.slideRight}>
              <i className="fas fa-chevron-left"></i>
            </button>
            {/* 右按鈕 */}
            <button type="button" className={"slide_right slide_btn " + this.btn_show[this.state.btn_r_status]} onClick={this.slideLeft}>
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="scroll_box" style={this.state.scroll_style}>

              {/* 日期橫 */
                tripData.map((item, key) => {
                  return (
                    <div className="top_title">
                      <div><span className="day">{item.date_year && <i>{item.date_year}</i>}{item.date}</span></div>
                    </div>
                  )

                })
              }


              <div className="content_box">
                <div className="row cfx">

                  {
                    tripData.map((item, key) => {
                      return item.data.map((row, key2) => {
                        return (
                          <div key={key2} className={classNames("col" + (key2 + 1) + " row" + (key + 1), { active: key === this.state.point_x || key2 === this.state.point_y }, { point: key === this.state.point_x && key2 === this.state.point_y })} onClick={(e) => this.handleClick(key, key2, e)}>
                            {row.isTheCheapest && <label></label>}
                            <span className={isNaN(row.price) ? '' : "price"}>{row.price.toLocaleString()}</span>
                          </div>
                        )
                      })

                    })
                  }

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
