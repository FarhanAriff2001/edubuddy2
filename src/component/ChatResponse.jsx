import ReactMarkdown from 'react-markdown';

import remarkMath from 'remark-math'; // For math formulas
import remarkGfm from 'remark-gfm'; // For tables and GitHub Flavored Markdown

import rehypeKatex from 'rehype-katex'; // For rendering math with KaTeX
import 'katex/dist/katex.min.css'; // KaTeX CSS

// import rehypeHighlight from 'rehype-highlight'; // For syntax highlighting
// import 'highlight.js/styles/github-dark.css'; // Syntax highlighting theme
// import 'prismjs/themes/prism.css'; // Syntax highlighting theme
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import rehypeAddClasses from 'rehype-add-classes'; // For adding classes to elements
import './chatResponse.css';

const ChatResponse = ({ answer }) => {
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[
          rehypeKatex,
          // rehypeHighlight, // Ensure rehype-highlight is applied
          [rehypeAddClasses, {
            table: 'markdown-table',
          }],
        ]}
        components={{
          code({ node, inline, className, children, ...props }) {
            // Treat single backticks as normal text
            if (inline) {
              return <span>{children}</span>;
            }

            // Handle code blocks (triple backticks)
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : 'text'; // Default to 'text' if no language is specified

            return language === 'text' ? (
              <span>{children}</span>
            ) : (
              <div>
                {/* Display the language above the code block */}
                <div style={{ backgroundColor: '#2d2d2d', color: '#fff', padding: '5px 10px', fontSize: '0.9em' }}>
                  {language}
                </div>
                {/* Syntax-highlighted code block */}
                <SyntaxHighlighter
                  style={dracula}
                  language={language}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            );
          },
        }}
      >
        {answer}
      </ReactMarkdown>
    </div>
  );
};

export default ChatResponse;