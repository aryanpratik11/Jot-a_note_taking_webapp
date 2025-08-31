import { useState } from "react";

export default function Dashboard() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Note 1", content: "This is the content of note 1" },
    { id: 2, title: "Note 2", content: "This is the content of note 2" }
  ]);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const user = {
    name: "Jonas Kahnwald",
    email: "jonas.kahnwald@gmail.com"
  };

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim()) return;
    
    const newNote = {
      id: notes.length + 1,
      title: newNoteTitle,
      content: ""
    };
    
    setNotes([...notes, newNote]);
    setNewNoteTitle("");
    setIsCreating(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="bg-white shadow-sm p-4 sm:hidden">
        <div className="flex justify-between items-center">
          <div className="text-gray-500">9:41</div>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="w-6"></div> {/* Spacer for balance */}
        </div>
      </div>

      {/* Desktop Header */}
      <div className="bg-white shadow-sm p-6 hidden sm:block">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Welcome, {user.name}!</h2>
          <p className="text-gray-600">Email: {user.email}</p>
        </div>

        {/* Create Note Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          {isCreating ? (
            <form onSubmit={handleCreateNote} className="space-y-4">
              <input
                type="text"
                value={newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}
                placeholder="Note title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                autoFocus
              />
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
                >
                  Create
                </button>
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setIsCreating(true)}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Create Note
            </button>
          )}
        </div>

        {/* Notes Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Notes</h2>
          
          {notes.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No notes yet. Create your first note!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notes.map((note) => (
                <div key={note.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer">
                  <h3 className="font-medium text-lg mb-2">{note.title}</h3>
                  <p className="text-gray-600 text-sm truncate">{note.content || "No content"}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 sm:hidden">
        <div className="flex justify-around">
          <button className="text-indigo-600 font-medium">Dashboard</button>
          <button className="text-gray-500">Notes</button>
          <button className="text-gray-500">Profile</button>
        </div>
      </div>
    </div>
  );
}