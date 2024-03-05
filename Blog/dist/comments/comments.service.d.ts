import { Comment } from './comment.model';
export declare class CommentsService {
    private comments;
    constructor();
    getAllComments(): Comment[];
    getCommentsByPostId(postId: string): Comment[];
    getCommentById(id: string): Comment;
    createComment(commentData: Comment): Comment;
    updateComment(id: string, commentData: Comment): Comment;
    deleteComment(id: string): void;
}
