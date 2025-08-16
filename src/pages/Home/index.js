import { Navbar } from "../../components/Navbar";
import { Fragment } from "react";
import { SideBar } from "../../components/Sidebar";
import { NoteCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";

export const Home = () => {
  const { title, text, notes, archive, notesDispatch } = useNotes();

  // const initialState = {
  //   title: "",
  //   text: "",
  //   notes: [],
  // };

  // const [{ title, text, notes }, notesDispatch] = useReducer(
  //   notesReducer,
  //   initialState
  // );

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };

  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3 ">
        <SideBar />
        <div className="flex flex-col w-screen mt-7">
          <div className="flex flex-col w-[450px] border border-red-400 relative self-center">
            <input
              value={title}
              onChange={onTitleChange}
              className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1"
              placeholder="Enter the title"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1"
              placeholder="Enter Text"
            />
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="w-7 h-7 absolute bottom-0 right-0 bg-indigo-800 text-slate-50 rounded-full"
            >
              <span class="material-icons">add</span>
            </button>
          </div>
          <div className="mt-14 ml-10 flex flex-col gap-5">
            {pinnedNotes?.length > 0 && (
              <div>
                <h3 className="">Pinned Notes</h3>
                <div className="mt-14 flex flex-wrap gap-6">
                  {pinnedNotes?.length > 0 &&
                    pinnedNotes.map(({ id, title, text, isPinned }) => {
                      <NoteCard
                        key={id}
                        id={id}
                        title={title}
                        text={text}
                        isPinned={isPinned}
                      />;
                    })}
                </div>
              </div>
            )}
            <div>
              {pinnedNotes?.length > 0 && <h3>Other Notes</h3>}
              <div className="mt-14 flex flex-wrap gap-6">
                {otherNotes?.length > 0 &&
                  otherNotes.map(({ id, title, text, isPinned }) => {
                    <NoteCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
