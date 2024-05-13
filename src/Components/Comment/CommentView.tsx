import { useEffect, useRef, useState } from "react"
import useCommentStore, { Comment } from "../../hooks/zustand/useCommentStore"
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Box, Button, IconButton, Link, TextField } from "@mui/material"
import { AccountCircle, KeyboardArrowUp, KeyboardArrowDown, ReplySharp, SendSharp, } from "@mui/icons-material";

export default function CommentView() {
  const { comments, activeCommentId, setActiveCommentId, addComment } = useCommentStore()
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
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "1rem", borderRadius: "5px", width: "30rem", backgroundColor: "#eee" }} >
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "middle" }}>
          <Box sx={{ fontSize: "20px", fontWeight: "500" }}>
            Comments
          </Box>
          <IconButton onClick={setComment}>
            <AddCommentIcon />
          </IconButton>
        </Box>
        {
          comments.length ? (
            comments.map(comment => (
              <CommentComponent comment={comment} />
            ))
          ) : (
            <span className='pt-8 text-center text-slate-400'>
              No comments yet
            </span>
          )
        }
      </Box>
    </Box>
  )
}

function CommentComponent(props: {
  comment: Comment
}) {
  const { comments, activeCommentId, setActiveCommentId, setComments } = useCommentStore()
  const [reply, setReply] = useState(false)
  const [replyInput, setReplyInput] = useState(false)
  useEffect(() => { if (replyInput === true) setReply(true) }, [replyInput])
  useEffect(() => { if (reply === false) setReplyInput(false) }, [reply])
  return (
    <Box
      key={props.comment.id}
      sx={{ display: "flex", flexDirection: "column", gap: "4px", padding: "1rem", backgroundColor: "#dfdfdf", borderRadius: "5px" }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignSelf: "middle" }}>
        <Box sx={{ display: "flex", alignContent: "middle" }}>
          <AccountCircle sx={{ width: "2rem", height: "2rem" }} />
          <Link href='https://github.com/sereneinserenade' sx={{ color: "#222", textDecoration: "none", fontSize: "18px", fontWeight: "500", p: "0.15rem" }}>
            Sereneinserenade
          </Link>
        </Box>

        <Box sx={{ textDecoration: "none", fontSize: "14px", fontWeight: "500", color: "#555" }}>
          {props.comment.createdAt.toLocaleDateString()}
        </Box>
      </Box>
      <Box sx={{
        display: props.comment.id === activeCommentId ? "none" : "flex",
        justifyContent: "space-between",
      }}>
        <Box
          sx={{
            width: "full",
            padding: "5px"
          }}
        >
          {props.comment.content}
        </Box>
        <IconButton onClick={() => setReplyInput(true)}><ReplySharp /></IconButton>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          value={props.comment.content || ''}
          disabled={props.comment.id !== activeCommentId}
          sx={{ ":disabled": { outline: "none" }, color: "#ff0000", backgroundColor: props.comment.id === activeCommentId ? "#d0d0d0" : "", borderRadius: props.comment.id === activeCommentId ? "5px 5px 0 0" : "5px", display: props.comment.id === activeCommentId ? "block" : "none" }}
          id={props.comment.id}
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
          props.comment.id === activeCommentId && (
            <Button
              className='rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20'
              sx={{ borderRadius: "0 0 5px 5px", backgroundColor: "#3f3f66" }}
              onClick={() => {
                setActiveCommentId(null)
                //#TODO
                //editor.commands.focus()
              }}
            >
              Save
            </Button>
          )
        }
      </Box>
      {!reply && <Button variant="text" sx={{ fontWeight: "500", fontSize: "14px" }} onClick={() => setReply(true)}><KeyboardArrowDown /> Show replies</Button>}
      {replyInput && <ReplyInput commentId={props.comment.id} setReplyInput={setReplyInput} />}
      {reply && <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", paddingX: "10px", paddingY: "5px" }}>
        {props.comment.replies.map(reply => <Reply reply={reply} />)}
      </Box>
      }
      {reply && <Button variant="text" sx={{ fontWeight: "500", fontSize: "14px" }} onClick={() => setReply(false)}><KeyboardArrowUp /> Hide replies</Button>}
    </Box>
  )
}

function ReplyInput(props: { commentId: string, setReplyInput: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [content, setContent] = useState("")
  const { addReply } = useCommentStore()
  function Add() {
    addReply(content, props.commentId)
    setContent("")
    props.setReplyInput(false)
  }
  return <Box sx={{ display: "flex" }}><TextField value={content} onChange={(e) => setContent(e.target.value)} sx={{ borderRadius: "5px", backgroundColor: "#ccc" }} /><IconButton onClick={() => Add()}><SendSharp /></IconButton></Box>
}

function Reply(props: { reply: Comment }) {
  return <Box sx={{ display: "flex", gap: "4px" }}>
    <AccountCircle sx={{ color: "#4466b3" }} />
    <Box sx={{ color: "#4466b3" }}>sereneinserenade:</Box>
    {props.reply.content}
  </Box>
}
