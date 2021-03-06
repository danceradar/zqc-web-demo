/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {MdRotateRight} from 'react-icons/lib/md'

import * as actions from '../../actions'

class Loading extends Component {
  render () {
    let {loading} = this.props
    let {loadingCount, prompt, enabled} = loading
    if (!enabled || loadingCount <= 0) {
      return null
    }

    return (
      <div className='d-flex justify-content-center align-items-center full'>
        <div
          className='loading d-flex flex-column align-items-center p-2
            bg-op rounded color-white'
        >
          <MdRotateRight className='spin' style={styles.icon} />
          {prompt ? <span className='p-1 fs-small'>{prompt}</span> : null}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  let {loading} = state
  return {
    loading
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)

const styles = {
  icon: {
    fontSize: '3rem'
  }
}
