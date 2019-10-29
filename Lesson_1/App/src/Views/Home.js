import React from 'react';

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
    </div>
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