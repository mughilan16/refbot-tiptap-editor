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
}

const useCommentStore = create<State & Action>((set) => ({
  comments: [],
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
}))

export default useCommentStore
