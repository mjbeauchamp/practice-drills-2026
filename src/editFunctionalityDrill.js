// Starter Code - SEE CODE BELOW FOR SOLUTION
export class TextEditor {
    constructor(text) {

    }

    edit() {

    }

    undo() {
    
    }

    redo() {
 
    }

    getText() {

    }
}  

export function textEditorTestRun() {
    const myName = new TextEditor('Monica');

    console.log(myName.getText())
    myName.edit('Running Horse')
    myName.edit('MonyPony')
    myName.edit('Pony')
    myName.edit('Your Mom')
    console.log('AFTER EDIT:', myName.getText())
    myName.undo();
    console.log('AFTER UNDO:', myName.getText())
    myName.undo();
    console.log('AFTER UNDO 2:', myName.getText())
    myName.undo();
    console.log('AFTER UNDO 3:', myName.getText())
    myName.undo();
    console.log('AFTER UNDO 4:', myName.getText())
    myName.undo();
    console.log('AFTER UNDO 5:', myName.getText())
    myName.redo();
    console.log('AFTER REDO:', myName.getText())
    myName.redo();
    console.log('AFTER REDO 2:', myName.getText())
    myName.edit('Jesabele')
    console.log('AFER EDIT:', myName.getText())
    myName.redo();
    console.log('AFTER REDO:', myName.getText())
    myName.undo();
    console.log('AFTER UNDO:', myName.getText())
}





// FINISHED SOLUTION
// export class TextEditor {
//     constructor(text) {
//         this.text =  text;
//         this.undoStack = [];
//         this.redoStack = [];
//         this.maxStackLength = 3;
//     }

//     edit(updatedText) {
//         this.undoStack.push(this.text);
//         this.text = updatedText;
//         this.redoStack = [];

//         if (this.undoStack.length > this.maxStackLength) {
//             this.undoStack.shift();
//         }
//     }

//     undo() {
//         if (this.undoStack.length > 0) {
//             this.redoStack.push(this.text);
//             this.text = this.undoStack.pop();

//             if (this.redoStack.length > this.maxStackLength) {
//                 this.redoStack.shift();
//             }
//         }
//     }

//     redo() {
//         if (this.redoStack.length > 0) {
//             this.undoStack.push(this.text);
//             this.text = this.redoStack.pop();

//             if (this.undoStack.length > this.maxStackLength) {
//                 this.undoStack.shift();
//             }
//         }
//     }

//     getText() {
//         return this.text;
//     }
// }
