import React, { Component } from 'react'
import { FizzBuzzButton, FizzButton, BuzzButton, PassButton, CurrentNumberDisplay, ScoreDisplay } from '../../components'
import { fetchData } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class FizzBuzz extends Component {
    state = {
      loaded: false
    }
    componentDidMount = () => {
      console.log(this.props)
      this.props.fetchData()
    }
    render(){
      return(
        <div>
          <div>
            <CurrentNumberDisplay />
            <ScoreDisplay />
          </div>
          <div>
            <FizzButton />
            <BuzzButton />
            <FizzBuzzButton />
          </div>
          <div>
            <PassButton />
          </div>
        </div>
      )
    }

}

const mapStateToProps = (state) => {
    return {
        resultsArray: state.resultsArray,
        hasErrored: state.requestHasErrored,
        isLoading: state.requestIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchData(url))
    };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FizzBuzz)
