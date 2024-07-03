import React, { useEffect, useState } from 'react';
import './Comments.css';
import { Base_url, formatCreatedAt } from '../../constants/constants';
import axios from 'axios';
import { IoMdArrowDropright,IoMdArrowDropdown } from "react-icons/io";

function Comments({ noteId }) {
    const [comments, setComments] = useState([]);
    const [replies, setReplies] = useState({});
    const [newComment, setNewComment] = useState('');
    const [selectedOption, setSelectedOption] = useState('recent');
    const [isReplying, setIsReplying] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchComments(selectedOption);
    }, [selectedOption, noteId]);

    const fetchComments = async (filter) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${Base_url}/display_comment/${noteId}?filter=${filter}`);
            setComments(response.data);
        } catch (error) {
            setError('Error fetching comments');
        } finally {
            setIsLoading(false);
        }
    };

    const handleReplyClick = async (commentId) => {
        setIsReplying(commentId === isReplying ? null : commentId);
        if (commentId !== isReplying) {
            try {
                const response = await axios.get(`${Base_url}/display_comment_replay/${commentId}`);
                setReplies((prevReplies) => ({ ...prevReplies, [commentId]: response.data }));
            } catch (error) {
                setError('Error fetching replies');
            }
        }
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    };

    const handlePostComment = async () => {
        setError(null);
        try {
            if (!isReplying) {
                const response = await axios.post(`${Base_url}/post_comment/${noteId}`, { comment: newComment });
                setComments([response.data, ...comments]); // Prepend new comment to state
                setNewComment(''); // Clear input field
            } else {
                const response = await axios.post(`${Base_url}/post_comment_replay/${isReplying}`, { comment: newComment });
                setReplies((prevReplies) => ({
                    ...prevReplies,
                    [isReplying]: [response.data, ...prevReplies[isReplying]],
                }));
                setNewComment(''); // Clear input field
            }
        } catch (error) {
            setError('Error posting comment');
            console.log(error)
        }
    };

    return (
        <>
            <p className='comment-box' data-toggle="modal" data-target={`#CommentBox-${noteId}`}>Comments {comments.length}</p>
            
            <div className="modal fade" id={`CommentBox-${noteId}`} tabIndex="-1" aria-labelledby={`CommentBoxLabel-${noteId}`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`CommentBoxLabel-${noteId}`}>Comment Box</h5>
                            <select className='commandfilter' value={selectedOption} onChange={handleChange}>
                                <option value="recent">Recent</option>
                                <option value="oldest">Oldest</option>
                                <option value="random">Random</option>
                            </select>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
                            {isLoading ? (
                                <p>Loading comments...</p>
                            ) : error ? (
                                <p className="error-message">{error}</p>
                            ) : (
                                comments.map(comment => (
                                    <div key={comment.id} className="col">
                                        <div className="comment col-12">
                                            <div className="card mt-2">
                                                <p className='postid'>Comment ID: {comment.id}</p>
                                                <div className="card-body">
                                                    <p>{comment.content}</p>
                                                    <div className="card-footer">
                                                        <p className='replay-btn' onClick={() => handleReplyClick(comment.id)}>
                                                        reply {replies[comment.id] ? replies[comment.id].length : 0}
                                                            {isReplying === comment.id ? (
                                                                <IoMdArrowDropdown className='replay-btn-icon' /> // Active icon
                                                            ) : (
                                                                <IoMdArrowDropright className='replay-btn-icon' /> // Inactive icon
                                                            )}
                                                            
                                                        </p>
                                                        <p className='d-inline p-2 counters'>{formatCreatedAt(comment.created_at)}</p>
                                                    </div>
                                                </div>
                                                {isReplying === comment.id && (
                                                    <div className="replay">
                                                        {replies[comment.id]?.map((reply, index) => (
                                                            <div key={index} className="card mt-2 ml-4">
                                                                <p className='postid'>replay ID: {reply.id}</p>
                                                                <div className="card-body">
                                                                    <p>{reply.content}</p>
                                                                    <p className='counters'>{formatCreatedAt(reply.created_at)}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="modal-footer">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col d-flex justify-content-end">
                                        <input
                                            className='post-command-input p-2 w-100 bd-highlight'
                                            type="text"
                                            placeholder={isReplying ? `Reply...@${isReplying}` : 'Comment...'}
                                            value={newComment}
                                            onChange={handleInputChange}
                                        />
                                        <button type="button" className="btn btn-card" onClick={handlePostComment}>Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comments;
