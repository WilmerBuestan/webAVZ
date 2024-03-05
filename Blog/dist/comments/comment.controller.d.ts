import { CommentsService } from './comments.service';
import { Comment } from './comment.model';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    getAllComments(): Comment[];
    getCommentsByPostId(postId: string): Comment[];
    createComment(commentData: Comment): Comment;
}
