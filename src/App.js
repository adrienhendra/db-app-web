import React, { Component } from 'react';

/* Semantic UI example */
import { Button, Icon, Container } from 'semantic-ui-react';

/* React Quill */
import ReactQuill from 'react-quill';

/* React table */
import ReactTable from 'react-table';

/* Import CSS */
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    /* This state */
    this.state = {
      text: '', // You can also pass a Quill Delta here
      data: {
        rating: 0,
        lastUpdate: 'unknown',
      },
      tempdatas: [],
    };

    /* Bind this */
    this.handleChange = this.handleChange.bind(this);

    /* React Quill setup */
    this.modules = {
      formula: true,
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image'],
        ['clean'],
        ['formula'],
      ],
    };

    /* React Quill formats */
    this.formats = [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
    ];
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  updateSqlResult(value) {
    this.setState({ tempdatas: value });
  }

  render() {
    /* Trial react table */
    const testDataTbl = [
      { name: 'Lala', age: 20, friend: { name: 'lili', age: 23 } },
      { name: 'Lulu', age: 12, friend: { name: 'lele', age: 24 } },
    ];

    const testDataCols = [
      { Header: 'Name', accessor: 'name' },
      {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className="number">{props.value}</span>,
      },
      { id: 'friendName', Header: 'Friend Name', accessor: d => d.friend.name },
      { Header: () => <span> Friend Age </span>, accessor: 'friend.age' },
    ];

    return (
      <div className="window">
        <header className="toolbar toolbar-header">
          <h1 className="title">Soepriatna DB App</h1>
          <div className="toolbar-actions">
            <div className="btn-group">
              <button className="btn btn-default">
                <span className="icon icon-home" />
              </button>
            </div>
          </div>
        </header>

        <div className="window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar">A</div>

            <div className="pane">
              <div>
                <h2>Welcome to React!</h2>
                <Button icon labelPosition="left">
                  <Icon name="pause" />
                  Hello World!
                </Button>
                <Container>
                  <ReactQuill
                    theme="snow"
                    readOnly={false}
                    value={this.state.text}
                    modules={this.modules}
                    onChange={this.handleChange}
                  />
                </Container>
                <Container>
                  {/* <ul>{this.state.tempdatas.map(dX => <li key={dX}>{dX}</li>)}</ul> */}
                  <ul>
                    {this.state.tempdatas.map(singleData => (
                      <li key={singleData.id}>{singleData.quest_text.q}</li>
                    ))}
                  </ul>
                </Container>
                <Container>
                  <ReactTable data={testDataTbl} columns={testDataCols} />
                </Container>
              </div>
            </div>
          </div>
        </div>

        <footer className="toolbar toolbar-footer">
          <h1 className="title">By Adrien Soepriatna (c) 2018</h1>
        </footer>
      </div>
    );
  }
}

export default App;
