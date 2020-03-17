import React from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { fetchUsers, fetchPosts } from '../redux_actions/actions'

class MainPage extends React.Component {

    componentDidMount() {
        this.isPosts = true;
        this.props.dispatch(fetchUsers());
    }

    getUsers = () => {
        this.isPosts = true;
        this.props.dispatch(fetchUsers());
    }

    getPosts = () => {
        this.isPosts = false;
        this.props.dispatch(fetchPosts());
    }

    render() {
        const { error, loading, users } = this.props;
        console.log(error, loading, users);

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <ul>
                    {users.map(product =>
                        <li key={product.id}>{this.isPosts ? product.name : product.title}</li>
                    )}
                </ul>
                <Button variant="contained" color="primary" onClick={this.getUsers}>Users</Button>
                <Button variant="contained" color="primary" onClick={this.getPosts}>Posts</Button>
            </div>
        );

    }
}

const mapStateToProps = state => ({
    users: state.user.users,
    loading: state.user.loading,
    error: state.user.error
});

export default connect(mapStateToProps)(MainPage)