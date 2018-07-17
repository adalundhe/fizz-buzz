import React, { Component } from 'react'
import { FizzBuzzGame} from '../../components'
import { getData } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class FizzBuzz extends Component {
    state = {
      loaded: false
    }
    componentDidMount = () => {
      this.props.getData()
    }
    render(){
      return(
        <FizzBuzzGame />
      )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FizzBuzz)
