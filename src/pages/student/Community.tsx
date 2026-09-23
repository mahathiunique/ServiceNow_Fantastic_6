import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Send,
  Lock,
  Compass,
  AlertTriangle
} from 'lucide-react';

export const Community: React.FC = () => {
  const { posts, addCommunityPost, likeCommunityPost } = useApp();
  const [newContent, setNewContent] = useState('');
  const [selectedTag, setSelectedTag] = useState('Encouragement');

  const tags = ['Encouragement', 'Exam Season', 'Healthy Habits', 'Dorm Life', 'Study Tips'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent.trim()) return;
    addCommunityPost(newContent.trim(), selectedTag);
    setNewContent('');
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-0 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>University Moderated Safe Space</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl text-brand-navy">
          You're Not Alone.
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Connect with peers under anonymous handles. Share encouragement, celebrate small wins,
          and discover that what you are feeling is quietly shared across campus.
        </p>
      </div>

      {/* Moderation & Privacy Assurance Banner (Mandated in spec) */}
      <div className="bg-indigo-50/80 rounded-2xl p-4 border border-indigo-100 flex items-start gap-3 text-xs text-slate-700">
        <Lock className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
        <div>
          <strong className="text-brand-navy block mb-0.5">Anonymous Nickname Privacy Policy:</strong>
          Your real name, student ID, and specific courses are never published. Posts are screened by campus wellbeing
          moderators to ensure a compassionate, supportive environment free from judgment or medical misinformation.
        </div>
      </div>

      {/* Post Creation Box */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="text-xs font-bold text-brand-navy">
            Posting as: <strong className="text-brand-primary font-mono">MahathiM (Anonymous Nickname)</strong>
          </span>
          <span className="text-[10px] text-slate-400">
            Visible to university peers
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
            rows={3}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="Share a kind word, an exam tip, or a reminder to pause today..."
            className="w-full text-xs p-3.5 rounded-2xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase text-slate-400">Tag:</span>
              <div className="flex flex-wrap gap-1">
                {tags.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTag(t)}
                    className={`text-[10px] px-2.5 py-1 rounded-lg font-bold border transition-all ${
                      selectedTag === t
                        ? 'bg-brand-primary text-white border-brand-primary'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="px-5 py-2 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" /> Post to Community
            </button>
          </div>
        </form>
      </div>

      {/* Community Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft hover-lift space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 text-white font-bold text-xs flex items-center justify-center font-mono">
                  {post.nickname.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <span className="font-heading font-bold text-xs text-brand-navy block">
                    {post.nickname}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {post.department} • {post.timestamp}
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-bold text-brand-primary bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                {post.tag}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {post.content}
            </p>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <button
                onClick={() => likeCommunityPost(post.id)}
                className="flex items-center gap-1.5 text-rose-600 font-bold hover:bg-rose-50 px-2.5 py-1 rounded-lg transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-rose-500" />
                <span>{post.encouragements} Encouragements</span>
              </button>

              <span className="text-[10px] text-slate-400">
                {post.replies.length} peer replies
              </span>
            </div>

            {/* Replies */}
            {post.replies.length > 0 && (
              <div className="space-y-2 pt-2 bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
                {post.replies.map((rep) => (
                  <div key={rep.id} className="text-xs space-y-0.5">
                    <div className="flex items-center gap-2">
                      <strong className="text-brand-navy font-mono text-[11px]">{rep.nickname}</strong>
                      <span className="text-[10px] text-slate-400">{rep.timestamp}</span>
                    </div>
                    <p className="text-slate-600 pl-1">{rep.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
