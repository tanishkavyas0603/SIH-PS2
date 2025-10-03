import { CommentThread } from "../CommentThread";

export default function CommentThreadExample() {
  const mockComments = [
    {
      id: "1",
      author: "Reviewer Patel",
      role: "reviewer",
      timestamp: "2 hours ago",
      content: "The budget allocation for materials seems reasonable, but timeline may need adjustment considering monsoon season delays.",
    },
    {
      id: "2",
      author: "Reviewer Das",
      role: "reviewer",
      timestamp: "5 hours ago",
      content: "AI quality score is good. However, please verify contractor credentials and past project completion rates.",
    },
  ];

  return (
    <div className="p-4 max-w-2xl">
      <CommentThread 
        comments={mockComments}
        onAddComment={(content) => console.log("New comment:", content)}
      />
    </div>
  );
}
