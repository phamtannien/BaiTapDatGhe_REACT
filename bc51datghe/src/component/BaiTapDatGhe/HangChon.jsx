import React, { Component } from 'react'

export default class HangChon extends Component {
  render() {
    const { soGhe } = this.props.element;
    return (
        <td className='color'>
        {soGhe}
    </td>
    )
  }
}
