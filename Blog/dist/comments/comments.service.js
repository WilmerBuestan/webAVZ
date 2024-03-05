"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let CommentsService = class CommentsService {
    constructor() {
        this.comments = [];
        this.createComment({
            id: (0, uuid_1.v4)(),
            content: 'Sabes que... a mi tambien me pasa lo mismo.',
            postId: '1c12b365-48f4-4209-b6d9-52099c26222a'
        });
    }
    getAllComments() {
        return this.comments;
    }
    getCommentsByPostId(postId) {
        return this.comments.filter(comment => comment.postId === postId);
    }
    getCommentById(id) {
        const comment = this.comments.find(comment => comment.id === id);
        if (!comment) {
            throw new common_1.NotFoundException('Comment not found');
        }
        return comment;
    }
    createComment(commentData) {
        if (!commentData.content || !commentData.postId) {
            throw new common_1.BadRequestException('Content and postId are required');
        }
        const newComment = {
            id: (0, uuid_1.v4)(),
            content: commentData.content,
            postId: commentData.postId,
        };
        this.comments.push(newComment);
        return newComment;
    }
    updateComment(id, commentData) {
        const commentIndex = this.comments.findIndex(comment => comment.id === id);
        if (commentIndex === -1) {
            throw new common_1.NotFoundException('Comment not found');
        }
        this.comments[commentIndex] = { ...this.comments[commentIndex], ...commentData };
        return this.comments[commentIndex];
    }
    deleteComment(id) {
        this.comments = this.comments.filter(comment => comment.id !== id);
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CommentsService);
//# sourceMappingURL=comments.service.js.map