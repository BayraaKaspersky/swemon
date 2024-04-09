import hljs from "highlight.js";
import { createRef, useEffect } from "react";

const HighlightCode = ({ children, language }) => {
  const codeRef = createRef();

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, [codeRef]);

  return (
    <pre className={language}>
      <code ref={codeRef}>{children}</code>
    </pre>
  );
};
export default HighlightCode;
