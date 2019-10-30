import React from 'react';

// export default function Home(props) {
//     function post_data() {
//         fetch('/users', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: 'first_name=abc&last_name=hahaha'
//         }).then(response => response.json()).then(json => {
//             alert('Success');
//             console.log(json);
//         }).catch(error => {
//             alert('Failed: ' + error);
//         })
//     }

//     return <div style={styles.home}>
//         <h1>Test Post</h1>
//         <UserListClass />
//         <div className="button" onClick={post_data} >POST</div>
//     </div>
// }

// function UserListHook(props) {
//     const [users, _] = React.useState([{
//         first_name: 'A'
//     },
//     {
//         first_name: 'B'
//     }]);

//     return <div>
//         <h1>Hook</h1>
//         {users.map(user => {
//             return <div key={user.first_name}>
//                 {user.first_name}
//             </div>
//         })}
//     </div>
// }

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',

            users: [{
                first_name: 'A'
            },
            {
                first_name: 'B'
            }]
        }
    }

    componentWillMount () {
        this.loadUserDataFromServer ();
    }

    post_data = () => {
        const arg = `first_name=${this.state.first_name}&last_name=${this.state.last_name}`;
        postUserData(arg, _ => {
            this.loadUserDataFromServer ();
        });
    }

    autoSend = () => {
        if (!this.state.first_name || !this.state.last_name) {
            return;
        }

        alert('YO!');
        this.post_data();

        this.setState({
            first_name: '',
            last_name: ''
        });
    }

    loadUserDataFromServer () {
        fetchUserData(data => {
            console.log(data);
            this.setState({
                users: data
            })
        })
    }

    renderTouchArea() {
        return <div style={{ width: 200, height: 200, backgroundColor: '#FF0' }} onMouseOver={this.autoSend}></div>
    }

    renderInput() {
        return <div>
            <input onBlur={this.autoSend} value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} /><br />
            <input onBlur={this.autoSend} value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })} /><br />
            <div className="button" onClick={this.post_data} >POST</div>
        </div>
    }

    render() {
        return <div style={styles.home}>
            <h1>Test Post</h1>
            {this.renderInput()}
            {this.renderTouchArea()}
            <UserListClass
                users={ this.state.users } />
        </div>
    }
}

class UserListClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Class</h1>
            {this.props.users.map((user, index) => {
                return <div key={index}>
                    {index} - {user.first_name} {user.last_name}
                </div>
            })}
        </div>
    }
}

const styles = {
    home: {
        margin: '20px auto',
        width: '800px',
        background: '#EFEFEF',
        border: '1px solid #EEEEEE',
        padding: '10px'
    },
}


function postUserData(data, callback) {
    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    }).then(response => response.json()).then(json => {
        alert('Success');
        console.log(json);
        callback ();
    }).catch(error => {
        alert('Failed: ' + error);
    })
}

function fetchUserData(callback) {
    fetch('/users', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(json => {
            callback(json);
        }).catch(error => {
            alert('Failed: ' + error);
        });
}