import React, { useState } from 'react';

// Main App Component
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function will be replaced with actual API calls
  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex items-center justify-center font-sans">
      {isLoggedIn ? <NotesDashboard onLogout={handleLogout} /> : <AuthPage onAuthSuccess={handleAuthSuccess} />}
    </div>
  );
}

// Authentication Page Component
const AuthPage = ({ onAuthSuccess }: { onAuthSuccess: () => void }) => {
  const [isSigningUp, setIsSigningUp] = useState(true);

  return (
    <div className="w-full max-w-md mx-auto p-6 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white">Jot</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          {isSigningUp ? 'Create an account to start jotting.' : 'Welcome back! Please sign in.'}
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        {isSigningUp ? <SignUpForm onAuthSuccess={onAuthSuccess} /> : <LoginForm onAuthSuccess={onAuthSuccess} />}
        
        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsSigningUp(!isSigningUp)} 
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            {isSigningUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Form Components ---

const SignUpForm = ({ onAuthSuccess }: { onAuthSuccess: () => void }) => {
  // Mock function for demonstration
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing up...");
    // Here you would add form validation and API call logic
    // On successful signup, call onAuthSuccess()
    onAuthSuccess(); 
  };

  return (
    <form onSubmit={handleSignUp} className="space-y-6">
      <GoogleAuthButton text="Sign up with Google" />
      <div className="flex items-center">
        <hr className="w-full border-gray-300 dark:border-gray-600"/>
        <span className="px-2 text-gray-500 dark:text-gray-400 text-sm">OR</span>
        <hr className="w-full border-gray-300 dark:border-gray-600"/>
      </div>
      <div>
        <label htmlFor="email-signup" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
        <input id="email-signup" type="email" required className="mt-1 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Continue with Email
        </button>
      </div>
    </form>
  );
};

const LoginForm = ({ onAuthSuccess }: { onAuthSuccess: () => void }) => {
  // Mock function for demonstration
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in...");
    // Here you would add form validation and API call logic
    // On successful login, call onAuthSuccess()
    onAuthSuccess();
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <GoogleAuthButton text="Sign in with Google" />
       <div className="flex items-center">
        <hr className="w-full border-gray-300 dark:border-gray-600"/>
        <span className="px-2 text-gray-500 dark:text-gray-400 text-sm">OR</span>
        <hr className="w-full border-gray-300 dark:border-gray-600"/>
      </div>
      <div>
        <label htmlFor="email-login" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
        <input id="email-login" type="email" required className="mt-1 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
       <div>
        <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Continue with Email
        </button>
      </div>
    </form>
  );
};


// --- UI Helper Components ---

const GoogleAuthButton = ({ text }: { text: string }) => (
  <button type="button" className="w-full flex items-center justify-center py-2.5 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
    <GoogleIcon />
    <span className="ml-3 font-semibold text-sm">{text}</span>
  </button>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 12.12C34.553 8.246 29.692 6 24 6C12.955 6 4 14.955 4 26s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.553 8.246 29.692 6 24 6C16.318 6 9.656 10.337 6.306 14.691z"></path>
    <path fill="#4CAF50" d="M24 46c5.692 0 10.553-1.754 14.804-4.818l-6.571-4.819C29.655 39.108 25.349 42 24 42c-6.627 0-12-5.373-12-12h-8c0 11.045 8.955 20 20 20z"></path>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.571 4.819C43.204 36.608 46 31.625 46 26c0-1.341-.138-2.65-.389-3.917z"></path>
  </svg>
);


// --- Post-Authentication Dashboard (Placeholder) ---
interface Note {
  id: number;
  text: string;
}

const NotesDashboard = ({ onLogout }: { onLogout: () => void }) => {
    const [notes, setNotes] = useState<Note[]>([
        { id: 1, text: "This is the first note." },
        { id: 2, text: "Here's another note to show how it looks." }
    ]);
    const [newNote, setNewNote] = useState("");

    const handleCreateNote = (e: React.FormEvent) => {
        e.preventDefault();
        if (newNote.trim()) {
            setNotes([...notes, { id: Date.now(), text: newNote.trim() }]);
            setNewNote("");
        }
    };
    
    const handleDeleteNote = (id: number) => {
      setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4 md:p-6">
            <header className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold">My Notes</h2>
                    <p className="text-gray-500 dark:text-gray-400">Welcome, user@example.com</p>
                </div>
                <button onClick={onLogout} className="px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg">
                    Logout
                </button>
            </header>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
                <form onSubmit={handleCreateNote}>
                    <textarea 
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="Jot something down..."
                        className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        rows={3}
                    />
                    <div className="flex justify-end mt-4">
                        <button type="submit" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
                            Create Note
                        </button>
                    </div>
                </form>
            </div>

            <div className="space-y-4">
                {notes.map(note => (
                    <div key={note.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex justify-between items-start">
                        <p className="text-gray-800 dark:text-gray-200">{note.text}</p>
                        <button onClick={() => handleDeleteNote(note.id)} className="text-gray-400 hover:text-red-500 ml-4 flex-shrink-0">
                            <TrashIcon />
                        </button>
                    </div>
                ))}
                {notes.length === 0 && (
                  <div className="text-center py-10">
                    <p className="text-gray-500">No notes yet. Create one above!</p>
                  </div>
                )}
            </div>
        </div>
    );
};

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);
