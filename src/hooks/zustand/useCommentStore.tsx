import { v4 } from "uuid"
import { create } from "zustand"

export interface Comment {
  id: string
  content: string
  replies: Comment[]
  createdAt: Date
}

type State = {
  comments: Array<Comment>
  activeCommentId: string | null
}

type Action = {
  addComment: (content: string) => Comment
  setActiveCommentId: (id: string | null) => void
  setComments: (comments: Comment[]) => void
  addReply: (content: string, commentId: string) => void
}

const useCommentStore = create<State & Action>((set) => ({
  comments: [{
    id: "0",
    content: "example",
    replies: [{ id: "0", content: "example reply", createdAt: new Date(), replies: [] }],
    createdAt: new Date()
  }],
  activeCommentId: null,
  addComment(content) {
    const newComment = {
      id: `a${v4()}a`,
      content: content,
      replies: [],
      createdAt: new Date()
    }
    set(prev => ({
      ...prev, comments: [...prev.comments, newComment]
    }))
    return newComment
  },
  setActiveCommentId(id) {
    set(prev => ({ ...prev, activeCommentId: id }))
  },
  setComments(comments) {
    set(prev => ({ ...prev, comments: comments }))
  },
  addReply(content, commentId) {
    set(prev => ({
      ...prev, comments: prev.comments.map(comment => comment.id === commentId ? ({
        ...comment, replies: [...comment.replies, {
          id: `a${v4()}a`,
          content: content,
          replies: [],
          createdAt: new Date()
        }]
      }) : comment
      )
    }))
  }
}))

export default useCommentStore
