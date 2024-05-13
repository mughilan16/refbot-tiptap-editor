import { useEffect, useRef } from "react"
import useCommentStore from "../../hooks/zustand/useCommentStore"
import BubbleMenu from "@tiptap/react"
import { Box } from "@mui/material"

export default function CommentView() {
  const { comments, activeCommentId, setComments, setActiveCommentId, addComment } = useCommentStore()
  const commentsSectionRef = useRef<HTMLDivElement | null>(null)
  const focusCommentWithActiveId = (id: string) => {
    if (!commentsSectionRef.current) return

    const commentInput = commentsSectionRef.current.querySelector<HTMLInputElement>(`input#${id}`)

    if (!commentInput) return

    commentInput.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
  }

  useEffect(
    () => {
      if (!activeCommentId) return

      focusCommentWithActiveId(activeCommentId)
    }
    , [activeCommentId]
  )
  const setComment = () => {
    const newComment = addComment("")
    setActiveCommentId(newComment.id)
    setTimeout(focusCommentWithActiveId)
  }
  return (
    <>
      <Box sx={{display: "flex", flexDirection: "column", gap: "2", padding: "2rem", border: "1px #444 solid", borderRadius: "5rem", widht: "96px"}} >
        {
          comments.length ? (
            comments.map(comment => (
              <div
                key={comment.id}
                className={`flex flex-col gap-4 p-2 border rounded-lg border-slate-400 ${comment.id === activeCommentId ? 'border-blue-400 border-2' : ''} box-border`}
              >
                <span className='flex items-end gap-2'>
                  <a href='https://github.com/sereneinserenade' className='font-semibold border-b border-blue-200'>
                    sereneinserenade
                  </a>

                  <span className='text-xs text-slate-400'>
                    {comment.createdAt.toLocaleDateString()}
                  </span>
                </span>

                <input
                  value={comment.content || ''}
                  disabled={comment.id !== activeCommentId}
                  className={`p-2 rounded-lg text-inherit bg-transparent focus:outline-none ${comment.id === activeCommentId ? 'bg-slate-600' : ''}`}
                  id={comment.id}
                  onInput={
                    (event) => {
                      const value = (event.target as HTMLInputElement).value

                      setComments(comments.map(comment => {
                        if (comment.id === activeCommentId) {
                          return {
                            ...comment,
                            content: value
                          }
                        }

                        return comment
                      }))
                    }
                  }
                  onKeyDown={
                    (event) => {
                      if (event.key !== 'Enter') return

                      setActiveCommentId(null)
                    }
                  }
                />

                {
                  comment.id === activeCommentId && (
                    <button
                      className='rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20'
                      onClick={() => {
                        setActiveCommentId(null)
                        //#TODO
                        //editor.commands.focus()
                      }}
                    >
                      Save
                    </button>
                  )
                }
              </div>
            ))
          ) : (
            <span className='pt-8 text-center text-slate-400'>
              No comments yet
            </span>
          )
        }
      </Box>
      <BubbleMenu className='p-1 border rounded-lg border-slate-400'>
        <button
          className='rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20'
          onClick={setComment}
        >
          Comment
        </button>
      </BubbleMenu>
    </>
  )
}
