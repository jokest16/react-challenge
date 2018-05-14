import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import ProfileThumbnailTable from './components/ProfileThumbnailTable';

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

        this.handleProfileChoice = this.handleProfileChoice.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/data')
            .then(response => response.data)
            .then(data => this.setState({ data }))
            .catch(error => console.error(error.message));

    }

    handleProfileChoice (id,name) {
        console.log(id,name);
    }

    render() {
        console.log(this.state);
        return (
            <main>
                {this.props.children}
                <Header/>
                <ProfileThumbnailTable data={this.state.data} onChoice={this.handleProfileChoice}/>
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