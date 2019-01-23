import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, PageHeader } from 'react-bootstrap';

import * as ProblemConst from '../../constants/problem-constants';
import * as problemAction from "../../actions/problem-actions";
import Spinner from '../../components/spinner/spinner';
import Table from '../../components/table/table';
import './style/problems.css';

const { problemUrls } = ProblemConst;

class Problems extends Component {
  constructor(props) {
    super(props);

    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    this.props.history.push(problemUrls.addProblem);
  }

  render() {
    const headers = {
      name: 'Problem',
      description: 'Description',
      key: 'Key',
      date: 'Created',
      solved: 'Solved' // check how we're going to deal with solving
    };

    if (this.props.isLoading) {
      return <Spinner />;
    }

    return(
      <div className='problems-container'>
        <PageHeader>
          Problems
        </PageHeader>
        <div id='add-problem-div'>
          <button className='button-add' onClick={ this.routeChange }>Add Problem</button>
        </div>
        <div id='problems-table-div'>
          <Table headers={ headers } data={ this.props.problems }/>
        </div>
      </div>
    );
  }

  componentDidMount () {
    this.props.onInitProblems();
  }
}

const mapStateToProps = state => (
  {
    problems: state.problemReducer.problems,
    isLoading: state.problemReducer.isLoading
  }
);

const mapDispatchToProps = dispatch => (
  {
    onInitProblems: () => dispatch(problemAction.initProblems())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Problems);
