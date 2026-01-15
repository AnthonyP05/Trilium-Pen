import { TypeWidgetProps } from "../type_widget";
import "./Notebook.css";
import { useNoteLabelBoolean } from "../../react/hooks";

export default function Notebook({ note, noteContext }: TypeWidgetProps) {
    const [ isReadOnly ] = useNoteLabelBoolean(note, "readOnly");

    return (
        <div className="notebook-widget">
            <div className="notebook-toolbar">
                <button>Pen</button>
                <button>Eraser</button>
            </div>
            <div className="notebook-canvas-container">
                <canvas 
                    width={800} 
                    height={1000} 
                    style={{ border: "1px solid #ccc", background: "white" }}
                >
                    Your browser does not support the HTML5 canvas tag.
                </canvas>
            </div>
            <div>
                Metadata: {note.noteId} - ReadOnly: {isReadOnly ? "Yes" : "No"}
            </div>
        </div>
    );
}
