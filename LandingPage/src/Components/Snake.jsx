import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

// const ogValue = `
// - uses: Platane/snk@v3
//   with:
//     github_user_name: ${{ github.repository_owner }}
//     outputs: |
//       dist/github-snake.svg
//       dist/github-snake-dark.svg?palette=github-dark
//       dist/ocean.gif?color_snake=orange&color_dots=#bfd6f6,#8dbdff,#64a1f4,#4b91f1,#3c7dd9;
// `;

function Snake() {
    const editorRef = useRef();

    const updateEditorContent = () => {
        if (editorRef.current) {
            editorRef.current.setContent(ogValue);
        }
    };

    return (
        <div style={{ padding: "30px" }}>
            <Editor
                onInit={(evt, editor) => {
                    editorRef.current = editor;
                }}
                initialValue={ogValue}
            />
            <div style={{ marginTop: "10px", fontSize: "14px", color: "gray" }}>
                <p>Instructions for adding the GitHub Actions workflow file:</p>
                <ol>
                    <li>Use the editor above to create or modify your GitHub Actions workflow file.</li>
                    <li>Save your changes.</li>
                    <li>Ensure the file is named correctly, such as <code>.github/workflows/farming.yml</code>.</li>
                    <li>Commit the changes to your repository.</li>
                    <li>Push the commit to the repository on GitHub.</li>
                    <li>Visit the "Actions" tab on your GitHub repository to see the workflow in action.</li>
                </ol>
            </div>
            <button onClick={updateEditorContent}>Load Default Content</button>
        </div>
    );
}

export default Snake;
