import React, { Component } from 'react'
import HangChon from './HangChon'
import { connect } from 'react-redux'
import HangGhe from './HangGhe'

 class Ghe extends Component {
  renderVe = () => {
    return this.props.element.danhSachGhe.map((element) => {
        // console.log(element)
        if (this.props.element.hang === "") {

            return <HangChon key={element.soGhe} element={element} />
        } else {
            return <HangGhe key={element.soGhe} element={element} />

        }

    })
}

render() {


    return (
        <tr>
            <td className='color' >{this.props.element.hang}</td>

            {this.renderVe()}
        </tr>


    )
}
}



export default connect()(Ghe);
