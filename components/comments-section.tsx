'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Comment {
  id: number
  author: string
  content: string
  date: string
}

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: 'Guest User',
        content: newComment.trim(),
        date: new Date().toISOString().split('T')[0],
      }
      setComments([...comments, comment])
      setNewComment('')
    }
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment..."
          className="mb-4"
        />
        <Button type="submit">Post Comment</Button>
      </form>
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex space-x-4">
              <Avatar>
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{comment.author}</h3>
                <p className="text-sm text-gray-500 mb-2">{comment.date}</p>
                <p>{comment.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
