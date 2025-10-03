import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  role: string;
  timestamp: string;
  content: string;
}

interface CommentThreadProps {
  comments: Comment[];
  onAddComment?: (content: string) => void;
}

export function CommentThread({ comments, onAddComment }: CommentThreadProps) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    if (newComment.trim() && onAddComment) {
      onAddComment(newComment);
      setNewComment("");
      console.log("Comment submitted:", newComment);
    }
  };

  return (
    <Card className="p-6" data-testid="card-comment-thread">
      <h3 className="text-lg font-semibold mb-6">Reviewer Comments</h3>
      
      <div className="space-y-4 mb-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3" data-testid={`comment-${comment.id}`}>
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarFallback>
                {comment.author.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">{comment.author}</span>
                <Badge variant="secondary" className="text-xs capitalize">
                  {comment.role}
                </Badge>
                <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
              </div>
              <p className="text-sm text-foreground">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <Textarea
          placeholder="Add your review comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-20"
          data-testid="textarea-comment"
        />
        <div className="flex justify-end">
          <Button onClick={handleSubmit} disabled={!newComment.trim()} data-testid="button-submit-comment">
            <Send className="h-4 w-4 mr-2" />
            Submit Comment
          </Button>
        </div>
      </div>
    </Card>
  );
}
