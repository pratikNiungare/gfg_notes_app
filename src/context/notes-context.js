import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";
import { Archive } from "../pages/Archive";

const NotesContext = createContext();

const NotesProviser = ({children}) => {

    const initialState = {
    title: "",
    text: "",
    notes: [],
    archive: []
  };

  const [{ title, text, notes, archive }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

    return (
        <NotesContext.Provider value={{ title, text, notes, archive, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export {NotesProviser, useNotes} 