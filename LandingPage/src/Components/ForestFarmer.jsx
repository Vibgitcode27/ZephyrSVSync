import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./pre.css";
import {StaticNavBar2} from "./Navbar2.jsx";

const ogValue = `
name: Farming

on:
  schedule:
    - cron: '0 12 * * *' #Will Trigger at Noon Everyday

# Manually Running this WorkFlow from the Actions Tab
workflow_dispatch:

jobs:
  commit:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Run Script
        run: |
          git config --global user.name \${GITHUB_ACTOR}
          git config --global user.email \${{ secrets.USER_EMAIL }}
          git commit --allow-empty -m 'Farming Time:'
          git push origin main
`;

function ForestFarmer() {
    const editorRef = useRef();
    return (
        <div>
            <StaticNavBar2></StaticNavBar2>
        <div
            style={{
                paddingRight: "300px",
                paddingLeft: "300px",
                paddingTop: "100px",
            }}
        >
            <Editor
                onInit={(evt, editor) => {
                    editorRef.current = editor;
                }}
                initialValue={`<pre class="preserve-whitespace">${ogValue}</pre>`}
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
        </div>
        </div>
    );
}

export default ForestFarmer;
