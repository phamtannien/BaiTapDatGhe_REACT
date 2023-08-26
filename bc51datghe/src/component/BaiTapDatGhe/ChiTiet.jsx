import React, { Component } from 'react'
import { connect } from 'react-redux'
import { xoaGheAction } from '../../store/actions/datGheAction'
import "../../style/style.css"

class ChiTiet extends Component {

    
  renderContent = () => {
      return this.props.danhSach.map((element) => {
          return <tr key={element.soGhe} className="text-warning" >
              <td>{element.soGhe}</td>
              <td>{element.gia.toLocaleString()}</td>
              <td>
                  <span onClick={() => this.props.dispatch(xoaGheAction(element))}>
                    <button className="btn btn-danger"><i class="fa fa-window-close"></i></button>
                  </span>
              </td>
          </tr >
      })

  }
  tinhTongTien = () => {
      let total = 0;
      for (let i = 0; i < this.props.danhSach.length; i++) {
          let giaTien = this.props.danhSach[i];
          total += giaTien.gia;
      }
      return total;
  }
  renderTongTien = () => {
      return <tr>
          <td className="text-white">Tổng tiền</td>
          <td className="color">{this.tinhTongTien().toLocaleString()} </td>
          <td>
          </td>
      </tr>
  }

  render() {
      
      return (

          < table className="table table-bordered" >
              <thead>
                  <tr>
                      <th className="text-white">Số Ghế</th>
                      <th className="text-white">Giá</th>
                      <th className="text-white">Hủy</th>
                  </tr>
              </thead>
              <tbody>

                  {this.renderContent()}

              </tbody>
              <tfoot>
                  {this.renderTongTien()}
              </tfoot>
          </ table>


      )
  }
}
const mapStateToProps = (state) => {
  return {
      danhSachGhe: state.datGheReducer.danhSachGhe,
      danhSach: state.datGheReducer.danhSach,

  }
}

export default connect(mapStateToProps)(ChiTiet)
