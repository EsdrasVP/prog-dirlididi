import React, { Component } from 'react';
import { connect } from "react-redux";
import { PageHeader } from 'react-bootstrap';

import * as problemAction from "../../actions/problem-actions";
import AddProblemForm from '../../components/form/add-problem-form';
import AddProblemAlert from '../../components/alert/add-problem-alert';
import './style/problems.css';

class AddProblem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      name: '',
      description: '',
      tip: '',
      tags: [''],
      tests: [{ name: '', tip: '', input: '', output: '' }],
    };
  }

  handleProblemNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleProblemDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleProblemTipChange = event => {
    this.setState({ tip: event.target.value });
  };

  handleTagChange = index => event => {
    const newTags = this.state.tags.map((tag, tindex) => {
      if (index !== tindex) return tag;
      return event.target.value;
    });

    this.setState({ tags: newTags });
  };

  handleTestNameChange = index => event => {
    const newTests = this.state.tests.map((test, tindex) => {
      if (index !== tindex) return test;
      return { ...test, name: event.target.value };
    });

    this.setState({ tests: newTests });
  };

  handleTestTipChange = index => event => {
    const newTests = this.state.tests.map((test, tindex) => {
      if (index !== tindex) return test;
      return { ...test, tip: event.target.value };
    });

    this.setState({ tests: newTests });
  };

  handleTestInputChange = index => event => {
    const newTests = this.state.tests.map((test, tindex) => {
      if (index !== tindex) return test;
      return { ...test, input: event.target.value };
    });

    this.setState({ tests: newTests });
  };

  handleTestOutputChange = index => event => {
    const newTests = this.state.tests.map((test, tindex) => {
      if (index !== tindex) return test;
      return { ...test, output: event.target.value };
    });

    this.setState({ tests: newTests });
  };

  handleSubmit = event => {
    event.preventDefault();

    const problem = {
      name: this.state.name,
      description: this.state.description,
      tip: this.state.tip,
      tags: this.state.tags,
      tests: this.state.tests
    };
    this.props.dispatch(problemAction.createProblem(problem));
    this.handleShowAlert();
  };

  handleAddTag = () => {
    this.setState({
      tags: this.state.tags.concat([''])
    });
  };

  handleRemoveTag = index => () => {
    this.setState({
      tags: this.state.tags.filter((t, tindex) => index !== tindex)
    });
  };

  handleAddTest = () => {
    this.setState({
      tests: this.state.tests.concat([{ name: '', tip: '', input: '', output: '' }])
    });
  };

  handleRemoveTest = index => () => {
    this.setState({
      tests: this.state.tests.filter((t, tindex) => index !== tindex)
    });
  };

  handleShowAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  render() {
    return(
      <div id='add-problem-form'>
        <PageHeader>
          Add Problem
        </PageHeader>
        <AddProblemAlert showAlert={ this.state.showAlert } />
        <AddProblemForm
          tags={ this.state.tags }
          tests={ this.state.tests }
          handleProblemNameChange={ this.handleProblemNameChange }
          handleProblemDescriptionChange={ this.handleProblemDescriptionChange }
          handleProblemTipChange={ this.handleProblemTipChange }
          handleAddTag={ this.handleAddTag }
          handleTagChange={ this.handleTagChange }
          handleRemoveTag={ this.handleRemoveTag }
          handleAddTest={ this.handleAddTest }
          handleTestNameChange={ this.handleTestNameChange }
          handleTestTipChange={ this.handleTestTipChange }
          handleTestInputChange={ this.handleTestInputChange }
          handleTestOutputChange={ this.handleTestOutputChange }
          handleRemoveTest={ this.handleRemoveTest }
          handleSubmit={ this.handleSubmit }
        />
      </div>
    );
  }
}

export default connect()(AddProblem);
