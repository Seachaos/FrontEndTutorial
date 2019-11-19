import React from 'react';
import { connect } from 'react-redux'

export default function Home(props) {

    function post_data() {
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'first_name=abc&last_name=hahaha'
        }).then(response => response.json()).then(json => {
            alert('Success');
            console.log(json);
        }).catch(error => {
            alert('Failed: ' + error);
        })
    }

    return <div style={styles.home}>
        <h1>Test Post</h1>
        <div className="button" onClick={post_data} >POST</div>
        <hr />
        <LoginButton />
        <LoginStatus />
    </div>
}

const LoginButton = connect(state => ({
    app: state.app
}), dispatch => {
    return {
        login: _ => {
            dispatch({
                'type': 'LOGIN'
            })
        }
    }
})(function (props) {
    return <div className="button" onClick={props.login}>TEST</div>
});

const LoginStatus = connect(state=>({app: state.app}))(function(props){
    return <div>
        <h1>STATUS: {props.app.login ? 'True': 'False'}</h1>
    </div>
});

const styles = {
    home: {
        margin: '20px auto',
        width: '800px',
        background: '#EFEFEF',
        border: '1px solid #EEEEEE',
        padding: '10px'
    },
}