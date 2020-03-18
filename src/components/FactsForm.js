import React from 'react'
import { connect } from "react-redux"

import { getData } from '../actions'

import FactList from './FactList'

const FactsForm = props => {

  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  }

  return (
    <div>
      {props.isFetchingData ? (
        <p>Getting dank cat facts for you</p>
      ) : (
        <button onClick={handleGetData}>Get Facts</button>
      )}
      <FactList />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  }
}

// export default connect(state => state, null)(FactsForm);
export default connect(mapStateToProps, { getData })(FactsForm);