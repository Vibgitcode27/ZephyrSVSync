import { useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';

const ogValue = `
- uses: Platane/snk@v3
  with:
    # github user name to read the contribution graph from (**required**)
    # using action context var \`github.repository_owner\` or specified user
    github_user_name: \${{ github.repository_owner }}

    # list of files to generate.
    # one file per line. Each output can be customized with options as query string.
    #
    #  supported options:
    #  - palette:     A preset of color, one of [github, github-dark, github-light]
    #  - color_snake: Color of the snake
    #  - color_dots:  Coma separated list of dots color.
    #                 The first one is 0 contribution, then it goes from the low contribution to the highest.
    #                 Exactly 5 colors are expected.
    outputs: |
      dist/github-snake.svg
      dist/github-snake-dark.svg?palette=github-dark
      dist/ocean.gif?color_snake=orange&color_dots=#bfd6f6,#8dbdff,#64a1f4,#4b91f1,#3c7dd9
`;

function Snake() {
    const editorRef = useRef();

    return (
        <div style={{
            paddingRight: '300px',
            paddingLeft: '300px',
            paddingTop: '100px',
        }}>
            <Editor
                onInit={(evt, editor) => {
                    editorRef.current = editor;
                }}
                initialValue={ogValue}
            />
            <div style={{ marginTop: '10px', fontSize: '14px', color: 'gray' }}>
                <p>
                    Instructions for adding the GitHub Actions workflow file:
                </p>
                <ol>
                    <li>
                        Use the editor above to create or modify your GitHub Actions workflow file.
                    </li>
                    <li>
                        Save your changes.
                    </li>
                    <li>
                        Ensure the file is named correctly, such as <code>.github/workflows/farming.yml</code>.
                    </li>
                    <li>
                        Commit the changes to your repository.
                    </li>
                    <li>
                        Push the commit to the repository on GitHub.
                    </li>
                    <li>
                        Visit the "Actions" tab on your GitHub repository to see the workflow in action.
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Snake;
