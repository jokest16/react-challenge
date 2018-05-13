import React from 'react';
import axios from 'axios';

import SvgSpite from './SvgSprite';
import Header from './components/Header';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        /*this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);*/
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/data')
            .then(response => response.data)
            .then(data => this.setState({ data }))
            .catch(error => console.error(error.message));

    }

    render() {
        console.log(this.state);
        return (
            <main>
                {this.props.children}
                <Header/>
                <section className="todo-list">
                    {/*{this.state.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onDelete={this.handleDelete}
                            onToggle={this.handleToggle}
                            onEdit={this.handleEdit}
                        />)
                    }*/}
                </section>
            </main>
        );
    }
}

export default App;