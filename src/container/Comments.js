import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../redux/actions/playgroundActions';
import '../styles/App.css';

const Comments = ({ getComments, comments, count }) => {
    useEffect(() => {
        getComments(1, 2); // postId=1, postId=2
    }, [getComments]);

    return (
        <div className="commentsWrapper">
            <h3 className="commentsTitle">Comments</h3>
            <ul className="circle">
                {comments.map((comment, i) => {
                    return (
                        <li key={comment.id}
                            className={`textOverflow ${comments.length - 1 - count < i ? 'boldComments' : ''}`}>
                            {comment.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    comments: state.playground.comments,
    count: state.playground.count,
});

const mapDispatchToProps = { getComments }

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

